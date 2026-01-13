import type { WeatherUnit } from "@/shared/type";
import type { WeatherApiResponse } from "../types/weather-api.types";
import type { WeatherUIData } from "../types/weather.types";

const toKmh = (speed: number, unit: WeatherUnit): number =>
  unit === "imperial" ? Math.round(speed * 1.60934) : Math.round(speed * 3.6);

export const mapWeatherToUI = (
  api: WeatherApiResponse,
  units: WeatherUnit = "standard"
): WeatherUIData => {
  const weather = api.weather[0];

  return {
    location: {
      city: api.name,
      country: api.sys.country,
      lat: api.coord.lat,
      lon: api.coord.lon,
    },

    current: {
      temperature: Math.round(api.main.temp),
      feelsLike: Math.round(api.main.feels_like),
      minTemp: Math.round(api.main.temp_min),
      maxTemp: Math.round(api.main.temp_max),
      humidity: api.main.humidity,
      visibilityKm: api.visibility / 1000,
    },

    condition: {
      main: weather.main,
      description: weather.description,
      icon: weather.icon,
      isDay: weather.icon.includes("d"),
    },

    wind: {
      speedKmh: toKmh(api.wind?.speed, units),
    },

    meta: {
      timestamp: api.dt,
    },
  };
};
