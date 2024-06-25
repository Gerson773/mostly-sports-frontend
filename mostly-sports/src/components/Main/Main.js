import React from "react";
import "./Main.css";
import SearchForm from "../SearchForm/SearchForm";
import NewsCardList from "../NewsCardList/NewsCardList";

function Main({ searchResults, error, setSearchResults, setError }) {
  return (
    <div>
      <section className="sports__search-section">
        <div className="section__description-container">
          <p className="section__description">Want to watch sports today?</p>
        </div>
        <div className="section__subdescription-container">
          <p className="section__subdescription">
            Find the latest games and save them to your personal account.
          </p>
        </div>
        <div className="content__container">
          <div className="search__form-container">
            <SearchForm
              setSearchResults={setSearchResults}
              setError={setError}
            />
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      </section>

      <section className="results__section">
        {searchResults.length > 0 && (
          <div className="news__card-list-container">
            <NewsCardList cards={searchResults} />
          </div>
        )}
      </section>
    </div>
  );
}

export default Main;
