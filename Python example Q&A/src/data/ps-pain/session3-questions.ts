// Questions for PS Pain Process Session 3: Movement and Transformation
export const getSession3Questions = () => [
  {
    id: 1,
    text: "How did observing the movement of discomfort in your body impact your connection to the sensation?",
    options: ["1 (No impact)", "2", "3 (Moderate impact)", "4", "5 (Significant impact)"],
    followUps: [
      {
        text: "Did identifying the movement make it easier to prepare for adjustments?",
        type: "radio" as const,
        options: ["Yes, significantly", "Yes, somewhat", "No difference", "Made it harder"]
      }
    ]
  },
  {
    id: 2,
    text: "What happened to the intensity of the discomfort when you slowed its movement?",
    options: ["Decreased significantly", "Decreased slightly", "No change", "Increased"],
    followUps: [
      {
        text: "What speed felt most effective for creating relief?",
        type: "radio" as const,
        options: ["Very slow", "Moderately slow", "Slightly slower", "No specific speed"]
      }
    ]
  },
  {
    id: 3,
    text: "How did reversing the direction of discomfort's movement change the sensation?",
    options: ["1 (No change)", "2", "3 (Moderate change)", "4", "5 (Significant change)"],
    followUps: [
      {
        text: "Did you feel any resistance or unusual sensations during this reversal?",
        type: "checkbox" as const,
        options: ["Physical resistance", "Mental resistance", "Unusual sensations", "No resistance"]
      }
    ]
  },
  {
    id: 4,
    text: "How did adjusting the speed of comforting sensations enhance your sense of well-being?",
    options: ["1 (No enhancement)", "2", "3 (Moderate enhancement)", "4", "5 (Significant enhancement)"],
    followUps: [
      {
        text: "What speed or adjustment felt 'just right' for sustaining comfort?",
        type: "radio" as const,
        options: ["Very slow", "Moderately slow", "Variable speed", "Quick adjustments"]
      }
    ]
  }
];