import React from 'react';
import { Flower2 } from 'lucide-react';
import type { QuestionnaireType } from '../../../types';

interface AZCSectionProps {
  onSelectType: (type: QuestionnaireType) => void;
}

export function AZCSection({ onSelectType }: AZCSectionProps) {
  const assessments = [
    {
      type: 'azc-session1' as const,
      title: 'Session 1: Introduction to Breath Counting',
      description: 'Explore the fundamentals of breath awareness and counting practice'
    },
    {
      type: 'azc-session2' as const,
      title: 'Session 2: Deepening Practice',
      description: 'Build upon breath counting with enhanced awareness techniques'
    },
    {
      type: 'azc-session3' as const,
      title: 'Session 3: Body and Mind Integration',
      description: 'Connect physical awareness with mental states'
    },
    {
      type: 'azc-comprehensive' as const,
      title: 'Comprehensive Review',
      description: 'Reflect on your overall meditation journey'
    }
  ];

  return (
    <div className="p-8 bg-white rounded-2xl shadow-lg">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center p-3 bg-amber-100 rounded-full mb-4">
          <Flower2 className="w-8 h-8 text-amber-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">AZC Meditation</h2>
        <p className="text-gray-600">Select your meditation session</p>
      </div>

      <div className="grid gap-4">
        {assessments.map((assessment) => (
          <button
            key={assessment.type}
            onClick={() => onSelectType(assessment.type)}
            className="bg-white rounded-xl border-2 border-gray-100 p-6 hover:border-amber-500 transition-all duration-300 transform hover:-translate-y-1 text-left w-full"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{assessment.title}</h3>
            <p className="text-gray-600 text-sm">{assessment.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
}