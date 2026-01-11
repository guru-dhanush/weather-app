export interface ForecastApiResponse {
  list: ForecastItem[];
}

export interface ForecastItem {
  dt: number;
  dt_txt: string;
  main: {
    temp_min: number;
    temp_max: number;
  };
  weather: {
    main: string;
    icon: string;
  }[];
}


export interface DailyForecast {
  date: string;          // YYYY-MM-DD
  minTemp: number;       // °C
  maxTemp: number;       // °C
  condition: string;
  icon: string;
}
