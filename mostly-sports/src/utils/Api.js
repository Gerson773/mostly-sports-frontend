import { API_KEY, TICKER_BASE_URL, SEARCH_BASE_URL } from "./constant";
import { processSearchResponse, processTickerResponse, request } from "./utils";

const formatDate = (date) => {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export function getScheduledEvents(date = new Date()) {
  const formattedDate = formatDate(date);
  const url = `${TICKER_BASE_URL}/api/v1/sport/baseball/scheduled-events/${formattedDate}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": "sportapi7.p.rapidapi.com",
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  return request(url, options)
    .then((result) => processTickerResponse(result))
    .catch((error) => {
      console.error("Error fetching scheduled events:", error);
      throw error;
    });
}

export function getSearchResults() {
  const url = SEARCH_BASE_URL;

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": API_KEY,
      "x-rapidapi-host": "real-time-events-search.p.rapidapi.com",
    },
  };

  return request(url, options)
    .then((result) => processSearchResponse(result))
    .catch((error) => {
      console.error("Error fetching search results:", error);
      throw error;
    });
}
