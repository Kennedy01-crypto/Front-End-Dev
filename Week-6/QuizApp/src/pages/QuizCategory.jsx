import React, { useState } from "react";
import { Link } from "react-router-dom";
import categories from "../assets/categories.json";

export const QuizCategory = () => {
  const [difficulty, setDifficulty] = useState("easy");
  const [amount, setAmount] = useState(10);

  return (
    <main className="max-w-md md:max-w-full mx-auto px-4 py-8">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center">
        Available Quizzes
      </h2>

      <div className="mb-6 flex justify-center gap-4">
        <div>
          <label htmlFor="difficulty" className="block font-semibold mb-1">
            Select Difficulty
          </label>
          <select
            id="difficulty"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            className="border rounded px-2 py-1"
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        <div>
          <label htmlFor="amount" className="block font-semibold mb-1">
            Number of Questions
          </label>
          <select
            id="amount"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="border rounded px-2 py-1"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
          </select>
        </div>
      </div>

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
            <div className="flex-1 relative ">
              <div className="font-semibold text-lg ">{quiz.category}</div>
              <div className="text-gray-600   text-sm md:text-xl mb-2 md:mb-10">
                {quiz.description}
              </div>
              <Link
                to={`/Quiz/${quiz.id}?difficulty=${difficulty}&amount=${amount}`}
                className="bg-blue-600 text-white px-4 py-1 rounded font-medium text-sm hover:bg-blue-700 transition md:absolute bottom-0 right-0"
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
