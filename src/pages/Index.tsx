import React, { useState, useEffect } from "react";
import { MadeWithDyad } from "@/components/made-with-dyad";
import WelcomeScreen from "@/components/WelcomeScreen";
import QuestionCard from "@/components/QuestionCard";
import ResultScreen from "@/components/ResultScreen";
import ProgressBar from "@/components/ProgressBar";
import LanguageToggle from "@/components/LanguageToggle"; // Import LanguageToggle
import { NAIL_SHAPES, QUIZ_QUESTIONS, QuizQuestion } from "@/data/quizData";
import { shuffleArray } from "@/lib/utils"; // Import shuffleArray
import { useTranslation } from "react-i18next"; // Import useTranslation

type QuizStep = "welcome" | "quiz" | "results";

const Index: React.FC = () => {
  const { t } = useTranslation(); // Initialize useTranslation
  const [currentStep, setCurrentStep] = useState<QuizStep>("welcome");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scores, setScores] = useState<{ [key: string]: number }>(() => {
    const initialScores: { [key: string]: number } = {};
    NAIL_SHAPES.forEach((shape) => (initialScores[shape] = 0));
    return initialScores;
  });
  const [recommendedShape, setRecommendedShape] = useState<string | null>(null);
  const [shuffledQuizQuestions, setShuffledQuizQuestions] = useState<QuizQuestion[]>([]);

  const startQuiz = () => {
    setCurrentQuestionIndex(0);
    const initialScores: { [key: string]: number } = {};
    NAIL_SHAPES.forEach((shape) => (initialScores[shape] = 0));
    setScores(initialScores);
    setRecommendedShape(null);

    // Deep copy and shuffle answers for each question
    const questionsWithShuffledAnswers = QUIZ_QUESTIONS.map(question => ({
      ...question,
      answers: shuffleArray(question.answers),
    }));
    setShuffledQuizQuestions(questionsWithShuffledAnswers);

    setCurrentStep("quiz");
  };

  const handleAnswer = (associatedNailShape: string) => {
    setScores((prevScores) => {
      const newScores = { ...prevScores };
      newScores[associatedNailShape] = (newScores[associatedNailShape] || 0) + 1;
      return newScores;
    });

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < shuffledQuizQuestions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      calculateFinalResult();
    }
  };

  const calculateFinalResult = () => {
    let maxScore = -1;
    let winningShape: string | null = null;

    // Iterate through NAIL_SHAPES to apply tie-break rule (first in ordered list)
    for (const shape of NAIL_SHAPES) {
      const score = scores[shape];
      if (score > maxScore) {
        maxScore = score;
        winningShape = shape;
      }
    }
    setRecommendedShape(winningShape);
    setCurrentStep("results");
  };

  const retakeQuiz = () => {
    setCurrentStep("welcome");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-50 to-purple-50 p-4">
      <div className="absolute top-4 right-4 z-10">
        <LanguageToggle />
      </div>
      <div className="flex-grow flex flex-col items-center justify-center w-full">
        {currentStep === "quiz" && (
          <ProgressBar
            current={currentQuestionIndex + 1}
            total={shuffledQuizQuestions.length}
          />
        )}

        {currentStep === "welcome" && (
          <div key="welcome-screen" className="animate-in fade-in duration-500">
            <WelcomeScreen onStartQuiz={startQuiz} />
          </div>
        )}
        {currentStep === "quiz" && shuffledQuizQuestions.length > 0 && (
          <div key={`question-${currentQuestionIndex}`} className="animate-in fade-in duration-500">
            <QuestionCard
              question={shuffledQuizQuestions[currentQuestionIndex]}
              questionNumber={currentQuestionIndex + 1}
              totalQuestions={shuffledQuizQuestions.length}
              onAnswer={handleAnswer}
            />
          </div>
        )}
        {currentStep === "results" && recommendedShape && (
          <div key="result-screen" className="animate-in fade-in duration-500">
            <ResultScreen recommendedShape={recommendedShape} onRetakeQuiz={retakeQuiz} />
          </div>
        )}
      </div>
      <MadeWithDyad />
    </div>
  );
};

export default Index;