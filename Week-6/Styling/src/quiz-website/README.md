# Quiz Website

This is a simple quiz website built with React, React Router DOM, and styled using Tailwind CSS. The application allows users to take quizzes, view their results, and learn more about the quiz platform.

## Project Structure

```
quiz-website
├── public
│   └── index.html
├── src
│   ├── components
│   │   └── QuizCard.jsx
│   ├── pages
│   │   ├── Home.jsx
│   │   ├── Quiz.jsx
│   │   ├── Results.jsx
│   │   └── About.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── tailwind.config.js
├── package.json
└── README.md
```

## Features

- **Home Page**: A welcoming landing page with a button to start the quiz.
- **Quiz Page**: Displays quiz questions and options, tracks user answers, and calculates scores.
- **Results Page**: Shows the user's score and feedback after completing the quiz.
- **About Page**: Provides information about the quiz website and its purpose.

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd quiz-website
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open your browser and go to `http://localhost:3000` to view the application.

## Usage Guidelines

- Click the "Start Quiz" button on the Home page to begin.
- Answer the questions presented on the Quiz page.
- After completing the quiz, view your score on the Results page.
- Learn more about the quiz website on the About page.

## Technologies Used

- React
- React Router DOM
- Tailwind CSS

## License

This project is open-source and available under the MIT License.