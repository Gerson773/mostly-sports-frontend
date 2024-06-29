import React, { useState } from "react";
import "./SearchForm.css";
import { getSearchResults } from "../../utils/Api";

function SearchForm({ setSearchResults, setError, error, setIsLoading }) {
  const [eventId, setEventId] = useState("");

  const handleSearch = () => {
    getSearchResults(eventId)
      .then((results) => {
        setSearchResults(results);
        setError(null);
      })
      .catch((error) => {
        console.error("Error fetching search results:", error);
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
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
      </form>
    </div>
  );
}

export default SearchForm;
