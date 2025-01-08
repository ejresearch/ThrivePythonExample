// Questions for PS Pain Process Session 1: Visualization and Discomfort
export const getSession1Questions = () => [
  {
    id: 1,
    text: "How did referring to 'pain' as 'discomfort' affect your experience during this session?",
    options: ["1 (No difference)", "2", "3 (Somewhat helpful)", "4", "5 (Very helpful)"],
    followUps: [
      {
        text: "Did this change make it easier to engage with the visualization process? Why or why not?",
        type: "radio" as const,
        options: ["Yes, significantly", "Yes, somewhat", "No difference", "Made it harder"]
      }
    ]
  },
  {
    id: 2,
    text: "What did the discomfort in your body look like when visualized?",
    options: ["Sharp/Angular", "Round/Smooth", "Irregular/Jagged", "Amorphous/Changing"],
    followUps: [
      {
        text: "Did focusing on these characteristics help you create emotional or physical distance from the sensation?",
        type: "checkbox" as const,
        options: ["Created physical distance", "Created emotional distance", "No change", "Other"]
      }
    ]
  },
  {
    id: 3,
    text: "What impact did shrinking or dimming the visualization of your discomfort have on how it felt in your body?",
    options: ["1 (No impact)", "2", "3 (Moderate relief)", "4", "5 (Significant relief)"],
    followUps: [
      {
        text: "Which adjustment felt most effective?",
        type: "radio" as const,
        options: ["Shrinking size", "Dimming brightness", "Both equally", "Neither"]
      }
    ]
  },
  {
    id: 4,
    text: "How effective was the 'lock-in' technique for maintaining the adjustments you made to your discomfort?",
    options: ["1 (Not effective)", "2", "3 (Somewhat effective)", "4", "5 (Very effective)"],
    followUps: [
      {
        text: "Did any part of the visualization make it easier to trust the locked-in comfort would remain?",
        type: "checkbox" as const,
        options: ["Visual confirmation", "Physical sensation", "Mental imagery", "Other"]
      }
    ]
  }
];