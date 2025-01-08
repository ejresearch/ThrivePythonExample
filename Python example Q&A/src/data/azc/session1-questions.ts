// Questions for AZC meditation Session 1
export const getSession1Questions = () => [
  {
    id: 1,
    text: "How do you feel when focusing on the stability of your posture?",
    options: ["1 (Unsteady)", "2", "3 (Somewhat stable)", "4", "5 (Very stable)"],
    followUps: [
      {
        text: "What sensations arise in your lower body when you allow it to feel heavy?",
        type: "radio" as const,
        options: ["Calm", "Supported", "Restless", "Other"]
      }
    ]
  },
  {
    id: 2,
    text: "How well do you think you balance being upright and feeling at ease during meditation?",
    options: ["1 (Struggle to balance)", "2", "3 (Somewhat balanced)", "4", "5 (Completely balanced)"],
    followUps: [
      {
        text: "What adjustments could help you maintain both qualities more effectively?",
        type: "checkbox" as const,
        options: ["Relax shoulders", "Straighten spine", "Deepen awareness", "Other"]
      }
    ]
  },
  {
    id: 3,
    text: "Where do you most notice your breath during this meditation?",
    options: ["Chest", "Nose", "Belly", "Other"],
    followUps: [
      {
        text: "How does observing your breath naturally (without control) affect your sense of relaxation?",
        type: "radio" as const,
        options: ["Increases relaxation", "No effect", "Creates tension"]
      }
    ]
  },
  {
    id: 4,
    text: "How easily can you notice and accept your present experience during meditation?",
    options: ["1 (Difficult)", "2", "3 (Somewhat easy)", "4", "5 (Very easy)"],
    followUps: [
      {
        text: "What emotions arise when you observe moments of tension or distraction?",
        type: "checkbox" as const,
        options: ["Frustration", "Curiosity", "Acceptance", "Other"]
      }
    ]
  }
];