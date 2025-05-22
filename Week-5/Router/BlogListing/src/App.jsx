import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  NavLink,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/Home";
import Blogs from "./components/Blogs";
import BlogInfo from "./components/BlogInfo";

function App() {
  const navClasses =
    "px-4 py-2 rounded transition-colors duration-200 font-semibold text-gray-700 hover:bg-blue-100 hover:text-blue-600";
  return (
    <>
      <Router>
        <div className="flex flex-col min-h-screen">
          <nav className="flex flex-row gap-4 justify-end p-4 bg-gray-100 text-black">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive
                  ? `${navClasses} bg-blue-400 text-blue-300`
                  : navClasses
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/blogs"
              end
              className={({ isActive }) =>
                isActive
                  ? `${navClasses} bg-blue-400 text-blue-300`
                  : navClasses
              }
            >
              Blogs
            </NavLink>
          </nav>
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blogs/:id" element={<BlogInfo />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
