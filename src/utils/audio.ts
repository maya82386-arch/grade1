/**
 * Sound effects synthesizer and Arabic Speech engine for kids
 */

class AudioEngine {
  private ctx: AudioContext | null = null;
  private isSoundEnabled = true;
  private isMusicEnabled = false;
  private musicOscillators: OscillatorNode[] = [];
  private musicTimer: number | null = null;
  private arabicVoice: SpeechSynthesisVoice | null = null;

  constructor() {
    if (typeof window !== 'undefined') {
      this.initSpeechVoice();
    }
  }

  private initCtx() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtxClass) {
        this.ctx = new AudioCtxClass();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
    return this.ctx;
  }

  private initSpeechVoice() {
    if (!('speechSynthesis' in window)) return;
    
    const updateVoice = () => {
      const voices = window.speechSynthesis.getVoices();
      // Try finding Arabic voice (prefer Omani, Saudi, Egyptian or general Arabic)
      const arVoice = voices.find(v => v.lang.startsWith('ar-OM')) ||
                      voices.find(v => v.lang.startsWith('ar-SA')) ||
                      voices.find(v => v.lang.startsWith('ar')) ||
                      voices.find(v => v.name.toLowerCase().includes('arabic') || v.name.includes('عربي'));
      if (arVoice) {
        this.arabicVoice = arVoice;
      }
    };

    updateVoice();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = updateVoice;
    }
  }

  public setSoundEnabled(enabled: boolean) {
    this.isSoundEnabled = enabled;
  }

  public getSoundEnabled() {
    return this.isSoundEnabled;
  }

  public setMusicEnabled(enabled: boolean) {
    this.isMusicEnabled = enabled;
    if (enabled) {
      this.startGentleBGM();
    } else {
      this.stopGentleBGM();
    }
  }

  public getMusicEnabled() {
    return this.isMusicEnabled;
  }

  // Play a cheerful chime (correct answer / click)
  public playSuccessChime() {
    if (!this.isSoundEnabled) return;
    const ctx = this.initCtx();
    if (!ctx) return;

    const now = ctx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6 (major arpeggio)
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + idx * 0.08);

      gain.gain.setValueAtTime(0.001, now + idx * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.18, now + idx * 0.08 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.08 + 0.35);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + idx * 0.08);
      osc.stop(now + idx * 0.08 + 0.4);
    });
  }

  // Star collect sound (sparkle)
  public playStarSound() {
    if (!this.isSoundEnabled) return;
    const ctx = this.initCtx();
    if (!ctx) return;

    const now = ctx.currentTime;
    const freqs = [880, 1174.66, 1318.51, 1760]; // A5, D6, E6, A6
    freqs.forEach((f, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(f, now + i * 0.05);

      gain.gain.setValueAtTime(0.15, now + i * 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.05 + 0.25);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + i * 0.05);
      osc.stop(now + i * 0.05 + 0.3);
    });
  }

  // Clapping / Applause + Fanfare for milestone completion
  public playApplauseSound() {
    if (!this.isSoundEnabled) return;
    const ctx = this.initCtx();
    if (!ctx) return;

    const now = ctx.currentTime;

    // Triumphant fanfare notes
    const fanfare = [
      { f: 523.25, t: 0, d: 0.15 },
      { f: 659.25, t: 0.15, d: 0.15 },
      { f: 783.99, t: 0.3, d: 0.2 },
      { f: 1046.50, t: 0.5, d: 0.6 }
    ];

    fanfare.forEach(item => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(item.f, now + item.t);

      gain.gain.setValueAtTime(0.2, now + item.t);
      gain.gain.exponentialRampToValueAtTime(0.001, now + item.t + item.d);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + item.t);
      osc.stop(now + item.t + item.d + 0.05);
    });

    // Synthesized gentle crowd claps (bursts of bandpassed pink/white noise)
    const bufferSize = ctx.sampleRate * 1.5;
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }

    for (let i = 0; i < 8; i++) {
      const clapTime = now + 0.2 + i * 0.12 + Math.random() * 0.04;
      const whiteNoise = ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;

      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.value = 1200 + Math.random() * 400;
      filter.Q.value = 3.0;

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.12, clapTime);
      gain.gain.exponentialRampToValueAtTime(0.001, clapTime + 0.08);

      whiteNoise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      whiteNoise.start(clapTime);
      whiteNoise.stop(clapTime + 0.1);
    }
  }

  // Gentle error "try again" sound
  public playTryAgainSound() {
    if (!this.isSoundEnabled) return;
    const ctx = this.initCtx();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(329.63, now); // E4
    osc.frequency.exponentialRampToValueAtTime(261.63, now + 0.25); // C4

    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.35);
  }

  // Bubble pop / tactile button click
  public playPopSound() {
    if (!this.isSoundEnabled) return;
    const ctx = this.initCtx();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(450, now);
    osc.frequency.exponentialRampToValueAtTime(800, now + 0.05);

    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.08);
  }

  // Gentle background music for kids (calm marimba / xylophone tones)
  private startGentleBGM() {
    this.stopGentleBGM();
    const melody = [
      523.25, 587.33, 659.25, 783.99, 659.25, 587.33, 523.25, 392.00,
      440.00, 523.25, 587.33, 659.25, 587.33, 523.25, 440.00, 392.00
    ];
    let noteIndex = 0;

    const playStep = () => {
      if (!this.isMusicEnabled) return;
      const ctx = this.initCtx();
      if (ctx) {
        const freq = melody[noteIndex % melody.length];
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now);

        gain.gain.setValueAtTime(0.0001, now);
        gain.gain.linearRampToValueAtTime(0.035, now + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.45);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 0.5);
      }
      noteIndex++;
      this.musicTimer = window.setTimeout(playStep, 500);
    };

    playStep();
  }

  private stopGentleBGM() {
    if (this.musicTimer) {
      clearTimeout(this.musicTimer);
      this.musicTimer = null;
    }
  }

  // Native Arabic Speech synthesis
  public speakArabic(text: string, rate: number = 0.85): Promise<void> {
    return new Promise((resolve) => {
      if (!('speechSynthesis' in window) || !this.isSoundEnabled) {
        resolve();
        return;
      }

      window.speechSynthesis.cancel(); // Stop ongoing speech

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ar-SA';
      utterance.rate = rate; // child friendly tempo
      utterance.pitch = 1.15; // slightly higher, friendly kid tone

      if (this.arabicVoice) {
        utterance.voice = this.arabicVoice;
      }

      utterance.onend = () => resolve();
      utterance.onerror = () => resolve();

      window.speechSynthesis.speak(utterance);
    });
  }

  // Random positive encouragement phrase
  public getEncouragementPhrase(): string {
    const phrases = [
      'رائعٌ جدًا!',
      'أحسنتَ يا بطل الحروف!',
      'ممتازٌ يا عبقري!',
      'عملٌ بطولي ورائع!',
      'أنت نجمٌ ساطع في سماء عُمان!',
      'إجابةٌ متقنة وممتازة!'
    ];
    return phrases[Math.floor(Math.random() * phrases.length)];
  }

  // Encourage when wrong
  public getHintPhrase(): string {
    const hints = [
      'حاول مرة ثانية، أنت تستطيع يا بطل!',
      'ركّز في شكل الحرف ونقاطه، فكر قليلاً!',
      'لا بأس، المحاولة تجعلنا أكثر ذكاءً!'
    ];
    return hints[Math.floor(Math.random() * hints.length)];
  }
}

export const audioEngine = new AudioEngine();
