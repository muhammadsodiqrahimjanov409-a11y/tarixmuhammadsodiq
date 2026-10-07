import React from 'react';
import { X, Printer, Award, BookOpen, CheckCircle } from 'lucide-react';
import { QuizResult } from '../types';

interface CertificateModalProps {
  result: QuizResult;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  result,
  onClose,
}) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-3xl w-full shadow-2xl border border-amber-900/20 overflow-hidden relative animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Controls (Hidden in print) */}
        <div className="print:hidden p-4 border-b border-slate-100 flex items-center justify-between bg-amber-50/50">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-900">
            <Award className="w-4 h-4 text-amber-700" />
            <span>Rasmiy Ta’lim Sertifikati</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="px-3.5 py-1.5 bg-amber-800 hover:bg-amber-900 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Chop etish / PDF</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200/50 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Certificate Body */}
        <div className="p-8 sm:p-12 bg-[#fffdf9] relative text-center">
          {/* Certificate Double Border */}
          <div className="absolute inset-4 sm:inset-6 border-4 border-amber-800/80 rounded-lg pointer-events-none" />
          <div className="absolute inset-5 sm:inset-7 border border-amber-600/40 rounded pointer-events-none" />

          {/* Decorative Corner Ornaments */}
          <div className="absolute top-6 left-6 text-amber-800 text-xl font-serif pointer-events-none">❖</div>
          <div className="absolute top-6 right-6 text-amber-800 text-xl font-serif pointer-events-none">❖</div>
          <div className="absolute bottom-6 left-6 text-amber-800 text-xl font-serif pointer-events-none">❖</div>
          <div className="absolute bottom-6 right-6 text-amber-800 text-xl font-serif pointer-events-none">❖</div>

          <div className="relative z-10 py-4 px-2 sm:px-6">
            {/* Header Badge */}
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-amber-900 mb-3 border-b border-amber-800/30 pb-1">
              <BookOpen className="w-4 h-4 text-amber-800" />
              O‘zbekiston Respublikasi Ta’lim Standartlari
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-amber-950 font-serif tracking-tight mb-1">
              FAXRIY YORLIQ
            </h2>
            <p className="text-xs uppercase tracking-widest text-amber-800 font-semibold mb-6">
              Tarix Fani Bo‘yicha Bilimlar Sinovi
            </p>

            <p className="text-sm text-slate-600 mb-2 italic">Ushbu sertifikat tantanali ravishda topshiriladi:</p>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif border-b-2 border-amber-800/40 inline-block px-6 pb-1 mb-2">
              {result.student.ism} {result.student.familiya}
            </h3>

            <p className="text-sm font-semibold text-amber-900 mb-6">
              {result.student.sinf} sinf o‘quvchisi
            </p>

            <p className="text-sm sm:text-base text-slate-700 max-w-xl mx-auto leading-relaxed mb-6">
              5-sinf Tarix fanining <strong className="text-amber-950 font-bold">"{result.topicTitle}"</strong> mavzusi bo‘yicha interaktiv test sinovini muvaffaqiyatli yakunlagani va yuksak bilim namoyish etgani uchun taqdirlanadi.
            </p>

            {/* Score & Grade Display */}
            <div className="inline-flex items-center justify-center gap-6 sm:gap-10 py-3 px-6 bg-amber-50 rounded-xl border border-amber-900/10 mb-8">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-slate-500 block font-semibold">To‘g‘ri javoblar</span>
                <span className="text-xl font-extrabold text-slate-900">{result.correctCount} / {result.totalQuestions}</span>
              </div>
              <div className="w-px h-8 bg-amber-300" />
              <div>
                <span className="text-[11px] uppercase tracking-wider text-slate-500 block font-semibold">O‘zlashtirish</span>
                <span className="text-xl font-extrabold text-amber-800">{result.percentage}%</span>
              </div>
              <div className="w-px h-8 bg-amber-300" />
              <div>
                <span className="text-[11px] uppercase tracking-wider text-slate-500 block font-semibold">Rasmiy Baho</span>
                <span className="text-xl font-extrabold text-emerald-700">{result.grade} ({result.grade === 5 ? "A'lo" : result.grade === 4 ? "Yaxshi" : result.grade === 3 ? "Qoniqarli" : "Qoniqarsiz"})</span>
              </div>
            </div>

            {/* Seal and Signatures */}
            <div className="flex items-center justify-between max-w-lg mx-auto pt-4 text-xs text-slate-600">
              <div className="text-left">
                <p className="font-semibold text-slate-800">Sana:</p>
                <p>{result.completedAt}</p>
              </div>

              {/* Stamp Graphic */}
              <div className="w-20 h-20 rounded-full border-2 border-dashed border-amber-800 flex flex-col items-center justify-center text-amber-900 rotate-[-12deg] p-1 shadow-xs bg-amber-50/50">
                <span className="text-[9px] font-extrabold uppercase tracking-tighter">TARIX USTOZIM</span>
                <CheckCircle className="w-5 h-5 text-amber-800 my-0.5" />
                <span className="text-[8px] font-bold">TASDIQLANGAN</span>
              </div>

              <div className="text-right">
                <p className="font-semibold text-slate-800">Ta’lim Loyihasi:</p>
                <p className="font-serif italic text-amber-900 font-bold">“Tarix Ustozim”</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
