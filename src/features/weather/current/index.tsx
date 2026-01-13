import { useWeatherStore } from "@/store/weather.store";
import CurrentWeather from "./components/Weather";
import { ErrorBoundary } from "@/shared/components/ErrorBoundary/ErrorBoundary";

const Current = () => {
  const selectedLocation = useWeatherStore((state) => state.selectedLocation);
  const unit = useWeatherStore((state) => state.unit);

  return (
    <ErrorBoundary fallback={<div>Failed to load Current weather data</div>}>
      <CurrentWeather location={selectedLocation} unit={unit} />
    </ErrorBoundary>
  );
};

export default Current;
