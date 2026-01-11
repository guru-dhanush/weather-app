import { useAppStore } from "@/store/app.store";
import CurrentWeather from "./components/Weather";
import "./index.css";

const Current = () => {
  const { selectedLocation } = useAppStore();

  return <CurrentWeather location={selectedLocation} />;
};

export default Current;
