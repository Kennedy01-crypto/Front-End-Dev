import React from 'react';

const QuizCard = ({ question, options, onSelect }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 mb-4">
            <h2 className="text-lg font-semibold mb-2">{question}</h2>
            <div className="flex flex-col">
                {options.map((option, index) => (
                    <button
                        key={index}
                        className="bg-blue-500 text-white rounded-md p-2 mb-2 hover:bg-blue-600"
                        onClick={() => onSelect(option)}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default QuizCard;