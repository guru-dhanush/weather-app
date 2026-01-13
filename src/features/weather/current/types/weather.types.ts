export type WindDirection = "N" | "NE" | "E" | "SE" | "S" | "SW" | "W" | "NW";

export interface WeatherUIData {
  location: {
    city: string;
    country: string;
    lat: number;
    lon: number;
  };

  current: {
    temperature: number;
    feelsLike: number;
    minTemp: number;
    maxTemp: number;
    humidity: number;
    visibilityKm: number;
  };

  condition: {
    main: string;
    description: string;
    icon: string;
    isDay: boolean;
  };

  wind: {
    speedKmh: number;
  };

  meta: {
    timestamp: number;
  };
}
