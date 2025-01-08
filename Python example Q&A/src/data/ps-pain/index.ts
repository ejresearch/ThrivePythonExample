import { getSession1Questions } from './session1-questions';
import { getSession2Questions } from './session2-questions';
import { getSession3Questions } from './session3-questions';
import { getSynthesisQuestions } from './synthesis-questions';
import { QuestionnaireType } from '../../types';

export const getPSPainQuestions = (type: QuestionnaireType) => {
  switch (type) {
    case 'ps-pain-session1':
      return getSession1Questions();
    case 'ps-pain-session2':
      return getSession2Questions();
    case 'ps-pain-session3':
      return getSession3Questions();
    case 'ps-pain-synthesis':
      return getSynthesisQuestions();
    default:
      return [];
  }
};