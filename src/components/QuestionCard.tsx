import React from "react";
import ButtonWithFairyDust from "@/components/ButtonWithFairyDust"; // Use the new component
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { QuizQuestion, QuizOption } from "@/data/quizData";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  return (
    <Card className="w-full max-w-lg mx-auto text-center rounded-xl shadow-lg p-6 bg-white animate-in fade-in duration-500">
      <CardHeader>
        <CardTitle className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
          {t("common.questionOf", { current: questionNumber, total: totalQuestions })}
        </CardTitle>
        <CardDescription className="text-lg sm:text-xl text-gray-700 font-medium">
          {t(question.questionKey)}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center space-y-4">
        {question.answers.map((option: QuizOption, index: number) => (
          <ButtonWithFairyDust // Use ButtonWithFairyDust here
            key={index}
            onClick={() => onAnswer(option.associatedNailShape)}
            className="w-full max-w-[90%] sm:max-w-[600px] mx-auto py-3 px-5 text-base sm:text-lg rounded-full bg-gray-100 text-gray-800 border border-gray-200 hover:bg-pink-50 hover:border-pink-200 hover:text-pink-600 transition-all duration-200 ease-in-out shadow-sm hover:shadow-md text-wrap text-center h-auto"
          >
            {t(option.answerKey)}
          </ButtonWithFairyDust>
        ))}
      </CardContent>
    </Card>
  );
};

export default QuestionCard;