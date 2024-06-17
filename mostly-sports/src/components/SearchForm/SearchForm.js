import React, { useState } from "react";
import "./SearchForm.css";
import { getSearchResults } from "../../utils/Api";

function SearchForm() {
  const [eventId, setEventId] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = () => {
    getSearchResults(eventId)
      .then((result) => {
        setResults(result);
        setError(null); // Clear any previous errors
      })
      .catch((error) => {
        console.error("Error fetching search results:", error);
        setError(error.message); // Set the error message
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <div className="search__container">
      <form className="search__form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="search__input"
          onChange={(e) => setEventId(e.target.value)}
          placeholder="Enter your favorite team, game or sport"
        />
        <button type="submit" className="search__button">
          Search
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {results.length > 0 && (
          <ul>
            {results.map((result, index) => (
              <li key={index}>{result.title}</li>
            ))}
          </ul>
        )}
      </form>
    </div>
  );
}

export default SearchForm;
