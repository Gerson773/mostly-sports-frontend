import React from "react";
import "./NewsCard.css";

export function NewsCard({ title, description, imageUrl, date, source }) {
  return (
    <div className="news__card">
      {imageUrl && (
        <img src={imageUrl} alt={title} className="news__card-image" />
      )}
      <p className="news__card-date">{date}</p>
      <h3 className="news__card-title">{title}</h3>
      <p className="news__card-description">{description}</p>
      <p className="news__card-source">{source}</p>
    </div>
  );
}
