import React, { useState } from 'react';
import { Award, Printer, Star, Sparkles, CheckCircle2, User, Trophy, ShieldCheck } from 'lucide-react';
import { BADGES_LIST } from '../utils/storage';
import { audioEngine } from '../utils/audio';

interface CertificateModalProps {
  studentName: string;
  setStudentName: (name: string) => void;
  masteredCount: number;
  totalStars: number;
  unlockedBadges: string[];
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  studentName,
  setStudentName,
  masteredCount,
  totalStars,
  unlockedBadges
}) => {
  const [isEditingName, setIsEditingName] = useState(false);
  const [tempName, setTempName] = useState(studentName);

  const handleSaveName = () => {
    if (tempName.trim()) {
      setStudentName(tempName.trim());
      setIsEditingName(false);
      audioEngine.playPopSound();
      audioEngine.speakArabic(`أهلاً بك يا ${tempName}! شهادتك جاهزة للطباعة!`);
    }
  };

  const handlePrint = () => {
    audioEngine.playApplauseSound();
    window.print();
  };

  const currentDate = new Date().toLocaleDateString('ar-OM', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="space-y-8 pb-12">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 text-white rounded-3xl p-6 sm:p-8 shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-2">
          <span className="text-xs font-bold bg-white/20 px-3 py-1 rounded-full inline-block">
            📜 لوحة الشرف وشهادة الإنجاز
          </span>
          <h2 className="text-2xl sm:text-4xl font-black">
            شهادة بطل الحروف العربية المتفوق!
          </h2>
          <p className="text-white/90 text-sm max-w-xl">
            شهادة فخرية رسمية تمنح لطلاب الصف الأول بسلطنة عُمان تقديراً لاجتهادهم وإتقانهم الحروف الهجائية الـ28.
          </p>
        </div>

        <button
          onClick={handlePrint}
          className="px-6 py-3.5 rounded-2xl bg-white text-amber-950 font-black text-base flex items-center gap-3 shadow-lg hover:bg-amber-50 hover:scale-105 active:scale-95 transition-all cursor-pointer whitespace-nowrap"
        >
          <Printer className="w-5 h-5 text-amber-600" />
          <span>اطبع الشهادة الآن (A4) 🖨️</span>
        </button>
      </div>

      {/* Student Name Customization Strip */}
      <div className="bg-white border-2 border-amber-300 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 font-bold">
            <User className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs text-slate-500 font-bold block">اسم الطالب / الطالبة على الشهادة:</span>
            {isEditingName ? (
              <div className="flex items-center gap-2 mt-1">
                <input
                  type="text"
                  value={tempName}
                  onChange={(e) => setTempName(e.target.value)}
                  className="px-3 py-1 border-2 border-amber-400 rounded-lg text-sm font-black text-slate-800 focus:outline-none"
                  placeholder="اكتب اسم الطالب..."
                />
                <button
                  onClick={handleSaveName}
                  className="px-3 py-1 bg-amber-500 text-white rounded-lg text-xs font-bold hover:bg-amber-600 cursor-pointer"
                >
                  حفظ
                </button>
              </div>
            ) : (
              <h4 className="text-lg font-black text-amber-950">
                {studentName}
              </h4>
            )}
          </div>
        </div>

        {!isEditingName && (
          <button
            onClick={() => {
              setTempName(studentName);
              setIsEditingName(true);
            }}
            className="text-xs font-bold text-amber-700 hover:text-amber-900 bg-amber-50 hover:bg-amber-100 px-4 py-2 rounded-xl border border-amber-200 transition-colors cursor-pointer"
          >
            تعديل الاسم ✏️
          </button>
        )}
      </div>

      {/* Printable Certificate Canvas (Styled for Screen & High-Res Print) */}
      <div
        id="printable-certificate"
        className="relative bg-amber-50/20 border-8 border-double border-amber-600/90 rounded-3xl p-6 sm:p-12 shadow-xl max-w-4xl mx-auto overflow-hidden text-center my-4"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, #fffdfa 0%, #fff7eb 100%)'
        }}
      >
        {/* Decorative Corner Ornaments */}
        <div className="absolute top-3 right-3 text-amber-600/70 text-2xl font-serif">❖</div>
        <div className="absolute top-3 left-3 text-amber-600/70 text-2xl font-serif">❖</div>
        <div className="absolute bottom-3 right-3 text-amber-600/70 text-2xl font-serif">❖</div>
        <div className="absolute bottom-3 left-3 text-amber-600/70 text-2xl font-serif">❖</div>

        {/* Certificate Header */}
        <div className="space-y-1.5 border-b-2 border-amber-300 pb-5">
          <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-amber-900 px-4">
            <span>سلطنة عُمان 🇴🇲</span>
            <span>وزارة التربية والتعليم</span>
            <span>الصف الأول الأساسي</span>
          </div>

          <div className="pt-3">
            <span className="inline-block text-xs font-black tracking-widest text-amber-700 uppercase bg-amber-100/80 px-4 py-1 rounded-full border border-amber-300">
              « مغامرة الحروف »
            </span>
            <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black text-amber-950 mt-2 font-serif">
              شهادة تفوق وإتقان
            </h3>
            <p className="text-xs sm:text-sm text-amber-800/90 font-medium">
              في حفظ ونطق وكتابة الحروف الهجائية العربية الـ28
            </p>
          </div>
        </div>

        {/* Certificate Body Text */}
        <div className="py-8 sm:py-10 space-y-6 max-w-2xl mx-auto">
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
            تَـشْـهَـدُ إدارة برنامج «مغامرة الحروف» بأنّ البطل/ـة المتميّز/ة:
          </p>

          {/* Student Name */}
          <div className="py-2">
            <span className="inline-block text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-orange-600 to-rose-700 border-b-4 border-amber-400 pb-2 px-6">
              {studentName}
            </span>
          </div>

          <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
            قد أكمل بنجاح واجتهاد استكشاف الحروف الهجائية العربية، وتمكّن من معرفة أصواتها، وأشكالها في مواقع الكلمات المختلفة، وكتابتها بالخط العربي السليم، واجتياز الألعاب التفاعلية بدرجة امتياز.
          </p>

          {/* Metrics Pill on Certificate */}
          <div className="inline-flex items-center gap-6 bg-white/90 border border-amber-300 px-6 py-2.5 rounded-2xl shadow-2xs text-xs sm:text-sm font-black text-amber-950">
            <div className="flex items-center gap-1.5">
              <Star className="w-4 h-4 text-amber-500 fill-amber-400" />
              <span>النجوم الذهبية: {totalStars}</span>
            </div>
            <span className="text-amber-300">|</span>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>الحروف المتقنة: {masteredCount} من 28</span>
            </div>
          </div>
        </div>

        {/* Certificate Footer / Seal & Signatures */}
        <div className="pt-6 border-t-2 border-amber-200/80 flex flex-col sm:flex-row items-center justify-between gap-6 px-4">
          
          {/* Date & Location */}
          <div className="text-center sm:text-right space-y-1">
            <span className="text-xs text-slate-500 font-bold block">تاريخ الإصدار:</span>
            <span className="text-sm font-black text-amber-950 block">{currentDate}</span>
            <span className="text-[11px] text-amber-700 font-medium block">مسقط · سلطنة عُمان</span>
          </div>

          {/* Golden Seal Badge */}
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-amber-400 shadow-md">
            <img
              src="/src/assets/images/certificate_seal_1793367311460.jpg"
              alt="ختم التفوق الذهبي"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Teacher Signature */}
          <div className="text-center sm:text-left space-y-1">
            <span className="text-xs text-slate-500 font-bold block">معلمة المادة ومعدة الموقع:</span>
            <span className="text-base font-black text-amber-950 block border-b-2 border-slate-300 pb-1">
              أ. مريم العامري
            </span>
            <span className="text-[11px] text-emerald-700 font-bold block">معلمة المجال الأول</span>
          </div>

        </div>
      </div>

      {/* Badges Collection Showcase */}
      <div className="bg-white border-2 border-amber-200 rounded-3xl p-6 sm:p-8 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-lg sm:text-xl font-black text-amber-950">
            <Trophy className="w-5 h-5 text-amber-600" />
            <h3>أوسمة وميداليات الشرف التي جمعتها</h3>
          </div>
          <span className="text-xs text-slate-500 font-bold">
            {unlockedBadges.length} من {BADGES_LIST.length} أوسمة مكتملة
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
          {BADGES_LIST.map((b) => {
            const isUnlocked = unlockedBadges.includes(b.id);
            return (
              <div
                key={b.id}
                className={`p-3.5 rounded-2xl border-2 text-center space-y-1.5 transition-all ${
                  isUnlocked
                    ? 'bg-amber-50/70 border-amber-400 shadow-xs'
                    : 'bg-slate-50 border-slate-200 opacity-40'
                }`}
              >
                <div className="text-3xl sm:text-4xl">{b.icon}</div>
                <h5 className="text-xs font-black text-slate-900 leading-tight">
                  {b.title}
                </h5>
                <p className="text-[10px] text-slate-500 line-clamp-2">
                  {b.desc}
                </p>
                {isUnlocked && (
                  <span className="inline-block text-[9px] font-black text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                    مكتمل ✓
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
