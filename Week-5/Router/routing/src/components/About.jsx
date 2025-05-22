import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const About = (props) => {
  const { aboutId } = useParams();

  return (
    <div>
      <h2>About Us{aboutId}</h2>
      <p>This is the about page of our application.</p>
      <p>We are dedicated to providing the best service possible.</p>
      <p>Contact us for more information!</p>
    </div>
  );
};

export default About;
