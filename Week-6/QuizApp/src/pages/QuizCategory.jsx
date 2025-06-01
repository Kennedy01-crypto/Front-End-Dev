import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import categories from "../assets/categories.json";

export const QuizCategory = () => {
  return (
    <main className="max-w-md md:max-w-full mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Available Quizzes</h2>
      <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((quiz) => (
          <div
            key={quiz.id}
            className="flex md:flex-col items-center md:items-start bg-gray-100 hover:bg-gray-200 hover:cursor-pointer rounded-xl shadow-md p-4 "
          >
            <div className="md:w-full md:h-40 overflow-hidden relative">
              <img
                src={quiz.image}
                alt={quiz.category}
                className="w-20 h-16 md:w-full md:h-full object-cover rounded-lg mr-4"
              />
            </div>
            <div className="flex-1">
              <div className="font-semibold text-lg">{quiz.category}</div>
              <div className="text-gray-600 text-sm md:text-xl mb-2">
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
    </main>
  );
};
