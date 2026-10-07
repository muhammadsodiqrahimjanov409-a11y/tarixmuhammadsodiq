import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { StudentRegister } from './components/StudentRegister';
import { TopicSelection } from './components/TopicSelection';
import { QuizView } from './components/QuizView';
import { ResultView } from './components/ResultView';
import { StudentProfile, TopicId, ShuffledQuestion, AnswerRecord, QuizResult } from './types';
import { TOPICS } from './data/questions';
import { generateQuizQuestions, calculateQuizEvaluation } from './utils/quizHelper';
import { soundManager } from './utils/audio';
import { BookOpen, Compass, Award, ShieldCheck } from 'lucide-react';

export default function App() {
  const [student, setStudent] = useState<StudentProfile | null>(() => {
    try {
      const saved = localStorage.getItem('tarix_ustozim_student');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [currentStep, setCurrentStep] = useState<'register' | 'topic' | 'quiz' | 'result'>('register');
  const [selectedTopicId, setSelectedTopicId] = useState<TopicId | null>(null);
  const [questions, setQuestions] = useState<ShuffledQuestion[]>([]);
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null);
  const [soundEnabled, setSoundEnabled] = useState(true);

  // If student profile is already present on initial load, take them to topic selection
  useEffect(() => {
    if (student && currentStep === 'register') {
      setCurrentStep('topic');
    }
  }, [student]);

  const handleToggleSound = () => {
    const nextVal = !soundEnabled;
    setSoundEnabled(nextVal);
    soundManager.enabled = nextVal;
  };

  // 1-BOSQICH Tugagach:
  const handleRegisterComplete = (profile: StudentProfile) => {
    setStudent(profile);
    try {
      localStorage.setItem('tarix_ustozim_student', JSON.stringify(profile));
    } catch {
      // Ignore storage errors
    }
    setCurrentStep('topic');
  };

  // 2-BOSQICH: Mavzu tanlanganda testni boshlash:
  const handleSelectTopic = (topicId: TopicId) => {
    setSelectedTopicId(topicId);
    // Generate 10 randomized questions with shuffled options
    const newQuestions = generateQuizQuestions(topicId);
    setQuestions(newQuestions);
    setCurrentStep('quiz');
  };

  // 3 & 4-BOSQICH Tugagach (10 ta savol yakunida):
  const handleFinishQuiz = (answers: AnswerRecord[]) => {
    if (!student || !selectedTopicId) return;

    const topicObj = TOPICS.find((t) => t.id === selectedTopicId);
    const correctCount = answers.filter((a) => a.isCorrect).length;
    const incorrectCount = answers.length - correctCount;
    const { percentage, grade, encouragement } = calculateQuizEvaluation(correctCount, answers.length);

    const now = new Date();
    const formattedDate = now.toLocaleDateString('uz-UZ', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    const result: QuizResult = {
      student,
      topicId: selectedTopicId,
      topicTitle: topicObj ? topicObj.title : 'Tarix Fani',
      totalQuestions: answers.length,
      correctCount,
      incorrectCount,
      percentage,
      grade,
      encouragement,
      answers,
      completedAt: formattedDate,
    };

    setQuizResult(result);
    setCurrentStep('result');
  };

  // Testni qayta topshirish (o'sha mavzuni yangi savollar bilan boshlash)
  const handleRetakeQuiz = () => {
    if (!selectedTopicId) return;
    const freshQuestions = generateQuizQuestions(selectedTopicId);
    setQuestions(freshQuestions);
    setQuizResult(null);
    setCurrentStep('quiz');
  };

  // Boshqa mavzuni tanlash
  const handleSelectNewTopic = () => {
    setQuizResult(null);
    setSelectedTopicId(null);
    setCurrentStep('topic');
  };

  // O'quvchi ma'lumotlarini o'zgartirish yoki chiqish
  const handleResetStudent = () => {
    if (window.confirm("Boshqa o'quvchi nomidan kirmoqchimisiz?")) {
      try {
        localStorage.removeItem('tarix_ustozim_student');
      } catch {}
      setStudent(null);
      setSelectedTopicId(null);
      setQuizResult(null);
      setCurrentStep('register');
    }
  };

  const selectedTopic = TOPICS.find((t) => t.id === selectedTopicId);

  return (
    <div className="min-h-screen flex flex-col bg-amber-50/30 text-slate-900 font-sans">
      {/* Universal Top Bar */}
      <Header
        student={student}
        currentStep={currentStep}
        topicTitle={selectedTopic?.title}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
        onResetStudent={handleResetStudent}
        onGoToTopics={() => {
          if (currentStep === 'quiz') {
            if (window.confirm("Test jarayonidan chiqib mavzular ro'yxatiga qaytasizmi?")) {
              setCurrentStep('topic');
            }
          } else {
            setCurrentStep('topic');
          }
        }}
      />

      {/* Main Interactive Stage */}
      <main className="flex-1 pb-16">
        {currentStep === 'register' && (
          <StudentRegister
            initialProfile={student}
            onComplete={handleRegisterComplete}
          />
        )}

        {currentStep === 'topic' && student && (
          <TopicSelection
            student={student}
            onSelectTopic={handleSelectTopic}
            onBackToProfile={() => setCurrentStep('register')}
          />
        )}

        {currentStep === 'quiz' && student && selectedTopic && (
          <QuizView
            student={student}
            topic={selectedTopic}
            questions={questions}
            onFinishQuiz={handleFinishQuiz}
            onExitQuiz={() => setCurrentStep('topic')}
          />
        )}

        {currentStep === 'result' && quizResult && (
          <ResultView
            result={quizResult}
            onRetake={handleRetakeQuiz}
            onSelectNewTopic={handleSelectNewTopic}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-amber-900/10 bg-white/70 py-6 text-xs text-slate-500">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-amber-800" />
            <span className="font-semibold text-slate-800">“Tarix Ustozim”</span>
            <span>— 5-sinf Tarix fani ta’lim loyihasi</span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>O‘zbekiston Respublikasi Xalq ta’limi dasturi asosida</span>
            <span>·</span>
            <span>© 2026</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
