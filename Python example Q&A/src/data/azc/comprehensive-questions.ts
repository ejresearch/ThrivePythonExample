// Comprehensive questions for AZC meditation
export const getComprehensiveQuestions = () => [
  {
    id: 1,
    text: "How has your relationship with your breath changed through these practices?",
    options: ["1 (Unchanged)", "2", "3 (Somewhat improved)", "4", "5 (Significantly deeper awareness)"],
    followUps: [
      {
        text: "What breath practices do you find most helpful for staying present?",
        type: "checkbox" as const,
        options: ["Observing naturally", "Counting", "Returning after distractions", "Other"]
      }
    ]
  },
  {
    id: 2,
    text: "How comfortable are you now with observing thoughts without judgment?",
    options: ["1 (Uncomfortable)", "2", "3 (Somewhat comfortable)", "4", "5 (Very comfortable)"],
    followUps: [
      {
        text: "What strategies have been most effective in handling distractions?",
        type: "checkbox" as const,
        options: ["Letting go of thoughts", "Reframing as opportunities", "Body awareness", "Other"]
      }
    ]
  },
  {
    id: 3,
    text: "How connected did the relationship between your body and mental states feel during these sessions?",
    options: ["1 (No connection)", "2", "3 (Subtle connection)", "4", "5 (Clear, strong connection)"],
    followUps: [
      {
        text: "Which body signals help you understand your mental state best?",
        type: "checkbox" as const,
        options: ["Thumb tips", "Tongue", "Abdomen", "Other"]
      }
    ]
  },
  {
    id: 4,
    text: "How confident do you feel in applying these meditation techniques outside of a session?",
    options: ["1 (Not confident)", "2", "3 (Somewhat confident)", "4", "5 (Very confident)"],
    followUps: [
      {
        text: "What aspect of the practice do you find most helpful in daily life?",
        type: "checkbox" as const,
        options: ["Posture", "Breath", "Observing thoughts", "Other"]
      }
    ]
  }
];