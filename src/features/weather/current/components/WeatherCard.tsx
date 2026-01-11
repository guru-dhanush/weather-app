import type { WeatherCardData } from "../types/weather.types";
import styles from "./WeatherCard.module.css";

interface Props {
  data: WeatherCardData;
}

export const WeatherCard = ({ data }: Props) => {
  return (
    <div className={styles.card}>
      <div>
        <h2 className={styles.city}>
          {data.cityName}, {data.country}
        </h2>
        <p className={styles.condition}>{data.condition}</p>
      </div>

      <div className={styles.main}>
        <div className={styles.temp}>{data.temperature}°</div>
        <img
          src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`}
          alt={data.condition}
          className={styles.icon}
        />
      </div>

      <div className={styles.meta}>
        <span>{data.humidity}%</span>
        <span>{data.windSpeed} km/h</span>
      </div>
    </div>
  );
};
