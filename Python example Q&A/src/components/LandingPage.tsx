import React from 'react';
import { Brain, ListChecks, MessageSquarePlus, ListPlus } from 'lucide-react';
import type { QuestionnaireType } from '../types';

interface LandingPageProps {
  onSelectType: (type: QuestionnaireType) => void;
}

export function LandingPage({ onSelectType }: LandingPageProps) {
  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <Brain className="w-16 h-16 text-blue-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          WOOP Method Assessment
        </h1>
        <p className="text-xl text-gray-600">
          Choose your preferred questionnaire format
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            type: '5-questions' as const,
            title: '5 Questions',
            description: 'Quick assessment with five direct questions',
            icon: ListChecks,
          },
          {
            type: '5-questions-followup' as const,
            title: '5 Questions + Follow-up',
            description: 'Comprehensive assessment with follow-up questions',
            icon: MessageSquarePlus,
          },
          {
            type: '3-questions-followup' as const,
            title: '3 Questions + Follow-up',
            description: 'Brief but detailed assessment',
            icon: ListPlus,
          },
        ].map(({ type, title, description, icon: Icon }) => (
          <button
            key={type}
            onClick={() => onSelectType(type)}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex flex-col items-center text-center">
              <Icon className="w-12 h-12 text-blue-600 mb-4" />
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {title}
              </h2>
              <p className="text-gray-600">{description}</p>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-600">
          All formats are designed to help you achieve your goals using the WOOP Method
        </p>
      </div>
    </div>
  );
}