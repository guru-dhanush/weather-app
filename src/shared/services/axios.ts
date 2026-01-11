import axios from "axios";

export const weatherApi = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
  timeout: 8000,
  params: {
    appid: import.meta.env.VITE_OPEN_WEATHER_API_KEY,
    units: "metric",
  },
});
