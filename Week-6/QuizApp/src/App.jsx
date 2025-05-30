import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { Home } from "./pages/Home";
import { Quiz } from "./pages/Quiz";
import { About } from "./pages/About";
import "./App.css";
import { Results } from "./pages/Results";
import { QuizCategory } from "./pages/QuizCategory";

function App() {
  return (
    <div className="min-h-screen pb-16 bg-white">
      <nav
        className="fixed bottom-0 left-0 w-full flex flex-row justify-around bg-gray-600 text-black z-50 md:static md:justify-end md:gap-4 md:px-5
      "
      >
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-bold py-4" : "text-black py-4"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/About"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-bold py-4" : "text-black py-4"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/Quiz"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-bold py-4" : "text-black py-4"
          }
        >
          Quiz
        </NavLink>
        <NavLink
          to="/Results"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-bold py-4" : "text-black py-4"
          }
        >
          Results
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/QuizCategory" element={<QuizCategory />} />
        <Route path="/Quiz" element={<Quiz />} />
        <Route path="/Results" element={<Results />} />
      </Routes>
    </div>
  );
}

export default App;
