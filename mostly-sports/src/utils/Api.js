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

export function getSearchResults(
  query,
  date = "any",
  isVirtual = false,
  start = 0
) {
  const url = `${SEARCH_BASE_URL}?query=${encodeURIComponent(
    query
  )}&date=${date}&is_virtual=${isVirtual}&start=${start}`;

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": API_KEY,
      "x-rapidapi-host": "real-time-events-search.p.rapidapi.com",
    },
  };

  return fetch(url, options)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("API Response:", data);

      if (data.status !== "OK" || !data.data) {
        throw new Error("Invalid response format");
      }

      const mappedResults = data.data.map((event) => ({
        title: event.name,
        description: event.description,
        imageUrl: event.thumbnail,
        date: event.start_time,
        source: event.publisher,
        eventId: event.event_id,
      }));

      return mappedResults;
    })
    .catch((error) => {
      console.error("Error fetching search results:", error);
      throw error;
    });
}
