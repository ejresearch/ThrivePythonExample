import { QuestionnaireType } from '../types';

export interface ThemeColors {
  primary: string;
  secondary: string;
  gradient: {
    from: string;
    to: string;
  };
  hover: string;
  text: string;
}

const themes: Record<QuestionnaireType, ThemeColors> = {
  'hobby-assessment': {
    primary: 'blue-600',
    secondary: 'blue-100',
    gradient: {
      from: 'blue-50',
      to: 'indigo-50'
    },
    hover: 'blue-500',
    text: 'blue-600'
  },
  'reading-habits': {
    primary: 'green-600',
    secondary: 'green-100',
    gradient: {
      from: 'green-50',
      to: 'emerald-50'
    },
    hover: 'green-500',
    text: 'green-600'
  },
  'music-preferences': {
    primary: 'purple-600',
    secondary: 'purple-100',
    gradient: {
      from: 'purple-50',
      to: 'violet-50'
    },
    hover: 'purple-500',
    text: 'purple-600'
  },
  'gaming-habits': {
    primary: 'teal-600',
    secondary: 'teal-100',
    gradient: {
      from: 'teal-50',
      to: 'cyan-50'
    },
    hover: 'teal-500',
    text: 'teal-600'
  },
  'cooking-skills': {
    primary: 'pink-600',
    secondary: 'pink-100',
    gradient: {
      from: 'pink-50',
      to: 'rose-50'
    },
    hover: 'pink-500',
    text: 'pink-600'
  },
  'travel-session1': {
    primary: 'amber-600',
    secondary: 'amber-100',
    gradient: {
      from: 'amber-50',
      to: 'yellow-50'
    },
    hover: 'amber-500',
    text: 'amber-600'
  },
  'travel-session2': {
    primary: 'amber-600',
    secondary: 'amber-100',
    gradient: {
      from: 'amber-50',
      to: 'yellow-50'
    },
    hover: 'amber-500',
    text: 'amber-600'
  },
  'travel-session3': {
    primary: 'amber-600',
    secondary: 'amber-100',
    gradient: {
      from: 'amber-50',
      to: 'yellow-50'
    },
    hover: 'amber-500',
    text: 'amber-600'
  },
  'travel-comprehensive': {
    primary: 'amber-600',
    secondary: 'amber-100',
    gradient: {
      from: 'amber-50',
      to: 'yellow-50'
    },
    hover: 'amber-500',
    text: 'amber-600'
  },
  'art-session1': {
    primary: 'red-600',
    secondary: 'red-100',
    gradient: {
      from: 'red-50',
      to: 'orange-50'
    },
    hover: 'red-500',
    text: 'red-600'
  },
  'art-session2': {
    primary: 'red-600',
    secondary: 'red-100',
    gradient: {
      from: 'red-50',
      to: 'orange-50'
    },
    hover: 'red-500',
    text: 'red-600'
  },
  'art-session3': {
    primary: 'red-600',
    secondary: 'red-100',
    gradient: {
      from: 'red-50',
      to: 'orange-50'
    },
    hover: 'red-500',
    text: 'red-600'
  },
  'art-synthesis': {
    primary: 'red-600',
    secondary: 'red-100',
    gradient: {
      from: 'red-50',
      to: 'orange-50'
    },
    hover: 'red-500',
    text: 'red-600'
  }
};

export const getThemeColors = (type: QuestionnaireType): ThemeColors => {
  return themes[type];
};