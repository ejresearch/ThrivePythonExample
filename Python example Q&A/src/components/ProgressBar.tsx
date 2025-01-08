import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
  color: string;
}

export function ProgressBar({ current, total, color }: ProgressBarProps) {
  const percentage = (current / total) * 100;

  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
      <div
        className={`bg-${color} h-2.5 rounded-full transition-all duration-500 ease-out`}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}