import { Question, ShuffledQuestion, TopicId } from '../types';
import { QUESTIONS_BANK } from '../data/questions';

/**
 * Fisher-Yates array shuffle
 */
export function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Generates 10 randomized questions for the selected topic
 * and shuffles the 4 options for each question.
 */
export function generateQuizQuestions(topicId: TopicId): ShuffledQuestion[] {
  let selectedQuestions: Question[] = [];

  if (topicId === 'aralash') {
    // Pick 2 questions from each specific topic, ensuring broad variety
    const topics: TopicId[] = ['qadimgi_odamlar', 'qadimgi_misr', 'qadimgi_yunoniston', 'qadimgi_rim', 'markaziy_osiyo'];
    for (const t of topics) {
      const topicQuestions = QUESTIONS_BANK.filter(q => q.topicId === t);
      const shuffledTopic = shuffleArray(topicQuestions);
      selectedQuestions.push(...shuffledTopic.slice(0, 2));
    }
    // If fewer than 10 for any reason, pad from all
    if (selectedQuestions.length < 10) {
      const remaining = QUESTIONS_BANK.filter(q => !selectedQuestions.some(sq => sq.id === q.id));
      selectedQuestions.push(...shuffleArray(remaining).slice(0, 10 - selectedQuestions.length));
    }
    selectedQuestions = shuffleArray(selectedQuestions);
  } else {
    const topicPool = QUESTIONS_BANK.filter(q => q.topicId === topicId);
    const shuffledPool = shuffleArray(topicPool);
    // Take 10 questions (or all if pool < 10)
    selectedQuestions = shuffledPool.slice(0, 10);
  }

  // Now shuffle options for each question so correct answers are distributed among A, B, C, D
  return selectedQuestions.map((q): ShuffledQuestion => {
    const originalOptions = q.options;
    const correctText = originalOptions[q.correctIndex];

    const indexedOptions = originalOptions.map((text, idx) => ({ text, isCorrect: idx === q.correctIndex }));
    const shuffledIndexed = shuffleArray(indexedOptions);

    const newOptions = shuffledIndexed.map(item => item.text);
    const newCorrectIndex = shuffledIndexed.findIndex(item => item.isCorrect);

    return {
      id: q.id,
      topicId: q.topicId,
      question: q.question,
      options: newOptions,
      correctOptionIndex: newCorrectIndex,
      explanation: q.explanation,
      historicalPeriod: q.historicalPeriod,
    };
  });
}

/**
 * Calculates grade and encouragement message based on Uzbek educational standards:
 * 90–100% = 5
 * 70–89% = 4
 * 50–69% = 3
 * 0–49% = 2
 */
export function calculateQuizEvaluation(correctCount: number, total: number = 10): {
  percentage: number;
  grade: 5 | 4 | 3 | 2;
  gradeText: string;
  encouragement: string;
  badgeTitle: string;
} {
  const percentage = Math.round((correctCount / total) * 100);
  let grade: 5 | 4 | 3 | 2 = 2;
  let gradeText = "2 (Qoniqarsiz)";
  let encouragement = "Harakat qilishing kerak. Qayg‘urma! Mavzuni darslikdan qayta o‘qib, testni yana bir bor topshirsang, albatta yuqori ball olasan!";
  let badgeTitle = "Yosh izlanuvchi";

  if (percentage >= 90) {
    grade = 5;
    gradeText = "5 (A'lo)";
    encouragement = "Ofarin! Ajoyib natija! Sen haqiqiy yosh tariximassan! Qadimgi dunyo sirlarini juda yaxshi o‘zlashtiribsan. Barakalla!";
    badgeTitle = "Tarix bilimdoni";
  } else if (percentage >= 70) {
    grade = 4;
    gradeText = "4 (Yaxshi)";
    encouragement = "Yaxshi natija! Tarix fanini yaxshi tushunibsan. Yana ozgina diqqat qilsang, keyingi safar eng yuqori 5 bahoga erishasan!";
    badgeTitle = "Qiziquvchan tadqiqotchi";
  } else if (percentage >= 50) {
    grade = 3;
    gradeText = "3 (Qoniqarli)";
    encouragement = "Qoniqarli natija. Savollarning yarmidan ko‘piga to‘g‘ri javob berding. Mavzuni bir karra takrorlab, qayta urinib ko‘r!";
    badgeTitle = "Yosh sayyoh";
  }

  return {
    percentage,
    grade,
    gradeText,
    encouragement,
    badgeTitle
  };
}
