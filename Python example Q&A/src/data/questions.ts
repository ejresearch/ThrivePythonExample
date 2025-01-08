// Mental health assessment questions
export const getQuestions = () => [
  {
    id: 1,
    text: "How would you rate your overall stress level today?",
    options: ["Very Low", "Low", "Moderate", "High", "Very High"],
    followUps: [
      {
        text: "What factors are contributing to your stress levels?",
        type: "checkbox" as const,
        options: [
          "Work/School",
          "Relationships",
          "Health concerns",
          "Financial matters",
          "Other responsibilities"
        ]
      }
    ]
  },
  {
    id: 2,
    text: "How has your sleep quality been over the past week?",
    options: ["Very Poor", "Poor", "Fair", "Good", "Excellent"],
    followUps: [
      {
        text: "What affects your sleep quality most?",
        type: "checkbox" as const,
        options: [
          "Racing thoughts",
          "Physical discomfort",
          "Environmental factors",
          "Irregular schedule",
          "Screen time"
        ]
      }
    ]
  },
  {
    id: 3,
    text: "How often have you engaged in self-care activities this week?",
    type: "checkbox" as const,
    options: [
      "Daily meditation",
      "Regular exercise",
      "Healthy eating",
      "Social connection",
      "Creative activities"
    ],
    followUps: [
      {
        text: "What barriers prevent you from practicing more self-care?",
        type: "checkbox" as const,
        options: [
          "Lack of time",
          "Low motivation",
          "Limited resources",
          "Unsure where to start",
          "Other priorities"
        ]
      }
    ]
  },
  {
    id: 4,
    text: "How would you describe your current mood?",
    options: ["Very low", "Somewhat low", "Neutral", "Somewhat positive", "Very positive"],
    followUps: [
      {
        text: "What activities or situations most influence your mood?",
        type: "checkbox" as const,
        options: [
          "Social interactions",
          "Work/study environment",
          "Physical activity",
          "Rest and relaxation",
          "Achievement/accomplishment"
        ]
      }
    ]
  }
];