// Questions for AZC meditation Session 2
export const getSession2Questions = () => [
  {
    id: 1,
    text: "How did counting your breath influence your ability to stay present?",
    options: ["1 (Distracting)", "2", "3 (Neutral)", "4", "5 (Grounding)"],
    followUps: [
      {
        text: "At what number did you find it easiest to feel focused?",
        type: "radio" as const,
        options: ["1–3", "4–7", "8–10", "None"]
      }
    ]
  },
  {
    id: 2,
    text: "How did it feel to let go of structured practices like counting once you felt present?",
    options: ["Relieving", "Uncomfortable", "Neutral", "Other"],
    followUps: [
      {
        text: "What helped you trust yourself to stay present without counting?",
        type: "checkbox" as const,
        options: ["Body awareness", "Breath focus", "Acceptance of distraction", "Other"]
      }
    ]
  },
  {
    id: 3,
    text: "How did you respond when you lost count or became distracted?",
    options: ["Refocused calmly", "Felt frustrated", "Needed to adjust posture", "Other"],
    followUps: [
      {
        text: "What helped you reframe distractions as opportunities to reconnect with the present?",
        type: "checkbox" as const,
        options: ["Gentle self-talk", "Returning to breath", "Adjusting posture", "Other"]
      }
    ]
  },
  {
    id: 4,
    text: "How connected did you feel to your breath and posture during this session?",
    options: ["1 (Disconnected)", "2", "3 (Somewhat connected)", "4", "5 (Deeply connected)"],
    followUps: [
      {
        text: "What part of the practice felt most grounding for you?",
        type: "checkbox" as const,
        options: ["Breath-counting", "Posture awareness", "Acceptance of distraction", "Other"]
      }
    ]
  }
];