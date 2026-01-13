import { useQuery } from "@tanstack/react-query";
import { getCurrentWeather } from "../services/current-weather.api";
import type { Location, WeatherUnit } from "../../../../shared/type";
import type { WeatherUIData } from "../types/weather.types";
import { mapWeatherToUI } from "../utils/mapWeatherToUI";

export const useCurrentWeather = (location: Location, unit: WeatherUnit) => {
  return useQuery<WeatherUIData>({
    queryKey: ["current-weather", location.lat, location.lon, unit],

    queryFn: async ({ signal }) => {
      const apiResponse = await getCurrentWeather(
        location.lat,
        location.lon,
        unit,
        signal
      );
      return mapWeatherToUI(apiResponse, unit);
    },

    enabled: Boolean(location?.lat && location?.lon),
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    retry: 2,
  });
};
