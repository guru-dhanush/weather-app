import ForecastCard from "./ForecastList";
import type { Location, WeatherUnit } from "../../../../shared/type";
import { useForecastWeather } from "../hooks/useForecastWeather";
import ForecastListSkeleton from "./ForecastListSkeleton";
import { InlineError } from "@/shared/components/InlineError";

const ForecastWeather = ({
  location,
  unit,
}: {
  location: Location;
  unit: WeatherUnit;
}) => {
  const { data, isLoading, isError } = useForecastWeather(location, unit);

  if (isLoading) return <ForecastListSkeleton />;
  if (!data) return null;
  if (isError) {
    return (
      <InlineError
        title="Unable to load weather forecast"
        description="Please try again in a moment."
      />
    );
  }

  return <ForecastCard data={data} />;
};

export default ForecastWeather;
