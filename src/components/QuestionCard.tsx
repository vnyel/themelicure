import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { QuizQuestion, QuizOption } from "@/data/quizData";

interface QuestionCardProps {
  question: QuizQuestion;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (associatedNailShape: string) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
}) => {
  return (
    <Card className="w-full max-w-lg mx-auto text-center rounded-xl shadow-lg p-6 bg-white animate-in fade-in duration-500">
      <CardHeader>
        <CardTitle className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
          Question {questionNumber} of {totalQuestions}
        </CardTitle>
        <CardDescription className="text-lg sm:text-xl text-gray-700 font-medium">
          {question.questionText}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center space-y-4">
        {question.answers.map((option: QuizOption, index: number) => (
          <Button
            key={index}
            onClick={() => onAnswer(option.associatedNailShape)}
            className="w-full max-w-[90%] sm:max-w-[600px] mx-auto py-3 px-5 text-base sm:text-lg rounded-full bg-gray-100 text-gray-800 border border-gray-200 hover:bg-pink-50 hover:border-pink-200 hover:text-pink-600 transition-all duration-200 ease-in-out shadow-sm hover:shadow-md text-wrap text-center h-auto"
          >
            {option.answerText}
          </Button>
        ))}
      </CardContent>
    </Card>
  );
};

export default QuestionCard;