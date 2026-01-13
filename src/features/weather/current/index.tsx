import { useAppStore } from "@/store/app.store";
import CurrentWeather from "./components/Weather";
import { ErrorBoundary } from "@/shared/components/ErrorBoundary/ErrorBoundary";

const Current = () => {
  const selectedLocation = useAppStore((state) => state.selectedLocation);
  const unit = useAppStore((state) => state.unit);

  return (
    <ErrorBoundary fallback={<div>Failed to load Current weather data</div>}>
      <CurrentWeather location={selectedLocation} unit={unit} />
    </ErrorBoundary>
  );
};

export default Current;
