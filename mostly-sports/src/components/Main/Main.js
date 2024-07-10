import React, { useState } from "react";
import "./Main.css";
import SearchForm from "../SearchForm/SearchForm";
import NewsCardList from "../NewsCardList/NewsCardList";
import CirclePreloader from "../CirclePreloader/CirclePreloader";

function Main({
  searchResults,
  error,
  setSearchResults,
  setError,
  handleSearch,
  setIsLoading,
  isLoading,
}) {
  return (
    <main className="main__container">
      <section className="sports__search-section">
        <div className="section__description-container">
          <h1 className="section__description">Want to watch sports today?</h1>
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
              setIsLoading={setIsLoading}
              handleSearch={handleSearch}
            />
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      </section>

      <section className="results__section">
        {isLoading ? (
          <CirclePreloader />
        ) : (
          searchResults.length > 0 && (
            <div className="news__card-list-container">
              <div className="news__card-list">
                <NewsCardList cards={searchResults} />
              </div>
            </div>
          )
        )}
      </section>
    </main>
  );
}

export default Main;
