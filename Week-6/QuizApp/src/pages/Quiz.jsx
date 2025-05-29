import React, { useState } from "react";
import eiffel from "../assets/eiffel.jpg";
import bigben from "../assets/bigben.jpg";
import brandenburg from "../assets/brandenburg.jpg";
import colosseum from "../assets/colosseum.jpg";

const questionData = {
  question: "What is the capital of France?",
  options: [
    {
      label: "A",
      text: "Paris",
      desc: "The city of lights",
      img: eiffel,
    },
    {
      label: "B",
      text: "London",
      desc: "The city of Big Ben",
      img: bigben,
    },
    {
      label: "C",
      text: "Berlin",
      desc: "The city of Brandenburg Gate",
      img: brandenburg,
    },
    {
      label: "D",
      text: "Rome",
      desc: "The city of Colosseum",
      img: colosseum,
    },
  ],
};

export const Quiz = () => {
  const [current, setCurrent] = useState(2); // 0-based index, so 2 = "Question 3"
  const total = 10;

  return (
    <div className="max-w-md mx-auto px-4 py-6">
      <div className="flex items-center mb-4">
        <button className="text-2xl mr-2">&times;</button>
        <h2 className="text-lg font-semibold flex-1 text-center">Quiz</h2>
      </div>
      <div className="text-sm text-gray-600 mb-2">
        Question {current + 1} of {total}
      </div>
      <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4">
        <div
          className="bg-blue-600 h-1.5 rounded-full"
          style={{ width: `${((current + 1) / total) * 100}%` }}
        ></div>
      </div>
      <h3 className="text-xl font-bold mb-4">{questionData.question}</h3>
      <div className="flex flex-col gap-3 mb-6">
        {questionData.options.map((opt) => (
          <div
            key={opt.label}
            className="flex items-center bg-gray-100 rounded-xl p-2"
          >
            <div className="flex-1">
              <div className="font-semibold">
                {opt.label}. {opt.text}
              </div>
              <div className="text-xs text-gray-500">{opt.desc}</div>
            </div>
            <img
              src={opt.img}
              alt={opt.text}
              className="w-20 h-16 object-cover rounded-lg ml-2"
            />
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <button className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg font-medium flex-1 hover:bg-gray-200 transition">
          Previous Question
        </button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold flex-1 hover:bg-blue-700 transition">
          Next Question
        </button>
      </div>
    </div>
  );
};
