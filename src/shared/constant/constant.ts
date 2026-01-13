import type { Location } from "../type";
import type { WeatherUnit } from "@/shared/type";

export const DEFAULT_LOCATION: Location = {
  lat: 12.9716,
  lon: 77.5946,
};

export const WEATHER_UNIT_OPTIONS: {
  value: WeatherUnit;
  label: string;
}[] = [
  { value: "metric", label: "Celsius (°C)" },
  { value: "imperial", label: "Fahrenheit (°F)" },
  { value: "standard", label: "Kelvin (K)" },
];
