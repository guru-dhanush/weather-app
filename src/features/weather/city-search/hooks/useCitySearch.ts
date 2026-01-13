import { useQuery } from "@tanstack/react-query";
import { mapCitySearchResponse } from "../utils/mapCitySearch";
import { getCity } from "../services/city-search.api";

export const useCitySearch = (query: string) => {
  return useQuery({
    queryKey: ["city-search", query],
    queryFn: async ({ signal }) => {
      const res = await getCity(query, signal);
      return mapCitySearchResponse(res);
    },
    enabled: query.length >= 3,
    staleTime: 1000 * 60 * 5,
  });
};
