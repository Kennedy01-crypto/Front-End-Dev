import { useState, useEffect } from "react";
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

  function truncateWords(str, num) {
    if (!str) return "";
    const words = str.split(" ");
    if (words.length <= num) return str;
    return words.slice(0, num).join(" ") + " ...";
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
          <p className="mx-auto text-green-800 font-semibold text-3xl">
            Loading...
          </p>
        </div>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-5 px-3 bg-gray-300 gap-4">
          {apis.map((api, idx) => (
            <li
              key={idx}
              className="flex flex-col border-2 border-blue-400 rounded-xl shadow-lg hover:border-blue-600 m-5 p-5 bg-white transition-duration-200"
            >
              <div className="flex flex-row items-center justify-center gap-2 mb-2">
                <span className="text-2xl">{api.emoji}</span>
                <a
                  href={api.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 hover:text-blue-600 font-semibold text-lg hover:text-xl transition-duration-200"
                >
                  {api.title}
                </a>
              </div>
              {/* Description */}
              <p className="text-center text-gray-700 mb-4 italic">
                {truncateWords(api.description, 20)}
              </p>
              {/* Info Row */}
              <div className="flex flex-col items-center lg:flex-row lg:justify-evenly text-sm text-gray-600 mb-3 mt-auto">
                <p>
                  <span className="font-bold text-green-800">
                    Health: {api.health}
                  </span>
                </p>
                <p>
                  <span className="font-bold text-purple-800">
                    Methods: {api.methods}
                  </span>
                </p>
                <p>
                  <span className="font-bold text-yellow-800">
                    Popularity: {api.popularity}
                  </span>
                </p>
              </div>
              {/* Documentation Link */}
              <a
                className="text-center text0blue-600 hover:text-blue-800 underline font-medium"
                href={api.documentation}
                target="_blank"
                rel="noopener noreferrer"
              >
                Documentation Link
              </a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default App;
