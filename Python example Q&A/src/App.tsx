import React, { useState } from 'react';
import { Question, Answer, QuestionnaireType, TabType } from './types';
import { getQuestions } from './data/questions';
import { getThemeColors } from './utils/themes';
import { ProgressBar } from './components/ProgressBar';
import { QuestionCard } from './components/QuestionCard';
import { Summary } from './components/Summary';
import { HomePage } from './components/HomePage';
import { Leaf } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [selectedDemo, setSelectedDemo] = useState<string | null>(null);
  const [questionnaireType, setQuestionnaireType] = useState<QuestionnaireType | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [completed, setCompleted] = useState(false);

  const getQuestionnaireType = (demo: string): QuestionnaireType => {
    switch (demo) {
      case 'Mindfulness Assessment':
        return 'hobby-assessment';
      case 'Emotional Check-in':
        return 'reading-habits';
      case 'Stress Assessment':
        return 'music-preferences';
      case 'Sleep Journal':
        return 'gaming-habits';
      case 'Mood Assessment':
        return 'cooking-skills';
      case 'Meditation Log':
        return 'travel-session1';
      default:
        return 'hobby-assessment';
    }
  };

  const handleSelectDemo = (demo: string) => {
    setSelectedDemo(demo);
    const type = getQuestionnaireType(demo);
    setQuestionnaireType(type);
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setCompleted(false);
  };

  const questions = questionnaireType ? getQuestions() : [];

  const currentQuestion = questions[currentQuestionIndex];
  const currentAnswer = currentQuestion 
    ? answers.find((a) => a.questionId === currentQuestion.id)
    : undefined;

  const theme = questionnaireType ? getThemeColors(questionnaireType) : undefined;

  const handleOptionSelect = (option: string) => {
    if (!currentQuestion) return;

    const newAnswer: Answer = {
      questionId: currentQuestion.id,
      selectedOption: option,
      followUpAnswers: currentAnswer?.followUpAnswers || [],
    };

    setAnswers((prev) =>
      prev.some((a) => a.questionId === currentQuestion.id)
        ? prev.map((a) =>
            a.questionId === currentQuestion.id ? newAnswer : a
          )
        : [...prev, newAnswer]
    );

    if (!currentQuestion.followUps && currentQuestion.type !== 'checkbox') {
      setTimeout(() => handleNext(), 300);
    }
  };

  const handleFollowUpAnswer = (selectedAnswers: string[][], followUpIndex: number) => {
    if (!currentQuestion) return;

    const newFollowUpAnswers = [...(currentAnswer?.followUpAnswers || [])];
    newFollowUpAnswers[followUpIndex] = selectedAnswers[0];

    setAnswers((prev) =>
      prev.map((a) =>
        a.questionId === currentQuestion.id
          ? { ...a, followUpAnswers: newFollowUpAnswers }
          : a
      )
    );
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setCompleted(true);
    }
  };

  const handleRestart = () => {
    setQuestionnaireType(null);
    setSelectedDemo(null);
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setCompleted(false);
    setActiveTab('home');
  };

  const handleBack = () => {
    if (completed || currentQuestionIndex === 0) {
      handleRestart();
    } else {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleHomeClick = () => {
    handleRestart();
  };

  const renderHeader = () => (
    <button 
      onClick={handleHomeClick}
      className="flex items-center justify-center w-full mb-8 hover:opacity-75 transition-opacity"
    >
      <Leaf className="h-12 w-12 text-green-600" />
      <span className="ml-3 text-2xl font-bold text-gray-900">Mental Wellness</span>
    </button>
  );

  if (questionnaireType && theme) {
    return (
      <div className={`min-h-screen bg-gradient-to-br from-${theme.gradient.from} to-${theme.gradient.to}`}>
        <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          {renderHeader()}

          {!completed && currentQuestion && (
            <ProgressBar
              current={currentQuestionIndex + 1}
              total={questions.length}
              color={theme.primary}
            />
          )}

          {completed ? (
            <Summary
              questions={questions}
              answers={answers}
              onRestart={handleRestart}
              theme={theme}
            />
          ) : currentQuestion ? (
            <QuestionCard
              question={currentQuestion}
              currentAnswer={currentAnswer}
              onOptionSelect={handleOptionSelect}
              onFollowUpAnswer={handleFollowUpAnswer}
              onNext={handleNext}
              onBack={handleBack}
              theme={theme}
            />
          ) : null}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {renderHeader()}
        <HomePage onTabChange={setActiveTab} onSelectDemo={handleSelectDemo} />
      </div>
    </div>
  );
}

export default App;