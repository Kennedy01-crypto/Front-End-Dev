import React from 'react';

const About = () => {
    return (
        <div className="max-w-2xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">About This Quiz Website</h1>
            <p className="mb-4">
                This quiz website is designed to test your knowledge on various topics. 
                It provides an interactive platform where you can take quizzes, view your results, 
                and learn more about the subjects you are interested in.
            </p>
            <h2 className="text-2xl font-semibold mb-2">How to Use</h2>
            <ul className="list-disc list-inside mb-4">
                <li>Navigate to the Home page to start a quiz.</li>
                <li>Answer the questions presented in the quiz.</li>
                <li>View your results at the end of the quiz.</li>
            </ul>
            <p>
                We hope you enjoy using this quiz website and find it informative and fun!
            </p>
        </div>
    );
};

export default About;