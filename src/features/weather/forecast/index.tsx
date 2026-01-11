import { useAppStore } from "@/store/app.store";
import ForecastWeather from "./components/Forecast";
import "./index.css";

const Forecast = () => {
  const { selectedLocation } = useAppStore();

  return <ForecastWeather location={selectedLocation} />;
};

export default Forecast;
