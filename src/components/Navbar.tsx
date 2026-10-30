import React from 'react';
import { Volume2, VolumeX, Music, Award, Star, BookOpen } from 'lucide-react';
import { audioEngine } from '../utils/audio';

interface NavbarProps {
  currentTab: 'home' | 'alphabet' | 'games' | 'writing' | 'certificate';
  setCurrentTab: (tab: 'home' | 'alphabet' | 'games' | 'writing' | 'certificate') => void;
  totalStars: number;
  masteredCount: number;
  soundEnabled: boolean;
  setSoundEnabled: (v: boolean) => void;
  musicEnabled: boolean;
  setMusicEnabled: (v: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  setCurrentTab,
  totalStars,
  masteredCount,
  soundEnabled,
  setSoundEnabled,
  musicEnabled,
  setMusicEnabled
}) => {
  const toggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    audioEngine.setSoundEnabled(next);
    if (next) audioEngine.playPopSound();
  };

  const toggleMusic = () => {
    const next = !musicEnabled;
    setMusicEnabled(next);
    audioEngine.setMusicEnabled(next);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-amber-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single text wordmark */}
        <button
          onClick={() => {
            setCurrentTab('home');
            audioEngine.playPopSound();
          }}
          className="flex items-center gap-3 text-right group cursor-pointer focus-visible:outline-none"
        >
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center text-white font-extrabold text-2xl shadow-sm group-hover:scale-105 transition-transform">
            ض
          </div>
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-black text-amber-950 tracking-tight whitespace-nowrap shrink-0 group-hover:text-amber-700 transition-colors">
              مغامرة الحروف
            </span>
            <span className="text-xs text-amber-700/80 font-medium hidden sm:inline">
              الصف الأول الأساسي · سلطنة عُمان
            </span>
          </div>
        </button>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          <button
            onClick={() => {
              setCurrentTab('home');
              audioEngine.playPopSound();
            }}
            className={`px-3 py-2 text-sm font-bold rounded-xl transition-all whitespace-nowrap shrink-0 ${
              currentTab === 'home'
                ? 'bg-amber-100 text-amber-950 shadow-xs'
                : 'text-slate-600 hover:text-amber-900 hover:bg-amber-50/70'
            }`}
          >
            🏠 الرئيسية
          </button>

          <button
            onClick={() => {
              setCurrentTab('alphabet');
              audioEngine.playPopSound();
            }}
            className={`px-3 py-2 text-sm font-bold rounded-xl transition-all whitespace-nowrap shrink-0 ${
              currentTab === 'alphabet'
                ? 'bg-amber-100 text-amber-950 shadow-xs'
                : 'text-slate-600 hover:text-amber-900 hover:bg-amber-50/70'
            }`}
          >
            📚 مملكة الحروف
          </button>

          <button
            onClick={() => {
              setCurrentTab('games');
              audioEngine.playPopSound();
            }}
            className={`px-3 py-2 text-sm font-bold rounded-xl transition-all whitespace-nowrap shrink-0 ${
              currentTab === 'games'
                ? 'bg-amber-100 text-amber-950 shadow-xs'
                : 'text-slate-600 hover:text-amber-900 hover:bg-amber-50/70'
            }`}
          >
            🎮 ألعاب التحدي
          </button>

          <button
            onClick={() => {
              setCurrentTab('writing');
              audioEngine.playPopSound();
            }}
            className={`px-3 py-2 text-sm font-bold rounded-xl transition-all whitespace-nowrap shrink-0 ${
              currentTab === 'writing'
                ? 'bg-amber-100 text-amber-950 shadow-xs'
                : 'text-slate-600 hover:text-amber-900 hover:bg-amber-50/70'
            }`}
          >
            ✏️ مختبر الكتابة
          </button>

          <button
            onClick={() => {
              setCurrentTab('certificate');
              audioEngine.playPopSound();
            }}
            className={`px-3 py-2 text-sm font-bold rounded-xl transition-all whitespace-nowrap shrink-0 ${
              currentTab === 'certificate'
                ? 'bg-amber-100 text-amber-950 shadow-xs'
                : 'text-slate-600 hover:text-amber-900 hover:bg-amber-50/70'
            }`}
          >
            📜 شهادة الإنجاز
          </button>
        </nav>

        {/* Zone 3: 1 Primary Cluster (Stars & Audio Controls) */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Stars Count */}
          <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-200/90 px-3 py-1.5 rounded-full text-amber-900 font-extrabold text-sm shadow-2xs">
            <Star className="w-4 h-4 fill-amber-400 text-amber-500 animate-pulse" />
            <span className="tabular-nums">{totalStars}</span>
          </div>

          {/* Mastered Letters Quick Pill */}
          <div className="hidden sm:flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-full text-emerald-800 font-bold text-xs">
            <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
            <span>الحروف:</span>
            <span className="tabular-nums font-extrabold">{masteredCount}/28</span>
          </div>

          {/* Sound Effect Toggle */}
          <button
            onClick={toggleSound}
            aria-label={soundEnabled ? 'كتم المؤثرات الصوتية' : 'تشغيل المؤثرات الصوتية'}
            className={`p-2 rounded-xl border transition-all cursor-pointer ${
              soundEnabled
                ? 'bg-amber-100/70 border-amber-300 text-amber-900 hover:bg-amber-200'
                : 'bg-slate-100 border-slate-300 text-slate-400 hover:bg-slate-200'
            }`}
          >
            {soundEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
          </button>

          {/* Music Toggle */}
          <button
            onClick={toggleMusic}
            aria-label={musicEnabled ? 'إيقاف نغمة الخلفية' : 'تشغيل نغمة الخلفية'}
            className={`p-2 rounded-xl border transition-all cursor-pointer ${
              musicEnabled
                ? 'bg-indigo-100 border-indigo-300 text-indigo-900 hover:bg-indigo-200'
                : 'bg-slate-100 border-slate-300 text-slate-400 hover:bg-slate-200'
            }`}
          >
            <Music className="w-5 h-5" />
          </button>

          {/* Mobile Certificate Quick Access */}
          <button
            onClick={() => {
              setCurrentTab('certificate');
              audioEngine.playPopSound();
            }}
            className="md:hidden p-2 rounded-xl bg-amber-500 text-white font-bold hover:bg-amber-600 transition-colors"
            title="شهادة الإنجاز"
          >
            <Award className="w-5 h-5" />
          </button>
        </div>

      </div>

      {/* Mobile Sub-Navigation Bar */}
      <div className="md:hidden flex items-center justify-around border-t border-amber-100 bg-amber-50/50 px-2 py-2 text-xs font-bold text-slate-700">
        <button
          onClick={() => setCurrentTab('home')}
          className={`px-2 py-1 rounded-lg ${currentTab === 'home' ? 'bg-amber-200 text-amber-950 font-black' : ''}`}
        >
          الرئيسية
        </button>
        <button
          onClick={() => setCurrentTab('alphabet')}
          className={`px-2 py-1 rounded-lg ${currentTab === 'alphabet' ? 'bg-amber-200 text-amber-950 font-black' : ''}`}
        >
          الحروف (28)
        </button>
        <button
          onClick={() => setCurrentTab('games')}
          className={`px-2 py-1 rounded-lg ${currentTab === 'games' ? 'bg-amber-200 text-amber-950 font-black' : ''}`}
        >
          الألعاب
        </button>
        <button
          onClick={() => setCurrentTab('writing')}
          className={`px-2 py-1 rounded-lg ${currentTab === 'writing' ? 'bg-amber-200 text-amber-950 font-black' : ''}`}
        >
          الكتابة
        </button>
      </div>
    </header>
  );
};
