import React from "react";
import { Link } from "react-router-dom";
import missionImg from "../assets/mission.jpg"; // adjust extension if needed
import valuesImg from "../assets/values.jpg";

export const About = () => (
  <div className="max-w-md md:max-w-full mx-auto px-4 py-6 flex flex-col items-center">
    <h2 className="text-lg md:text-3xl lg:text-4xl font-bold mb-2">About Us</h2>
    <h3 className="text-2xl font-bold mb-2 mt-2 text-center">Our Mission</h3>
    <div className="flex flex-col md:flex-row items-center md:mb-10">
      <p className="text-gray-700 mb-6 md:text-2xl lg:text-3xl font-semibold text-center">
        At QuizMaster, we’re passionate about making learning fun and accessible
        for everyone. Our mission is to provide a platform where users can
        challenge themselves, expand their knowledge, and connect with others
        through engaging quizzes.
      </p>
      <img
        src={missionImg}
        alt="Mission Illustration"
        className="rounded-xl shadow-md w-full max-w-xs md:hidden mb-8 bg-gray-100 p-4"
      />
    </div>

    <div className="flex  flex-col md:flex-row items-center">
      <div className="flex flex-col ">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-center">
          Our Values
        </h3>
        <p className="text-gray-700 mb-4 md:text-2xl lg:text-3xl text-center">
          We believe in the power of education and the joy of discovery. Our
          core values include:
        </p>
        <ul className="text-gray-700 mb-6 text-left md:text-xl lg:text-2xl list-disc pl-5">
          <li>
            <span className="font-semibold">Quality:</span> We strive to create
            quizzes that are accurate, informative, and well-crafted.
          </li>
          <li>
            <span className="font-semibold">Engagement:</span> We aim to make
            learning interactive and enjoyable, keeping users motivated and
            entertained.
          </li>
          <li>
            <span className="font-semibold">Community:</span> We foster a
            supportive environment where users can connect, share their
            knowledge, and learn from each other.
          </li>
          <li>
            <span className="font-semibold">Accessibility:</span> We are
            committed to making our platform accessible to all learners,
            regardless of their background or abilities.
          </li>
        </ul>
      </div>
      <img
        src={valuesImg}
        alt="Values Illustration"
        className="rounded-xl shadow-md w-full max-w-xs md:max-w-1/2 mb-8 bg-gray-100 p-4"
      />
    </div>
    <Link
      to="/"
      className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition w-full md:w-1/2 text-center"
    >
      Back to Home
    </Link>
  </div>
);
