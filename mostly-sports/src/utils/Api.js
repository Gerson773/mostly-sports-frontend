import { API_KEY, BASE_URL } from "./constant";
import { processServerResponse } from "./utils";

const formatDate = (date) => {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export function getScheduledEvents(date = new Date()) {
  const formattedDate = formatDate(date);
  const url = `${BASE_URL}/api/v1/sport/baseball/scheduled-events/${formattedDate}`;
  return fetch(url, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": "sportapi7.p.rapidapi.com",
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then(processServerResponse);
}
