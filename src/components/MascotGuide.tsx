import React, { useState } from 'react';
import { Volume2, Sparkles } from 'lucide-react';
import { audioEngine } from '../utils/audio';

interface MascotGuideProps {
  message?: string;
  subMessage?: string;
  onActionClick?: () => void;
  actionText?: string;
  compact?: boolean;
}

export const MascotGuide: React.FC<MascotGuideProps> = ({
  message = 'مرحبًا بك يا بطل! أنا صديقك «سند»، سأرافقك في رحلتنا الشيقة لاكتشاف أسرار الحروف العربية!',
  subMessage = 'اضغط على أي حرف لتسمع صوته وتتعلم كيف تكتبه وتلعب ألعابه الجميلة!',
  onActionClick,
  actionText,
  compact = false
}) => {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleSpeak = async () => {
    setIsSpeaking(true);
    audioEngine.playPopSound();
    await audioEngine.speakArabic(`${message} ${subMessage || ''}`);
    setIsSpeaking(false);
  };

  if (compact) {
    return (
      <div className="flex items-center gap-3 bg-white/90 border border-amber-200 rounded-2xl p-3 shadow-xs">
        <div className="relative shrink-0 w-12 h-12 rounded-full overflow-hidden border-2 border-amber-400 shadow-2xs">
          <img
            src="/src/assets/images/mascot_guide_1793367311123.jpg"
            alt="المرشد الكرتوني سند"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs font-bold text-amber-900">سند المرشد</span>
            <button
              onClick={handleSpeak}
              className={`text-amber-600 hover:text-amber-800 p-1 rounded-full ${isSpeaking ? 'animate-bounce text-amber-700' : ''}`}
              title="استمع إلى سند"
            >
              <Volume2 className="w-4 h-4" />
            </button>
          </div>
          <p className="text-xs text-slate-700 line-clamp-2 leading-relaxed">{message}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex flex-col sm:flex-row items-center gap-4 sm:gap-6 bg-gradient-to-r from-amber-50 via-orange-50/60 to-yellow-50 border-2 border-amber-300/80 rounded-3xl p-4 sm:p-6 shadow-sm">
      {/* Mascot Avatar with gentle float */}
      <div className="relative shrink-0">
        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-amber-400 bg-white shadow-md animate-float-slow">
          <img
            src="/src/assets/images/mascot_guide_1793367311123.jpg"
            alt="المرشد الكرتوني سند في الزي العماني"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <span className="absolute -bottom-2 -left-2 bg-amber-500 text-white text-[11px] font-black px-2.5 py-0.5 rounded-full shadow-xs border border-white">
          سَنَدْ 🇴🇲
        </span>
      </div>

      {/* Speech Bubble */}
      <div className="flex-1 bg-white border border-amber-200/90 rounded-2xl p-4 sm:p-5 relative shadow-xs">
        {/* Tail pointing towards avatar */}
        <div className="hidden sm:block absolute right-[-10px] top-8 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-white"></div>
        
        <div className="flex items-start justify-between gap-3 mb-2">
          <div className="flex items-center gap-1.5 text-amber-800 font-extrabold text-sm sm:text-base">
            <Sparkles className="w-4 h-4 text-amber-500 fill-amber-400" />
            <span>نصيحة سند لليوم:</span>
          </div>

          <button
            onClick={handleSpeak}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold transition-all ${
              isSpeaking
                ? 'bg-amber-500 text-white animate-pulse'
                : 'bg-amber-100/80 text-amber-900 hover:bg-amber-200'
            }`}
          >
            <Volume2 className="w-3.5 h-3.5" />
            <span>{isSpeaking ? 'سند يتحدث...' : 'استمع لسند'}</span>
          </button>
        </div>

        <p className="text-slate-800 font-bold text-sm sm:text-base leading-relaxed mb-1.5">
          {message}
        </p>

        {subMessage && (
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            {subMessage}
          </p>
        )}

        {onActionClick && actionText && (
          <div className="mt-3">
            <button
              onClick={() => {
                audioEngine.playPopSound();
                onActionClick();
              }}
              className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-black text-xs sm:text-sm rounded-xl hover:from-amber-600 hover:to-orange-600 shadow-xs hover:shadow-sm transition-all"
            >
              {actionText}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
