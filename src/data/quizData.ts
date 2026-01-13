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
  answerKey: string; // Changed to key for translation
  associatedNailShape: string;
}

export interface QuizQuestion {
  id: string;
  questionKey: string; // Changed to key for translation
  answers: QuizOption[];
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: "q1",
    questionKey: "quizQuestions.q1_question",
    answers: [
      { answerKey: "quizQuestions.q1_answer1", associatedNailShape: "Round" },
      { answerKey: "quizQuestions.q1_answer2", associatedNailShape: "Almond" },
      { answerKey: "quizQuestions.q1_answer3", associatedNailShape: "Square" },
      { answerKey: "quizQuestions.q1_answer4", associatedNailShape: "Squoval" },
      { answerKey: "quizQuestions.q1_answer5", associatedNailShape: "Stiletto" },
      { answerKey: "quizQuestions.q1_answer6", associatedNailShape: "Ballerina" },
      { answerKey: "quizQuestions.q1_answer7", associatedNailShape: "Coffin" },
      { answerKey: "quizQuestions.q1_answer8", associatedNailShape: "Oval" }
    ]
  },
  {
    id: "q2",
    questionKey: "quizQuestions.q2_question",
    answers: [
      { answerKey: "quizQuestions.q2_answer1", associatedNailShape: "Oval" },
      { answerKey: "quizQuestions.q2_answer2", associatedNailShape: "Round" },
      { answerKey: "quizQuestions.q2_answer3", associatedNailShape: "Coffin" },
      { answerKey: "quizQuestions.q2_answer4", associatedNailShape: "Squoval" },
      { answerKey: "quizQuestions.q2_answer5", associatedNailShape: "Ballerina" },
      { answerKey: "quizQuestions.q2_answer6", associatedNailShape: "Square" },
      { answerKey: "quizQuestions.q2_answer7", associatedNailShape: "Stiletto" },
      { answerKey: "quizQuestions.q2_answer8", associatedNailShape: "Almond" }
    ]
  },
  {
    id: "q3",
    questionKey: "quizQuestions.q3_question",
    answers: [
      { answerKey: "quizQuestions.q3_answer1", associatedNailShape: "Oval" },
      { answerKey: "quizQuestions.q3_answer2", associatedNailShape: "Square" },
      { answerKey: "quizQuestions.q3_answer3", associatedNailShape: "Round" },
      { answerKey: "quizQuestions.q3_answer4", associatedNailShape: "Squoval" },
      { answerKey: "quizQuestions.q3_answer5", associatedNailShape: "Almond" },
      { answerKey: "quizQuestions.q3_answer6", associatedNailShape: "Stiletto" },
      { answerKey: "quizQuestions.q3_answer7", associatedNailShape: "Ballerina" },
      { answerKey: "quizQuestions.q3_answer8", associatedNailShape: "Coffin" }
    ]
  },
  {
    id: "q4",
    questionKey: "quizQuestions.q4_question",
    answers: [
      { answerKey: "quizQuestions.q4_answer1", associatedNailShape: "Round" },
      { answerKey: "quizQuestions.q4_answer2", associatedNailShape: "Stiletto" },
      { answerKey: "quizQuestions.q4_answer3", associatedNailShape: "Squoval" },
      { answerKey: "quizQuestions.q4_answer4", associatedNailShape: "Almond" },
      { answerKey: "quizQuestions.q4_answer5", associatedNailShape: "Coffin" },
      { answerKey: "quizQuestions.q4_answer6", associatedNailShape: "Square" },
      { answerKey: "quizQuestions.q4_answer7", associatedNailShape: "Oval" },
      { answerKey: "quizQuestions.q4_answer8", associatedNailShape: "Ballerina" }
    ]
  },
  {
    id: "q5",
    questionKey: "quizQuestions.q5_question",
    answers: [
      { answerKey: "quizQuestions.q5_answer1", associatedNailShape: "Round" },
      { answerKey: "quizQuestions.q5_answer2", associatedNailShape: "Oval" },
      { answerKey: "quizQuestions.q5_answer3", associatedNailShape: "Squoval" },
      { answerKey: "quizQuestions.q5_answer4", associatedNailShape: "Square" },
      { answerKey: "quizQuestions.q5_answer5", associatedNailShape: "Almond" },
      { answerKey: "quizQuestions.q5_answer6", associatedNailShape: "Ballerina" },
      { answerKey: "quizQuestions.q5_answer7", associatedNailShape: "Coffin" },
      { answerKey: "quizQuestions.q5_answer8", associatedNailShape: "Stiletto" }
    ]
  },
  {
    id: "q6",
    questionKey: "quizQuestions.q6_question",
    answers: [
      { answerKey: "quizQuestions.q6_answer1", associatedNailShape: "Round" },
      { answerKey: "quizQuestions.q6_answer2", associatedNailShape: "Oval" },
      { answerKey: "quizQuestions.q6_answer3", associatedNailShape: "Square" },
      { answerKey: "quizQuestions.q6_answer4", associatedNailShape: "Ballerina" },
      { answerKey: "quizQuestions.q6_answer5", associatedNailShape: "Almond" },
      { answerKey: "quizQuestions.q6_answer6", associatedNailShape: "Coffin" },
      { answerKey: "quizQuestions.q6_answer7", associatedNailShape: "Stiletto" },
      { answerKey: "quizQuestions.q6_answer8", associatedNailShape: "Squoval" }
    ]
  },
  {
    id: "q7",
    questionKey: "quizQuestions.q7_question",
    answers: [
      { answerKey: "quizQuestions.q7_answer1", associatedNailShape: "Squoval" },
      { answerKey: "quizQuestions.q7_answer2", associatedNailShape: "Square" },
      { answerKey: "quizQuestions.q7_answer3", associatedNailShape: "Round" },
      { answerKey: "quizQuestions.q7_answer4", associatedNailShape: "Almond" },
      { answerKey: "quizQuestions.q7_answer5", associatedNailShape: "Ballerina" },
      { answerKey: "quizQuestions.q7_answer6", associatedNailShape: "Stiletto" },
      { answerKey: "quizQuestions.q7_answer7", associatedNailShape: "Coffin" },
      { answerKey: "quizQuestions.q7_answer8", associatedNailShape: "Oval" }
    ]
  },
  {
    id: "q8",
    questionKey: "quizQuestions.q8_question",
    answers: [
      { answerKey: "quizQuestions.q8_answer1", associatedNailShape: "Stiletto" },
      { answerKey: "quizQuestions.q8_answer2", associatedNailShape: "Almond" },
      { answerKey: "quizQuestions.q8_answer3", associatedNailShape: "Square" },
      { answerKey: "quizQuestions.q8_answer4", associatedNailShape: "Squoval" },
      { answerKey: "quizQuestions.q8_answer5", associatedNailShape: "Round" },
      { answerKey: "quizQuestions.q8_answer6", associatedNailShape: "Oval" },
      { answerKey: "quizQuestions.q8_answer7", associatedNailShape: "Ballerina" },
      { answerKey: "quizQuestions.q8_answer8", associatedNailShape: "Coffin" }
    ]
  },
  {
    id: "q9",
    questionKey: "quizQuestions.q9_question",
    answers: [
      { answerKey: "quizQuestions.q9_answer1", associatedNailShape: "Coffin" },
      { answerKey: "quizQuestions.q9_answer2", associatedNailShape: "Square" },
      { answerKey: "quizQuestions.q9_answer3", associatedNailShape: "Round" },
      { answerKey: "quizQuestions.q9_answer4", associatedNailShape: "Oval" },
      { answerKey: "quizQuestions.q9_answer5", associatedNailShape: "Squoval" },
      { answerKey: "quizQuestions.q9_answer6", associatedNailShape: "Almond" },
      { answerKey: "quizQuestions.q9_answer7", associatedNailShape: "Stiletto" },
      { answerKey: "quizQuestions.q9_answer8", associatedNailShape: "Ballerina" }
    ]
  }
];

export const NAIL_SHAPE_DESCRIPTION_KEYS: { [key: string]: string } = {
  Almond: "nailShapes.Almond_description",
  Square: "nailShapes.Square_description",
  Squoval: "nailShapes.Squoval_description",
  Coffin: "nailShapes.Coffin_description",
  Stiletto: "nailShapes.Stiletto_description",
  Oval: "nailShapes.Oval_description",
  Round: "nailShapes.Round_description",
  Ballerina: "nailShapes.Ballerina_description",
};