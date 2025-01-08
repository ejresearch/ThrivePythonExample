// Questions for PS Pain Process questionnaire
export const getPSPainQuestions = () => [
  {
    id: 1,
    text: "How would you rate your current pain level?",
    options: ["1 (Mild)", "2", "3 (Moderate)", "4", "5 (Severe)"],
    followUps: [
      {
        text: "What factors seem to influence your pain levels most?",
        type: "checkbox" as const,
        options: ["Physical activity", "Stress", "Time of day", "Weather", "Other"]
      }
    ]
  },
  {
    id: 2,
    text: "How does pain affect your daily activities?",
    options: ["Minimal impact", "Some limitations", "Significant restrictions", "Severe limitations"],
    followUps: [
      {
        text: "Which activities are most challenging due to pain?",
        type: "checkbox" as const,
        options: ["Walking", "Sitting", "Standing", "Sleeping", "Other"]
      }
    ]
  },
  {
    id: 3,
    text: "What strategies have you found helpful in managing your pain?",
    type: "checkbox" as const,
    options: ["Movement", "Rest", "Medication", "Heat/Cold", "Mindfulness", "Other"],
    followUps: [
      {
        text: "How effective are these strategies in providing relief?",
        type: "radio" as const,
        options: ["Very effective", "Somewhat effective", "Minimally effective", "Not effective"]
      }
    ]
  },
  {
    id: 4,
    text: "How does pain impact your emotional well-being?",
    options: ["Minimal impact", "Some impact", "Moderate impact", "Significant impact"],
    followUps: [
      {
        text: "What emotions do you commonly experience related to your pain?",
        type: "checkbox" as const,
        options: ["Frustration", "Anxiety", "Sadness", "Anger", "Other"]
      }
    ]
  }
];