// Questions for grief questionnaire
export const getGriefQuestions = () => [
  {
    id: 1,
    text: "How confident are you in creating a safe space for your child to express their grief without fear of judgment?",
    options: ["1 (Not confident)", "2", "3 (Somewhat confident)", "4", "5 (Very confident)"],
    followUps: [
      {
        text: "What steps will you take to support your child in expressing emotions openly?",
        type: "checkbox" as const,
        options: [
          "Listening without interrupting",
          "Avoiding platitudes",
          "Reassuring them that all emotions are okay",
          "Showing empathy through body language"
        ]
      }
    ]
  },
  {
    id: 2,
    text: "How comfortable are you with discussing grief openly within the family to create a shared experience?",
    options: ["1 (Uncomfortable)", "2", "3 (Somewhat comfortable)", "4", "5 (Very comfortable)"],
    followUps: [
      {
        text: "Which family dynamics from the session do you relate to most?",
        type: "checkbox" as const,
        options: [
          "Separating into corners",
          "Hiding emotions",
          "Struggling to communicate",
          "Needing time alone"
        ]
      }
    ]
  },
  {
    id: 3,
    text: "How comfortable are you with allowing your child to grieve in their own way, as suggested in the session?",
    options: ["1 (Not comfortable)", "2", "3 (Somewhat comfortable)", "4", "5 (Very comfortable)"],
    followUps: [
      {
        text: "What steps will you take to support your child's unique grieving process without pressure?",
        type: "checkbox" as const,
        options: [
          "Avoiding suggestions to 'move on'",
          "Giving them space",
          "Checking in without pushing",
          "Respecting their individual pace"
        ]
      }
    ]
  },
  {
    id: 4,
    text: "How prepared do you feel to support your child's grief with patience, compassion, and openness?",
    options: ["1 (Not prepared)", "2", "3 (Somewhat prepared)", "4", "5 (Very prepared)"],
    followUps: [
      {
        text: "Which strategies from this session will you prioritize to help your child feel supported?",
        type: "checkbox" as const,
        options: [
          "Being present and patient",
          "Modeling emotional honesty",
          "Seeking external support",
          "Incorporating nature",
          "Reducing academic pressures"
        ]
      }
    ]
  }
];