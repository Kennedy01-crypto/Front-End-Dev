import React from "react";

const GetQuote = ({ getQuote, quote, author, loading, error }) => {
  return (
    <>
      <button onClick={getQuote} disabled={loading}>
        Get Quote
      </button>
      <div>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {quote && (
          <div>
            <p>{quote}</p>
            <p>- {author}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default GetQuote;
