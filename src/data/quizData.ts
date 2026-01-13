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
  text: string;
  weights: { [key: string]: number };
}

export interface QuizQuestion {
  question: string;
  options: QuizOption[];
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    question: "Which word best describes your personality?",
    options: [
      { text: "Bold & Daring", weights: { Stiletto: 3, Coffin: 2, Almond: 1 } },
      { text: "Classic & Elegant", weights: { Oval: 3, Almond: 2, Squoval: 1 } },
      { text: "Practical & Down-to-Earth", weights: { Round: 3, Square: 2, Squoval: 1 } },
      { text: "Trendy & Modern", weights: { Coffin: 3, Ballerina: 2, Square: 1 } },
    ],
  },
  {
    question: "What's your go-to personal style?",
    options: [
      { text: "Minimalist & Chic", weights: { Squoval: 3, Round: 2, Oval: 1 } },
      { text: "Glamorous & Luxurious", weights: { Stiletto: 3, Coffin: 2, Almond: 1 } },
      { text: "Casual & Comfortable", weights: { Round: 3, Square: 2, Squoval: 1 } },
      { text: "Edgy & Unique", weights: { Coffin: 3, Stiletto: 2, Ballerina: 1 } },
    ],
  },
  {
    question: "Describe your hands and fingers:",
    options: [
      { text: "Long & Slender", weights: { Square: 3, Squoval: 2, Round: 1 } },
      { text: "Short & Wide", weights: { Oval: 3, Almond: 2, Stiletto: 1 } },
      { text: "Average Proportion", weights: { Coffin: 2, Ballerina: 2, Squoval: 1 } },
      { text: "Delicate & Small", weights: { Round: 3, Oval: 2, Almond: 1 } },
    ],
  },
  {
    question: "What are your nail durability needs?",
    options: [
      { text: "Very Durable (I'm hard on my nails)", weights: { Square: 3, Round: 2, Squoval: 1 } },
      { text: "Moderately Durable (Some wear and tear)", weights: { Oval: 2, Almond: 2, Coffin: 1 } },
      { text: "Less Concerned (I'm gentle with my nails)", weights: { Stiletto: 3, Ballerina: 2, Coffin: 1 } },
    ],
  },
  {
    question: "Which best describes your daily activities?",
    options: [
      { text: "Hands-on work (typing, crafting, etc.)", weights: { Round: 3, Squoval: 2, Square: 1 } },
      { text: "Active lifestyle (sports, outdoors)", weights: { Round: 3, Squoval: 2, Oval: 1 } },
      { text: "Professional/Office environment", weights: { Almond: 3, Oval: 2, Squoval: 1 } },
      { text: "Social & Creative pursuits", weights: { Stiletto: 3, Coffin: 2, Ballerina: 1 } },
    ],
  },
];