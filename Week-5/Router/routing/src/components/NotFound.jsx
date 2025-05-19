import React from "react";
import { Link } from "react-router-dom";

const NotFound = (props) => {
  return (
    <div>
      <h2>404 Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <p>Please check the URL or return to the home page.</p>
      <Link to="/">Go to Home</Link>
    </div>
  );
};

export default NotFound;
