// Questions for movement questionnaire
export const getMovementQuestions = () => [
  {
    id: 1,
    text: "How aware were you of your body and mind at the start of this session?",
    options: [
      "1 (Barely aware; I felt disconnected)",
      "2",
      "3 (Somewhat aware; I noticed certain sensations)",
      "4",
      "5 (Fully aware; I felt attuned to my body and mind)"
    ],
    followUps: [
      {
        text: "How often did your mind wander during the session, and how easy was it to bring your focus back to observing your body?",
        type: "radio" as const,
        options: [
          "1 (Very difficult; I was distracted often)",
          "2",
          "3 (Occasionally difficult; I had to refocus a few times)",
          "4",
          "5 (Very easy; I stayed with the exercise)"
        ]
      }
    ]
  },
  {
    id: 2,
    text: "How connected did you feel to your body and the Earth during the exercise?",
    options: [
      "1 (Not connected)",
      "2",
      "3 (Somewhat connected; I felt some grounding)",
      "4",
      "5 (Deeply connected; I felt rooted and supported by the Earth)"
    ],
    followUps: [
      {
        text: "Which specific sensations helped reinforce your connection to the Earth?",
        type: "checkbox" as const,
        options: [
          "Feeling my feet rooted",
          "Noticing the weight of my body",
          "Sensing the stability of the ground beneath me",
          "Feeling my breath as part of Earth's rhythm",
          "None of these"
        ]
      }
    ]
  },
  {
    id: 3,
    text: "How comfortable were you with allowing emotions and sensations to exist without needing to change or adjust them?",
    options: [
      "1 (Uncomfortable; I struggled to let them be)",
      "2",
      "3 (Somewhat comfortable; I accepted some)",
      "4",
      "5 (Very comfortable; I allowed everything to be as it was)"
    ],
    followUps: [
      {
        text: "Which emotions did you notice during the session?",
        type: "checkbox" as const,
        options: [
          "Calm",
          "Curiosity",
          "Restlessness",
          "Sadness",
          "Contentment",
          "Frustration",
          "None of these"
        ]
      }
    ]
  },
  {
    id: 4,
    text: "How often do you plan to incorporate grounding techniques into your daily life?",
    options: [
      "1 (Rarely; only in high-stress moments)",
      "2",
      "3 (Sometimes; a few times a week)",
      "4",
      "5 (Often; daily or nearly every day)"
    ],
    followUps: [
      {
        text: "Which grounding techniques are you most likely to use when you need to feel more present?",
        type: "checkbox" as const,
        options: [
          "Focusing on my breath",
          "Bringing awareness to my feet",
          "Noticing sensations throughout my body",
          "Feeling my connection to the Earth"
        ]
      }
    ]
  }
];