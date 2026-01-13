import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface WelcomeScreenProps {
  onStartQuiz: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStartQuiz }) => {
  return (
    <Card className="w-full max-w-lg mx-auto text-center rounded-xl shadow-lg p-6 bg-white animate-in fade-in duration-500">
      <CardHeader>
        <CardTitle className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
          Discover Your Perfect Nail Shape
        </CardTitle>
        <CardDescription className="text-base sm:text-lg text-gray-600">
          Take this quick quiz to find the ideal nail shape that complements your personality, style, and lifestyle.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center space-y-6">
        <p className="text-sm sm:text-md text-gray-700 leading-relaxed">
          Our professional recommendation system will guide you through a series of questions to match you with one of 8 elegant nail shapes.
        </p>
        <Button
          onClick={onStartQuiz}
          className="w-full max-w-xs py-3 text-lg rounded-full bg-gradient-to-r from-pink-300 to-purple-400 text-white hover:from-pink-400 hover:to-purple-500 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg"
        >
          Start Quiz
        </Button>
      </CardContent>
    </Card>
  );
};

export default WelcomeScreen;