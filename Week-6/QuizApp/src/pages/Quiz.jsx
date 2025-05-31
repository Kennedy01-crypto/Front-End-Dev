import React, { useState, useEffect, useContext } from "react";
import { QuizContext } from "../context/QuizContext";
import { useNavigate, useParams, Link } from "react-router-dom"; // Uncomment if you want to navigate
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
  const navigate = useNavigate(); // Uncomment if you want to navigate
  const categoryObj = categories.find(
    (cat) => String(cat.id) === String(categoryId)
  );

  if (!categoryId || !categoryObj) {
    return (
      <div className="max-w-md mx-auto px-4 py-8 flex flex-col items-center">
        <h2 className="text-xl font-bold mb-4 text-center">
          No Category Selected
        </h2>
        <p className="text-gray-700 mb-6 text-center">
          Please select a quiz category to begin.
        </p>
        <Link
          to="/QuizCategory"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
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
          `https://opentdb.com/api.php?amount=10&category=${categoryId}&type=multiple`
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
        // Optionally, set an error state and display a message to the user
      } finally {
        console.log("This part was processed");
        setLoading(false);
      }
    };

    useEffect(() => {
      FetchQuiz();
    }, []);

    useEffect(() => {
      setSelected(answers[current] ?? null);
    }, [current, answers]);

    const total = quizData.length;

    function shuffle(array) {
      const arr = [...array];
      for (let i = arr.length - 1; i > 0; i--) {
        // <-- use i--
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr; // <-- return the shuffled array!
    }

    const currentQuestion = quizData[current];
    const choices = shuffledChoices[current] || [];

    // --- Score Calculation ---
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

    // --- Handle Next/Finish ---
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
      <div className="max-w-md mx-auto px-4 py-6">
        <div className="flex items-center mb-4">
          <button className="text-2xl mr-2">&times;</button>
          <h2 className="text-lg font-semibold flex-1 text-center">
            {categoryObj ? `${categoryObj.category} Quiz` : "Quiz"}
          </h2>
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
            <h3 className="text-xl font-bold mb-4">
              {currentQuestion.question}
            </h3>
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
      </div>
    );
  }
};
