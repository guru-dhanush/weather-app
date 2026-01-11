import { useQuery } from "@tanstack/react-query";
import { getCity } from "../services/forecast.api";
import { mapCitySearchResponse } from "../utils/mapCitySearch";

export const useCitySearch = (query: string) => {
  return useQuery({
    queryKey: ["city-search", query],
    queryFn: async () => {
      const res = await getCity(query);
      return mapCitySearchResponse(res);
    },
    enabled: query.length >= 3,
    staleTime: 1000 * 60 * 5,
  });
};
