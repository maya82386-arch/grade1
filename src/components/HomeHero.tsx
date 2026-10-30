import React from 'react';
import { Play, Sparkles, BookOpen, Gamepad2, Edit3, Award, Star, Compass, Layers } from 'lucide-react';
import { MascotGuide } from './MascotGuide';
import { DifficultyLevel } from '../types';
import { audioEngine } from '../utils/audio';

interface HomeHeroProps {
  onStartClick: () => void;
  onNavigate: (tab: 'alphabet' | 'games' | 'writing' | 'certificate') => void;
  difficulty: DifficultyLevel;
  setDifficulty: (level: DifficultyLevel) => void;
  masteredCount: number;
  totalStars: number;
}

export const HomeHero: React.FC<HomeHeroProps> = ({
  onStartClick,
  onNavigate,
  difficulty,
  setDifficulty,
  masteredCount,
  totalStars
}) => {
  const handleLevelChange = (lvl: DifficultyLevel) => {
    setDifficulty(lvl);
    audioEngine.playPopSound();
    if (lvl === 'level1') {
      audioEngine.speakArabic('المستوى الأول: التعرف على الحروف وأشكالها الأساسية');
    } else if (lvl === 'level2') {
      audioEngine.speakArabic('المستوى الثاني: التمييز بين الحروف المتشابهة');
    } else {
      audioEngine.speakArabic('المستوى الثالث: ربط الحروف بالكلمات والحركات');
    }
  };

  return (
    <div className="space-y-10 pb-12">
      {/* Hero Banner Container */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-amber-100/80 via-white to-amber-50/50 border-2 border-amber-300/80 shadow-md">
        
        {/* Visual Top Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10">
          
          {/* Text & Primary Actions (Right in RTL) */}
          <div className="lg:col-span-7 space-y-6 text-right">
            
            {/* Omani Educational Kicker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-900 font-extrabold text-xs sm:text-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
              <span>سلطنة عُمان · منهج الصف الأول الأساسي</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-amber-950 tracking-tight leading-tight" style={{ textWrap: 'balance' }}>
              مرحبًا بك في <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600">مغامرة الحروف!</span>
            </h1>

            <p className="text-slate-700 text-base sm:text-lg lg:text-xl font-medium leading-relaxed max-w-2xl">
              رحلة سحرية ممتعة لاكتشاف الحروف الهجائية الـ28، بالنطق الصحيح، والرسوم الكرتونية المبهجة، والألعاب التفاعلية، ومختبر الكتابة بالقلم الرقمي!
            </p>

            {/* Big Child-Friendly START Button */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => {
                  audioEngine.playSuccessChime();
                  onStartClick();
                }}
                className="group relative inline-flex items-center gap-3 px-8 py-4 sm:px-10 sm:py-5 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 text-white font-black text-lg sm:text-2xl shadow-lg hover:shadow-xl hover:scale-102 active:scale-98 transition-all cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center group-hover:rotate-12 transition-transform">
                  <Play className="w-6 h-6 fill-white text-white" />
                </div>
                <span>ابدأ المغامرة الآن!</span>
                <Sparkles className="w-6 h-6 text-yellow-200 animate-spin" />
              </button>

              <button
                onClick={() => {
                  audioEngine.playPopSound();
                  onNavigate('games');
                }}
                className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl bg-white border-2 border-amber-300 text-amber-900 font-extrabold text-base sm:text-lg hover:bg-amber-50 transition-colors shadow-xs"
              >
                <Gamepad2 className="w-5 h-5 text-amber-600" />
                <span>العب الألعاب مباشرة</span>
              </button>
            </div>

            {/* Quick Metrics Strip */}
            <div className="flex items-center gap-6 pt-4 border-t border-amber-200/60 text-slate-700 text-sm font-bold">
              <div className="flex items-center gap-2">
                <span className="text-amber-500 text-lg">⭐</span>
                <span>النجوم:</span>
                <span className="text-amber-900 font-black tabular-nums">{totalStars}</span>
              </div>
              <span className="text-amber-300">·</span>
              <div className="flex items-center gap-2">
                <span className="text-emerald-500 text-lg">📚</span>
                <span>الحروف المتقنة:</span>
                <span className="text-emerald-900 font-black tabular-nums">{masteredCount} من 28</span>
              </div>
            </div>

          </div>

          {/* Hero Illustration (Left in RTL) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto rounded-3xl overflow-hidden border-4 border-white shadow-xl aspect-16/10 sm:aspect-16/9 lg:aspect-4/3 group">
              <img
                src="/src/assets/images/hero_oman_adventure_1793367310493.jpg"
                alt="مغامرة الحروف في سلطنة عمان"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-4">
                <p className="text-white text-xs sm:text-sm font-bold drop-shadow-md">
                  مع سند ومهرة في ربوع الطبيعة العُمانية الجميلة 🇴🇲
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Level Differentiation Bar (سادساً: التمايز التعليمي) */}
        <div className="bg-amber-100/60 border-t border-amber-200 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-amber-950 font-bold text-sm">
            <Layers className="w-4 h-4 text-amber-600" />
            <span>المستوى التعليمي المناسب لطفلك:</span>
          </div>

          <div className="flex items-center gap-2 bg-white/80 p-1 rounded-xl border border-amber-300/70 shadow-2xs">
            <button
              onClick={() => handleLevelChange('level1')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                difficulty === 'level1'
                  ? 'bg-amber-500 text-white shadow-xs'
                  : 'text-slate-700 hover:text-amber-900'
              }`}
            >
              🌱 المستوى 1 (التعرف على الحرف)
            </button>
            <button
              onClick={() => handleLevelChange('level2')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                difficulty === 'level2'
                  ? 'bg-amber-500 text-white shadow-xs'
                  : 'text-slate-700 hover:text-amber-900'
              }`}
            >
              🌿 المستوى 2 (الحروف المتشابهة)
            </button>
            <button
              onClick={() => handleLevelChange('level3')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                difficulty === 'level3'
                  ? 'bg-amber-500 text-white shadow-xs'
                  : 'text-slate-700 hover:text-amber-900'
              }`}
            >
              🌳 المستوى 3 (الحركات والكلمات)
            </button>
          </div>
        </div>

      </div>

      {/* Mascot Guide Interaction Bar */}
      <MascotGuide
        message="أهلاً بك يا بطل! هل تعلم أن الحروف الهجائية العربية تتكون من 28 حرفاً جميلاً؟ لقد جمعتُ لك كل حرف مع صوته وكلماته وطريقة كتابته في مملكة الحروف!"
        subMessage="اضغط على زر «مملكة الحروف» لتبدأ استكشاف حرف الألف والباء فوراً، أو اختر لعبة من ألعاب التحدي!"
        actionText="استكشف الحروف الآن 📚"
        onActionClick={() => onNavigate('alphabet')}
      />

      {/* 4 Thematic Zones Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xl font-black text-amber-950">
            <Compass className="w-5 h-5 text-amber-600" />
            <h2>أقسام مغامرة الحروف</h2>
          </div>
          <span className="text-xs text-slate-500 font-medium">اختر القسم الذي ترغب ببدء التعلم منه</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          {/* Card 1: مملكة الحروف */}
          <div
            onClick={() => {
              audioEngine.playPopSound();
              onNavigate('alphabet');
            }}
            className="group relative bg-white border-2 border-amber-200/90 rounded-2xl p-5 hover:border-amber-400 hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-amber-950 mb-1.5 group-hover:text-amber-700 transition-colors">
                مملكة الحروف الـ28
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                بطاقات ملونة لكل حرف، صوت الحرف والحركات، أشكاله في أول ووسط وآخر الكلمة، وطريقة كتابته بالاتجاهات الصحيحة.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-amber-100 flex items-center justify-between text-xs font-bold text-amber-700">
              <span>استكشف الحروف</span>
              <span>←</span>
            </div>
          </div>

          {/* Card 2: الألعاب التفاعلية */}
          <div
            onClick={() => {
              audioEngine.playPopSound();
              onNavigate('games');
            }}
            className="group relative bg-white border-2 border-emerald-200/90 rounded-2xl p-5 hover:border-emerald-400 hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Gamepad2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-emerald-950 mb-1.5 group-hover:text-emerald-700 transition-colors">
                ألعاب التحدي الـ5
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                صائد الحروف، طابق الصورة، الحرف المختبئ، قطار الحروف السريع، ولعبة كنز المعرفة المليئة بالجوائز.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-emerald-100 flex items-center justify-between text-xs font-bold text-emerald-700">
              <span>العب واكسب النجوم</span>
              <span>←</span>
            </div>
          </div>

          {/* Card 3: مختبر الكتابة */}
          <div
            onClick={() => {
              audioEngine.playPopSound();
              onNavigate('writing');
            }}
            className="group relative bg-white border-2 border-sky-200/90 rounded-2xl p-5 hover:border-sky-400 hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Edit3 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-sky-950 mb-1.5 group-hover:text-sky-700 transition-colors">
                مختبر الكتابة بالقلم
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                لوحة رسم تفاعلية لتتبع مسار كتابة الحروف بالإصبع أو القلم على الأجهزة اللوحية، مع ألوان ومسّاحة تقييمية.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-sky-100 flex items-center justify-between text-xs font-bold text-sky-700">
              <span>تدرّب على الخط</span>
              <span>←</span>
            </div>
          </div>

          {/* Card 4: شهادة الإنجاز */}
          <div
            onClick={() => {
              audioEngine.playPopSound();
              onNavigate('certificate');
            }}
            className="group relative bg-white border-2 border-purple-200/90 rounded-2xl p-5 hover:border-purple-400 hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-purple-950 mb-1.5 group-hover:text-purple-700 transition-colors">
                شهادة إنجاز الطالب
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                شهادة فخرية رسمية قابلة للطباعة باسم الطالب والطالبة ومعتمدة لمعلمة المادة مريم العامري للصف الأول.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-purple-100 flex items-center justify-between text-xs font-bold text-purple-700">
              <span>عرض وطباعة الشهادة</span>
              <span>←</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
