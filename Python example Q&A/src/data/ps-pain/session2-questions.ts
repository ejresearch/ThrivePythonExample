// Questions for PS Pain Process Session 2: Control Room and Comfort Management
export const getSession2Questions = () => [
  {
    id: 1,
    text: "How did you visualize your control room?",
    type: "checkbox" as const,
    options: [
      "Digital displays",
      "Analog dials",
      "Sliders",
      "Buttons",
      "Touch controls"
    ],
    followUps: [
      {
        text: "What made this format intuitive for you?",
        type: "checkbox" as const,
        options: [
          "It was easy to imagine interacting with it",
          "It allowed me to visualize adjustments",
          "It felt familiar from prior experiences",
          "It made the process of reducing discomfort feel smoother"
        ]
      }
    ]
  },
  {
    id: 2,
    text: "What changes did you notice in your body as you turned down the discomfort one number at a time?",
    options: ["1 (No change)", "2", "3 (Moderate relief)", "4", "5 (Significant relief)"],
    followUps: [
      {
        text: "How did waiting between adjustments impact your sense of control?",
        type: "radio" as const,
        options: ["Enhanced control", "No difference", "Reduced control", "Varied"]
      }
    ]
  },
  {
    id: 3,
    text: "How effective was the lock-in mechanism in the control room for maintaining comfort?",
    options: ["1 (Not effective)", "2", "3 (Somewhat effective)", "4", "5 (Very effective)"],
    followUps: [
      {
        text: "What type of feedback helped you feel confident the comfort was locked in?",
        type: "checkbox" as const,
        options: ["Visual indicator", "Auditory feedback", "Physical sensation", "Other"]
      }
    ]
  },
  {
    id: 4,
    text: "How confident are you in using the control room method independently to manage discomfort?",
    options: ["1 (Not confident)", "2", "3 (Somewhat confident)", "4", "5 (Very confident)"],
    followUps: [
      {
        text: "What aspect of the control room contributed most to this confidence?",
        type: "checkbox" as const,
        options: ["Room setup", "Gradual adjustment", "Lock-in feature", "Other"]
      }
    ]
  }
];