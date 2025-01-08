// Questions for AZC meditation Session 3
export const getSession3Questions = () => [
  {
    id: 1,
    text: "How often did you remember to check in with your tongue position or thumb tips during this session?",
    options: ["1 (Rarely)", "2", "3 (Sometimes)", "4", "5 (Often)"],
    followUps: [
      {
        text: "What changes did you notice in your mental state when you became aware of these signals?",
        type: "checkbox" as const,
        options: ["Calmness", "Tension", "Awareness", "Other"]
      }
    ]
  },
  {
    id: 2,
    text: "How easy was it to observe your thoughts without judgment?",
    options: ["1 (Difficult)", "2", "3 (Somewhat easy)", "4", "5 (Very easy)"],
    followUps: [
      {
        text: "What strategy helped you the most in cultivating non-judgmental awareness?",
        type: "checkbox" as const,
        options: ["Breath focus", "Body awareness", "Reframing distractions", "Other"]
      }
    ]
  },
  {
    id: 3,
    text: "How effective was returning to your breath or body as an anchor when distracted?",
    options: ["1 (Ineffective)", "2", "3 (Somewhat effective)", "4", "5 (Very effective)"],
    followUps: [
      {
        text: "What part of your body helped you feel most grounded?",
        type: "checkbox" as const,
        options: ["Abdomen", "Thumb tips", "Spine", "Other"]
      }
    ]
  },
  {
    id: 4,
    text: "How did your posture influence your mental state during this session?",
    options: ["Increased calmness", "Created tension", "Neutral", "Other"],
    followUps: [
      {
        text: "What adjustments to your posture helped you feel more connected to your body?",
        type: "checkbox" as const,
        options: ["Relaxing shoulders", "Adjusting thumb position", "Aligning spine", "Other"]
      }
    ]
  }
];