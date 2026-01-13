export const NAIL_SHAPES = [
  "Almond",
  "Square",
  "Squoval",
  "Coffin",
  "Stiletto",
  "Oval",
  "Round",
  "Ballerina",
];

export interface QuizOption {
  answerText: string;
  associatedNailShape: string; // Changed from scoreImpact
}

export interface QuizQuestion {
  id: string;
  questionText: string;
  answers: QuizOption[];
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: "q1",
    questionText: "Which style best fits your personality?",
    answers: [
      { answerText: "Elegant & graceful", associatedNailShape: "Almond" },
      { answerText: "Classic & structured", associatedNailShape: "Square" },
      { answerText: "Balanced & practical", associatedNailShape: "Squoval" },
      { answerText: "Bold & edgy", associatedNailShape: "Coffin" },
      { answerText: "Confident & dramatic", associatedNailShape: "Stiletto" },
      { answerText: "Soft & feminine", associatedNailShape: "Oval" },
      { answerText: "Minimal & natural", associatedNailShape: "Round" },
      { answerText: "Trendy & stylish", associatedNailShape: "Ballerina" },
    ],
  },
  {
    id: "q2",
    questionText: "Which hand shape describes you best?",
    answers: [
      { answerText: "Long slender fingers", associatedNailShape: "Almond" },
      { answerText: "Wide nail beds", associatedNailShape: "Square" },
      { answerText: "Straight fingers", associatedNailShape: "Squoval" },
      { answerText: "Tapered fingers", associatedNailShape: "Coffin" },
      { answerText: "Long narrow fingers", associatedNailShape: "Stiletto" },
      { answerText: "Average proportioned fingers", associatedNailShape: "Oval" },
      { answerText: "Short fingers", associatedNailShape: "Round" },
      { answerText: "Medium-length fingers", associatedNailShape: "Ballerina" },
    ],
  },
  {
    id: "q3",
    questionText: "What’s your daily lifestyle?",
    answers: [
      { answerText: "Social & elegant", associatedNailShape: "Almond" },
      { answerText: "Practical & work-focused", associatedNailShape: "Square" },
      { answerText: "Balanced & adaptable", associatedNailShape: "Squoval" },
      { answerText: "Bold & fashion-forward", associatedNailShape: "Coffin" },
      { answerText: "Glamorous & outgoing", associatedNailShape: "Stiletto" },
      { answerText: "Soft & calm", associatedNailShape: "Oval" },
      { answerText: "Active & low-maintenance", associatedNailShape: "Round" },
      { answerText: "Trendy & creative", associatedNailShape: "Ballerina" },
    ],
  },
  {
    id: "q4",
    questionText: "How do you prefer nail length?",
    answers: [
      { answerText: "Medium to long", associatedNailShape: "Almond" },
      { answerText: "Short to medium", associatedNailShape: "Square" },
      { answerText: "Medium", associatedNailShape: "Squoval" },
      { answerText: "Long", associatedNailShape: "Coffin" },
      { answerText: "Long and pointed", associatedNailShape: "Stiletto" },
      { answerText: "Medium", associatedNailShape: "Oval" },
      { answerText: "Short", associatedNailShape: "Round" },
      { answerText: "Medium to long", associatedNailShape: "Ballerina" },
    ],
  },
  {
    id: "q5",
    questionText: "What describes your maintenance style?",
    answers: [
      { answerText: "Regular salon visits", associatedNailShape: "Almond" },
      { answerText: "Low-maintenance", associatedNailShape: "Square" },
      { answerText: "Moderate", associatedNailShape: "Squoval" },
      { answerText: "Frequent redesigns", associatedNailShape: "Coffin" },
      { answerText: "High upkeep", associatedNailShape: "Stiletto" },
      { answerText: "Balanced", associatedNailShape: "Oval" },
      { answerText: "Minimal", associatedNailShape: "Round" },
      { answerText: "Trendy & consistent", associatedNailShape: "Ballerina" },
    ],
  },
  {
    id: "q6",
    questionText: "Which vibe do you most identify with?",
    answers: [
      { answerText: "Elegant & feminine", associatedNailShape: "Almond" },
      { answerText: "Classic & practical", associatedNailShape: "Square" },
      { answerText: "Calm & balanced", associatedNailShape: "Squoval" },
      { answerText: "Bold & edgy", associatedNailShape: "Coffin" },
      { answerText: "Dramatic & confident", associatedNailShape: "Stiletto" },
      { answerText: "Soft & approachable", associatedNailShape: "Oval" },
      { answerText: "Simple & natural", associatedNailShape: "Round" },
      { answerText: "Fun & fashionable", associatedNailShape: "Ballerina" },
    ],
  },
];

export const NAIL_SHAPE_DESCRIPTIONS: { [key: string]: string } = {
  Almond: "Elegant and sophisticated, the almond shape elongates fingers and adds a touch of classic glamour, perfect for a refined look.",
  Square: "Strong and modern, square nails offer a clean, crisp edge that's both practical and stylish, ideal for those who prefer a bold, structured aesthetic.",
  Squoval: "The best of both worlds, squoval nails combine the strength of square with the softness of oval, offering a versatile and universally flattering shape.",
  Coffin: "Dramatic and chic, coffin (or ballerina) nails are tapered with a flat tip, exuding confidence and a high-fashion appeal for the trendsetter.",
  Stiletto: "Bold and edgy, stiletto nails are sharply pointed, making a powerful statement and creating the illusion of extra-long, slender fingers.",
  Oval: "Classic and graceful, oval nails are soft and feminine, flattering most hand shapes by elongating fingers with a gentle, rounded curve.",
  Round: "Simple and practical, round nails are low-maintenance and durable, perfect for those who prefer a natural look and active lifestyle.",
  Ballerina: "Similar to coffin but often slightly more tapered, ballerina nails are elegant and sophisticated, offering a chic, elongated look with a flat, squared-off tip.",
};