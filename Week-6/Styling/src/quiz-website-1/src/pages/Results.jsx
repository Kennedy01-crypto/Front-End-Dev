import React from 'react';

const Results = ({ score, totalQuestions }) => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">Quiz Results</h1>
            <p className="text-xl mb-2">You scored {score} out of {totalQuestions}!</p>
            <p className="text-lg">
                {score / totalQuestions > 0.5 ? 'Great job!' : 'Better luck next time!'}
            </p>
            <a href="/" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Go Back to Home
            </a>
        </div>
    );
};

export default Results;