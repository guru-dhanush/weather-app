import { useQuery } from "@tanstack/react-query";
import { getCurrentWeather } from "../services/current-weather.api";
import { mapWeatherToCard } from "../utils/mapWeatherToCard";
import type { Location } from "../../../../shared/type";

export const useCurrentWeather = (location: Location) => {
  return useQuery({
    queryKey: ["current-weather", location?.lat, location?.lon],

    queryFn: async () => {
      const { lat, lon } = location;
      const apiResponse = await getCurrentWeather(lat, lon);
      return mapWeatherToCard(apiResponse);
    },

    enabled: !!location?.lat && !!location?.lon,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    retry: 2,
  });
};
