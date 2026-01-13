import { useQuery } from "@tanstack/react-query";
import { getWeatherForecast } from "../services/forecast.api";
import { mapForecastToDaily } from "../utils/mapForecastToDaily";
import type { Location, WeatherUnit } from "@/shared/type";

export const useForecastWeather = (location: Location, unit: WeatherUnit) => {
  return useQuery({
    queryKey: ["forecast", location.lat, location.lon, unit],
    queryFn: async ({ signal }) => {
      const apiResponse = await getWeatherForecast(
        location.lat,
        location.lon,
        unit,
        signal
      );
      return mapForecastToDaily(apiResponse);
    },
    enabled: !!location,
    staleTime: 10 * 60 * 1000,
  });
};
