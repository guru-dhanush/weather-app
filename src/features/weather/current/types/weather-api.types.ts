export interface WeatherApiResponse {
  name: string;
  timezone: number;
  dt: number;

  coord: {
    lat: number;
    lon: number;
  };

  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };

  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
    pressure: number;
  };

  visibility: number;

  weather: Array<{
    main: string;
    description: string;
    icon: string;
  }>;

  wind: {
    speed: number;
    deg: number;
    gust?: number;
  };
}
