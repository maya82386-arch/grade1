import React, { useState, useEffect, useMemo } from 'react';
import { LetterData, DifficultyLevel } from '../types';
import { Volume2, Sparkles, RefreshCw, Star, Trophy, HelpCircle, Check, ArrowRight, ArrowLeft } from 'lucide-react';
import { audioEngine } from '../utils/audio';

interface InteractiveGamesProps {
  alphabet: LetterData[];
  onAddStars: (stars: number) => void;
  difficulty: DifficultyLevel;
  onRecordGameCompleted: (gameKey: 'catcher' | 'matching' | 'hiddenLetter' | 'train' | 'treasure') => void;
}

export const InteractiveGames: React.FC<InteractiveGamesProps> = ({
  alphabet,
  onAddStars,
  difficulty,
  onRecordGameCompleted
}) => {
  const [activeGame, setActiveGame] = useState<'catcher' | 'matching' | 'hiddenLetter' | 'train' | 'treasure'>('catcher');

  // Encouragement toast state
  const [celebrationToast, setCelebrationToast] = useState<{ message: string; stars: number } | null>(null);

  const triggerCelebration = (message: string, stars: number = 5) => {
    onAddStars(stars);
    audioEngine.playSuccessChime();
    audioEngine.speakArabic(message);
    setCelebrationToast({ message, stars });
    setTimeout(() => {
      setCelebrationToast(null);
    }, 2500);
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Toast popup */}
      {celebrationToast && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-black text-sm sm:text-base px-6 py-3 rounded-2xl shadow-xl border-2 border-white flex items-center gap-3 animate-in fade-in slide-in-from-top-4">
          <Sparkles className="w-5 h-5 text-yellow-300 animate-spin" />
          <span>{celebrationToast.message}</span>
          <span className="bg-white/20 px-2 py-0.5 rounded-full text-xs">+{celebrationToast.stars} ⭐</span>
        </div>
      )}

      {/* Games Header */}
      <div className="bg-gradient-to-r from-teal-500 via-emerald-500 to-green-600 text-white rounded-3xl p-6 sm:p-8 shadow-md">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-bold bg-white/20 px-3 py-1 rounded-full inline-block">
            🎮 صالة الألعاب التعليمية التفاعلية
          </span>
          <h2 className="text-2xl sm:text-4xl font-black">
            العب وتعلّم واربح نجوم المغامرة!
          </h2>
          <p className="text-white/90 text-sm leading-relaxed">
            5 ألعاب تفاعلية شيقة صُممت لطلاب الصف الأول لتثبيت أصوات الحروف وأشكالها وترتيبها بأسلوب ممتع.
          </p>
        </div>

        {/* Game Tabs */}
        <div className="mt-6 pt-5 border-t border-white/20 grid grid-cols-2 sm:grid-cols-5 gap-2 text-xs sm:text-sm font-bold">
          <button
            onClick={() => {
              setActiveGame('catcher');
              audioEngine.playPopSound();
            }}
            className={`p-3 rounded-2xl transition-all cursor-pointer flex flex-col items-center gap-1.5 ${
              activeGame === 'catcher'
                ? 'bg-white text-emerald-950 font-black shadow-md scale-102'
                : 'bg-white/15 text-white hover:bg-white/25'
            }`}
          >
            <span className="text-xl">🎯</span>
            <span>1. صائد الحروف</span>
          </button>

          <button
            onClick={() => {
              setActiveGame('matching');
              audioEngine.playPopSound();
            }}
            className={`p-3 rounded-2xl transition-all cursor-pointer flex flex-col items-center gap-1.5 ${
              activeGame === 'matching'
                ? 'bg-white text-emerald-950 font-black shadow-md scale-102'
                : 'bg-white/15 text-white hover:bg-white/25'
            }`}
          >
            <span className="text-xl">🧩</span>
            <span>2. طابق الصورة</span>
          </button>

          <button
            onClick={() => {
              setActiveGame('hiddenLetter');
              audioEngine.playPopSound();
            }}
            className={`p-3 rounded-2xl transition-all cursor-pointer flex flex-col items-center gap-1.5 ${
              activeGame === 'hiddenLetter'
                ? 'bg-white text-emerald-950 font-black shadow-md scale-102'
                : 'bg-white/15 text-white hover:bg-white/25'
            }`}
          >
            <span className="text-xl">🔍</span>
            <span>3. الحرف المختبئ</span>
          </button>

          <button
            onClick={() => {
              setActiveGame('train');
              audioEngine.playPopSound();
            }}
            className={`p-3 rounded-2xl transition-all cursor-pointer flex flex-col items-center gap-1.5 ${
              activeGame === 'train'
                ? 'bg-white text-emerald-950 font-black shadow-md scale-102'
                : 'bg-white/15 text-white hover:bg-white/25'
            }`}
          >
            <span className="text-xl">🚂</span>
            <span>4. قطار الحروف</span>
          </button>

          <button
            onClick={() => {
              setActiveGame('treasure');
              audioEngine.playPopSound();
            }}
            className={`p-3 rounded-2xl transition-all cursor-pointer flex flex-col items-center gap-1.5 col-span-2 sm:col-span-1 ${
              activeGame === 'treasure'
                ? 'bg-white text-emerald-950 font-black shadow-md scale-102'
                : 'bg-white/15 text-white hover:bg-white/25'
            }`}
          >
            <span className="text-xl">💎</span>
            <span>5. لعبة الكنز</span>
          </button>
        </div>
      </div>

      {/* Render Active Game */}
      <div className="bg-white border-2 border-amber-200/90 rounded-3xl p-6 sm:p-8 shadow-xs">
        {activeGame === 'catcher' && (
          <GameLetterCatcher
            alphabet={alphabet}
            difficulty={difficulty}
            onSuccess={(msg, stars) => triggerCelebration(msg, stars)}
            onFinish={() => onRecordGameCompleted('catcher')}
          />
        )}

        {activeGame === 'matching' && (
          <GameMatchPicture
            alphabet={alphabet}
            difficulty={difficulty}
            onSuccess={(msg, stars) => triggerCelebration(msg, stars)}
            onFinish={() => onRecordGameCompleted('matching')}
          />
        )}

        {activeGame === 'hiddenLetter' && (
          <GameHiddenLetter
            alphabet={alphabet}
            difficulty={difficulty}
            onSuccess={(msg, stars) => triggerCelebration(msg, stars)}
            onFinish={() => onRecordGameCompleted('hiddenLetter')}
          />
        )}

        {activeGame === 'train' && (
          <GameLetterTrain
            alphabet={alphabet}
            difficulty={difficulty}
            onSuccess={(msg, stars) => triggerCelebration(msg, stars)}
            onFinish={() => onRecordGameCompleted('train')}
          />
        )}

        {activeGame === 'treasure' && (
          <GameTreasureHunt
            alphabet={alphabet}
            difficulty={difficulty}
            onSuccess={(msg, stars) => triggerCelebration(msg, stars)}
            onFinish={() => onRecordGameCompleted('treasure')}
          />
        )}
      </div>
    </div>
  );
};

