import React, { useState } from "react";
import { NewsCard } from "../NewsCard/NewsCard";
import "./NewsCardList.css";

function NewsCardList({ cards }) {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  return (
    <div className="news__card-list">
      {cards.slice(0, visibleCount).map((card, index) => (
        <NewsCard
          key={index}
          title={card.title}
          description={card.description}
          imageUrl={card.imageUrl}
          date={card.date}
          source={card.source}
        />
      ))}
      {visibleCount < cards.length && (
        <button className="news__card-show-more" onClick={handleShowMore}>
          Show More
        </button>
      )}
    </div>
  );
}

export default NewsCardList;
