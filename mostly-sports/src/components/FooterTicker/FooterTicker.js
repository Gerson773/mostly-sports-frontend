import React, { useEffect, useState } from "react";
import "../FooterTicker/FooterTicker.css";

const FooterTicker = ({ games, isLoading }) => {
  const formatTime = (timestamp) => {
    const d = new Date(timestamp * 1000);
    return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className="ticker__container">
      {isLoading ? (
        <p>Loading...</p>
      ) : games.length === 0 ? (
        <p>No live games at this moment.</p>
      ) : (
        <ul className="ticker__list">
          {games.map((game, index) => (
            <li key={index} className="ticker__item">
              {game.startTimestamp
                ? `${formatTime(game.startTimestamp)} - `
                : ""}
              {game.homeTeam.name} vs {game.awayTeam.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FooterTicker;
