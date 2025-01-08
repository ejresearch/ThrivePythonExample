import React from 'react';
import { Heart } from 'lucide-react';
import type { QuestionnaireType } from '../../../types';

interface PSPainSectionProps {
  onSelectType: (type: QuestionnaireType) => void;
}

export function PSPainSection({ onSelectType }: PSPainSectionProps) {
  const assessments = [
    {
      type: 'ps-pain-session1' as const,
      title: 'Session 1: Visualization and Discomfort',
      description: 'Explore visualization techniques for managing discomfort'
    },
    {
      type: 'ps-pain-session2' as const,
      title: 'Session 2: Control Room and Comfort Management',
      description: 'Learn to use the control room method for comfort'
    },
    {
      type: 'ps-pain-session3' as const,
      title: 'Session 3: Movement and Transformation',
      description: 'Work with movement and transformation techniques'
    },
    {
      type: 'ps-pain-synthesis' as const,
      title: 'Synthesis Across Sessions',
      description: 'Reflect on your journey and integrate learning'
    }
  ];

  return (
    <div className="p-8 bg-white rounded-2xl shadow-lg">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center p-3 bg-red-100 rounded-full mb-4">
          <Heart className="w-8 h-8 text-red-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">PS Pain Process</h2>
        <p className="text-gray-600">Select your session</p>
      </div>

      <div className="grid gap-4">
        {assessments.map((assessment) => (
          <button
            key={assessment.type}
            onClick={() => onSelectType(assessment.type)}
            className="bg-white rounded-xl border-2 border-gray-100 p-6 hover:border-red-500 transition-all duration-300 transform hover:-translate-y-1 text-left w-full"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{assessment.title}</h3>
            <p className="text-gray-600 text-sm">{assessment.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
}