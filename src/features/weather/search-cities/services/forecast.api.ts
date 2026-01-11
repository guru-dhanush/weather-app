import { weatherApi } from "@/shared/services/axios";

export const getCity = async (q: string) => {
  try {
    const response = await weatherApi.get("/find", {
      params: {
        q,
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
    return;
  }
};
