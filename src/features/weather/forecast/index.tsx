import { useAppStore } from "@/store/app.store";
import ForecastWeather from "./components/Forecast";

const Forecast = () => {
  const { selectedLocation } = useAppStore();

  return <ForecastWeather location={selectedLocation} />;
};

export default Forecast;
