import CurrentWeather from "@/features/weather/current";
import ForecastWeather from "@/features/weather/forecast";
import FovariteCities from "@/features/weather/fovarite-cities";
import styles from "./weatherPage.module.css";

const WeatherPage = () => {
  return (
    <div className={styles["weather-container"]}>
      <div className={styles["weather-top"]}>
        <CurrentWeather />
        <FovariteCities />
      </div>

      <div className={styles["weather-forecast"]}>
        <ForecastWeather />
      </div>
    </div>
  );
};

export default WeatherPage;
