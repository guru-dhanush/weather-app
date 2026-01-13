import { useWeatherStore } from "@/store/weather.store";
import ForecastWeather from "./components/Forecast";
import { ErrorBoundary } from "@/shared/components/ErrorBoundary/ErrorBoundary";

const Forecast = () => {
  const selectedLocation = useWeatherStore((state) => state.selectedLocation);
  const unit = useWeatherStore((state) => state.unit);

  return (
    <ErrorBoundary fallback={<div>Failed to load Weather Forecast data</div>}>
      <ForecastWeather location={selectedLocation} unit={unit} />
    </ErrorBoundary>
  );
};

export default Forecast;
