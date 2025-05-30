import React, { createContext, useState } from "react";

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const [answers, setAnswers] = useState([]);

  return (
    <QuizContext.Provider
      value={{ score, setScore, total, setTotal, answers, setAnswers }}
    >
      {children}
    </QuizContext.Provider>
  );
};
