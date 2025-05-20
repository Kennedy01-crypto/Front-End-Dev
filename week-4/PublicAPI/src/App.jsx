import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // State to hold the list of APIs fetched from the server
  const [apis, setApis] = useState([]);
  // State to indicate loading status during fetch
  const [loading, setLoading] = useState(false);

  // Function to fetch data from the public APIs endpoint
  const fetchData = async () => {
    setLoading(true); // Set loading to true before starting fetch
    setApis([]); // Clear previous API data
    try {
      const response = await fetch("https://www.freepublicapis.com/api/apis");

      console.log("Response status:", response.status);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      } else {
        console.log("Response is ok");
      }
      const result = await response.json();
      console.log("Result:", result);
      setApis(result); // Update state with fetched API data
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      console.log("Fetch attempt finished");
      setLoading(false); // Set loading to false after fetch completes
    }
  };

  return (
    <>
      <button onClick={fetchData}>Fetch Data</button>
      {loading ? (
        <li>Loading...</li>
      ) : (
        <ul>
          {apis.map((api, idx) => (
            <li key={idx}>
              <span>{api.emoji}</span>
              <a href={api.source} target="_blank" rel="noopener noreferrer">
                <strong>{api.title}</strong>:
              </a>
              <p>{api.description}</p>
              <a
                href={api.documentation}
                target="_blank"
                rel="noopener noreferrer"
              >
                Documentation Link
              </a>
              <br />
              <div>
                <h2>Metrics:</h2>
                <p>Health: {api.health}</p>
                <p>Methods: {api.methods}</p>
                <p>Popularity: {api.popularirty}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default App;
