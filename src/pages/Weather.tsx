import CurrentWeather from "@/features/weather/current";
import ForecastWeather from "@/features/weather/forecast";
import FavoritesCities from "@/features/weather/fovarite-cities";

const WeatherPage = () => {
  return (
    <>
      <FavoritesCities />
      <CurrentWeather />
      <ForecastWeather />
    </>
  );
};

export default WeatherPage;
