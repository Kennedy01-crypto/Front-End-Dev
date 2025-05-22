import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Home from "./components/Home.jsx";
import NotFound from "./components/NotFound.jsx";
import AboutJim from "./components/AboutJim.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: "/home", element: <Home /> },
  { path: "*", element: <NotFound /> },
  { path: "/about/:aboutId", element: <AboutJim /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
