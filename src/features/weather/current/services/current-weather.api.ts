import { weatherApi } from "@/shared/services/axios";
import type { WeatherUnit } from "@/shared/type";

export const getCurrentWeather = async (
  lat: number,
  lon: number,
  units: WeatherUnit,
  signal?: AbortSignal
) => {
  const response = await weatherApi.get("/weather", {
    params: { lat, lon, units },
    signal,
  });

  return response.data;
};
