import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Award, CheckCircle2, XCircle, RotateCcw, ArrowRight, FileText, ChevronDown, ChevronUp, Sparkles, BookOpen } from 'lucide-react';
import { QuizResult } from '../types';
import { CertificateModal } from './CertificateModal';

interface ResultViewProps {
  result: QuizResult;
  onRetake: () => void;
  onSelectNewTopic: () => void;
}

export const ResultView: React.FC<ResultViewProps> = ({
  result,
  onRetake,
  onSelectNewTopic,
}) => {
  const [showCertificate, setShowCertificate] = useState(false);
  const [showReview, setShowReview] = useState(false);

  useEffect(() => {
    // Fire celebratory confetti if grade is 5 or 4
    if (result.grade >= 4) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#b45309', '#059669', '#d97706', '#2563eb'],
        });
      } catch {
        // Fallback
      }
    }
  }, [result.grade]);

  const getGradeColor = (grade: number) => {
    switch (grade) {
      case 5:
        return 'text-emerald-700 bg-emerald-50 border-emerald-200';
      case 4:
        return 'text-sky-700 bg-sky-50 border-sky-200';
      case 3:
        return 'text-amber-700 bg-amber-50 border-amber-200';
      default:
        return 'text-rose-700 bg-rose-50 border-rose-200';
    }
  };

  const getGradeName = (grade: number) => {
    switch (grade) {
      case 5:
        return "5 (A'lo)";
      case 4:
        return "4 (Yaxshi)";
      case 3:
        return "3 (Qoniqarli)";
      default:
        return "2 (Qoniqarsiz)";
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-6 sm:py-10 px-4">
      {/* 5-BOSQICH: Asosiy Natijalar Karti */}
      <div className="bg-white rounded-3xl border border-amber-900/10 shadow-sm p-6 sm:p-10 mb-8 overflow-hidden relative">
        {/* Subtle decorative background */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-100/40 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />

        <div className="relative z-10 text-center max-w-2xl mx-auto">
          {/* Stage badge */}
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100/70 px-3 py-1 rounded-md mb-4">
            <Award className="w-3.5 h-3.5 text-amber-800" />
            5-Bosqich: Natijalar Oynasi
          </div>

          {/* Student Name */}
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif mb-1">
            {result.student.ism} {result.student.familiya}
          </h1>
          <p className="text-sm font-semibold text-amber-900 mb-6">
            {result.student.sinf} sinf o‘quvchisi · {result.topicTitle}
          </p>

          {/* Big Grade Emblem */}
          <div className="inline-flex flex-col items-center justify-center p-6 rounded-2xl border mb-6 shadow-xs min-w-[200px] bg-amber-50/60 border-amber-200">
            <span className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-1">
              Yakuniy Baho
            </span>
            <span className="text-6xl font-black font-serif text-amber-950 mb-1">
              {result.grade}
            </span>
            <span className="text-sm font-bold text-amber-800">
              {getGradeName(result.grade)}
            </span>
          </div>

          {/* Encouragement message */}
          <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-900/10 mb-8 text-sm sm:text-base text-amber-950 leading-relaxed font-medium">
            "{result.encouragement}"
          </div>

          {/* 4 Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 mb-8">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center">
              <span className="text-xs text-slate-500 block font-medium mb-1">To‘g‘ri javoblar</span>
              <span className="text-2xl font-black text-emerald-600 flex items-center justify-center gap-1.5">
                <CheckCircle2 className="w-5 h-5" />
                {result.correctCount} ta
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center">
              <span className="text-xs text-slate-500 block font-medium mb-1">Noto‘g‘ri javoblar</span>
              <span className="text-2xl font-black text-rose-500 flex items-center justify-center gap-1.5">
                <XCircle className="w-5 h-5" />
                {result.incorrectCount} ta
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center">
              <span className="text-xs text-slate-500 block font-medium mb-1">Foiz ko‘rsatkichi</span>
              <span className="text-2xl font-black text-amber-800">
                {result.percentage}%
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center">
              <span className="text-xs text-slate-500 block font-medium mb-1">Jami savollar</span>
              <span className="text-2xl font-black text-slate-800">
                {result.totalQuestions} ta
              </span>
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => setShowCertificate(true)}
              className="w-full sm:w-auto py-3 px-6 bg-amber-800 hover:bg-amber-900 text-white font-bold text-sm rounded-xl shadow-xs hover:shadow transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Award className="w-4 h-4 text-amber-200" />
              <span>Faxriy Sertifikatni Ko‘rish</span>
            </button>

            <button
              type="button"
              onClick={onRetake}
              className="w-full sm:w-auto py-3 px-6 bg-slate-100 hover:bg-slate-200/80 text-slate-800 font-bold text-sm rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4 text-slate-600" />
              <span>Testni qayta topshirish</span>
            </button>

            <button
              type="button"
              onClick={onSelectNewTopic}
              className="w-full sm:w-auto py-3 px-6 bg-white hover:bg-amber-50 text-amber-900 border border-amber-900/20 font-bold text-sm rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Boshqa mavzu tanlash</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Review Answers Toggle */}
      <div className="bg-white rounded-2xl border border-amber-900/10 shadow-xs overflow-hidden">
        <button
          type="button"
          onClick={() => setShowReview(!showReview)}
          className="w-full p-5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors cursor-pointer"
        >
          <div className="flex items-center gap-2.5">
            <FileText className="w-5 h-5 text-amber-800" />
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Savollarni va Xatolarni Tahlil Qilish
              </h3>
              <p className="text-xs text-slate-500">
                Barcha 10 ta savol, sizning javoblaringiz va to‘liq tushuntirishlarni ko‘rish
              </p>
            </div>
          </div>
          <div className="p-1 rounded-lg bg-slate-100 text-slate-600">
            {showReview ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </div>
        </button>

        {showReview && (
          <div className="p-5 sm:p-6 border-t border-slate-100 space-y-4 bg-slate-50/50">
            {result.answers.map((item, idx) => {
              const q = item.question;
              const isCorrect = item.isCorrect;
              const chosenText = q.options[item.selectedOptionIndex];
              const correctText = q.options[q.correctOptionIndex];

              return (
                <div
                  key={idx}
                  className={`p-4 sm:p-5 rounded-xl border bg-white shadow-xs ${
                    isCorrect ? 'border-emerald-200' : 'border-rose-200'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <span className="text-xs font-bold text-slate-400">
                      {idx + 1}-savol:
                    </span>
                    <span className={`inline-flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-md ${
                      isCorrect ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'
                    }`}>
                      {isCorrect ? (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5" /> To‘g‘ri
                        </>
                      ) : (
                        <>
                          <XCircle className="w-3.5 h-3.5" /> Noto‘g‘ri
                        </>
                      )}
                    </span>
                  </div>

                  <p className="text-sm font-semibold text-slate-900 mb-3">
                    {q.question}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs mb-3">
                    <div className={`p-2.5 rounded-lg border ${
                      isCorrect ? 'bg-emerald-50/50 border-emerald-200 text-emerald-950' : 'bg-rose-50/50 border-rose-200 text-rose-950'
                    }`}>
                      <span className="font-bold block text-slate-500 mb-0.5">Sizning javobingiz:</span>
                      <span>{chosenText}</span>
                    </div>

                    {!isCorrect && (
                      <div className="p-2.5 rounded-lg border bg-emerald-50/50 border-emerald-200 text-emerald-950">
                        <span className="font-bold block text-slate-500 mb-0.5">To‘g‘ri javob:</span>
                        <span>{correctText}</span>
                      </div>
                    )}
                  </div>

                  <div className="p-2.5 rounded-lg bg-amber-50/60 border border-amber-200/50 text-xs text-amber-950">
                    <strong>Tushuntirish:</strong> {q.explanation}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Certificate Modal */}
      {showCertificate && (
        <CertificateModal
          result={result}
          onClose={() => setShowCertificate(false)}
        />
      )}
    </div>
  );
};
