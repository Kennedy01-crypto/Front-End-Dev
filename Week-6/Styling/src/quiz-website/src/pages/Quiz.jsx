import React, { useState } from 'react';

const Quiz = () => {
    const [questions] = useState([
        {
            question: "What is the capital of France?",
            options: ["Berlin", "Madrid", "Paris", "Rome"],
            answer: "Paris"
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Earth", "Mars", "Jupiter", "Saturn"],
            answer: "Mars"
        },
        // Add more questions as needed
    ]);

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showResults, setShowResults] = useState(false);

    const handleAnswer = (option) => {
        if (option === questions[currentQuestionIndex].answer) {
            setScore(score + 1);
        }
        const nextQuestion = currentQuestionIndex + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestionIndex(nextQuestion);
        } else {
            setShowResults(true);
        }
    };

    if (showResults) {
        return (
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-2xl font-bold">Your Score: {score} / {questions.length}</h1>
                <button className="mt-4 p-2 bg-blue-500 text-white rounded" onClick={() => window.location.reload()}>
                    Restart Quiz
                </button>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h2 className="text-xl font-semibold">{questions[currentQuestionIndex].question}</h2>
            <div className="mt-4">
                {questions[currentQuestionIndex].options.map((option, index) => (
                    <button
                        key={index}
                        className="block p-2 m-2 bg-gray-200 rounded hover:bg-gray-300"
                        onClick={() => handleAnswer(option)}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Quiz;