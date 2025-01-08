// Questions for PMR questionnaire
export const getPMRQuestions = () => [
  {
    id: 1,
    text: "How effective was the session in helping you identify areas of tension in your body?",
    options: ["1 (Not effective)", "2", "3 (Somewhat effective)", "4", "5 (Very effective)"],
    followUps: [
      {
        text: "Which areas of your body did you notice the most tension in during the session?",
        type: "checkbox" as const,
        options: ["Shoulders", "Back", "Abdomen", "Face", "Legs"]
      }
    ]
  },
  {
    id: 2,
    text: "How likely are you to incorporate PMR into your daily routine?",
    options: ["1 (Unlikely)", "2", "3 (Somewhat likely)", "4", "5 (Very likely)"],
    followUps: [
      {
        text: "How do you plan to integrate PMR into your daily life?",
        type: "checkbox" as const,
        options: [
          "At bedtime",
          "During work breaks",
          "When feeling stressed",
          "As part of a relaxation routine",
          "During exercise cooldowns"
        ]
      }
    ]
  },
  {
    id: 3,
    text: "What specific situations do you think would benefit most from PMR?",
    type: "checkbox" as const,
    options: [
      "Before sleep",
      "During stressful moments",
      "After physical activity",
      "To unwind after work",
      "In high-anxiety situations"
    ],
    followUps: [
      {
        text: "How confident are you in adapting PMR for different situations?",
        type: "radio" as const,
        options: [
          "1 (Not confident)",
          "2",
          "3 (Somewhat confident)",
          "4",
          "5 (Very confident)"
        ]
      }
    ]
  },
  {
    id: 4,
    text: "How helpful do you find PMR in promoting overall relaxation?",
    options: ["1 (Not helpful)", "2", "3 (Somewhat helpful)", "4", "5 (Very helpful)"],
    followUps: [
      {
        text: "What aspects of PMR will you prioritize to support stress reduction and relaxation?",
        type: "checkbox" as const,
        options: [
          "Physical relaxation",
          "Mental relaxation",
          "Sleep support",
          "Stress management",
          "Self-care"
        ]
      }
    ]
  }
];