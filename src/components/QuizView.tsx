import React, { useState } from 'react';
import { CheckCircle2, XCircle, ArrowRight, Lightbulb, Clock, RotateCcw, HelpCircle } from 'lucide-react';
import { ShuffledQuestion, AnswerRecord, StudentProfile, TopicInfo } from '../types';
import { soundManager } from '../utils/audio';

interface QuizViewProps {
  student: StudentProfile;
  topic: TopicInfo;
  questions: ShuffledQuestion[];
  onFinishQuiz: (answers: AnswerRecord[]) => void;
  onExitQuiz: () => void;
}

const OPTION_LETTERS = ['A', 'B', 'C', 'D'];

export const QuizView: React.FC<QuizViewProps> = ({
  student,
  topic,
  questions,
  onFinishQuiz,
  onExitQuiz,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);

  const currentQuestion = questions[currentIndex];
  const totalQuestions = questions.length;
  const isLastQuestion = currentIndex === totalQuestions - 1;

  // Handle clicking an option
  const handleSelectOption = (index: number) => {
    if (isSubmitted) return; // Prevent changing after answered
    setSelectedOption(index);
    setIsSubmitted(true);

    const isCorrect = index === currentQuestion.correctOptionIndex;
    if (isCorrect) {
      soundManager.playCorrect();
    } else {
      soundManager.playIncorrect();
    }

    const newRecord: AnswerRecord = {
      question: currentQuestion,
      selectedOptionIndex: index,
      isCorrect,
    };
    setAnswers((prev) => [...prev, newRecord]);
  };

  // Move to next question or complete
  const handleNext = () => {
    if (!isSubmitted) return;

    if (isLastQuestion) {
      soundManager.playFanfare();
      onFinishQuiz(answers);
    } else {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsSubmitted(false);
    }
  };

  const correctAnswersCount = answers.filter((a) => a.isCorrect).length;

  return (
    <div className="max-w-3xl mx-auto py-6 sm:py-10 px-4">
      {/* Quiz Top Status Bar */}
      <div className="bg-white rounded-2xl border border-amber-900/10 p-4 sm:p-5 mb-6 shadow-xs">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
              {topic.title}
            </span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span className="text-xs text-slate-500 font-medium">
              {student.ism} {student.familiya} ({student.sinf})
            </span>
          </div>
          <button
            type="button"
            onClick={() => {
              if (window.confirm("Testni to'xtatib, mavzular ro'yxatiga qaytmoqchimisiz?")) {
                onExitQuiz();
              }
            }}
            className="text-xs text-slate-400 hover:text-slate-700 transition-colors"
          >
            Chiqish
          </button>
        </div>

        {/* Progress Bar & Counter */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
            <span>Savol {currentIndex + 1} / {totalQuestions}</span>
            <span className="tabular-nums text-amber-900">
              To‘g‘ri javoblar: {correctAnswersCount} ta
            </span>
          </div>
          <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-amber-700 rounded-full transition-all duration-300"
              style={{ width: `${((currentIndex + (isSubmitted ? 1 : 0)) / totalQuestions) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Main Question Card */}
      <div className="bg-white rounded-2xl border border-amber-900/10 p-6 sm:p-8 shadow-xs mb-6">
        {/* Question Header */}
        <div className="flex items-center justify-between mb-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200/50">
            <HelpCircle className="w-3.5 h-3.5" />
            {currentQuestion.historicalPeriod || 'Tarixiy savol'}
          </span>
          <span className="text-xs font-medium text-slate-400">
            {currentIndex + 1}-savol
          </span>
        </div>

        {/* Question Text */}
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug mb-6 text-balance">
          {currentQuestion.question}
        </h2>

        {/* 4 Options (A, B, C, D) */}
        <div className="space-y-3.5">
          {currentQuestion.options.map((optionText, index) => {
            const letter = OPTION_LETTERS[index];
            const isCorrectOption = index === currentQuestion.correctOptionIndex;
            const isChosen = selectedOption === index;

            // Compute styling based on whether answer has been submitted
            let buttonStyles = "border-slate-200 bg-slate-50/60 hover:bg-amber-50/50 hover:border-amber-300 text-slate-800";
            let badgeStyles = "bg-slate-200 text-slate-700";

            if (isSubmitted) {
              if (isCorrectOption) {
                buttonStyles = "border-emerald-500 bg-emerald-50/90 text-emerald-950 ring-2 ring-emerald-500/20";
                badgeStyles = "bg-emerald-600 text-white font-bold";
              } else if (isChosen && !isCorrectOption) {
                buttonStyles = "border-rose-400 bg-rose-50 text-rose-950 ring-2 ring-rose-400/20";
                badgeStyles = "bg-rose-500 text-white font-bold";
              } else {
                buttonStyles = "border-slate-200 bg-slate-50/40 text-slate-400 opacity-60";
                badgeStyles = "bg-slate-100 text-slate-400";
              }
            }

            return (
              <button
                key={index}
                type="button"
                disabled={isSubmitted}
                onClick={() => handleSelectOption(index)}
                className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between gap-4 cursor-pointer disabled:cursor-default ${buttonStyles}`}
              >
                <div className="flex items-center gap-3.5 flex-1 min-w-0">
                  <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold shrink-0 transition-colors ${badgeStyles}`}>
                    {letter}
                  </span>
                  <span className="text-base font-medium leading-relaxed">
                    {optionText}
                  </span>
                </div>

                {isSubmitted && (
                  <div className="shrink-0">
                    {isCorrectOption ? (
                      <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                    ) : isChosen ? (
                      <XCircle className="w-6 h-6 text-rose-500" />
                    ) : null}
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* 4-BOSQICH: Immediate Feedback & Explanation Box */}
        {isSubmitted && (
          <div className="mt-6 pt-5 border-t border-slate-100 animate-in fade-in duration-200">
            {selectedOption === currentQuestion.correctOptionIndex ? (
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
                <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm mb-1">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>To‘g‘ri javob! Barakalla!</span>
                </div>
                <p className="text-emerald-950 text-sm leading-relaxed pl-7">
                  {currentQuestion.explanation}
                </p>
              </div>
            ) : (
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-300">
                <div className="flex items-center gap-2 text-amber-950 font-bold text-sm mb-1">
                  <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                  <span>Noto‘g‘ri javob!</span>
                </div>
                <p className="text-amber-950 text-sm mb-2 pl-7">
                  To‘g‘ri javob: <strong className="text-emerald-800 underline">{OPTION_LETTERS[currentQuestion.correctOptionIndex]}) {currentQuestion.options[currentQuestion.correctOptionIndex]}</strong>
                </p>
                <div className="flex items-start gap-2 pl-7 text-xs text-amber-900/90 bg-amber-100/50 p-2.5 rounded-lg border border-amber-200/50">
                  <Lightbulb className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <span><strong>Tushuntirish:</strong> {currentQuestion.explanation}</span>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Action: Next Question Button */}
      <div className="flex justify-end">
        {isSubmitted ? (
          <button
            type="button"
            onClick={handleNext}
            className="w-full sm:w-auto py-3.5 px-8 bg-amber-800 hover:bg-amber-900 text-white font-bold text-base rounded-xl shadow-xs hover:shadow transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>{isLastQuestion ? "Natijalarni ko‘rish" : "Keyingi savolga o‘tish"}</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        ) : (
          <p className="text-xs text-slate-400 text-center sm:text-right w-full">
            Davom etish uchun variantlardan birini tanlang
          </p>
        )}
      </div>
    </div>
  );
};
