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
  scoreImpact: { [key: string]: number };
}

export interface QuizQuestion {
  id: string;
  category: "personality" | "style" | "hand shape" | "durability" | "lifestyle" | "length" | "comfort" | "maintenance" | "vibe";
  questionText: string;
  answers: QuizOption[];
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: "q1",
    category: "personality",
    questionText: "Which word best describes your personality?",
    answers: [
      { answerText: "Bold & Daring", scoreImpact: { Stiletto: 3, Coffin: 2, Ballerina: 2 } },
      { answerText: "Classic & Elegant", scoreImpact: { Oval: 3, Almond: 2, Squoval: 1 } },
      { answerText: "Soft & Feminine", scoreImpact: { Round: 3, Oval: 2, Almond: 1 } },
      { answerText: "Practical & Minimalist", scoreImpact: { Round: 2, Square: 2, Squoval: 3 } },
    ],
  },
  {
    id: "q2",
    category: "style",
    questionText: "What's your go-to personal style?",
    answers: [
      { answerText: "Minimalist & Chic", scoreImpact: { Squoval: 3, Round: 2, Oval: 1 } },
      { answerText: "Glamorous & Luxurious", scoreImpact: { Stiletto: 3, Coffin: 2, Almond: 1 } },
      { answerText: "Edgy & Unique", scoreImpact: { Coffin: 3, Stiletto: 2, Ballerina: 1 } },
      { answerText: "Natural & Understated", scoreImpact: { Round: 3, Oval: 2, Squoval: 1 } },
    ],
  },
  {
    id: "q3",
    category: "hand shape",
    questionText: "Describe your hands and fingers:",
    answers: [
      { answerText: "Long & Slender", scoreImpact: { Square: 4, Squoval: 3, Coffin: 2 } },
      { answerText: "Short & Wide", scoreImpact: { Oval: 4, Almond: 3, Stiletto: 2 } }, // Stiletto to elongate
      { answerText: "Average Proportion", scoreImpact: { Almond: 3, Oval: 3, Squoval: 2 } },
      { answerText: "Delicate & Small", scoreImpact: { Round: 4, Oval: 3, Almond: 2 } },
    ],
  },
  {
    id: "q4",
    category: "lifestyle",
    questionText: "Which best describes your daily activities?",
    answers: [
      { answerText: "Hands-on work (typing, crafting, etc.)", scoreImpact: { Round: 4, Squoval: 3, Square: 2 } },
      { answerText: "Office / Laptop work", scoreImpact: { Almond: 3, Oval: 3, Squoval: 2 } },
      { answerText: "Fashion / Social-focused", scoreImpact: { Stiletto: 4, Coffin: 3, Ballerina: 3 } },
      { answerText: "Low-maintenance routine", scoreImpact: { Round: 4, Squoval: 3, Oval: 2 } },
    ],
  },
  {
    id: "q5",
    category: "durability",
    questionText: "What are your nail durability needs?",
    answers: [
      { answerText: "Needs maximum strength", scoreImpact: { Square: 4, Round: 3, Squoval: 3 } },
      { answerText: "Medium durability", scoreImpact: { Oval: 3, Almond: 3, Coffin: 2 } },
      { answerText: "Mostly aesthetic", scoreImpact: { Stiletto: 4, Ballerina: 3, Coffin: 3 } },
    ],
  },
  {
    id: "q6",
    category: "length",
    questionText: "What is your preferred nail length?",
    answers: [
      { answerText: "Short", scoreImpact: { Round: 3, Square: 2, Squoval: 3 } },
      { answerText: "Medium", scoreImpact: { Oval: 3, Almond: 3, Squoval: 2 } },
      { answerText: "Long", scoreImpact: { Stiletto: 3, Coffin: 3, Ballerina: 2 } },
    ],
  },
  {
    id: "q7",
    category: "comfort",
    questionText: "Do you prioritize comfort or making a statement?",
    answers: [
      { answerText: "Comfort-first", scoreImpact: { Round: 3, Squoval: 3, Oval: 2 } },
      { answerText: "Balanced", scoreImpact: { Almond: 3, Oval: 2, Squoval: 2 } },
      { answerText: "Statement nails", scoreImpact: { Stiletto: 3, Coffin: 3, Ballerina: 2 } },
    ],
  },
  {
    id: "q8",
    category: "maintenance",
    questionText: "What is your maintenance commitment level?",
    answers: [
      { answerText: "Very low maintenance", scoreImpact: { Round: 3, Squoval: 3, Square: 2 } },
      { answerText: "Regular fills", scoreImpact: { Oval: 3, Almond: 3, Coffin: 2 } },
      { answerText: "Frequent redesigns", scoreImpact: { Stiletto: 3, Ballerina: 2, Coffin: 2 } },
    ],
  },
  {
    id: "q9",
    category: "vibe",
    questionText: "What overall vibe do you want your nails to convey?",
    answers: [
      { answerText: "Soft & feminine", scoreImpact: { Oval: 3, Almond: 3, Round: 2 } },
      { answerText: "Clean & structured", scoreImpact: { Square: 3, Squoval: 3, Coffin: 2 } },
      { answerText: "Edgy & bold", scoreImpact: { Stiletto: 3, Coffin: 3, Ballerina: 2 } },
      { answerText: "Glamorous", scoreImpact: { Stiletto: 2, Coffin: 3, Almond: 3 } },
    ],
  },
];