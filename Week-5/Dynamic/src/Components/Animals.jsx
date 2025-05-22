import React, { useState } from "react";

const Animals = () => {
  const [query, setQuery] = useState("");
  const [animal, setAnimal] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const apiKey = import.meta.env.VITE_API_KEY;

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    setError(null);
    setAnimal(null);
    try {
      const apiURL = `https://api.api-ninjas.com/v1/animals?name=${query}`;
      const response = await fetch(apiURL, {
        headers: {
          "X-Api-Key": apiKey,
        },
      });
      if (!response.ok)
        throw new Error("Failed to fetch animal data" + response.statusText);
      const data = await response.json();
      setAnimal(data[0] || null);
      console.log(animal);
      if (!data[0]) setError("No animal found.");
    } catch (err) {
      setError(err.message);
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-8 bg-green-50 rounded-lg shadow p-6">
      <h1 className="text-3xl font-bold text-green-700 mb-4 text-center">
        Search for an Animal
      </h1>
      <form onSubmit={handleSearch} className="flex gap-2 mb-6 justify-center">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter animal name (e.g. lion)"
          className="flex-1 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-200"
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-2 rounded font-semibold hover:bg-green-700 transition-colors"
        >
          Search
        </button>
      </form>
      {loading && <div className="text-center mt-4">Loading...</div>}
      {error && (
        <div className="text-center text-red-600 mt-4">
          The error is: {error}
        </div>
      )}
      {animal && (
        <div className="mt-6">
          <h2 className="text-2xl font-bold text-green-800 mb-2">
            {animal.name}
          </h2>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Taxonomy:</span>{" "}
            {animal.taxonomy?.class} - {animal.taxonomy?.family}
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Locations:</span>{" "}
            {animal.locations?.join(", ") || "Unknown"}
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Characteristics:</span>
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            {animal.characteristics &&
              Object.entries(animal.characteristics).map(([key, value]) => (
                <li key={key}>
                  <span className="font-semibold capitalize">{key}:</span>{" "}
                  {value}
                </li>
              ))}
          </ul>
          {animal.images && animal.images.length > 0 && (
            <img
              src={animal.images[0]}
              alt={animal.name}
              className="w-full h-64 object-cover rounded"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Animals;
