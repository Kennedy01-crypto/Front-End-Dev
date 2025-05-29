import React from 'react';

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">Welcome to the Quiz Website!</h1>
            <p className="text-lg mb-8">Test your knowledge with our fun quizzes.</p>
            <a href="/quiz" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Start Quiz
            </a>
        </div>
    );
};

export default Home;