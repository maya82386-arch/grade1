import React, { useState } from 'react';
import { LetterData, DifficultyLevel } from '../types';
import { Volume2, CheckCircle, Edit3, ArrowRight, ArrowLeft, Star, Sparkles, X, Lightbulb } from 'lucide-react';
import { audioEngine } from '../utils/audio';

interface LetterKingdomProps {
  alphabet: LetterData[];
  masteredLetters: number[];
  onToggleMastered: (letterId: number) => void;
  onOpenWritingLab: (letter: LetterData) => void;
  difficulty: DifficultyLevel;
}

export const LetterKingdom: React.FC<LetterKingdomProps> = ({
  alphabet,
  masteredLetters,
  onToggleMastered,
  onOpenWritingLab,
  difficulty
}) => {
  const [selectedLetter, setSelectedLetter] = useState<LetterData | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'forms' | 'vowels' | 'writing'>('overview');
  const [filterGroup, setFilterGroup] = useState<string>('all');

  const openLetterModal = (letter: LetterData) => {
    setSelectedLetter(letter);
    setActiveTab('overview');
    audioEngine.playPopSound();
    // Pronounce letter immediately upon opening
    audioEngine.speakArabic(`حرف ال${letter.phoneticName}. ${letter.primaryWord}`);
  };

  const closeLetterModal = () => {
    setSelectedLetter(null);
    audioEngine.playPopSound();
  };

  const playLetterName = (letter: LetterData) => {
    audioEngine.playPopSound();
    audioEngine.speakArabic(`حرف ال${letter.phoneticName}!`);
  };

  const playLetterSound = (letter: LetterData) => {
    audioEngine.playPopSound();
    audioEngine.speakArabic(`${letter.soundDescription}`);
  };

  const playWord = (word: string) => {
    audioEngine.playPopSound();
    audioEngine.speakArabic(word);
  };

  const playVowel = (charWithTashkeel: string, vowelLabel: string, wordExample: string) => {
    audioEngine.playPopSound();
    audioEngine.speakArabic(`${charWithTashkeel}.. بصوت ال${vowelLabel}.. مثل كلمة: ${wordExample}`);
  };

  // Filter letters based on letter groups or difficulty
  const filteredLetters = alphabet.filter((letter) => {
    if (filterGroup === 'dots') {
      return letter.writingGuide.dotsDescription.includes('نقطة') || letter.writingGuide.dotsDescription.includes('نقاط');
    }
    if (filterGroup === 'noDots') {
      return letter.writingGuide.dotsDescription.includes('بلا نقاط') || letter.writingGuide.dotsDescription.includes('بدون');
    }
    if (filterGroup === 'mastered') {
      return masteredLetters.includes(letter.id);
    }
    return true;
  });

  return (
    <div className="space-y-8 pb-12">
      {/* Kingdom Header Banner */}
      <div className="rounded-3xl bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 text-white p-6 sm:p-8 shadow-md">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>مملكة الحروف الهجائية الـ28</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black">
            استكشف الحروف بأصواتها وأشكالها الساحرة!
          </h2>
          <p className="text-white/90 text-sm sm:text-base leading-relaxed">
            اضغط على أي بطاقة لتكبير الحرف، والاستماع إلى نطقه الفصيح، واكتشاف كلماته في البيئة العُمانية، وتعلّم أشكاله وكتابته خطوة بخطوة.
          </p>
        </div>

        {/* Filters and Search Strip */}
        <div className="mt-6 pt-5 border-t border-white/25 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm font-bold">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-white/80">عرض:</span>
            <button
              onClick={() => setFilterGroup('all')}
              className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                filterGroup === 'all'
                  ? 'bg-white text-amber-950 font-black shadow-xs'
                  : 'bg-white/15 text-white hover:bg-white/25'
              }`}
            >
              جميع الحروف (28)
            </button>
            <button
              onClick={() => setFilterGroup('dots')}
              className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                filterGroup === 'dots'
                  ? 'bg-white text-amber-950 font-black shadow-xs'
                  : 'bg-white/15 text-white hover:bg-white/25'
              }`}
            >
              الحروف المنقوطة
            </button>
            <button
              onClick={() => setFilterGroup('noDots')}
              className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                filterGroup === 'noDots'
                  ? 'bg-white text-amber-950 font-black shadow-xs'
                  : 'bg-white/15 text-white hover:bg-white/25'
              }`}
            >
              الحروف بلا نقاط
            </button>
            <button
              onClick={() => setFilterGroup('mastered')}
              className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                filterGroup === 'mastered'
                  ? 'bg-white text-amber-950 font-black shadow-xs'
                  : 'bg-white/15 text-white hover:bg-white/25'
              }`}
            >
              الحروف المتقنة ({masteredLetters.length})
            </button>
          </div>

          <div className="flex items-center gap-2 text-white/95">
            <span>إتقانك:</span>
            <span className="text-lg font-black tabular-nums">{masteredLetters.length} / 28</span>
          </div>
        </div>
      </div>

      {/* 28 Letters Card Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3 sm:gap-4">
        {filteredLetters.map((letter) => {
          const isMastered = masteredLetters.includes(letter.id);
          return (
            <div
              key={letter.id}
              onClick={() => openLetterModal(letter)}
              className={`group relative bg-white border-2 rounded-2xl p-4 flex flex-col items-center justify-between text-center cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-lg active:scale-95 ${
                isMastered
                  ? 'border-emerald-300 bg-emerald-50/20'
                  : 'border-amber-200/90 hover:border-amber-400'
              }`}
            >
              {/* Mastered Badge */}
              {isMastered && (
                <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px] shadow-xs">
                  ✓
                </div>
              )}

              {/* Letter Order Tag */}
              <span className="text-[11px] font-bold text-slate-400 self-start">
                #{letter.id}
              </span>

              {/* Big Letter Character */}
              <div className="my-2 text-4xl sm:text-5xl font-black text-amber-950 group-hover:scale-115 transition-transform duration-200">
                {letter.char}
              </div>

              {/* Letter Name */}
              <div className="space-y-0.5">
                <span className="block text-sm font-black text-slate-800">
                  {letter.name}
                </span>
                <span className="block text-xs text-slate-500 font-medium">
                  {letter.primaryWordEmoji} {letter.primaryWord}
                </span>
              </div>

              {/* Quick Pronounce Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  audioEngine.playPopSound();
                  audioEngine.speakArabic(`حرف ال${letter.phoneticName}. ${letter.primaryWord}`);
                }}
                className="mt-3 p-1.5 rounded-full bg-amber-100/70 text-amber-800 hover:bg-amber-200 transition-colors cursor-pointer"
                title={`استمع لصوت حرف ${letter.name}`}
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>
          );
        })}
      </div>

      {/* Deep Letter Modal / Comprehensive Study View */}
      {selectedLetter && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl bg-white rounded-3xl border-2 border-amber-300 shadow-2xl overflow-hidden my-auto">
            
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white p-5 sm:p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-3xl font-black">
                  {selectedLetter.char}
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black">
                    حرف {selectedLetter.name} ({selectedLetter.char})
                  </h3>
                  <p className="text-xs sm:text-sm text-white/90">
                    الحرف رقم {selectedLetter.id} من الحروف الهجائية
                  </p>
                </div>
              </div>

              <button
                onClick={closeLetterModal}
                className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors cursor-pointer"
                title="إغلاق"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Navigation Tabs */}
            <div className="flex border-b border-amber-100 bg-amber-50/60 px-4 pt-2 gap-2 text-xs sm:text-sm font-bold overflow-x-auto">
              <button
                onClick={() => {
                  setActiveTab('overview');
                  audioEngine.playPopSound();
                }}
                className={`px-4 py-2.5 rounded-t-xl transition-all whitespace-nowrap ${
                  activeTab === 'overview'
                    ? 'bg-white text-amber-950 font-black border-t-2 border-x-2 border-amber-300 -mb-[1px]'
                    : 'text-slate-600 hover:text-amber-900'
                }`}
              >
                🌟 نظرة عامة وصوت الحرف
              </button>

              <button
                onClick={() => {
                  setActiveTab('forms');
                  audioEngine.playPopSound();
                }}
                className={`px-4 py-2.5 rounded-t-xl transition-all whitespace-nowrap ${
                  activeTab === 'forms'
                    ? 'bg-white text-amber-950 font-black border-t-2 border-x-2 border-amber-300 -mb-[1px]'
                    : 'text-slate-600 hover:text-amber-900'
                }`}
              >
                🧩 أشكال الحرف ومواضعه
              </button>

              <button
                onClick={() => {
                  setActiveTab('vowels');
                  audioEngine.playPopSound();
                }}
                className={`px-4 py-2.5 rounded-t-xl transition-all whitespace-nowrap ${
                  activeTab === 'vowels'
                    ? 'bg-white text-amber-950 font-black border-t-2 border-x-2 border-amber-300 -mb-[1px]'
                    : 'text-slate-600 hover:text-amber-900'
                }`}
              >
                🔊 الحركات القصيرة (ـَ ـُ ـِ ـْ)
              </button>

              <button
                onClick={() => {
                  setActiveTab('writing');
                  audioEngine.playPopSound();
                }}
                className={`px-4 py-2.5 rounded-t-xl transition-all whitespace-nowrap ${
                  activeTab === 'writing'
                    ? 'bg-white text-amber-950 font-black border-t-2 border-x-2 border-amber-300 -mb-[1px]'
                    : 'text-slate-600 hover:text-amber-900'
                }`}
              >
                ✏️ اتجاهات وطريقة الكتابة
              </button>
            </div>

            {/* Modal Body Content */}
            <div className="p-6 max-h-[65vh] overflow-y-auto space-y-6">
              
              {/* TAB 1: OVERVIEW */}
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  {/* Big Character Stage */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 rounded-2xl bg-amber-50/70 border border-amber-200">
                    <div className="text-center sm:text-right space-y-3">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => playLetterName(selectedLetter)}
                          className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-black text-sm flex items-center gap-2 shadow-xs transition-all cursor-pointer"
                        >
                          <Volume2 className="w-4 h-4" />
                          <span>انطق اسم الحرف: {selectedLetter.name}</span>
                        </button>
                        <button
                          onClick={() => playLetterSound(selectedLetter)}
                          className="px-4 py-2 rounded-xl bg-orange-100 hover:bg-orange-200 text-orange-900 font-extrabold text-sm flex items-center gap-2 transition-all cursor-pointer"
                        >
                          <Volume2 className="w-4 h-4" />
                          <span>صوت الحرف</span>
                        </button>
                      </div>

                      <p className="text-sm text-slate-700 font-medium">
                        {selectedLetter.soundDescription}
                      </p>

                      <div className="text-xs text-amber-900 font-bold bg-white/80 p-2.5 rounded-xl border border-amber-200 inline-block">
                        💡 {selectedLetter.writingGuide.dotsDescription}
                      </div>
                    </div>

                    <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-3xl bg-white border-4 border-amber-400 flex items-center justify-center text-7xl sm:text-8xl font-black text-amber-950 shadow-md">
                      {selectedLetter.char}
                    </div>
                  </div>

                  {/* Primary Word with Cultural Context */}
                  <div className="p-4 rounded-2xl bg-orange-50 border border-orange-200 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="text-4xl">{selectedLetter.primaryWordEmoji}</span>
                      <div>
                        <span className="text-xs text-orange-800 font-bold">كلمة البداية الأساسية:</span>
                        <h4 className="text-xl font-black text-orange-950">{selectedLetter.primaryWord}</h4>
                        {selectedLetter.primaryWordContext && (
                          <p className="text-xs text-orange-700 font-medium">{selectedLetter.primaryWordContext}</p>
                        )}
                      </div>
                    </div>
                    <button
                      onClick={() => playWord(selectedLetter.primaryWord)}
                      className="p-3 rounded-xl bg-orange-500 text-white hover:bg-orange-600 shadow-xs transition-colors cursor-pointer"
                      title="استمع للكلمة"
                    >
                      <Volume2 className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Examples Grid */}
                  <div>
                    <h4 className="text-sm font-black text-amber-950 mb-3">
                      كلمات تبدأ بحرف {selectedLetter.name}:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {selectedLetter.examples.map((item, idx) => (
                        <div
                          key={idx}
                          onClick={() => playWord(item.word)}
                          className="bg-white border border-amber-200 rounded-xl p-3 flex items-center justify-between gap-2 hover:border-amber-400 hover:bg-amber-50/40 transition-all cursor-pointer group"
                        >
                          <div className="flex items-center gap-2.5">
                            <span className="text-2xl">{item.emoji}</span>
                            <div>
                              <span className="block text-base font-black text-slate-800 group-hover:text-amber-800">
                                {item.word}
                              </span>
                              <span className="block text-[11px] text-slate-500">{item.meaning}</span>
                            </div>
                          </div>
                          <Volume2 className="w-4 h-4 text-amber-500 group-hover:scale-110 transition-transform" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: FORMS IN WORDS */}
              {activeTab === 'forms' && (
                <div className="space-y-6">
                  <div className="bg-sky-50 border border-sky-200 rounded-2xl p-4 text-sky-900 text-xs sm:text-sm">
                    يتغير شكل الحرف العربي حسب موقعه في الكلمة ليتصل بالحروف المجاورة! انظر إلى أشكاله الثلاثة:
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {/* Initial Form */}
                    <div className="bg-white border-2 border-sky-200 rounded-2xl p-4 text-center space-y-2">
                      <span className="text-xs font-bold text-sky-700 bg-sky-100 px-2.5 py-1 rounded-full">
                        في أول الكلمة
                      </span>
                      <div className="text-5xl font-black text-sky-950 my-2">
                        {selectedLetter.forms.initial}
                      </div>
                      <div className="pt-2 border-t border-sky-100">
                        <span className="text-xs text-slate-500 block">مثال:</span>
                        <span className="text-lg font-black text-sky-900 block">
                          {selectedLetter.forms.exampleInitial}
                        </span>
                      </div>
                      <button
                        onClick={() => playWord(selectedLetter.forms.exampleInitial)}
                        className="text-xs text-sky-600 hover:text-sky-800 flex items-center justify-center gap-1 mx-auto mt-2 font-bold cursor-pointer"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                        <span>استمع</span>
                      </button>
                    </div>

                    {/* Medial Form */}
                    <div className="bg-white border-2 border-emerald-200 rounded-2xl p-4 text-center space-y-2">
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full">
                        في وسط الكلمة
                      </span>
                      <div className="text-5xl font-black text-emerald-950 my-2">
                        {selectedLetter.forms.medial}
                      </div>
                      <div className="pt-2 border-t border-emerald-100">
                        <span className="text-xs text-slate-500 block">مثال:</span>
                        <span className="text-lg font-black text-emerald-900 block">
                          {selectedLetter.forms.exampleMedial}
                        </span>
                      </div>
                      <button
                        onClick={() => playWord(selectedLetter.forms.exampleMedial)}
                        className="text-xs text-emerald-600 hover:text-emerald-800 flex items-center justify-center gap-1 mx-auto mt-2 font-bold cursor-pointer"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                        <span>استمع</span>
                      </button>
                    </div>

                    {/* Final Form */}
                    <div className="bg-white border-2 border-purple-200 rounded-2xl p-4 text-center space-y-2">
                      <span className="text-xs font-bold text-purple-700 bg-purple-100 px-2.5 py-1 rounded-full">
                        في آخر الكلمة
                      </span>
                      <div className="text-5xl font-black text-purple-950 my-2">
                        {selectedLetter.forms.final}
                      </div>
                      <div className="pt-2 border-t border-purple-100">
                        <span className="text-xs text-slate-500 block">مثال:</span>
                        <span className="text-lg font-black text-purple-900 block">
                          {selectedLetter.forms.exampleFinal}
                        </span>
                      </div>
                      <button
                        onClick={() => playWord(selectedLetter.forms.exampleFinal)}
                        className="text-xs text-purple-600 hover:text-purple-800 flex items-center justify-center gap-1 mx-auto mt-2 font-bold cursor-pointer"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                        <span>استمع</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: VOWELS / HARAKAT */}
              {activeTab === 'vowels' && (
                <div className="space-y-6">
                  <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-amber-900 text-xs sm:text-sm">
                    الحركات القصيرة تغير صوت الحرف الجميل! استمع لصوت الحرف مع كل حركة:
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                    {/* Fatha */}
                    <div
                      onClick={() => playVowel(selectedLetter.vowels.fatha.char, 'فتحة', selectedLetter.vowels.fatha.word)}
                      className="bg-white border-2 border-rose-200 rounded-2xl p-4 text-center hover:border-rose-400 hover:bg-rose-50/40 transition-all cursor-pointer group"
                    >
                      <span className="text-xs font-black text-rose-700 bg-rose-100 px-2 py-0.5 rounded-md">
                        {selectedLetter.vowels.fatha.label}
                      </span>
                      <div className="text-5xl font-black text-rose-600 my-3 group-hover:scale-110 transition-transform">
                        {selectedLetter.vowels.fatha.char}
                      </div>
                      <div className="text-xs text-slate-600 font-bold">
                        {selectedLetter.vowels.fatha.emoji} {selectedLetter.vowels.fatha.word}
                      </div>
                    </div>

                    {/* Damma */}
                    <div
                      onClick={() => playVowel(selectedLetter.vowels.damma.char, 'ضمة', selectedLetter.vowels.damma.word)}
                      className="bg-white border-2 border-blue-200 rounded-2xl p-4 text-center hover:border-blue-400 hover:bg-blue-50/40 transition-all cursor-pointer group"
                    >
                      <span className="text-xs font-black text-blue-700 bg-blue-100 px-2 py-0.5 rounded-md">
                        {selectedLetter.vowels.damma.label}
                      </span>
                      <div className="text-5xl font-black text-blue-600 my-3 group-hover:scale-110 transition-transform">
                        {selectedLetter.vowels.damma.char}
                      </div>
                      <div className="text-xs text-slate-600 font-bold">
                        {selectedLetter.vowels.damma.emoji} {selectedLetter.vowels.damma.word}
                      </div>
                    </div>

                    {/* Kasra */}
                    <div
                      onClick={() => playVowel(selectedLetter.vowels.kasra.char, 'كسرة', selectedLetter.vowels.kasra.word)}
                      className="bg-white border-2 border-emerald-200 rounded-2xl p-4 text-center hover:border-emerald-400 hover:bg-emerald-50/40 transition-all cursor-pointer group"
                    >
                      <span className="text-xs font-black text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md">
                        {selectedLetter.vowels.kasra.label}
                      </span>
                      <div className="text-5xl font-black text-emerald-600 my-3 group-hover:scale-110 transition-transform">
                        {selectedLetter.vowels.kasra.char}
                      </div>
                      <div className="text-xs text-slate-600 font-bold">
                        {selectedLetter.vowels.kasra.emoji} {selectedLetter.vowels.kasra.word}
                      </div>
                    </div>

                    {/* Sukun */}
                    <div
                      onClick={() => playVowel(selectedLetter.vowels.sukun.char, 'سكون', selectedLetter.vowels.sukun.word)}
                      className="bg-white border-2 border-amber-200 rounded-2xl p-4 text-center hover:border-amber-400 hover:bg-amber-50/40 transition-all cursor-pointer group"
                    >
                      <span className="text-xs font-black text-amber-700 bg-amber-100 px-2 py-0.5 rounded-md">
                        {selectedLetter.vowels.sukun.label}
                      </span>
                      <div className="text-5xl font-black text-amber-600 my-3 group-hover:scale-110 transition-transform">
                        {selectedLetter.vowels.sukun.char}
                      </div>
                      <div className="text-xs text-slate-600 font-bold">
                        {selectedLetter.vowels.sukun.emoji} {selectedLetter.vowels.sukun.word}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 4: WRITING DIRECTION GUIDE */}
              {activeTab === 'writing' && (
                <div className="space-y-6">
                  <div className="bg-amber-50/90 border border-amber-200 rounded-2xl p-4">
                    <div className="flex items-center gap-2 text-amber-900 font-black text-sm mb-1">
                      <Lightbulb className="w-4 h-4 text-amber-600" />
                      <span>قاعدة كتابة الحرف:</span>
                    </div>
                    <p className="text-slate-700 text-sm font-medium leading-relaxed">
                      {selectedLetter.writingGuide.rule}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h5 className="text-xs font-black text-slate-700">خطوات واتجاهات الرسم الصحيحة:</h5>
                    {selectedLetter.writingGuide.steps.map((st) => (
                      <div
                        key={st.step}
                        className="flex items-center justify-between gap-4 p-3.5 bg-white border border-amber-200 rounded-xl"
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-7 h-7 rounded-full bg-amber-500 text-white font-black text-xs flex items-center justify-center shrink-0">
                            {st.step}
                          </span>
                          <span className="text-sm font-bold text-slate-800">
                            {st.instruction}
                          </span>
                        </div>
                        <span className="text-xs font-black px-2.5 py-1 rounded-lg bg-amber-100 text-amber-900 shrink-0">
                          {st.direction}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Direct Launch to Writing Lab */}
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-300 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-center sm:text-right">
                      <h5 className="text-sm font-black text-amber-950">هل تريد أن تكتب الحرف بنفسك؟</h5>
                      <p className="text-xs text-slate-600">افتح مختبر الكتابة وتتبع شكل الحرف بالقلم أو الإصبع!</p>
                    </div>

                    <button
                      onClick={() => {
                        closeLetterModal();
                        onOpenWritingLab(selectedLetter);
                      }}
                      className="px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-black text-sm flex items-center gap-2 shadow-xs transition-all cursor-pointer whitespace-nowrap"
                    >
                      <Edit3 className="w-4 h-4" />
                      <span>اكتب حرف {selectedLetter.char} الآن ✏️</span>
                    </button>
                  </div>
                </div>
              )}

            </div>

            {/* Modal Footer */}
            <div className="bg-amber-50/70 border-t border-amber-200 p-4 sm:p-5 flex flex-wrap items-center justify-between gap-3">
              {/* Mastery Toggle */}
              <button
                onClick={() => {
                  onToggleMastered(selectedLetter.id);
                  if (!masteredLetters.includes(selectedLetter.id)) {
                    audioEngine.playApplauseSound();
                    audioEngine.speakArabic(`أحسنت يا بطل! لقد أتقنت حرف ${selectedLetter.name}!`);
                  } else {
                    audioEngine.playPopSound();
                  }
                }}
                className={`px-4 py-2.5 rounded-xl font-black text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer ${
                  masteredLetters.includes(selectedLetter.id)
                    ? 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-xs'
                    : 'bg-white border-2 border-emerald-500 text-emerald-800 hover:bg-emerald-50'
                }`}
              >
                <CheckCircle className="w-4 h-4" />
                <span>
                  {masteredLetters.includes(selectedLetter.id)
                    ? 'أتقنت هذا الحرف بنجاح! ⭐'
                    : 'علّم كـ حرف مُتقن (+10 نجوم)'}
                </span>
              </button>

              <div className="flex items-center gap-2">
                {/* Previous Letter */}
                <button
                  disabled={selectedLetter.id === 1}
                  onClick={() => {
                    const prev = alphabet.find(l => l.id === selectedLetter.id - 1);
                    if (prev) openLetterModal(prev);
                  }}
                  className="px-3 py-2 rounded-xl bg-white border border-amber-200 text-amber-950 font-bold text-xs disabled:opacity-40 disabled:cursor-not-allowed hover:bg-amber-50 cursor-pointer flex items-center gap-1"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                  <span>السابق</span>
                </button>

                {/* Next Letter */}
                <button
                  disabled={selectedLetter.id === 28}
                  onClick={() => {
                    const next = alphabet.find(l => l.id === selectedLetter.id + 1);
                    if (next) openLetterModal(next);
                  }}
                  className="px-3 py-2 rounded-xl bg-white border border-amber-200 text-amber-950 font-bold text-xs disabled:opacity-40 disabled:cursor-not-allowed hover:bg-amber-50 cursor-pointer flex items-center gap-1"
                >
                  <span>التالي</span>
                  <ArrowLeft className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};
