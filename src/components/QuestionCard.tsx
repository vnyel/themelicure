import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { QuizQuestion, QuizOption } from "@/data/quizData";

interface QuestionCardProps {
  question: QuizQuestion;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (weights: { [key: string]: number }) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
}) => {
  return (
    <Card className="w-full max-w-lg mx-auto text-center rounded-xl shadow-lg p-6 bg-white">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold text-gray-800 mb-2">
          Question {questionNumber} of {totalQuestions}
        </CardTitle>
        <CardDescription className="text-xl text-gray-700 font-medium">
          {question.question}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center space-y-4">
        {question.options.map((option: QuizOption, index: number) => (
          <Button
            key={index}
            onClick={() => onAnswer(option.weights)}
            className="w-full py-3 text-lg rounded-full bg-gray-100 text-gray-800 border border-gray-200 hover:bg-pink-50 hover:border-pink-200 hover:text-pink-600 transition-all duration-200 ease-in-out shadow-sm hover:shadow-md"
          >
            {option.text}
          </Button>
        ))}
      </CardContent>
    </Card>
  );
};

export default QuestionCard;