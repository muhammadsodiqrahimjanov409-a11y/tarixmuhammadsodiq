import React from 'react';
import { Volume2, VolumeX, BookOpen, Compass, Award } from 'lucide-react';
import { StudentProfile } from '../types';

interface HeaderProps {
  student: StudentProfile | null;
  currentStep: 'register' | 'topic' | 'quiz' | 'result';
  topicTitle?: string;
  soundEnabled: boolean;
  onToggleSound: () => void;
  onResetStudent: () => void;
  onGoToTopics: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  student,
  currentStep,
  soundEnabled,
  onToggleSound,
  onResetStudent,
  onGoToTopics,
}) => {
  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-amber-900/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <div 
          onClick={student ? onGoToTopics : undefined} 
          className={`flex items-center gap-2.5 ${student ? 'cursor-pointer group' : ''}`}
        >
          <div className="w-9 h-9 rounded-lg bg-amber-800 text-amber-50 flex items-center justify-center font-bold shadow-xs">
            <BookOpen className="w-5 h-5 text-amber-200" />
          </div>
          <span className="text-xl font-bold tracking-tight text-amber-950 font-serif">
            Tarix Ustozim
          </span>
        </div>

        {/* Zone 2: Navigation / Step Indicator */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-amber-900/70">
          <span className={`transition-colors ${currentStep === 'register' ? 'text-amber-900 font-semibold' : 'text-slate-500'}`}>
            1. Ro‘yxatdan o‘tish
          </span>
          <span aria-hidden="true" className="text-amber-300">·</span>
          <span 
            onClick={student && currentStep !== 'quiz' ? onGoToTopics : undefined}
            className={`transition-colors ${currentStep === 'topic' ? 'text-amber-900 font-semibold' : 'text-slate-500'} ${student && currentStep !== 'quiz' ? 'hover:text-amber-900 cursor-pointer' : ''}`}
          >
            2. Mavzuni tanlash
          </span>
          <span aria-hidden="true" className="text-amber-300">·</span>
          <span className={`transition-colors ${currentStep === 'quiz' ? 'text-amber-900 font-semibold' : 'text-slate-500'}`}>
            3. Test sinovi (10 savol)
          </span>
          <span aria-hidden="true" className="text-amber-300">·</span>
          <span className={`transition-colors ${currentStep === 'result' ? 'text-amber-900 font-semibold' : 'text-slate-500'}`}>
            4. Natijalar
          </span>
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={onToggleSound}
            aria-label={soundEnabled ? "Ovozni o'chirish" : "Ovozni yoqish"}
            className="p-2 rounded-lg text-amber-900/80 hover:bg-amber-100/60 transition-colors focus-visible:outline-2 focus-visible:outline-amber-600"
            title={soundEnabled ? "Ovoz yoqilgan" : "Ovoz o'chirilgan"}
          >
            {soundEnabled ? (
              <Volume2 className="w-5 h-5 text-amber-800" />
            ) : (
              <VolumeX className="w-5 h-5 text-slate-400" />
            )}
          </button>

          {student && (
            <div className="flex items-center gap-2 pl-2 border-l border-amber-900/10">
              <span className="text-xs font-semibold text-amber-950 hidden sm:inline whitespace-nowrap truncate max-w-[140px]">
                {student.ism} {student.familiya}
              </span>
              <button
                type="button"
                onClick={onResetStudent}
                className="text-xs px-2.5 py-1 text-amber-800 hover:text-amber-950 font-medium hover:bg-amber-100/80 rounded-md transition-colors whitespace-nowrap"
                title="Profilni o'zgartirish"
              >
                Chiqish
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
