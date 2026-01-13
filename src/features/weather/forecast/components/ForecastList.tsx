import ComponentCard from "@/shared/components/ComponentCard/ComponentCard";
import type { DailyForecast } from "../types/forecast.types";
import styles from "./ForecastList.module.css";
import { formatForecastDate } from "../utils/formatDate";

interface Props {
  data: DailyForecast[];
}

const ForecastList = ({ data }: Props) => {
  return (
    <ComponentCard
      title="5-Day Weather Forecast"
      desc="Daily temperature and conditions for the next five days"
    >
      <div className={styles.list}>
        {data.map((day) => {
          const { dayLabel, formattedDate } = formatForecastDate(day.date);

          return (
            <div key={day.date} className={styles.card}>
              <div className={styles.date}>
                <span className={styles.day}>{dayLabel}</span>
                <span className={styles.fullDate}>{formattedDate}</span>
              </div>

              <img
                src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`}
                alt={day.condition}
              />

              <div className={styles.condition}>{day.condition}</div>

              <div className={styles.temp}>
                <strong>{day.maxTemp}°</strong>
                <span>{day.minTemp}°</span>
              </div>
            </div>
          );
        })}
      </div>
    </ComponentCard>
  );
};

export default ForecastList;
