import React from "react";
import { Link } from "react-router-dom";

const AboutJim = (props) => {
  const dashboardItems = [
    { id: 1, name: "Jim" },
    { id: 2, name: "John" },
    { id: 3, name: "Jane" },
  ];

  return (
    <div>
      <hi>About Jim</hi>
      <ul>
        {dashboardItems.map((item) => (
          <li key={item.id}>
            <Link to={`/about/${item.id}`}>
              <h2>{item.name}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default AboutJim;
