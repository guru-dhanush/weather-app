import type {
  DailyForecast,
  ForecastApiResponse,
} from "../types/forecast.types";

export const mapForecastToDaily = (
  apiData: ForecastApiResponse
): DailyForecast[] => {
  const dailyMap = new Map<string, DailyForecast>();

  apiData.list.forEach((item) => {
    const date = item.dt_txt.split(" ")[0]; // YYYY-MM-DD

    const min = Math.round(item.main.temp_min);
    const max = Math.round(item.main.temp_max);

    if (!dailyMap.has(date)) {
      dailyMap.set(date, {
        date,
        minTemp: min,
        maxTemp: max,
        condition: item.weather[0].main,
        icon: item.weather[0].icon,
      });
    } else {
      const existing = dailyMap.get(date)!;
      existing.minTemp = Math.min(existing.minTemp, min);
      existing.maxTemp = Math.max(existing.maxTemp, max);
    }
  });
  return Array.from(dailyMap.values()).slice(0, 5);
};
