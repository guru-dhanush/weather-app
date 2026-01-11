import type { DailyForecast } from "../types/forecast.types";
import styles from "./ForecastList.module.css";

interface Props {
  data: DailyForecast[];
}

const ForecastList = ({ data }: Props) => {
  return (
    <div className={styles.list}>
      {data.map((day) => (
        <div key={day.date} className={styles.card}>
          <span>{day.date}</span>
          <img
            src={`https://openweathermap.org/img/wn/${day.icon}.png`}
            alt={day.condition}
          />
          <span>
            {day.maxTemp}° / {day.minTemp}°
          </span>
        </div>
      ))}
    </div>
  );
};

export default ForecastList;
