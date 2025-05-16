import React from "react";

const GetQuote = ({ getQuote, quote, author, loading, error }) => {
  return (
    <div className="flex justify-center flex-col min-h-screen text-base sm:text-lg items-center">
      <button
        onClick={getQuote}
        disabled={loading}
        className="px-6 self-center sm:w-1/2 md:w-80 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 cursor-pointer disabled:bg-blue-300 transition-colors duration-200 mb-6"
      >
        Get Quote
      </button>
      <div className="min-w-100 flex justify-center items-center">
        {loading ? (
          <p className="text-emerald-400">Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : quote ? (
          <div className="bg-white  rounded-lg shadow-md sm:p-6 p-4 max-w-xl mx-4 text-center">
            <p className="text-lg text-gray-800 italic mb-4">{quote}</p>
            <p className="text-blue-600 font-semibold ">- {author}</p>
          </div>
        ) : (
          <p className="text-emerald-400">Click the button to get a quote!</p>
        )}
      </div>
    </div>
  );
};

export default GetQuote;
