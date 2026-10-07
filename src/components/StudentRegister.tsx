import React, { useState } from 'react';
import { BookOpen, User, GraduationCap, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { StudentProfile } from '../types';

interface StudentRegisterProps {
  onComplete: (profile: StudentProfile) => void;
  initialProfile?: StudentProfile | null;
}

const AVATARS = [
  { id: 'scholar', label: 'Tadqiqotchi', emoji: '🧑‍🎓', desc: 'Kitobxon o‘quvchi' },
  { id: 'explorer', label: 'Sayyoh', emoji: '🧭', desc: 'Sayohatlar ishqibozi' },
  { id: 'leader', label: 'Qahramon', emoji: '🛡️', desc: 'Jasur sarkarda' },
  { id: 'philosopher', label: 'Donishmand', emoji: '📜', desc: 'Qadimgi mutafakkir' },
];

const PRESET_CLASSES = ['5-A', '5-B', '5-V', '5-G', '5-D', '5-E'];

export const StudentRegister: React.FC<StudentRegisterProps> = ({
  onComplete,
  initialProfile,
}) => {
  const [ism, setIsm] = useState(initialProfile?.ism || '');
  const [familiya, setFamiliya] = useState(initialProfile?.familiya || '');
  const [sinf, setSinf] = useState(initialProfile?.sinf || '5-A');
  const [customSinf, setCustomSinf] = useState('');
  const [isCustomClass, setIsCustomClass] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState(initialProfile?.avatar || 'scholar');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanIsm = ism.trim();
    const cleanFamiliya = familiya.trim();
    const finalSinf = isCustomClass ? (customSinf.trim() || '5-A') : sinf;

    if (!cleanIsm) {
      setError("Iltimos, ismingizni kiriting!");
      return;
    }
    if (!cleanFamiliya) {
      setError("Iltimos, familiyangizni kiriting!");
      return;
    }

    setError(null);
    onComplete({
      ism: cleanIsm,
      familiya: cleanFamiliya,
      sinf: finalSinf,
      avatar: selectedAvatar,
    });
  };

  return (
    <div className="max-w-4xl mx-auto py-6 sm:py-10 px-4">
      {/* Intro Hero Section */}
      <div className="relative rounded-2xl overflow-hidden bg-amber-950 text-amber-50 mb-8 border border-amber-900/40 shadow-md">
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/hero_history_study_1791352204396.jpg"
            alt="Tarix kitoblari va qadimiy globus"
            className="w-full h-full object-cover opacity-25"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-950 via-amber-950/85 to-amber-900/60" />
        </div>

        <div className="relative z-10 p-6 sm:p-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-300 bg-amber-900/70 border border-amber-700/50 rounded-md px-3 py-1 mb-4">
            <BookOpen className="w-3.5 h-3.5 text-amber-300" />
            5-sinf O‘quvchilari Uchun
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-serif text-white mb-3 text-balance">
            Tarix Ustozim: Qadimgi Dunyo Sirlari
          </h1>
          <p className="text-amber-100/90 text-base sm:text-lg leading-relaxed mb-4">
            O‘tmishning buyuk voqealari, qadimgi Misr piramidalari, ellin qahramonlari, Rim lashkarlari va ota-bobolarimiz jasorati bo‘ylab qiziqarli sinovga xush kelibsiz!
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-amber-200/80 font-medium">
            <span>✨ 10 ta qiziqarli savol</span>
            <span>·</span>
            <span>💡 Har bir javobga tushuntirish</span>
            <span>·</span>
            <span>🏆 Natijada rasmiy baho va sertifikat</span>
          </div>
        </div>
      </div>

      {/* 1-BOSQICH: Anketasi */}
      <div className="bg-white rounded-2xl border border-amber-900/10 shadow-sm p-6 sm:p-8">
        <div className="border-b border-amber-900/10 pb-5 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700">1-Bosqich</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                O‘quvchi Ma’lumotlari
              </h2>
            </div>
            <span className="text-xs bg-amber-100 text-amber-900 font-semibold px-2.5 py-1 rounded-md">
              Bosqich 1 / 4
            </span>
          </div>
          <p className="text-slate-600 text-sm mt-1">
            Test yakunida sizning nomingizga faxriy baho va sertifikat yozilishi uchun ma’lumotlaringizni to‘ldiring.
          </p>
        </div>

        {error && (
          <div className="mb-6 p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-center gap-2">
            <span className="font-bold">Diqqat:</span>
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Ism */}
            <div>
              <label htmlFor="ism" className="block text-sm font-semibold text-slate-800 mb-1.5">
                Ismingiz <span className="text-amber-700">*</span>
              </label>
              <div className="relative">
                <User className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  id="ism"
                  type="text"
                  value={ism}
                  onChange={(e) => setIsm(e.target.value)}
                  placeholder="Masalan: Sardor"
                  className="w-full pl-11 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600 transition-all font-medium"
                />
              </div>
            </div>

            {/* Familiya */}
            <div>
              <label htmlFor="familiya" className="block text-sm font-semibold text-slate-800 mb-1.5">
                Familiyangiz <span className="text-amber-700">*</span>
              </label>
              <div className="relative">
                <User className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  id="familiya"
                  type="text"
                  value={familiya}
                  onChange={(e) => setFamiliya(e.target.value)}
                  placeholder="Masalan: Alimov"
                  className="w-full pl-11 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600 transition-all font-medium"
                />
              </div>
            </div>
          </div>

          {/* Sinf tanlash */}
          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-2 flex items-center justify-between">
              <span>Sinfingiz</span>
              <button
                type="button"
                onClick={() => setIsCustomClass(!isCustomClass)}
                className="text-xs text-amber-700 hover:text-amber-900 font-medium underline"
              >
                {isCustomClass ? "Ro'yxatdan tanlash" : "Boshqa sinf yozish"}
              </button>
            </label>

            {!isCustomClass ? (
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5">
                {PRESET_CLASSES.map((cls) => (
                  <button
                    key={cls}
                    type="button"
                    onClick={() => setSinf(cls)}
                    className={`py-2.5 px-3 rounded-xl border text-center font-bold text-sm transition-all ${
                      sinf === cls
                        ? 'bg-amber-800 text-white border-amber-800 shadow-xs'
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                    }`}
                  >
                    {cls}
                  </button>
                ))}
              </div>
            ) : (
              <div className="relative">
                <GraduationCap className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={customSinf}
                  onChange={(e) => setCustomSinf(e.target.value)}
                  placeholder="Masalan: 5-Z yoki 5-Umumiy"
                  className="w-full pl-11 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600 transition-all font-medium"
                />
              </div>
            )}
          </div>

          {/* Avatar tanlash */}
          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-2">
              Sizga yoqqan timsol (Avatar)
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {AVATARS.map((av) => {
                const isSelected = selectedAvatar === av.id;
                return (
                  <button
                    key={av.id}
                    type="button"
                    onClick={() => setSelectedAvatar(av.id)}
                    className={`p-3 rounded-xl border text-left flex items-center gap-3 transition-all ${
                      isSelected
                        ? 'border-amber-800 bg-amber-50/80 ring-1 ring-amber-800'
                        : 'border-slate-200 bg-slate-50/50 hover:bg-slate-100/70'
                    }`}
                  >
                    <span className="text-2xl">{av.emoji}</span>
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-slate-900 truncate">{av.label}</p>
                      <p className="text-[11px] text-slate-500 truncate">{av.desc}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Davom etish tugmasi */}
          <div className="pt-3">
            <button
              type="submit"
              className="w-full py-3.5 px-6 bg-amber-800 hover:bg-amber-900 active:scale-[0.99] text-white font-bold text-base rounded-xl shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>2-Bosqich: Tarix Mavzusini Tanlash</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
