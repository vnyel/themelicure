import React from "react";

const LoadingScreen: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-50 to-purple-50 p-4">
      <img
        src="/images/melicure-logo.png"
        alt="The Melicure Logo"
        className="h-32 sm:h-40 object-contain animate-pulse-slow"
      />
    </div>
  );
};

export default LoadingScreen;