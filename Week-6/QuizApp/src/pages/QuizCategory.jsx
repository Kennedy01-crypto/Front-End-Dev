import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import categories from "../assets/categories.json";

export const QuizCategory = () => {
  return (
    <div className="max-w-md mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Available Quizzes</h2>
      <div className="flex flex-col gap-6">
        {categories.map((quiz) => (
          <div
            key={quiz.id}
            className="flex items-center bg-gray-100 rounded-xl shadow p-4"
          >
            <img
              src={quiz.image}
              alt={quiz.category}
              className="w-20 h-16 object-cover rounded-lg mr-4"
            />
            <div className="flex-1">
              <div className="font-semibold text-lg">{quiz.category}</div>
              <div className="text-gray-600 text-sm mb-2">
                {quiz.description}
              </div>
              <Link
                to={`/Quiz/${quiz.id}`}
                className="bg-blue-600 text-white px-4 py-1 rounded font-medium text-sm hover:bg-blue-700 transition"
              >
                Start Quiz
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
