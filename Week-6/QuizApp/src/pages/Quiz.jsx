import React, { useState, useEffect, useContext } from "react";
import { QuizContext } from "../context/QuizContext";
import { useNavigate, useParams, Link, useLocation } from "react-router-dom"; // Added useLocation
import categories from "../assets/categories.json";

export const Quiz = () => {
  const [quizData, setQuizData] = useState([]);
  const [shuffledChoices, setShuffledChoices] = useState([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [error, setError] = useState(null);
  const { categoryId } = useParams();
  const [loading, setLoading] = useState(true);
  const [answers, setAnswers] = useState([]);
  const {
    setScore,
    setTotal,
    setAnswers: setContextAnswers,
    setCategory,
  } = useContext(QuizContext);
  const navigate = useNavigate();
  const location = useLocation(); // Added useLocation hook
  const categoryObj = categories.find(
    (cat) => String(cat.id) === String(categoryId)
  );

  // Parse query parameters for difficulty and amount
  const queryParams = new URLSearchParams(location.search);
  const difficulty = queryParams.get("difficulty") || "easy";
  const amount = queryParams.get("amount") || "10";

  if (!categoryId || !categoryObj) {
    return (
      <div className="max-w-md md:max-w-full mx-auto px-4 py-8 flex flex-col items-center">
        <h2 className="text-xl md:text-2xl lg:text-4xl font-bold mb-4 text-center">
          No Category Selected
        </h2>
        <p className="text-gray-700  md:text-xl lg:text-2xl mb-6 text-center">
          Please select a quiz category to begin.
        </p>
        <Link
          to="/QuizCategory"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold md:text-xl lg:text-2xl hover:bg-blue-700 transition"
        >
          Go to Quiz Categories
        </Link>
      </div>
    );
  } else {
    const FetchQuiz = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://opentdb.com/api.php?amount=${amount}&category=${categoryId}&difficulty=${difficulty}&type=multiple`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch quiz data.");
        }
        const data = await response.json();
        setQuizData(data.results);

        const allShuffled = data.results.map((question) => {
          const choices = [
            ...question.incorrect_answers,
            question.correct_answer,
          ].map((ans) => ({
            text: ans,
            isCorrect: ans === question.correct_answer,
          }));
          return shuffle(choices);
        });
        setShuffledChoices(allShuffled);
      } catch (err) {
        console.error("Error fetching quiz data:", err);
        setError(err.message);
        setQuizData([]);
        setShuffledChoices([]);
      } finally {
        setLoading(false);
      }
    };

    useEffect(() => {
      FetchQuiz();
    }, [categoryId, difficulty, amount]);

    useEffect(() => {
      setSelected(answers[current] ?? null);
    }, [current, answers]);

    useEffect(() => {
      setCurrent(0);
      setSelected(null);
      setAnswers([]);
    }, [categoryId]);

    const total = quizData.length;

    function shuffle(array) {
      const arr = [...array];
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    }

    const currentQuestion = quizData[current];
    const choices = shuffledChoices[current] || [];

    const calculateScore = () => {
      let score = 0;
      quizData.forEach((question, qIdx) => {
        const userAnswerIdx = answers[qIdx];
        if (userAnswerIdx === undefined) return;
        const choices = shuffledChoices[qIdx] || [];
        if (choices[userAnswerIdx]?.isCorrect) {
          score += 1;
        }
      });
      return score;
    };

    const handleNextOrFinish = () => {
      if (current === total - 1) {
        const score = calculateScore();
        setScore(score);
        setTotal(total);
        setContextAnswers(answers);
        setCategory(categoryObj?.category || "");
        navigate("/Results");
      } else {
        setCurrent((prev) => Math.min(prev + 1, total - 1));
      }
    };

    return (
      <div className="max-w-md md:max-w-full mx-auto md:mx-10 px-4 py-6">
        <div className="relative flex  items-center mb-4">
          <button
            className="text-2xl"
            onClick={() => {
              navigate("/QuizCategory");
            }}
          >
            &times;
          </button>
          <div className="flex flex-col mx-auto">
            <h2 className="text-lg md:text-2xl lg:text-4xl font-bold flex-1 text-center">
              {categoryObj ? `${categoryObj.category} Quiz` : "Quiz"}
            </h2>
            <h3 className="text-md md:text-lg lg:text-2xl font-semibold text-center">
              {categoryObj ? `Level: ${difficulty}` : ""}
            </h3>
          </div>
        </div>
        {error && (
          <div className="w-full mb-4 p-3 bg-red-100 text-red-700 rounded text-center">
            {error}
          </div>
        )}
        {loading && !error && (
          <div className="text-center text-gray-500">Loading quiz ... </div>
        )}
        {!loading && !error && total > 0 && (
          <main className="flex flex-col md:items-center">
            <div className="text-sm md:text-xl lg:text-2xl  text-gray-600 mb-2">
              Question {current + 1} of {total}
            </div>
            <div className=" w-full md:w-4xl bg-gray-200 rounded-full h-1.5 mb-4">
              <div
                className="bg-blue-600 h-1.5 rounded-full"
                style={{ width: `${((current + 1) / total) * 100}%` }}
              ></div>
            </div>
            {currentQuestion && (
              <h3 className="text-xl md:text-1xl lg:text-3xl font-bold mb-4">
                {currentQuestion.question}
              </h3>
            )}
            <div className="flex flex-col md:w-1/2 gap-3 mb-6 ">
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
                  className={`flex items-center cursor-pointer bg-gray-100 rounded-xl p-2 transition ${
                    selected === idx
                      ? "border-2 border-blue-600 bg-blue-500"
                      : "hover:bg-blue-100"
                  }`}
                >
                  <div className="flex-1 ">
                    <div className="font-semibold md:text-xl lg:text-2xl">
                      {choice.text}
                    </div>
                  </div>
                </button>
              ))}
            </div>
            <div className="flex gap-2 md:w-1/2 md:text-xl lg:text-2xl ">
              <button
                className="bg-gray-100  text-gray-800 cursor-pointer  px-4 py-2 rounded-lg font-medium flex-1 hover:bg-gray-200 transition"
                onClick={() => setCurrent((prev) => Math.max(prev - 1, 0))}
                disabled={current === 0}
              >
                Previous Question
              </button>
              <button
                id="next-finish"
                className="bg-blue-600 text-white px-4 py-2 cursor-pointer rounded-lg font-semibold flex-1 hover:bg-blue-700 transition"
                onClick={handleNextOrFinish}
                disabled={selected === null}
              >
                {current === total - 1 ? "Finish Quiz" : "Next Question"}
              </button>
            </div>
          </main>
        )}
      </div>
    );
  }
};
