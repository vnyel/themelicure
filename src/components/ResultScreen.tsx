import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import { NAIL_SHAPE_DESCRIPTION_KEYS } from "@/data/quizData"; // Import description keys
import { useTranslation } from "react-i18next"; // Import useTranslation

interface ResultScreenProps {
  recommendedShape: string;
  onRetakeQuiz: () => void;
}

const ResultScreen: React.FC<ResultScreenProps> = ({ recommendedShape, onRetakeQuiz }) => {
  const { t } = useTranslation(); // Initialize useTranslation
  const descriptionKey = NAIL_SHAPE_DESCRIPTION_KEYS[recommendedShape];
  const description = t(descriptionKey) || t("nailShapes.Almond_description"); // Fallback to a default description if key is not found

  return (
    <Card className="w-full max-w-lg mx-auto text-center rounded-xl shadow-lg p-6 bg-white animate-in fade-in duration-500">
      <CardHeader>
        <CardTitle className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2 flex items-center justify-center gap-2">
          <Sparkles className="text-pink-400" size={36} />
          {t("resultScreen.title")}
          <Sparkles className="text-pink-400" size={36} />
        </CardTitle>
        <CardDescription className="text-base sm:text-lg text-gray-600">
          {t("resultScreen.description")}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center space-y-6">
        <div className="bg-gradient-to-r from-pink-100 to-purple-100 p-6 rounded-full shadow-inner">
          <p className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 animate-pulse">
            {t(`nailShapes.${recommendedShape}`)}
          </p>
        </div>
        <p className="text-sm sm:text-md text-gray-700 leading-relaxed">
          {description}
        </p>
        {/* Placeholder for future nail shape image */}
        <div className="nail-shape-image-container w-48 h-32 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 text-sm italic border border-dashed border-gray-300">
          {t("common.imagePlaceholder", { shape: t(`nailShapes.${recommendedShape}`) })}
        </div>
        <Button
          onClick={onRetakeQuiz}
          className="w-full max-w-xs py-3 text-lg rounded-full bg-gradient-to-r from-gray-200 to-gray-300 text-gray-800 hover:from-gray-300 hover:to-gray-400 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg"
        >
          {t("common.retakeQuiz")}
        </Button>
      </CardContent>
    </Card>
  );
};

export default ResultScreen;