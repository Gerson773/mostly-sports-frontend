import React from "react";
import "./SearchForm.css";

function SearchForm() {
  return (
    <div className="search__container">
      <form className="search__form">
        <input
          type="text"
          className="search__input"
          placeholder="Enter your favorite team, game or sport"
        />
        <button type="submit" className="search__button">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
