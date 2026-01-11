import { weatherApi } from "@/shared/services/axios";

export const getWeatherForecast = async (lat: number, lon: number) => {
  const response = await weatherApi.get("/forecast", {
    params: {
      lat,
      lon,
    },
  });

  return response.data;
};
