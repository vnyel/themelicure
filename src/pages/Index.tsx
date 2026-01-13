import React, { useState, useEffect } from "react";
import { MadeWithDyad } from "@/components/made-with-dyad";
import WelcomeScreen from "@/components/WelcomeScreen";
import QuestionCard from "@/components/QuestionCard";
import ResultScreen from "@/components/ResultScreen";
import { NAIL_SHAPES, QUIZ_QUESTIONS } from "@/data/quizData";

type QuizStep = "welcome" | "quiz" | "results";

const Index: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<QuizStep>("welcome");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scores, setScores] = useState<{ [key: string]: number }>(() => {
    const initialScores: { [key: string]: number } = {};
    NAIL_SHAPES.forEach((shape) => (initialScores[shape] = 0));
    return initialScores;
  });
  const [recommendedShape, setRecommendedShape] = useState<string | null>(null);

  const startQuiz = () => {
    setCurrentQuestionIndex(0);
    const initialScores: { [key: string]: number } = {};
    NAIL_SHAPES.forEach((shape) => (initialScores[shape] = 0));
    setScores(initialScores);
    setRecommendedShape(null);
    setCurrentStep("quiz");
  };

  const handleAnswer = (weights: { [key: string]: number }) => {
    setScores((prevScores) => {
      const newScores = { ...prevScores };
      for (const shape in weights) {
        if (newScores.hasOwnProperty(shape)) {
          newScores[shape] += weights[shape];
        }
      }
      return newScores;
    });

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < QUIZ_QUESTIONS.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      calculateResult();
    }
  };

  const calculateResult = () => {
    let maxScore = -1;
    let winningShape: string | null = null;

    // Iterate through NAIL_SHAPES to maintain tie-breaking order
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
      <div className="flex-grow flex items-center justify-center w-full">
        {currentStep === "welcome" && <WelcomeScreen onStartQuiz={startQuiz} />}
        {currentStep === "quiz" && (
          <QuestionCard
            question={QUIZ_QUESTIONS[currentQuestionIndex]}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={QUIZ_QUESTIONS.length}
            onAnswer={handleAnswer}
          />
        )}
        {currentStep === "results" && recommendedShape && (
          <ResultScreen recommendedShape={recommendedShape} onRetakeQuiz={retakeQuiz} />
        )}
      </div>
      <MadeWithDyad />
    </div>
  );
};

export default Index;