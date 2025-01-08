import React, { useState } from 'react';
import { Brain, Heart, Smile, Moon, Coffee, Flower2, ChevronLeft, ChevronRight } from 'lucide-react';
import { TabType } from '../types';

interface HomePageProps {
  onTabChange: (tab: TabType) => void;
  onSelectDemo: (demo: string) => void;
}

export function HomePage({ onTabChange, onSelectDemo }: HomePageProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const topics = [
    {
      id: 'hobby' as const,
      title: 'Mindfulness Practice',
      description: 'Explore different mindfulness techniques and their impact',
      icon: Brain,
      color: 'blue',
      gradient: 'from-blue-50 to-indigo-50',
      items: ['Mindfulness Assessment']
    },
    {
      id: 'reading' as const,
      title: 'Emotional Awareness',
      description: 'Understand and track your emotional patterns',
      icon: Heart,
      color: 'green',
      gradient: 'from-green-50 to-emerald-50',
      items: ['Emotional Check-in']
    },
    {
      id: 'music' as const,
      title: 'Stress Management',
      description: 'Identify stressors and coping strategies',
      icon: Coffee,
      color: 'purple',
      gradient: 'from-purple-50 to-violet-50',
      items: ['Stress Assessment']
    },
    {
      id: 'gaming' as const,
      title: 'Sleep Patterns',
      description: 'Analyze your sleep habits and quality',
      icon: Moon,
      color: 'teal',
      gradient: 'from-teal-50 to-cyan-50',
      items: ['Sleep Journal']
    },
    {
      id: 'cooking' as const,
      title: 'Mood Tracking',
      description: 'Monitor your daily mood fluctuations',
      icon: Smile,
      color: 'pink',
      gradient: 'from-pink-50 to-rose-50',
      items: ['Mood Assessment']
    },
    {
      id: 'travel' as const,
      title: 'Meditation Journey',
      description: 'Track your meditation practice and progress',
      icon: Flower2,
      color: 'amber',
      gradient: 'from-amber-50 to-yellow-50',
      items: ['Meditation Log']
    }
  ];

  const nextTopic = () => {
    setCurrentIndex((prev) => (prev + 1) % topics.length);
  };

  const prevTopic = () => {
    setCurrentIndex((prev) => (prev - 1 + topics.length) % topics.length);
  };

  const currentTopic = topics[currentIndex];
  const Icon = currentTopic.icon;

  return (
    <div className="max-w-2xl mx-auto relative">
      <button
        onClick={prevTopic}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
      >
        <ChevronLeft className="w-6 h-6 text-gray-600" />
      </button>

      <div className="transform transition-all duration-300">
        <div className={`w-full bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300`}>
          <div className="flex flex-col items-center">
            <div className={`inline-flex items-center justify-center p-4 bg-${currentTopic.color}-100 rounded-full mb-4`}>
              <Icon className={`w-10 h-10 text-${currentTopic.color}-600`} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">{currentTopic.title}</h2>
            <p className="text-gray-600 text-lg max-w-md mx-auto mb-8">{currentTopic.description}</p>
            
            <div className="grid gap-4 w-full">
              {currentTopic.items.map((item) => (
                <button
                  key={item}
                  onClick={() => onSelectDemo(item)}
                  className={`w-full p-4 text-left rounded-lg border-2 border-gray-100 hover:border-${currentTopic.color}-500 transition-all duration-300`}
                >
                  <span className="font-medium text-gray-900">{item}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={nextTopic}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
      >
        <ChevronRight className="w-6 h-6 text-gray-600" />
      </button>

      <div className="flex justify-center mt-8 space-x-2">
        {topics.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? `bg-${currentTopic.color}-600 w-4` : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}