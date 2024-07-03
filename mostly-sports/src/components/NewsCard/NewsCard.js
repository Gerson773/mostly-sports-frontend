import React, { useState } from "react";
import "./NewsCard.css";
import bookmarkIcon from "../../../src/images/bookmark.svg";

export function NewsCard({ title, description, imageUrl, date, source }) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleBookmarkClick = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div className="news__card">
      {imageUrl && (
        <img src={imageUrl} alt={title} className="news__card-image" />
      )}
      <button
        className={`news__card-bookmark ${isBookmarked ? "bookmarked" : ""}`}
        onClick={handleBookmarkClick}
      >
        <img src={bookmarkIcon} alt="Bookmark" />
      </button>
      <p className="news__card-date">{date}</p>
      <h3 className="news__card-title">{title}</h3>
      <p className="news__card-description">{description}</p>
      <p className="news__card-source">{source}</p>
    </div>
  );
}
