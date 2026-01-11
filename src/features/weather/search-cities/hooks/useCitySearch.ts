import { useQuery } from "@tanstack/react-query";
import { getCity } from "../services/forecast.api";

export const useCitySearch = (query: string) => {
  return useQuery({
    queryKey: ["city-search", query],
    queryFn: async () => {
      const res = await getCity(query);
      console.log(res);
      return [];
    },
    enabled: query.length >= 3,
    staleTime: 1000 * 60 * 5, // cache 5 mins
  });
};
