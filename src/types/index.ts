export type TopicId = 
  | 'qadimgi_odamlar'
  | 'qadimgi_misr'
  | 'qadimgi_yunoniston'
  | 'qadimgi_rim'
  | 'markaziy_osiyo'
  | 'aralash';

export interface StudentProfile {
  ism: string;
  familiya: string;
  sinf: string;
  avatar: string;
}

export interface Question {
  id: string;
  topicId: TopicId;
  question: string;
  options: [string, string, string, string]; // A, B, C, D
  correctIndex: number; // 0, 1, 2, 3
  explanation: string;
  historicalPeriod?: string;
}

export interface ShuffledQuestion {
  id: string;
  topicId: TopicId;
  question: string;
  options: string[];
  correctOptionIndex: number;
  explanation: string;
  historicalPeriod?: string;
}

export interface AnswerRecord {
  question: ShuffledQuestion;
  selectedOptionIndex: number;
  isCorrect: boolean;
}

export interface QuizResult {
  student: StudentProfile;
  topicId: TopicId;
  topicTitle: string;
  totalQuestions: number;
  correctCount: number;
  incorrectCount: number;
  percentage: number;
  grade: 5 | 4 | 3 | 2;
  encouragement: string;
  answers: AnswerRecord[];
  completedAt: string;
}

export interface TopicInfo {
  id: TopicId;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  icon: string;
  period: string;
  badge: string;
}
