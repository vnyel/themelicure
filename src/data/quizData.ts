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
  category: "personality" | "style" | "hand shape" | "durability" | "lifestyle";
  questionText: string;
  answers: QuizOption[];
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: "q1",
    category: "personality",
    questionText: "Which word best describes your personality?",
    answers: [
      { answerText: "Bold & Daring", scoreImpact: { Stiletto: 3, Coffin: 2, Almond: 1 } },
      { answerText: "Classic & Elegant", scoreImpact: { Oval: 3, Almond: 2, Squoval: 1 } },
      { answerText: "Practical & Down-to-Earth", scoreImpact: { Round: 3, Square: 2, Squoval: 1 } },
      { answerText: "Trendy & Modern", scoreImpact: { Coffin: 3, Ballerina: 2, Square: 1 } },
    ],
  },
  {
    id: "q2",
    category: "style",
    questionText: "What's your go-to personal style?",
    answers: [
      { answerText: "Minimalist & Chic", scoreImpact: { Squoval: 3, Round: 2, Oval: 1 } },
      { answerText: "Glamorous & Luxurious", scoreImpact: { Stiletto: 3, Coffin: 2, Almond: 1 } },
      { answerText: "Casual & Comfortable", scoreImpact: { Round: 3, Square: 2, Squoval: 1 } },
      { answerText: "Edgy & Unique", scoreImpact: { Coffin: 3, Stiletto: 2, Ballerina: 1 } },
    ],
  },
  {
    id: "q3",
    category: "hand shape",
    questionText: "Describe your hands and fingers:",
    answers: [
      { answerText: "Long & Slender", scoreImpact: { Square: 3, Squoval: 2, Round: 1 } },
      { answerText: "Short & Wide", scoreImpact: { Oval: 3, Almond: 2, Stiletto: 1 } },
      { answerText: "Average Proportion", scoreImpact: { Coffin: 2, Ballerina: 2, Squoval: 1 } },
      { answerText: "Delicate & Small", scoreImpact: { Round: 3, Oval: 2, Almond: 1 } },
    ],
  },
  {
    id: "q4",
    category: "durability",
    questionText: "What are your nail durability needs?",
    answers: [
      { answerText: "Very Durable (I'm hard on my nails)", scoreImpact: { Square: 3, Round: 2, Squoval: 1 } },
      { answerText: "Moderately Durable (Some wear and tear)", scoreImpact: { Oval: 2, Almond: 2, Coffin: 1 } },
      { answerText: "Less Concerned (I'm gentle with my nails)", scoreImpact: { Stiletto: 3, Ballerina: 2, Coffin: 1 } },
    ],
  },
  {
    id: "q5",
    category: "lifestyle",
    questionText: "Which best describes your daily activities?",
    answers: [
      { answerText: "Hands-on work (typing, crafting, etc.)", scoreImpact: { Round: 3, Squoval: 2, Square: 1 } },
      { answerText: "Active lifestyle (sports, outdoors)", scoreImpact: { Round: 3, Squoval: 2, Oval: 1 } },
      { answerText: "Professional/Office environment", scoreImpact: { Almond: 3, Oval: 2, Squoval: 1 } },
      { answerText: "Social & Creative pursuits", scoreImpact: { Stiletto: 3, Coffin: 2, Ballerina: 1 } },
    ],
  },
];