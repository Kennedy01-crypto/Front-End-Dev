import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="flex flex-col items-center justify-start max-h-[75vh] px-4 pt-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-2">QuizMaster</h1>
      <p className="text-gray-700 mb-6 md:text-2xl text-center">
        Challenge your knowledge, conquer the quizzes!
      </p>
      <div className="flex flex-col md:flex-row gap-4">
        <Link
          to="/QuizCategory"
          className="bg-blue-600 text-white px-6 py-2 md:text-2xl rounded-lg font-semibold mb-3 hover:bg-blue-700 transition"
        >
          Start Quiz
        </Link>
        <Link
          to="/About"
          className="bg-gray-100 text-gray-800 px-6 py-2 md:text-2xl rounded-lg font-medium mb-3 hover:bg-gray-200 transition"
        >
          About
        </Link>
      </div>
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
        alt="Quiz Art"
        className="rounded-xl shadow-md w-full max-w-xs md:max-w-1/2"
      />
    </div>
  );
};
