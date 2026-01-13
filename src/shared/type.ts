export interface Location {
  lat: number;
  lon: number;
}

export type WeatherUnit = "standard" | "metric" | "imperial";
export type TemperatureUnitSymbol = "°C" | "°F" | "K";

export const TEMPERATURE_UNIT_MAP: Record<WeatherUnit, TemperatureUnitSymbol> =
  {
    standard: "K",
    metric: "°C",
    imperial: "°F",
  };

export type LocationSource = "default" | "geo" | "search" | "favorite";

export interface City extends Location {
  name: string;
  country: string;
  icon: string;
  temp?: number;
  condition?: string;
}
