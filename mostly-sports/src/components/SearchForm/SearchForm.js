import React, { useState } from "react";
import "./SearchForm.css";

function SearchForm({ setError, error, setIsLoading, handleSearch }) {
  const [eventId, setEventId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    handleSearch(eventId);
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
