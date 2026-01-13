import { weatherApi } from "@/shared/services/axios";

export const getCity = async (q: string, signal?: AbortSignal) => {
  const response = await weatherApi.get("/find", {
    params: {
      q,
    },
    signal,
  });

  return response.data;
};
