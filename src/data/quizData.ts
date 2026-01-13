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
  associatedNailShape: string;
}

export interface QuizQuestion {
  id: string;
  questionText: string;
  answers: QuizOption[];
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: "q1",
    questionText: "Your friends want to go outside. Which activity are you suggesting?",
    answers: [
      { answerText: "Taking a walk around the block", associatedNailShape: "Round" },
      { answerText: "Drinking a coffee at your favourite café", associatedNailShape: "Almond" },
      { answerText: "Shoppinggg!", associatedNailShape: "Square" },
      { answerText: "Playing football or basketball", associatedNailShape: "Squoval" },
      { answerText: "Let's get a little tipsy🍷", associatedNailShape: "Stiletto" },
      { answerText: "How about going to the cinema?!", associatedNailShape: "Ballerina" },
      { answerText: "A completely spontaneous road trip", associatedNailShape: "Coffin" },
      { answerText: "To the taverna we go", associatedNailShape: "Oval" }
    ]
  },
  {
    id: "q2",
    questionText: "It's a rainy Sunday. What do you do?",
    answers: [
      { answerText: "Read a book", associatedNailShape: "Oval" },
      { answerText: "Scroll on Pinterest and listen to my favorite songs", associatedNailShape: "Round" },
      { answerText: "Go outside because I actually enjoy the rain!", associatedNailShape: "Coffin" },
      { answerText: "Have some quality time with my family", associatedNailShape: "Squoval" },
      { answerText: "Watch my comfort series/movies", associatedNailShape: "Ballerina" },
      { answerText: "Seems like a perfect day to clean the house!", associatedNailShape: "Square" },
      { answerText: "Try out new make-up, hairstyles and outfits", associatedNailShape: "Stiletto" },
      { answerText: "Probably finding out about a new topic and falling into a rabbit hole online", associatedNailShape: "Almond" }
    ]
  },
  {
    id: "q3",
    questionText: "What's something you're really good at?",
    answers: [
      { answerText: "I have a good intuition about the character of a person I just met", associatedNailShape: "Oval" },
      { answerText: "I can be really organized", associatedNailShape: "Square" },
      { answerText: "People tell me I have a charming character so I get along easily with anybody", associatedNailShape: "Round" },
      { answerText: "I'm a pretty sporty person", associatedNailShape: "Squoval" },
      { answerText: "I'm really creative", associatedNailShape: "Almond" },
      { answerText: "I'm extroverted and brave. If I really want something, I will find ways to get it", associatedNailShape: "Stiletto" },
      { answerText: "I'm really good at cooking and baking", associatedNailShape: "Ballerina" },
      { answerText: "I'm a trendsetter. When I do or wear something, people will follow", associatedNailShape: "Coffin" }
    ]
  },
  {
    id: "q4",
    questionText: "What is a piece of clothing you really love to wear? (And wish you could wear it every day)",
    answers: [
      { answerText: "A big cozy scarf", associatedNailShape: "Round" },
      { answerText: "High heels, especially red or black ones", associatedNailShape: "Stiletto" },
      { answerText: "A comfortable hoodie", associatedNailShape: "Squoval" },
      { answerText: "A flowy dress", associatedNailShape: "Almond" },
      { answerText: "A Y2K tube top", associatedNailShape: "Coffin" },
      { answerText: "A good fitting monochrome blouse and trousers set", associatedNailShape: "Square" },
      { answerText: "Anything 60's or 70's fashion inspired", associatedNailShape: "Oval" },
      { answerText: "An oversized sweater which is so big that I could live in it", associatedNailShape: "Ballerina" }
    ]
  },
  {
    id: "q5",
    questionText: "Which nail length do you like?",
    answers: [
      { answerText: "As short as possible", associatedNailShape: "Round" },
      { answerText: "I like them short. Medium only on special occasions", associatedNailShape: "Oval" },
      { answerText: "Shorter would be better because I work a lot with my hands, but I would love medium nails if I could", associatedNailShape: "Squoval" },
      { answerText: "Shorter if I want a clean look, medium to long if I feel like it", associatedNailShape: "Square" },
      { answerText: "I like medium nails the most", associatedNailShape: "Almond" },
      { answerText: "Medium, but long would also be fine if it's a really simple design", associatedNailShape: "Ballerina" },
      { answerText: "Medium is okay, but long is better I think", associatedNailShape: "Coffin" },
      { answerText: "Long at least. XXL would be better", associatedNailShape: "Stiletto" }
    ]
  },
  {
    id: "q6",
    questionText: "How would you describe your hand shape?",
    answers: [
      { answerText: "Small hand, short fingers", associatedNailShape: "Round" },
      { answerText: "Small hand, long fingers", associatedNailShape: "Oval" },
      { answerText: "Round hand, short fingers", associatedNailShape: "Square" },
      { answerText: "Round hand, long fingers", associatedNailShape: "Ballerina" },
      { answerText: "Average hand, long fingers", associatedNailShape: "Almond" },
      { answerText: "Average hand, short fingers", associatedNailShape: "Coffin" },
      { answerText: "Rectangular hand, short fingers", associatedNailShape: "Stiletto" },
      { answerText: "Rectangular hand, long fingers", associatedNailShape: "Squoval" }
    ]
  },
  {
    id: "q7",
    questionText: "Do you use your hands often?",
    answers: [
      { answerText: "Yes, I work hard with my hands every day", associatedNailShape: "Squoval" },
      { answerText: "I use them for keyboards, documents, average to minor household duties", associatedNailShape: "Square" },
      { answerText: "Yes I do but not too hard", associatedNailShape: "Round" },
      { answerText: "Not really, just minor everyday stuff", associatedNailShape: "Almond" },
      { answerText: "I do, but I don't mind doing them with nails on", associatedNailShape: "Ballerina" },
      { answerText: "No, but if I do, nails wouldn't stop me doing whatever I want", associatedNailShape: "Stiletto" },
      { answerText: "No", associatedNailShape: "Coffin" },
      { answerText: "It really depends, but long nails would annoy me if I have a lot to do", associatedNailShape: "Oval" }
    ]
  },
  {
    id: "q8",
    questionText: "How often do you want to come over for a fresh set?",
    answers: [
      { answerText: "Every 3 weeks", associatedNailShape: "Stiletto" },
      { answerText: "Every 4 weeks", associatedNailShape: "Almond" },
      { answerText: "As soon as my packed calendar lets me", associatedNailShape: "Square" },
      { answerText: "I will try to come regularly but most probably somewhere between 4-5 weeks", associatedNailShape: "Squoval" },
      { answerText: "As soon as my nails look really grown out", associatedNailShape: "Round" },
      { answerText: "As soon as I want, sometimes I don't want to wear nails for months", associatedNailShape: "Oval" },
      { answerText: "It depends on how long my nails are. If it's a short set, I will come later", associatedNailShape: "Ballerina" },
      { answerText: "As soon as I see a good nail inspo online, I cannot hold myself back to get a new set", associatedNailShape: "Coffin" }
    ]
  },
  {
    id: "q9",
    questionText: "How would you describe your vibe?",
    answers: [
      { answerText: "Edgy. I'm unapologetically myself.", associatedNailShape: "Coffin" },
      { answerText: "Prepared. I always have a plan for everything.", associatedNailShape: "Square" },
      { answerText: "Natural. I'm not picky with anything and you can always count on me.", associatedNailShape: "Round" },
      { answerText: "Chill. I don't get irritated easily.", associatedNailShape: "Oval" },
      { answerText: "Active. I have an active lifestyle and I love it.", associatedNailShape: "Squoval" },
      { answerText: "Soft. I'm creative, feminine, and love cozy, girly things.", associatedNailShape: "Almond" },
      { answerText: "Iconic. I'm bold and like to feel sexy.", associatedNailShape: "Stiletto" },
      { answerText: "Cozy. I love a good movie or book with my favourite soul food on the side.", associatedNailShape: "Ballerina" }
    ]
  }
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