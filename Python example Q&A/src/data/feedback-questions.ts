// Questions for feedback questionnaire
export const getFeedbackQuestions = () => [
  {
    id: 1,
    text: "How motivated do you feel to apply feedback to improve your skills?",
    options: ["1 (Not motivated)", "2", "3 (Somewhat motivated)", "4", "5 (Very motivated)"],
    followUps: [
      {
        text: "How do you feel about setting specific goals based on feedback?",
        type: "radio" as const,
        options: ["1 (Uncertain)", "2", "3 (Somewhat comfortable)", "4", "5 (Very comfortable)"]
      }
    ]
  },
  {
    id: 2,
    text: "How do you usually respond to feedback you disagree with?",
    type: "checkbox" as const,
    options: [
      "Ask for clarification",
      "Become defensive",
      "Reflect on it later",
      "Ignore it"
    ],
    followUps: [
      {
        text: "How can you better prepare yourself emotionally to receive feedback constructively?",
        type: "checkbox" as const,
        options: [
          "Practicing deep breathing",
          "Reflecting on my reactions",
          "Focusing on growth",
          "Reminding myself of the purpose of feedback"
        ]
      }
    ]
  },
  {
    id: 3,
    text: "How comfortable are you with creating a more open environment for receiving feedback?",
    options: ["1 (Uncomfortable)", "2", "3 (Somewhat comfortable)", "4", "5 (Very comfortable)"],
    followUps: [
      {
        text: "What strategies from this session will you implement to promote open communication about feedback?",
        type: "checkbox" as const,
        options: [
          "Inviting regular feedback",
          "Modeling openness",
          "Creating a safe space for sharing",
          "Normalizing feedback in team meetings"
        ]
      }
    ]
  },
  {
    id: 4,
    text: "How comfortable are you with differentiating constructive feedback from criticism?",
    options: ["1 (Uncomfortable)", "2", "3 (Somewhat comfortable)", "4", "5 (Very comfortable)"],
    followUps: [
      {
        text: "What aspects help you view feedback as constructive rather than personal criticism?",
        type: "checkbox" as const,
        options: [
          "Focusing on improvement",
          "Recognizing the intent",
          "Seeking clarification",
          "Asking specific questions"
        ]
      }
    ]
  }
];