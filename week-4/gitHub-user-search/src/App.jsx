import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import GetQuote from "./GetQuote";

const App = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getQuote = () => {
    setError("");
    setLoading(true);
    axios
      .get("https://dummyjson.com/quotes/random")
      .then((res) => {
        setAuthor(res.data.author);
        setQuote(res.data.quote);
        console.log(res.data.author);
      })
      .catch((err) => {
        setError("Failed to fetch quote. Please try again.");
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <GetQuote
      getQuote={getQuote}
      quote={quote}
      author={author}
      error={error}
      loading={loading}
    />
  );
};

export default App;
