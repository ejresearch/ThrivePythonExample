import React from 'react';
import { Question, Answer } from '../types';
import { ChevronRight, ArrowLeft } from 'lucide-react';
import { ThemeColors } from '../utils/themes';

interface QuestionCardProps {
  question: Question;
  currentAnswer?: Answer;
  onOptionSelect: (option: string) => void;
  onFollowUpAnswer: (answers: string[][], followUpIndex: number) => void;
  onNext: () => void;
  onBack: () => void;
  theme: ThemeColors;
}

export function QuestionCard({
  question,
  currentAnswer,
  onOptionSelect,
  onFollowUpAnswer,
  onNext,
  onBack,
  theme
}: QuestionCardProps) {
  const showFollowUps = currentAnswer?.selectedOption && question.followUps;
  
  const canProceed = () => {
    if (!currentAnswer?.selectedOption) {
      return false;
    }
    
    if (question.type === 'checkbox') {
      const selectedOptions = currentAnswer.selectedOption.split(',').filter(Boolean);
      return selectedOptions.length > 0;
    }
    
    if (question.followUps) {
      return currentAnswer.followUpAnswers?.length === question.followUps.length &&
        currentAnswer.followUpAnswers.every(answers => answers && answers.length > 0);
    }
    
    return true;
  };

  const handleOptionSelect = (option: string) => {
    if (question.type === 'checkbox') {
      const currentOptions = currentAnswer?.selectedOption ? currentAnswer.selectedOption.split(',').filter(Boolean) : [];
      const newOptions = currentOptions.includes(option)
        ? currentOptions.filter(o => o !== option)
        : [...currentOptions, option].sort();
      onOptionSelect(newOptions.join(','));
    } else {
      onOptionSelect(option);
    }
  };

  const handleAnswerChange = (option: string, followUpIndex: number) => {
    const currentAnswers = currentAnswer?.followUpAnswers?.[followUpIndex] || [];
    const followUp = question.followUps?.[followUpIndex];
    
    if (!followUp) return;

    let newAnswers: string[];
    if (followUp.type === 'radio') {
      newAnswers = [option];
    } else {
      newAnswers = currentAnswers.includes(option)
        ? currentAnswers.filter(a => a !== option)
        : [...currentAnswers, option].sort();
    }
    
    onFollowUpAnswer([newAnswers], followUpIndex);
  };

  const selectedOptions = question.type === 'checkbox' && currentAnswer?.selectedOption
    ? currentAnswer.selectedOption.split(',').filter(Boolean)
    : [currentAnswer?.selectedOption].filter(Boolean);

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 animate-fade-in">
      <button
        onClick={onBack}
        className="flex items-center text-gray-600 hover:text-gray-800 transition-colors mb-6"
      >
        <ArrowLeft className="w-5 h-5 mr-1" />
        Back
      </button>

      <h2 className="text-2xl font-semibold text-gray-800 mb-6">{question.text}</h2>
      
      <div className="space-y-3">
        {question.options.map((option) => (
          <button
            key={option}
            onClick={() => handleOptionSelect(option)}
            className={`w-full text-left p-4 rounded-lg transition-all duration-200 flex items-center ${
              selectedOptions.includes(option)
                ? `bg-${theme.primary} text-white`
                : `bg-${theme.secondary} hover:bg-opacity-75 text-gray-700`
            }`}
          >
            {question.type === 'checkbox' && (
              <input
                type="checkbox"
                checked={selectedOptions.includes(option)}
                onChange={() => handleOptionSelect(option)}
                className={`w-5 h-5 mr-3 text-${theme.primary} rounded focus:ring-${theme.primary}`}
                onClick={(e) => e.stopPropagation()}
              />
            )}
            <span>{option}</span>
          </button>
        ))}
      </div>

      {showFollowUps && question.followUps && (
        <div className="mt-8 space-y-6">
          {question.followUps.map((followUp, index) => (
            <div key={index} className="transition-all duration-500 ease-out">
              <h3 className="text-lg font-medium text-gray-700 mb-4">
                {followUp.text}
              </h3>
              <div className="space-y-3">
                {followUp.options.map((option) => {
                  const isSelected = currentAnswer?.followUpAnswers?.[index]?.includes(option) || false;
                  return (
                    <button
                      key={option}
                      onClick={() => handleAnswerChange(option, index)}
                      className={`w-full text-left p-4 rounded-lg transition-all duration-200 flex items-center ${
                        isSelected
                          ? `bg-${theme.primary} text-white`
                          : `bg-${theme.secondary} hover:bg-opacity-75 text-gray-700`
                      }`}
                    >
                      <input
                        type={followUp.type}
                        checked={isSelected}
                        onChange={() => handleAnswerChange(option, index)}
                        className={`w-5 h-5 mr-3 text-${theme.primary} ${
                          followUp.type === 'checkbox' ? 'rounded' : 'rounded-full'
                        } focus:ring-${theme.primary}`}
                        onClick={(e) => e.stopPropagation()}
                      />
                      <span>{option}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}

      {(currentAnswer?.selectedOption || (question.type === 'checkbox' && selectedOptions.length > 0)) && (
        <button
          onClick={onNext}
          disabled={!canProceed()}
          className={`mt-6 w-full bg-${theme.primary} text-white py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 ${
            !canProceed() ? 'opacity-50 cursor-not-allowed' : `hover:bg-${theme.hover}`
          }`}
        >
          <span>Next Question</span>
          <ChevronRight size={20} />
        </button>
      )}
    </div>
  );
}