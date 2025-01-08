import React from 'react';
import { Leaf } from 'lucide-react';
import { TabType } from '../types';

interface NavigationProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export function Navigation({ activeTab, onTabChange }: NavigationProps) {
  const tabs: { id: TabType; label: string }[] = [
    { id: 'hobby', label: 'Mindfulness' },
    { id: 'reading', label: 'Emotional Awareness' },
    { id: 'music', label: 'Stress Management' },
    { id: 'gaming', label: 'Sleep Patterns' },
    { id: 'cooking', label: 'Mood Tracking' },
    { id: 'travel', label: 'Meditation' }
  ];

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <button
              onClick={() => onTabChange('home')}
              className="flex-shrink-0 flex items-center hover:opacity-75 transition-opacity"
            >
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Mental Wellness</span>
            </button>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => onTabChange(tab.id)}
                  className={`${
                    activeTab === tab.id
                      ? 'border-green-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}