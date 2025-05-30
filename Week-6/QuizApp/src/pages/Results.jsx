import React, { useContext } from "react";
import { QuizContext } from "../context/QuizContext";
import { Link } from "react-router-dom";

export const Results = () => {
  // Example values; replace with your actual quiz state/props as needed
  const { score, total, answers, category } = useContext(QuizContext);

  return (
    <div className="max-w-md mx-auto px-4 py-8 flex flex-col items-center">
      <div className="flex items-center w-full mb-6">
        <button className="text-2xl mr-2">&times;</button>
        <h2 className="text-lg font-semibold flex-1 text-center">
          {category ? `${category} Results` : "Quiz Results"}
        </h2>
      </div>
      <h3 className="text-2xl font-bold mb-2 text-center">
        You scored {score}/{total}
      </h3>
      <p className="text-gray-700 mb-8 text-center">
        You answered {score} questions correctly and {total - score}{" "}
        incorrectly.
      </p>
      <Link
        to="/QuizCategory"
        className="bg-blue-600 text-white w-full text-center py-3 rounded-lg font-semibold mb-3 hover:bg-blue-700 transition"
      >
        <button>Take Another Quiz</button>
      </Link>
      <button className="bg-gray-100 text-gray-800 w-full py-3 rounded-lg font-semibold mb-3 hover:bg-gray-200 transition">
        Share Results
      </button>
      <Link to="/" className="text-black font-semibold mt-2 hover:underline">
        Back to Home
      </Link>
    </div>
  );
};
