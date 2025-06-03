import { useState, useContext } from "react";
import {
  NavLink,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { Shop } from "./components/Shop.jsx";
import { Cart } from "./components/Cart.jsx";

export default function App() {
  return (
    <div>
      <Router>
        <nav className="flex space-x-4 p-4 bg-gray-800 text-white">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-bold px-3 py-2 rounded-md ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:bg-gray-700"
              }`
            }
          >
            Shop
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `font-bold px-3 py-2 rounded-md ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:bg-gray-700"
              }`
            }
          >
            Cart
          </NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}
