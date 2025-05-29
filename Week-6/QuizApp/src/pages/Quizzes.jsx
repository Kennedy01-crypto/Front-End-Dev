import React from "react";
import { Link } from "react-router-dom";
import geographyImg from "../assets/geography.jpg";
import physicsImg from "../assets/physics.jpg";
import historyImg from "../assets/history.jpg";
import mathImg from "../assets/math.jpg";

const quizzes = [
  {
    name: "Geography",
    description: "Test your knowledge of the world.",
    img: geographyImg,
    link: "/Quiz?topic=geography",
  },
  {
    name: "Physics",
    description: "Challenge yourself with physics questions.",
    img: physicsImg,
    link: "/Quiz?topic=physics",
  },
  {
    name: "History",
    description: "How well do you know history?",
    img: historyImg,
    link: "/Quiz?topic=history",
  },
  {
    name: "Math",
    description: "Solve math problems and puzzles.",
    img: mathImg,
    link: "/Quiz?topic=math",
  },
];

export const Quizzes = () => (
  <div className="max-w-md mx-auto px-4 py-8">
    <h2 className="text-2xl font-bold mb-6 text-center">Available Quizzes</h2>
    <div className="flex flex-col gap-6">
      {quizzes.map((quiz) => (
        <div
          key={quiz.name}
          className="flex items-center bg-gray-100 rounded-xl shadow p-4"
        >
          <img
            src={quiz.img}
            alt={quiz.name}
            className="w-20 h-16 object-cover rounded-lg mr-4"
          />
          <div className="flex-1">
            <div className="font-semibold text-lg">{quiz.name}</div>
            <div className="text-gray-600 text-sm mb-2">{quiz.description}</div>
            <Link
              to={quiz.link}
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
