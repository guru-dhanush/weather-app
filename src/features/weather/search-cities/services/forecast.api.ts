import { weatherApi } from "@/shared/services/axios";

export const getCity = async (q: string) => {
  const response = await weatherApi.get("/find", {
    params: {
      q,
    },
  });

  return response.data;
};
