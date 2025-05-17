import { useState, useEffect } from "react";
import "./App.css";
import { UserSearch } from "./UserSearch";

function App() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (username) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error("User not found");
      }
      const data = await response.json();
      setUserData(data);
      console.log(data);
    } catch (err) {
      setError(err.message);
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (username) {
      handleSubmit(username);
    }
  }, [username]);

  return (
    <>
      <UserSearch
        handleSubmit={handleSubmit}
        username={username}
        setUsername={setUsername}
      />
    </>
  );
}

export default App;
