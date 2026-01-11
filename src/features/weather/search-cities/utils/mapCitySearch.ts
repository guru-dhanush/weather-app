import type { City } from "@/store/app.store";

export const mapCitySearchResponse = (apiResponse: any): City[] => {
  if (!apiResponse?.list) return [];

  return apiResponse.list.map((item: any) => ({
    name: item.name,
    country: item.sys.country,
    lat: item.coord.lat,
    lon: item.coord.lon,
    temp: Math.round(item.main.temp),
    condition: item.weather[0].main,
    icon: item.weather[0].icon,
  }));
};
