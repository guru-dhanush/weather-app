export type WeatherCondition =
  | "sunny"
  | "cloudy"
  | "rainy"
  | "snowy"
  | "stormy"
  | "unknown";

export interface WeatherCardData {
  cityName: string;
  country: string;
  temperature: number; // in °C
  condition: WeatherCondition;
  humidity: number;
  windSpeed: number; // km/h
  icon: string;
}

export interface WeatherApiResponse {
  name: string;
  sys: {
    country: string;
  };
  main: {
    temp: number;
    humidity: number;
  };
  weather: Array<{
    id: number;
    main: string;
    description: string;
    icon: string;
  }>;
  wind: {
    speed: number;
  };
}
