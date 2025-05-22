import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import User from "./Components/User";

const App = () => {
  return (
    <Router>
      <nav style={{ margin: 10 }}>
        <Link to="/" style={{ margin: 10 }}>
          Home
        </Link>
        <Link to="/about" style={{ margin: 10 }}>
          About
        </Link>
        <Link to="/contact" style={{ margin: 10 }}>
          Contact
        </Link>
        <Link to="/users" style={{ margin: 10 }}>
          Users
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/users/:id" element={<User />} />
      </Routes>
    </Router>
  );
};

export default App;
