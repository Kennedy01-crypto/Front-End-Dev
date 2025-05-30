import React, { useState, useEffect, useContext } from "react";
import eiffel from "../assets/eiffel.jpg";
import bigben from "../assets/bigben.jpg";
import brandenburg from "../assets/brandenburg.jpg";
import colosseum from "../assets/colosseum.jpg";
import { QuizContext } from "../context/QuizContext";
import { useNavigate } from "react-router-dom"; // Uncomment if you want to navigate

export const Quiz = () => {
  const [quizData, setQuizData] = useState([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answers, setAnswers] = useState([]);
  const {
    setScore,
    setTotal,
    setAnswers: setContextAnswers,
  } = useContext(QuizContext);
  const navigate = useNavigate(); // Uncomment if you want to navigate

  const FetchQuiz = async () => {
    const response = await fetch(
      "https://opentdb.com/api.php?amount=10&category=9&type=multiple"
    );
    const data = await response.json();
    setQuizData(data.results);
  };

  useEffect(() => {
    FetchQuiz();
  }, []);

  useEffect(() => {
    setSelected(answers[current] ?? null);
  }, [current, answers]);

  const total = quizData.length;

  function shuffleAndFormatChoices(question) {
    if (!question) return [];
    const allChoices = [
      ...question.incorrect_answers,
      question.correct_answer,
    ].map((ans) => ({
      text: ans,
      isCorrect: ans === question.correct_answer,
    }));
    // for (let i = allChoices.length - 1; i > 0; i--) {
    //   const j = Math.floor(Math.random() * (i + 1));
    //   [allChoices[i], allChoices[j]] = [allChoices[j], allChoices[i]];
    // }
    return allChoices;
  }
  const currentQuestion = quizData[current];
  const choices = shuffleAndFormatChoices(currentQuestion);

  // --- Score Calculation ---
  const calculateScore = () => {
    let score = 0;
    quizData.forEach((question, qIdx) => {
      const userAnswerIdx = answers[qIdx];
      if (userAnswerIdx === undefined) return;
      const formattedChoices = shuffleAndFormatChoices(question);
      // Find the correct answer index in the shuffled choices
      if (formattedChoices[userAnswerIdx]?.isCorrect) {
        score += 1;
      }
    });
    return score;
  };

  // --- Handle Next/Finish ---
  const handleNextOrFinish = () => {
    if (current === total - 1) {
      const score = calculateScore();
      // alert(`You scored ${score} out of ${total}`);
      // Or navigate to results page:
      // navigate("/Results", { state: { score, total } });
      setScore(score);
      setTotal(total);
      setContextAnswers(answers);
      // navigate("/Results", { state: { score, total } });
      navigate("/Results");
    } else {
      setCurrent((prev) => Math.min(prev + 1, total - 1));
    }
  };

  return (
    <div className="max-w-md mx-auto px-4 py-6">
      <div className="flex items-center mb-4">
        <button className="text-2xl mr-2">&times;</button>
        <h2 className="text-lg font-semibold flex-1 text-center">Quiz</h2>
      </div>
      {total > 0 && (
        <>
          <div className="text-sm text-gray-600 mb-2">
            Question {current + 1} of {total}
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4">
            <div
              className="bg-blue-600 h-1.5 rounded-full"
              style={{ width: `${((current + 1) / total) * 100}%` }}
            ></div>
          </div>
          <h3 className="text-xl font-bold mb-4">{currentQuestion.question}</h3>
          <div className="flex flex-col gap-3 mb-6">
            {choices.map((choice, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setSelected(idx);
                  setAnswers((prev) => {
                    const updated = [...prev];
                    updated[current] = idx;
                    return updated;
                  });
                }}
                className={`flex items-center bg-gray-100 rounded-xl p-2 transition ${
                  selected === idx
                    ? "border-2 border-blue-600 bg-blue-50"
                    : "hover:bg-blue-100"
                }`}
              >
                <div className="flex-1">
                  <div className="font-semibold">{choice.text}</div>
                </div>
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <button
              className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg font-medium flex-1 hover:bg-gray-200 transition"
              onClick={() => setCurrent((prev) => Math.max(prev - 1, 0))}
              disabled={current === 0}
            >
              Previous Question
            </button>
            <button
              id="next-finish"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold flex-1 hover:bg-blue-700 transition"
              onClick={handleNextOrFinish}
              disabled={selected === null}
            >
              {current === total - 1 ? "Finish Quiz" : "Next Question"}
            </button>
          </div>
        </>
      )}
      {total === 0 && (
        <div className="text-center text-gray-500">Loading quiz ... </div>
      )}
    </div>
  );
};
