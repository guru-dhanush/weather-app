import CurrentWeather from "@/features/weather/current";
import ForecastWeather from "@/features/weather/forecast";

const Dashboard = () => {
  return (
    <div>
      <CurrentWeather />
      <ForecastWeather />
    </div>
  );
};

export default Dashboard;
