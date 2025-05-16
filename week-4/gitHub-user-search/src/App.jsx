import React, { useEffect, useState } from "react";
import axios from "axios";
import GetQuote from "./GetQuote";

const App = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const getQuote = () => {
    axios
      .get("https://dummyjson.com/quotes")
      .then((res) => {
        const number = Math.floor(Math.random() * res.data.quotes.length);
        console.log(res.data.quotes.at(number).author);
        console.log(res.data.quotes.at(number).quote);
        console.log(res.data.quotes.at(number).id);

        setQuote(res.data.quotes.at(number).quote);
        setAuthor(res.data.quotes.at(number).author);
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
