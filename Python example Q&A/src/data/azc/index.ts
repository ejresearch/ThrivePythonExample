import { getSession1Questions } from './session1-questions';
import { getSession2Questions } from './session2-questions';
import { getSession3Questions } from './session3-questions';
import { getComprehensiveQuestions } from './comprehensive-questions';
import { QuestionnaireType } from '../../types';

export const getAZCQuestions = (type: QuestionnaireType) => {
  switch (type) {
    case 'azc-session1':
      return getSession1Questions();
    case 'azc-session2':
      return getSession2Questions();
    case 'azc-session3':
      return getSession3Questions();
    case 'azc-comprehensive':
      return getComprehensiveQuestions();
    default:
      return [];
  }
};