/* =========================================================
   1. GAME: صائد الحروف (Letter Catcher - Listen & Pick)
   ========================================================= */
const GameLetterCatcher: React.FC<{
  alphabet: LetterData[];
  difficulty: DifficultyLevel;
  onSuccess: (msg: string, stars: number) => void;
  onFinish: () => void;
}> = ({ alphabet, difficulty, onSuccess, onFinish }) => {
  const [round, setRound] = useState(1);
  const [score, setScore] = useState(0);
  const [targetLetter, setTargetLetter] = useState<LetterData>(alphabet[0]);
  const [options, setOptions] = useState<LetterData[]>([]);
  const [showHint, setShowHint] = useState(false);

  const setupRound = () => {
    setShowHint(false);
    // Pick target
    const randomTarget = alphabet[Math.floor(Math.random() * alphabet.length)];
    setTargetLetter(randomTarget);

    let distractors: LetterData[] = [];

    // If level 2: prioritize similar letters!
    if (difficulty === 'level2' && randomTarget.similarLetters.length > 0) {
      const similars = alphabet.filter(l => randomTarget.similarLetters.includes(l.char));
      distractors.push(...similars);
    }

    // Fill remaining distractors
    while (distractors.length < 3) {
      const rand = alphabet[Math.floor(Math.random() * alphabet.length)];
      if (rand.id !== randomTarget.id && !distractors.find(d => d.id === rand.id)) {
        distractors.push(rand);
      }
    }

    // Shuffle
    const all = [randomTarget, ...distractors.slice(0, 3)].sort(() => Math.random() - 0.5);
    setOptions(all);

    // Speak prompt
    audioEngine.speakArabic(`اسْتَمِعْ جَيِّدًا: أَيْنَ حَرْفُ ال${randomTarget.phoneticName}؟`);
  };

  useEffect(() => {
    setupRound();
  }, [round, difficulty]);

  const handlePick = (letter: LetterData) => {
    audioEngine.playPopSound();
    if (letter.id === targetLetter.id) {
      const phrase = audioEngine.getEncouragementPhrase();
      setScore(s => s + 1);
      onSuccess(`أحسنت! هذا حرف ال${targetLetter.name}! ${phrase}`, 5);
      if (round < 5) {
        setRound(r => r + 1);
      } else {
        audioEngine.playApplauseSound();
        onFinish();
      }
    } else {
      audioEngine.playTryAgainSound();
      audioEngine.speakArabic(audioEngine.getHintPhrase());
      setShowHint(true);
    }
  };

  const playPromptSound = () => {
    audioEngine.playPopSound();
    audioEngine.speakArabic(`أين حرف ال${targetLetter.phoneticName}؟ حرف ال${targetLetter.phoneticName}`);
  };

  return (
    <div className="space-y-6 text-center max-w-xl mx-auto">
      {/* Title & Stats */}
      <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-slate-600 border-b border-amber-100 pb-3">
        <span>الجولة: {round} من 5</span>
        <div className="flex items-center gap-1.5 text-amber-700">
          <Star className="w-4 h-4 fill-amber-400 text-amber-500" />
          <span>النقاط: {score}</span>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-xl sm:text-2xl font-black text-amber-950">
          استمع جيدًا.. ثم اختر الحرف الصحيح!
        </h3>
        <p className="text-xs sm:text-sm text-slate-600">
          اضغط على زر مكبر الصوت للاستماع مرة أخرى
        </p>

        {/* Big Audio Trigger Button */}
        <button
          onClick={playPromptSound}
          className="mx-auto px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-black text-base sm:text-lg flex items-center gap-3 shadow-md hover:scale-105 transition-all cursor-pointer"
        >
          <Volume2 className="w-6 h-6 animate-pulse" />
          <span>استمع لصوت الحرف المطلُوب</span>
        </button>
      </div>

      {/* Floating Option Bubbles */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
        {options.map((opt) => (
          <button
            key={opt.id}
            onClick={() => handlePick(opt)}
            className="group relative bg-amber-50/70 border-3 border-amber-300 hover:border-amber-500 hover:bg-amber-100 p-6 rounded-3xl text-5xl sm:text-6xl font-black text-amber-950 shadow-sm hover:shadow-md hover:scale-105 transition-all cursor-pointer active:scale-95"
          >
            {opt.char}
            <span className="block text-xs font-bold text-slate-500 mt-2 group-hover:text-amber-800">
              {opt.name}
            </span>
          </button>
        ))}
      </div>

      {/* Hint Alert */}
      {showHint && (
        <div className="p-3 bg-amber-100/80 border border-amber-300 rounded-xl text-xs font-bold text-amber-900 flex items-center justify-center gap-2">
          <HelpCircle className="w-4 h-4 text-amber-600" />
          <span>تلميح مرشد: {targetLetter.writingGuide.dotsDescription}</span>
        </div>
      )}
    </div>
  );
};

/* =========================================================
   2. GAME: طابق الصورة (Match Picture to Letter)
   ========================================================= */
const GameMatchPicture: React.FC<{
  alphabet: LetterData[];
  difficulty: DifficultyLevel;
  onSuccess: (msg: string, stars: number) => void;
  onFinish: () => void;
}> = ({ alphabet, difficulty, onSuccess, onFinish }) => {
  const [selectedPicture, setSelectedPicture] = useState<number | null>(null);
  const [selectedLetter, setSelectedLetter] = useState<number | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<number[]>([]);
  const [gameItems, setGameItems] = useState<{ id: number; char: string; name: string; word: string; emoji: string }[]>([]);

  const setupBoard = () => {
    setSelectedPicture(null);
    setSelectedLetter(null);
    setMatchedPairs([]);

    // Select 4 random letters
    const shuffled = [...alphabet].sort(() => Math.random() - 0.5).slice(0, 4);
    const items = shuffled.map(l => ({
      id: l.id,
      char: l.char,
      name: l.name,
      word: l.primaryWord,
      emoji: l.primaryWordEmoji
    }));
    setGameItems(items);
  };

  useEffect(() => {
    setupBoard();
  }, [difficulty]);

  const handlePictureClick = (id: number) => {
    if (matchedPairs.includes(id)) return;
    audioEngine.playPopSound();
    setSelectedPicture(id);
    if (selectedLetter !== null) {
      checkMatch(id, selectedLetter);
    }
  };

  const handleLetterClick = (id: number) => {
    if (matchedPairs.includes(id)) return;
    audioEngine.playPopSound();
    setSelectedLetter(id);
    if (selectedPicture !== null) {
      checkMatch(selectedPicture, id);
    }
  };

  const checkMatch = (picId: number, letId: number) => {
    if (picId === letId) {
      const newMatched = [...matchedPairs, picId];
      setMatchedPairs(newMatched);
      setSelectedPicture(null);
      setSelectedLetter(null);

      const item = gameItems.find(i => i.id === picId);
      onSuccess(`رائع! تطابق صحيح: حرف ال${item?.char} مع ${item?.word}!`, 5);

      if (newMatched.length === gameItems.length) {
        audioEngine.playApplauseSound();
        onFinish();
      }
    } else {
      audioEngine.playTryAgainSound();
      setTimeout(() => {
        setSelectedPicture(null);
        setSelectedLetter(null);
      }, 700);
    }
  };

  const picturesShuffled = useMemo(() => {
    return [...gameItems].sort(() => Math.random() - 0.5);
  }, [gameItems]);

  const lettersShuffled = useMemo(() => {
    return [...gameItems].sort(() => Math.random() - 0.5);
  }, [gameItems]);

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-slate-600 border-b border-amber-100 pb-3">
        <span>طابق الصورة بالحرف المناسب: ({matchedPairs.length} / 4)</span>
        <button
          onClick={setupBoard}
          className="flex items-center gap-1 text-emerald-700 hover:text-emerald-900 cursor-pointer"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>تحدي جديد</span>
        </button>
      </div>

      <div className="grid grid-cols-2 gap-6 sm:gap-10 items-center">
        {/* Pictures Column */}
        <div className="space-y-3">
          <span className="block text-xs font-black text-slate-500 mb-2">اضغط على الصورة:</span>
          {picturesShuffled.map(item => {
            const isMatched = matchedPairs.includes(item.id);
            const isSelected = selectedPicture === item.id;
            return (
              <button
                key={item.id}
                disabled={isMatched}
                onClick={() => handlePictureClick(item.id)}
                className={`w-full p-3 sm:p-4 rounded-2xl border-2 flex items-center gap-3 transition-all cursor-pointer ${
                  isMatched
                    ? 'bg-emerald-100/70 border-emerald-400 opacity-60 cursor-default'
                    : isSelected
                    ? 'bg-amber-100 border-amber-500 ring-2 ring-amber-400 scale-102'
                    : 'bg-white border-amber-200 hover:border-amber-400 hover:bg-amber-50/50'
                }`}
              >
                <span className="text-3xl sm:text-4xl">{item.emoji}</span>
                <span className="text-sm sm:text-base font-black text-slate-800">{item.word}</span>
                {isMatched && <Check className="w-4 h-4 text-emerald-600 mr-auto" />}
              </button>
            );
          })}
        </div>

        {/* Letters Column */}
        <div className="space-y-3">
          <span className="block text-xs font-black text-slate-500 mb-2">اضغط على الحرف المطابق:</span>
          {lettersShuffled.map(item => {
            const isMatched = matchedPairs.includes(item.id);
            const isSelected = selectedLetter === item.id;
            return (
              <button
                key={item.id}
                disabled={isMatched}
                onClick={() => handleLetterClick(item.id)}
                className={`w-full p-3 sm:p-4 rounded-2xl border-2 flex items-center justify-center transition-all cursor-pointer ${
                  isMatched
                    ? 'bg-emerald-100/70 border-emerald-400 opacity-60 cursor-default'
                    : isSelected
                    ? 'bg-amber-100 border-amber-500 ring-2 ring-amber-400 scale-102'
                    : 'bg-white border-amber-200 hover:border-amber-400 hover:bg-amber-50/50'
                }`}
              >
                <span className="text-3xl sm:text-4xl font-black text-amber-950">{item.char}</span>
                <span className="text-xs text-slate-500 font-bold mr-2">({item.name})</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

/* =========================================================
   3. GAME: الحرف المختبئ (Hidden / Missing Letter)
   ========================================================= */
const GameHiddenLetter: React.FC<{
  alphabet: LetterData[];
  difficulty: DifficultyLevel;
  onSuccess: (msg: string, stars: number) => void;
  onFinish: () => void;
}> = ({ alphabet, difficulty, onSuccess, onFinish }) => {
  const [round, setRound] = useState(1);
  const [score, setScore] = useState(0);

  // Pool of rich words with missing initial/medial letter
  const challenges = useMemo(() => [
    { wordWithBlank: 'ـَمَل', correctLetter: 'ج', fullWord: 'جَمَل', emoji: '🐪', options: ['جـ', 'حـ', 'خـ'] },
    { wordWithBlank: 'ـَبْت', correctLetter: 'ب', fullWord: 'بَيْت', emoji: '🏠', options: ['بـ', 'تـ', 'ثـ'] },
    { wordWithBlank: 'ـُفَّاح', correctLetter: 'ت', fullWord: 'تُفَّاح', emoji: '🍎', options: ['تـ', 'بـ', 'نـ'] },
    { wordWithBlank: 'ـَنْجَر', correctLetter: 'خ', fullWord: 'خَنْجَر', emoji: '🗡️', options: ['خـ', 'جـ', 'حـ'] },
    { wordWithBlank: 'ـَلَج', correctLetter: 'ف', fullWord: 'فَلَج', emoji: '💧', options: ['فـ', 'قـ', 'كـ'] },
    { wordWithBlank: 'ـَلْعَة', correctLetter: 'ق', fullWord: 'قَلْعَة', emoji: '🏰', options: ['قـ', 'فـ', 'عـ'] },
    { wordWithBlank: 'ـَخْلَة', correctLetter: 'ن', fullWord: 'نَخْلَة', emoji: '🌴', options: ['نـ', 'بـ', 'تـ'] },
    { wordWithBlank: 'ـَمَكَة', correctLetter: 'س', fullWord: 'سَمَكَة', emoji: '🐟', options: ['سـ', 'شـ', 'صـ'] }
  ], []);

  const current = challenges[(round - 1) % challenges.length];

  const handlePick = (chosen: string) => {
    audioEngine.playPopSound();
    if (chosen.includes(current.correctLetter)) {
      setScore(s => s + 1);
      onSuccess(`أحسنت! الحرف الناقص هو [${chosen}] في كلمة ${current.fullWord}!`, 5);
      if (round < challenges.length) {
        setRound(r => r + 1);
      } else {
        audioEngine.playApplauseSound();
        onFinish();
      }
    } else {
      audioEngine.playTryAgainSound();
      audioEngine.speakArabic('حاول مرة أخرى، انتبه للنقاط وموضع الحرف!');
    }
  };

  return (
    <div className="space-y-6 max-w-xl mx-auto text-center">
      <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-slate-600 border-b border-amber-100 pb-3">
        <span>السؤال {round} من {challenges.length}</span>
        <div className="flex items-center gap-1.5 text-amber-700">
          <Star className="w-4 h-4 fill-amber-400 text-amber-500" />
          <span>النقاط: {score}</span>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-xl sm:text-2xl font-black text-amber-950">
          اكتشف الحرف الناقص لتكتمل الكلمة!
        </h3>
        <p className="text-xs sm:text-sm text-slate-600">
          انظر إلى الصورة واستنتج الحرف المختبئ
        </p>
      </div>

      {/* Picture & Word Display */}
      <div className="bg-amber-50/80 border-2 border-amber-300 rounded-3xl p-6 sm:p-8 space-y-4">
        <div className="text-6xl sm:text-7xl">{current.emoji}</div>
        
        {/* Word with Missing Letter Slot */}
        <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-2xl border-2 border-amber-400 shadow-xs">
          <span className="w-12 h-12 rounded-xl border-2 border-dashed border-rose-400 bg-rose-50 flex items-center justify-center text-rose-500 font-black text-2xl animate-pulse">
            ؟
          </span>
          <span className="text-3xl sm:text-4xl font-black text-slate-800 tracking-wider">
            {current.wordWithBlank}
          </span>
        </div>
      </div>

      {/* Options */}
      <div className="grid grid-cols-3 gap-4 pt-2">
        {current.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => handlePick(opt)}
            className="p-5 rounded-2xl bg-white border-2 border-amber-300 hover:border-amber-500 hover:bg-amber-100 text-4xl sm:text-5xl font-black text-amber-950 shadow-xs hover:scale-105 transition-all cursor-pointer"
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
};

/* =========================================================
   4. GAME: قطار الحروف (Alphabet Train)
   ========================================================= */
const GameLetterTrain: React.FC<{
  alphabet: LetterData[];
  difficulty: DifficultyLevel;
  onSuccess: (msg: string, stars: number) => void;
  onFinish: () => void;
}> = ({ alphabet, difficulty, onSuccess, onFinish }) => {
  // Subset: 5 letters sequence with 2 missing slots
  const [startIndex, setStartIndex] = useState(0);
  const [trainSlots, setTrainSlots] = useState<{ id: number; char: string; isMissing: boolean; filledChar?: string }[]>([]);
  const [availableCarriages, setAvailableCarriages] = useState<string[]>([]);

  const setupTrain = (index: number) => {
    const lettersSlice = alphabet.slice(index, index + 5);
    // Pick 2 random missing
    const missingIndices = [1, 3]; // e.g. slot 2 and slot 4

    const slots = lettersSlice.map((l, i) => ({
      id: l.id,
      char: l.char,
      isMissing: missingIndices.includes(i),
      filledChar: undefined
    }));

    setTrainSlots(slots);

    // Carriages to choose from (shuffled)
    const needed = missingIndices.map(i => lettersSlice[i].char);
    // Add one distractor
    const distractor = alphabet[(index + 6) % alphabet.length].char;
    const pool = [...needed, distractor].sort(() => Math.random() - 0.5);
    setAvailableCarriages(pool);
  };

  useEffect(() => {
    setupTrain(startIndex);
  }, [startIndex, difficulty]);

  const handlePlaceCarriage = (char: string) => {
    audioEngine.playPopSound();
    // Find the first unfilled missing slot
    const slotIdx = trainSlots.findIndex(s => s.isMissing && !s.filledChar);
    if (slotIdx === -1) return;

    const targetSlot = trainSlots[slotIdx];
    if (targetSlot.char === char) {
      // Correct!
      const updated = [...trainSlots];
      updated[slotIdx] = { ...targetSlot, filledChar: char };
      setTrainSlots(updated);
      setAvailableCarriages(c => c.filter((item, idx) => idx !== c.indexOf(char)));

      onSuccess(`أحسنت! وضعت حرف [${char}] في مقطورته الصحيحة!`, 5);

      // Check if all filled
      if (updated.every(s => !s.isMissing || s.filledChar)) {
        audioEngine.playApplauseSound();
        audioEngine.speakArabic('قطار الحروف ينطلق بنجاح! طوووط طوووط!');
        setTimeout(() => {
          if (startIndex + 5 < alphabet.length) {
            setStartIndex(s => s + 3);
          } else {
            setStartIndex(0);
            onFinish();
          }
        }, 1500);
      }
    } else {
      audioEngine.playTryAgainSound();
      audioEngine.speakArabic('ليس هذا الحرف، فكر بالترتيب الهجائي الصحيح!');
    }
  };

  return (
    <div className="space-y-6 max-w-3xl mx-auto text-center">
      <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-slate-600 border-b border-amber-100 pb-3">
        <span>قطار الحروف الهجائية 🚂</span>
        <button
          onClick={() => setupTrain(startIndex)}
          className="flex items-center gap-1 text-amber-700 hover:text-amber-900 cursor-pointer"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>إعادة المحاولة</span>
        </button>
      </div>

      <div className="space-y-1">
        <h3 className="text-xl sm:text-2xl font-black text-amber-950">
          ساعد القبطان في ترتيب مقطورات القطار!
        </h3>
        <p className="text-xs sm:text-sm text-slate-600">
          اختر الحرف المناسب بالترتيب وضعه في العربة المفقودة
        </p>
      </div>

      {/* Train Visual Display */}
      <div className="bg-gradient-to-r from-sky-100 via-amber-50 to-orange-100 border-2 border-sky-300 rounded-3xl p-6 overflow-x-auto shadow-inner">
        <div className="flex items-center justify-center gap-2 sm:gap-4 min-w-[500px]">
          
          {/* Train Engine Head */}
          <div className="w-16 h-20 sm:w-20 sm:h-24 bg-rose-600 text-white rounded-2xl flex flex-col items-center justify-center shadow-md shrink-0">
            <span className="text-2xl sm:text-3xl">🚂</span>
            <span className="text-[10px] font-black mt-1">القطار</span>
          </div>

          {/* Connected Carriages */}
          {trainSlots.map((slot, i) => (
            <div
              key={slot.id}
              className={`w-14 h-20 sm:w-18 sm:h-24 rounded-2xl border-3 flex flex-col items-center justify-center shadow-xs shrink-0 relative transition-all ${
                slot.isMissing && !slot.filledChar
                  ? 'border-dashed border-amber-500 bg-amber-100/60 animate-pulse'
                  : 'border-amber-400 bg-white'
              }`}
            >
              <div className="text-2xl sm:text-3xl font-black text-amber-950">
                {slot.filledChar ? slot.filledChar : slot.isMissing ? '؟' : slot.char}
              </div>
              <span className="text-[10px] text-slate-500 font-bold mt-1">عربة {i + 1}</span>

              {/* Wheel graphics */}
              <div className="absolute -bottom-2 flex gap-3">
                <span className="w-3 h-3 rounded-full bg-slate-800 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-slate-800 inline-block"></span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Carriages Pick Strip */}
      <div className="space-y-3 pt-3">
        <span className="text-xs font-black text-slate-600">اضغط على المقطورة لتضعها في القطار:</span>
        <div className="flex items-center justify-center gap-3">
          {availableCarriages.map((char, idx) => (
            <button
              key={idx}
              onClick={() => handlePlaceCarriage(char)}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white text-3xl sm:text-4xl font-black shadow-md hover:scale-110 active:scale-95 transition-all cursor-pointer flex items-center justify-center"
            >
              {char}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

/* =========================================================
   5. GAME: كنز المعرفة (Treasure Hunt Quest)
   ========================================================= */
const GameTreasureHunt: React.FC<{
  alphabet: LetterData[];
  difficulty: DifficultyLevel;
  onSuccess: (msg: string, stars: number) => void;
  onFinish: () => void;
}> = ({ alphabet, difficulty, onSuccess, onFinish }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [unlockedChests, setUnlockedChests] = useState<number[]>([]);

  const questions = useMemo(() => [
    {
      q: 'ما هو أول حرف في اسم وطننا الغالي: عُـمَان؟',
      options: ['ع', 'غ', 'عـ'],
      correct: 'ع',
      hint: 'حرف العين!'
    },
    {
      q: 'ما هي حركة الحرف في كلمة: بُـرْتُـقَال؟',
      options: ['ضَمَّة (ـُ)', 'فَتْحَة (ـَ)', 'كَسْرَة (ـِ)'],
      correct: 'ضَمَّة (ـُ)',
      hint: 'نضم الشفتين عند نطقه!'
    },
    {
      q: 'أي من هذه الكلمات تبدأ بحرف النون المبارك؟',
      options: ['نَخْلَة 🌴', 'سَفِينَة ⛵', 'جَبَل ⛰️'],
      correct: 'نَخْلَة 🌴',
      hint: 'شجرة التمور العمانية!'
    },
    {
      q: 'كم نقطة توجد في حرف الثاء (ث)؟',
      options: ['3 نقاط في الأعلى', 'نقطتان', 'نقطة واحدة في الأسفل'],
      correct: '3 نقاط في الأعلى',
      hint: 'ثلاث نقاط كالهرم!'
    },
    {
      q: 'رمز عمان الوطني الأصيل يبدأ بحرف الخاء، ما هو؟',
      options: ['خَنْجَر 🗡️', 'قَلْعَة 🏰', 'فَلَج 💧'],
      correct: 'خَنْجَر 🗡️',
      hint: 'الخنجر العماني الفاخر!'
    }
  ], []);

  const handleAnswer = (option: string) => {
    audioEngine.playPopSound();
    const curr = questions[currentStep];
    if (option === curr.correct) {
      const newUnlocked = [...unlockedChests, currentStep];
      setUnlockedChests(newUnlocked);
      onSuccess(`إجابة مذهلة! فتحت كنز الجزيرة رقم ${currentStep + 1}!`, 10);

      if (currentStep < questions.length - 1) {
        setTimeout(() => {
          setCurrentStep(s => s + 1);
        }, 1200);
      } else {
        audioEngine.playApplauseSound();
        audioEngine.speakArabic('مبارك يا بطل! لقد جمعت كافة كنوز الحروف وحصلت على وسام الكنز الذهبي!');
        onFinish();
      }
    } else {
      audioEngine.playTryAgainSound();
      audioEngine.speakArabic(`حاول مرة أخرى: ${curr.hint}`);
    }
  };

  const currentQ = questions[currentStep];

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      {/* Header and Island Map */}
      <div className="relative rounded-3xl overflow-hidden border-2 border-amber-300 shadow-md">
        <div className="h-44 sm:h-52 w-full relative">
          <img
            src="/src/assets/images/treasure_chest_island_1793367311589.jpg"
            alt="جزيرة كنز الحروف"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-4 text-white">
            <span className="text-xs font-bold text-amber-300">جزيرة كنز الحروف العمانية</span>
            <h3 className="text-xl sm:text-2xl font-black">
              أجب عن السؤال وافتح صناديق الجواهر! ({unlockedChests.length} من {questions.length})
            </h3>
          </div>
        </div>

        {/* 5 Chest Nodes */}
        <div className="bg-amber-100/80 p-3 flex items-center justify-around">
          {questions.map((_, idx) => (
            <div
              key={idx}
              className={`flex items-center gap-1 text-xs font-black ${
                unlockedChests.includes(idx)
                  ? 'text-amber-800'
                  : idx === currentStep
                  ? 'text-rose-600 animate-bounce'
                  : 'text-slate-400'
              }`}
            >
              <span>{unlockedChests.includes(idx) ? '🎁 مفتوح' : '🔒 كنز ' + (idx + 1)}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Current Question Card */}
      <div className="bg-white border-2 border-amber-300 rounded-3xl p-6 text-center space-y-4 shadow-sm">
        <span className="inline-block text-xs font-black text-amber-800 bg-amber-100 px-3 py-1 rounded-full">
          اللغز رقم {currentStep + 1}
        </span>

        <h4 className="text-lg sm:text-2xl font-black text-amber-950">
          {currentQ.q}
        </h4>

        {/* Options */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          {currentQ.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(opt)}
              className="p-4 rounded-2xl bg-amber-50 hover:bg-amber-100 border-2 border-amber-300 hover:border-amber-500 text-base sm:text-lg font-black text-amber-950 shadow-2xs hover:scale-102 transition-all cursor-pointer"
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
