import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-16 bg-white border-t border-amber-200/90 py-8 px-4 sm:px-6 lg:px-8 text-center text-slate-600">
      <div className="max-w-4xl mx-auto space-y-4">
        
        {/* Prominent Designer / Educator Attribution */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-2xl bg-amber-50 border-2 border-amber-300 text-amber-950 font-black text-sm sm:text-base shadow-2xs">
          <Sparkles className="w-4 h-4 text-amber-600 fill-amber-400" />
          <span>تصميم وإعداد: مريم العامري</span>
        </div>

        <p className="text-xs sm:text-sm text-slate-500 font-medium">
          موقع تعليمي إلكتروني تفاعلي متكامل مخصص لطلاب الصف الأول الأساسي · سلطنة عُمان 🇴🇲
        </p>

        <div className="pt-2 text-[11px] text-slate-400 font-medium flex items-center justify-center gap-1">
          <span>صنع بكل</span>
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
          <span>لأطفالنا أبطال المستقبل في سلطنة عُمان</span>
        </div>

      </div>
    </footer>
  );
};
