import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import User from "./Components/Animals";
import Animals from "./Components/Animals";

const App = () => {
  const navLinkClasses =
    " px-4 py-2 rounded transition-colors duration-200 font-semibold text-gray-700 hover:bg-blue-100 hover:text-blue-700";
  return (
    <Router>
      <div className="">
        <nav className="flex flex-row justify-end gap-4 p-4 w-full bg-gray-100 shadow mb-6">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? `${navLinkClasses} bg-blue-500 text-white`
                : navLinkClasses
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            end
            className={({ isActive }) =>
              isActive
                ? `${navLinkClasses} bg-blue-500 text-white`
                : navLinkClasses
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            end
            className={({ isActive }) =>
              isActive
                ? `${navLinkClasses} bg-blue-500 text-white`
                : navLinkClasses
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/animals"
            end
            className={({ isActive }) =>
              isActive
                ? `${navLinkClasses} bg-blue-500 text-white`
                : navLinkClasses
            }
          >
            Animals
          </NavLink>
        </nav>
        <div className="max-w-2xl mx-auto p-4 bg-white rounded shadow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/animals" element={<Animals />} />
            <Route path="/animals/:id" element={<Animals />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
