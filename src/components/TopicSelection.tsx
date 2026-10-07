import React from 'react';
import { Flame, Landmark, Shield, Compass, Sparkles, BookOpen, ArrowRight, Clock, Award } from 'lucide-react';
import { StudentProfile, TopicId, TopicInfo } from '../types';
import { TOPICS } from '../data/questions';

interface TopicSelectionProps {
  student: StudentProfile;
  onSelectTopic: (topicId: TopicId) => void;
  onBackToProfile: () => void;
}

export const TopicSelection: React.FC<TopicSelectionProps> = ({
  student,
  onSelectTopic,
  onBackToProfile,
}) => {
  const getTopicIcon = (iconName: string) => {
    switch (iconName) {
      case 'Flame':
        return <Flame className="w-5 h-5 text-amber-600" />;
      case 'Landmark':
        return <Landmark className="w-5 h-5 text-sky-600" />;
      case 'Shield':
        return <Shield className="w-5 h-5 text-red-600" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-emerald-600" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-violet-600" />;
      default:
        return <BookOpen className="w-5 h-5 text-amber-700" />;
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-6 sm:py-8 px-4">
      {/* Student Welcome Card */}
      <div className="bg-white rounded-2xl border border-amber-900/10 p-5 sm:p-6 mb-8 shadow-xs flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-700 mb-1">
            <span>2-Bosqich: Mavzu Tanlovi</span>
            <span>·</span>
            <span>5-Sinf Tarix Fani</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif">
            Salom, {student.ism} {student.familiya}!
          </h1>
          <p className="text-slate-600 text-sm mt-0.5">
            Siz <span className="font-semibold text-amber-900">{student.sinf}</span> o‘quvchisiz. Bilimingizni sinash uchun qiziqarli tarixiy mavzuni tanlang:
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onBackToProfile}
            className="px-3.5 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200/80 rounded-xl transition-colors whitespace-nowrap"
          >
            Ma’lumotlarni o‘zgartirish
          </button>
        </div>
      </div>

      {/* Topics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TOPICS.map((topic) => {
          const isAralash = topic.id === 'aralash';
          return (
            <div
              key={topic.id}
              className={`rounded-2xl border bg-white overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group ${
                isAralash 
                  ? 'border-amber-400/80 ring-2 ring-amber-400/20' 
                  : 'border-amber-900/10 hover:border-amber-700/30'
              }`}
            >
              {/* Topic Image Header */}
              <div className="relative h-44 overflow-hidden bg-slate-100">
                <img
                  src={topic.image}
                  alt={topic.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                
                {/* Badge */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-slate-900 text-xs font-bold px-2.5 py-1 rounded-md shadow-xs flex items-center gap-1.5">
                  {getTopicIcon(topic.icon)}
                  <span>{topic.badge}</span>
                </div>

                {/* Period */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="text-xs text-amber-200 font-medium flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{topic.period}</span>
                  </p>
                </div>
              </div>

              {/* Topic Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 font-serif mb-1 group-hover:text-amber-900 transition-colors">
                    {topic.title}
                  </h3>
                  <p className="text-xs font-semibold text-amber-800 mb-2">
                    {topic.subtitle}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {topic.description}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500">
                    10 ta test savoli
                  </span>
                  <button
                    type="button"
                    onClick={() => onSelectTopic(topic.id)}
                    className="py-2.5 px-4 bg-amber-800 hover:bg-amber-900 text-white text-xs font-bold rounded-xl flex items-center gap-1.5 group-hover:shadow-xs transition-all cursor-pointer whitespace-nowrap"
                  >
                    <span>Testni boshlash</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
