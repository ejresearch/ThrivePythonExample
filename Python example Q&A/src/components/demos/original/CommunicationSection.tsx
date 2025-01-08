import React from 'react';
import { MessageSquare } from 'lucide-react';
import type { QuestionnaireType } from '../../../types';

interface CommunicationSectionProps {
  onSelectType: (type: QuestionnaireType) => void;
}

export function CommunicationSection({ onSelectType }: CommunicationSectionProps) {
  const assessment = {
    type: 'feedback-4-followup' as const,
    title: '4 Questions + Follow-up',
    description: 'Comprehensive feedback assessment with follow-up questions',
  };

  return (
    <div className="p-8 bg-white rounded-2xl shadow-lg">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center p-3 bg-green-100 rounded-full mb-4">
          <MessageSquare className="w-8 h-8 text-green-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Communication Feedback</h2>
        <p className="text-gray-600">Begin your assessment</p>
      </div>

      <div className="flex justify-center">
        <button
          onClick={() => onSelectType(assessment.type)}
          className="bg-white rounded-xl border-2 border-gray-100 p-6 hover:border-green-500 transition-all duration-300 transform hover:-translate-y-1 text-center w-full max-w-md"
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{assessment.title}</h3>
          <p className="text-gray-600 text-sm">{assessment.description}</p>
        </button>
      </div>
    </div>
  );
}