import React from "react";
import { Progress } from "@/components/ui/progress"; // Assuming shadcn/ui Progress component

interface ProgressBarProps {
  current: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const progressValue = (current / total) * 100;

  return (
    <div className="w-full max-w-lg mx-auto mb-8">
      <div className="text-center text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
        Question {current} of {total}
      </div>
      <Progress value={progressValue} className="h-2 bg-pink-100 dark:bg-pink-900" indicatorClassName="bg-gradient-to-r from-pink-400 to-purple-500 transition-all duration-500 ease-out" />
    </div>
  );
};

export default ProgressBar;