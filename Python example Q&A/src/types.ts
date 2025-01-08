export interface Question {
  id: number;
  text: string;
  type?: 'checkbox' | 'radio';
  options: string[];
  followUps?: {
    text: string;
    type: 'checkbox' | 'radio';
    options: string[];
  }[];
}

export interface Answer {
  questionId: number;
  selectedOption: string;
  followUpAnswers: string[][];
}

export type QuestionnaireType = 
  | 'hobby-assessment'
  | 'reading-habits'
  | 'music-preferences'
  | 'gaming-habits'
  | 'cooking-skills'
  | 'travel-session1'
  | 'travel-session2'
  | 'travel-session3'
  | 'travel-comprehensive'
  | 'art-session1'
  | 'art-session2'
  | 'art-session3'
  | 'art-synthesis';

export type TabType = 'home' | 'hobby' | 'reading' | 'music' | 'gaming' | 'cooking' | 'travel' | 'art';