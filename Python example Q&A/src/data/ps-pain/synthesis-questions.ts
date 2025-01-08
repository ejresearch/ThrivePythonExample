// Questions for PS Pain Process Synthesis Across All Sessions
export const getSynthesisQuestions = () => [
  {
    id: 1,
    text: "How has visualizing discomfort evolved across the sessions?",
    options: ["1 (No change)", "2", "3 (Some improvement)", "4", "5 (Significant improvement)"],
    followUps: [
      {
        text: "Which visualization adjustment do you rely on most, and why?",
        type: "checkbox" as const,
        options: ["Shrinking", "Dimming", "Movement adjustment", "Other"]
      }
    ]
  },
  {
    id: 2,
    text: "How does the control room method build on the visualization techniques introduced earlier?",
    options: ["1 (No connection)", "2", "3 (Some integration)", "4", "5 (Strong integration)"],
    followUps: [
      {
        text: "Do you use any visualization techniques within the control room process?",
        type: "checkbox" as const,
        options: ["Dimming", "Shrinking", "Movement control", "Other"]
      }
    ]
  },
  {
    id: 3,
    text: "How do movement-based techniques integrate with control room adjustments?",
    options: ["1 (No integration)", "2", "3 (Some integration)", "4", "5 (Strong integration)"],
    followUps: [
      {
        text: "Which process feels more natural for managing discomfort?",
        type: "radio" as const,
        options: ["Control room adjustments", "Movement transformation", "Both equally", "Neither"]
      }
    ]
  },
  {
    id: 4,
    text: "How do visualization, control room, and movement techniques work together as a cohesive process?",
    options: ["1 (Not cohesive)", "2", "3 (Somewhat cohesive)", "4", "5 (Very cohesive)"],
    followUps: [
      {
        text: "What new skills or insights have you developed by integrating these methods?",
        type: "checkbox" as const,
        options: ["Better awareness", "Increased control", "New coping strategies", "Other"]
      }
    ]
  }
];