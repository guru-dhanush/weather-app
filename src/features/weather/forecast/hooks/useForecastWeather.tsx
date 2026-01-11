import { useQuery } from "@tanstack/react-query";
import { getWeatherForecast } from "../services/forecast.api";
import { mapForecastToDaily } from "../utils/mapForecastToDaily";
import type { Location } from "@/shared/type";

export const useForecastWeather = (location: Location) => {
  return useQuery({
    queryKey: ["forecast", location.lat, location.lon],
    queryFn: async () => {
      const apiResponse = await getWeatherForecast(location.lat, location.lon);
      return mapForecastToDaily(apiResponse);
    },
    enabled: !!location,
    staleTime: 10 * 60 * 1000,
  });
};
