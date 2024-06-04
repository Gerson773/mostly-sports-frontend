import React from "react";
import "./Main.css";
import SearchForm from "../SearchForm/SearchForm";

function Main() {
  return (
    <section className="sports__search-section">
      <div className="section__description-container">
        <p className="section__description">Want to watch sports today?</p>
      </div>
      <div className="section__subdescription-container">
        <p className="section__subdescription">
          Find the latest games and save them to your personal account.
        </p>
      </div>
      <SearchForm />
    </section>
  );
}

export default Main;
