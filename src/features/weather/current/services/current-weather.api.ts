import { weatherApi } from "@/shared/services/axios";

export const getCurrentWeather = async (lat: number, lon: number) => {
  const response = await weatherApi.get("/weather", {
    params: {
      lat,
      lon,
    },
  });

  return response.data;
};
