import type {
  WeatherApiResponse,
  WeatherCardData,
  WeatherCondition,
} from "../types/weather.types";

const conditionMap: Record<string, WeatherCondition> = {
  Clear: "sunny",
  Clouds: "cloudy",
  Rain: "rainy",
  Drizzle: "rainy",
  Thunderstorm: "stormy",
  Snow: "snowy",
};

export const mapWeatherToCard = (
  apiData: WeatherApiResponse
): WeatherCardData => {
  const mainCondition = apiData.weather[0]?.main ?? "unknown";

  return {
    cityName: apiData.name,
    country: apiData.sys.country,
    temperature: Math.round(apiData.main.temp),
    condition: conditionMap[mainCondition] ?? "unknown",
    humidity: apiData.main.humidity,
    windSpeed: Math.round(apiData.wind.speed * 3.6), // m/s → km/h
    icon: apiData.weather[0]?.icon ?? "",
  };
};
