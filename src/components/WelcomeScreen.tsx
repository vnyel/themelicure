import React from "react";
import ButtonWithFairyDust from "@/components/ButtonWithFairyDust"; // Use the new component
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

interface WelcomeScreenProps {
  onStartQuiz: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStartQuiz }) => {
  const { t } = useTranslation();

  return (
    <Card className="w-full max-w-lg mx-auto text-center rounded-xl shadow-lg p-6 bg-white animate-in fade-in duration-500">
      <CardHeader>
        <CardTitle className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
          {t("welcomeScreen.title")}
        </CardTitle>
        <CardDescription className="text-base sm:text-lg text-gray-600">
          {t("welcomeScreen.description")}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center space-y-6">
        <p className="text-sm sm:text-md text-gray-700 leading-relaxed">
          {t("welcomeScreen.intro")}
        </p>
        <ButtonWithFairyDust
          onClick={onStartQuiz}
          className="w-full max-w-xs py-3 text-lg rounded-full bg-gradient-to-r from-pink-300 to-purple-400 text-white hover:from-pink-400 hover:to-purple-500 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg"
        >
          {t("common.startQuiz")}
        </ButtonWithFairyDust>
      </CardContent>
    </Card>
  );
};

export default WelcomeScreen;