import React from 'react';
import { Question, Answer } from '../types';
import { CheckCircle, Brain } from 'lucide-react';
import { ThemeColors } from '../utils/themes';

interface SummaryProps {
  questions: Question[];
  answers: Answer[];
  onRestart: () => void;
  theme: ThemeColors;
}

export function Summary({ questions, answers, onRestart, theme }: SummaryProps) {
  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 animate-fade-in">
      <div className="flex items-center justify-center mb-8">
        <Brain className={`text-${theme.primary} w-16 h-16`} />
      </div>
      
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-8">
        Assessment Complete!
      </h2>

      <div className="space-y-6">
        {answers.map((answer) => {
          const question = questions.find(q => q.id === answer.questionId);
          if (!question) return null;
          
          const selectedOptions = question.type === 'checkbox'
            ? answer.selectedOption.split(',')
            : [answer.selectedOption];

          return (
            <div key={answer.questionId} className={`bg-${theme.secondary} rounded-lg p-6`}>
              <h3 className="font-medium text-gray-800 mb-2">{question.text}</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedOptions.map((option) => (
                  <span
                    key={option}
                    className={`inline-flex items-center px-3 py-1 rounded-full text-sm bg-${theme.primary} bg-opacity-10 text-${theme.text}`}
                  >
                    <CheckCircle className="w-4 h-4 mr-1" />
                    {option}
                  </span>
                ))}
              </div>
              
              {question.followUps?.map((followUp, index) => (
                <div key={index} className="mt-4">
                  <h4 className="font-medium text-gray-700 mb-2">{followUp.text}</h4>
                  <div className="flex flex-wrap gap-2">
                    {answer.followUpAnswers[index]?.map((followUpAnswer) => (
                      <span
                        key={followUpAnswer}
                        className={`inline-flex items-center px-3 py-1 rounded-full text-sm bg-${theme.primary} bg-opacity-10 text-${theme.text}`}
                      >
                        <CheckCircle className="w-4 h-4 mr-1" />
                        {followUpAnswer}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          );
        })}
      </div>

      <button
        onClick={onRestart}
        className={`mt-8 w-full bg-${theme.primary} text-white py-3 px-6 rounded-lg hover:bg-${theme.hover} transition-all duration-200`}
      >
        Start New Session
      </button>
    </div>
  );
}