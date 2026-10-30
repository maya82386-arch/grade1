import React, { useRef, useState, useEffect } from 'react';
import { LetterData } from '../types';
import { Eraser, RotateCcw, CheckCircle2, Volume2, Sparkles, Palette, ArrowRight, ArrowLeft } from 'lucide-react';
import { audioEngine } from '../utils/audio';

interface WritingLabProps {
  alphabet: LetterData[];
  initialLetter?: LetterData;
  onLetterPracticed: (letterId: number) => void;
  onAddStars: (stars: number) => void;
}

const PEN_COLORS = [
  { name: 'أزرق', value: '#2563EB' },
  { name: 'أحمر', value: '#DC2626' },
  { name: 'أخضر', value: '#059669' },
  { name: 'برتقالي', value: '#EA580C' },
  { name: 'بنفسجي', value: '#7C3AED' },
  { name: 'كحلي داكن', value: '#1E293B' }
];

export const WritingLab: React.FC<WritingLabProps> = ({
  alphabet,
  initialLetter,
  onLetterPracticed,
  onAddStars
}) => {
  const [currentLetter, setCurrentLetter] = useState<LetterData>(initialLetter || alphabet[0]);
  const [penColor, setPenColor] = useState<string>(PEN_COLORS[0].value);
  const [penSize, setPenSize] = useState<number>(10);
  const [isEraser, setIsEraser] = useState<boolean>(false);
  const [hasDrawn, setHasDrawn] = useState<boolean>(false);
  const [showCelebration, setShowCelebration] = useState<boolean>(false);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isDrawingRef = useRef<boolean>(false);
  const lastPosRef = useRef<{ x: number; y: number } | null>(null);

  // Sync initial letter if changed from outside
  useEffect(() => {
    if (initialLetter) {
      setCurrentLetter(initialLetter);
    }
  }, [initialLetter]);

  // Redraw canvas background / guideline when letter changes
  useEffect(() => {
    clearCanvas();
  }, [currentLetter]);

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHasDrawn(false);
    setShowCelebration(false);
  };

  const getCanvasPos = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY
    };
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    isDrawingRef.current = true;
    lastPosRef.current = getCanvasPos(e);
    setHasDrawn(true);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawingRef.current || !lastPosRef.current) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const currentPos = getCanvasPos(e);

    ctx.save();
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    if (isEraser) {
      ctx.globalCompositeOperation = 'destination-out';
      ctx.lineWidth = penSize * 2.5;
    } else {
      ctx.globalCompositeOperation = 'source-over';
      ctx.strokeStyle = penColor;
      ctx.lineWidth = penSize;
    }

    ctx.beginPath();
    ctx.moveTo(lastPosRef.current.x, lastPosRef.current.y);
    ctx.lineTo(currentPos.x, currentPos.y);
    ctx.stroke();
    ctx.restore();

    lastPosRef.current = currentPos;
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
    isDrawingRef.current = false;
    lastPosRef.current = null;
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  };

  const handleEvaluate = () => {
    if (!hasDrawn) {
      audioEngine.speakArabic('اكتب الحرف أولاً على اللوحة بقلمك الجميل!');
      return;
    }

    setShowCelebration(true);
    audioEngine.playApplauseSound();
    audioEngine.speakArabic(`ما شاء الله! خط رائع ومتقن لحرف ${currentLetter.name}! أنت فنان الخط العربي!`);
    onLetterPracticed(currentLetter.id);
    onAddStars(10);
  };

  const playLetterVoice = () => {
    audioEngine.playPopSound();
    audioEngine.speakArabic(`حرف ال${currentLetter.phoneticName}. ${currentLetter.writingGuide.rule}`);
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-600 text-white rounded-3xl p-6 sm:p-8 shadow-md">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs font-bold bg-white/20 px-3 py-1 rounded-full inline-block">
              ✏️ مختبر الخط والكتابة التفاعلي
            </span>
            <h2 className="text-2xl sm:text-4xl font-black">
              اكتب وتتبّع الحروف بقلمك الذهبي!
            </h2>
            <p className="text-white/90 text-sm max-w-xl">
              تدرّب على رسم الحرف بالاتجاهات الصحيحة ككراسة الخط المدرسي للصف الأول بسلطنة عُمان.
            </p>
          </div>

          {/* Audio speech trigger */}
          <button
            onClick={playLetterVoice}
            className="px-5 py-3 rounded-2xl bg-white text-sky-950 font-black text-sm flex items-center gap-2 hover:bg-sky-50 shadow-xs transition-all cursor-pointer whitespace-nowrap"
          >
            <Volume2 className="w-5 h-5 text-sky-600" />
            <span>استمع لقاعدة الحرف</span>
          </button>
        </div>

        {/* Letter Selector Carousel */}
        <div className="mt-6 pt-4 border-t border-white/20 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {alphabet.map((l) => (
            <button
              key={l.id}
              onClick={() => {
                setCurrentLetter(l);
                audioEngine.playPopSound();
                audioEngine.speakArabic(`حرف ال${l.phoneticName}`);
              }}
              className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl shrink-0 font-black text-xl transition-all cursor-pointer flex items-center justify-center ${
                currentLetter.id === l.id
                  ? 'bg-white text-sky-950 font-black shadow-md scale-110'
                  : 'bg-white/15 text-white hover:bg-white/25'
              }`}
            >
              {l.char}
            </button>
          ))}
        </div>
      </div>

      {/* Main Drawing Arena */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left/Canvas Stage (8 Cols) */}
        <div className="lg:col-span-8 bg-white border-2 border-amber-300 rounded-3xl p-4 sm:p-6 shadow-sm space-y-4">
          
          {/* Top Canvas Controls Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-amber-100">
            <div className="flex items-center gap-3">
              <span className="text-sm font-black text-amber-950">
                الحرف الحالي: <span className="text-2xl text-sky-600 mr-1">{currentLetter.char}</span> ({currentLetter.name})
              </span>
            </div>

            {/* Prev / Next buttons */}
            <div className="flex items-center gap-2">
              <button
                disabled={currentLetter.id === 1}
                onClick={() => {
                  const prev = alphabet.find(l => l.id === currentLetter.id - 1);
                  if (prev) setCurrentLetter(prev);
                }}
                className="p-2 rounded-xl border border-slate-200 text-slate-700 disabled:opacity-40 hover:bg-slate-50 cursor-pointer"
                title="الحرف السابق"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                disabled={currentLetter.id === 28}
                onClick={() => {
                  const next = alphabet.find(l => l.id === currentLetter.id + 1);
                  if (next) setCurrentLetter(next);
                }}
                className="p-2 rounded-xl border border-slate-200 text-slate-700 disabled:opacity-40 hover:bg-slate-50 cursor-pointer"
                title="الحرف التالي"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Interactive Drawing Board Container with Ghost Letter & School Lines */}
          <div className="relative w-full aspect-4/3 sm:aspect-16/10 rounded-2xl border-2 border-dashed border-amber-300 bg-amber-50/30 overflow-hidden select-none touch-none">
            
            {/* School Notebook Ruling Lines (خطوط كراسة الخط) */}
            <div className="absolute inset-0 pointer-events-none flex flex-col justify-around px-4 opacity-40">
              <div className="border-b-2 border-sky-400 w-full"></div>
              <div className="border-b-2 border-rose-500 w-full"></div> {/* Baseline */}
              <div className="border-b-2 border-dashed border-emerald-400 w-full"></div>
            </div>

            {/* Traceable Ghost Letter Guide in Background */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
              <span className="text-[180px] sm:text-[230px] font-black text-amber-300/40 select-none">
                {currentLetter.char}
              </span>
            </div>

            {/* Directional Arrow Tips overlay */}
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-xs px-3 py-1.5 rounded-xl border border-amber-200 text-[11px] font-bold text-amber-900 pointer-events-none">
              📍 تتبع الحرف من اليمين لليسار مع السطر
            </div>

            {/* Drawing Canvas */}
            <canvas
              ref={canvasRef}
              width={800}
              height={500}
              className="absolute inset-0 w-full h-full cursor-crosshair touch-none"
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
            />

            {/* Celebration overlay */}
            {showCelebration && (
              <div className="absolute inset-0 bg-emerald-900/30 backdrop-blur-2xs flex flex-col items-center justify-center text-white p-6 animate-in zoom-in-95 pointer-events-none">
                <div className="w-20 h-20 rounded-full bg-emerald-500 flex items-center justify-center text-white mb-3 shadow-xl animate-bounce">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h4 className="text-2xl sm:text-3xl font-black drop-shadow-md">
                  كتابة ممتازة يا بطل!
                </h4>
                <p className="text-sm font-bold text-yellow-300 drop-shadow-md mt-1">
                  حصلت على 10 نجوم ذهبية ⭐
                </p>
              </div>
            )}
          </div>

          {/* Bottom Action Strip */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  clearCanvas();
                  audioEngine.playPopSound();
                }}
                className="px-4 py-2.5 rounded-xl border-2 border-rose-300 text-rose-700 hover:bg-rose-50 font-bold text-xs sm:text-sm flex items-center gap-2 cursor-pointer transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                <span>مسح وإعادة المحاولة</span>
              </button>

              <button
                onClick={() => {
                  setIsEraser(!isEraser);
                  audioEngine.playPopSound();
                }}
                className={`px-4 py-2.5 rounded-xl border-2 font-bold text-xs sm:text-sm flex items-center gap-2 cursor-pointer transition-colors ${
                  isEraser
                    ? 'bg-amber-500 border-amber-600 text-white'
                    : 'border-amber-300 text-amber-900 hover:bg-amber-50'
                }`}
              >
                <Eraser className="w-4 h-4" />
                <span>المِمحاة</span>
              </button>
            </div>

            <button
              onClick={handleEvaluate}
              className="px-6 py-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-black text-sm sm:text-base flex items-center gap-2 shadow-md hover:scale-102 active:scale-98 transition-all cursor-pointer"
            >
              <Sparkles className="w-5 h-5 text-yellow-200" />
              <span>تحقق من كتابتي (+10 ⭐)</span>
            </button>
          </div>

        </div>

        {/* Right Tools & Guidelines Deck (4 Cols) */}
        <div className="lg:col-span-4 space-y-5">
          
          {/* Pen Color Selector */}
          <div className="bg-white border-2 border-amber-200 rounded-3xl p-5 shadow-2xs space-y-3">
            <div className="flex items-center gap-2 text-sm font-black text-amber-950">
              <Palette className="w-4 h-4 text-amber-600" />
              <span>ألوان القلم السحري:</span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {PEN_COLORS.map((col) => (
                <button
                  key={col.value}
                  onClick={() => {
                    setPenColor(col.value);
                    setIsEraser(false);
                    audioEngine.playPopSound();
                  }}
                  className={`p-2.5 rounded-xl border-2 flex items-center gap-2 transition-all cursor-pointer ${
                    penColor === col.value && !isEraser
                      ? 'border-amber-500 bg-amber-50 shadow-2xs scale-102'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <span
                    className="w-5 h-5 rounded-full shrink-0 shadow-xs border border-white"
                    style={{ backgroundColor: col.value }}
                  />
                  <span className="text-xs font-bold text-slate-700">{col.name}</span>
                </button>
              ))}
            </div>

            {/* Pen Width Slider */}
            <div className="pt-2 border-t border-slate-100 space-y-1.5">
              <div className="flex justify-between text-xs font-bold text-slate-600">
                <span>سُمك القلم:</span>
                <span className="tabular-nums font-black text-amber-900">{penSize}px</span>
              </div>
              <input
                type="range"
                min={4}
                max={22}
                value={penSize}
                onChange={(e) => setPenSize(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
            </div>
          </div>

          {/* Stroke Writing Direction Steps */}
          <div className="bg-amber-50/80 border-2 border-amber-300 rounded-3xl p-5 space-y-3">
            <h4 className="text-sm font-black text-amber-950">
              طريقة كتابة حرف {currentLetter.name}:
            </h4>
            <p className="text-xs text-slate-700 leading-relaxed font-medium">
              {currentLetter.writingGuide.rule}
            </p>

            <div className="space-y-2 pt-1">
              {currentLetter.writingGuide.steps.map((st) => (
                <div key={st.step} className="bg-white p-2.5 rounded-xl border border-amber-200 text-xs flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-amber-500 text-white font-bold flex items-center justify-center text-[10px]">
                      {st.step}
                    </span>
                    <span className="font-bold text-slate-800">{st.instruction}</span>
                  </div>
                  <span className="text-[10px] font-black text-amber-800 bg-amber-100 px-2 py-0.5 rounded-md shrink-0">
                    {st.direction}
                  </span>
                </div>
              ))}
            </div>

            <div className="text-[11px] font-bold text-amber-900 bg-white/90 p-2.5 rounded-xl border border-amber-200">
              💡 {currentLetter.writingGuide.dotsDescription}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
