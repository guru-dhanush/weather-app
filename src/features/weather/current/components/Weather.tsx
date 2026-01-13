import { WeatherCard } from "./WeatherCard";
import {
  TEMPERATURE_UNIT_MAP,
  type Location,
  type WeatherUnit,
} from "../../../../shared/type";
import { useCurrentWeather } from "../hooks/useCurrentWeather";
import WeatherCardSkeleton from "./WeatherCardSkeleton";
import { useFavorites } from "../../fovarite-cities/hook/useFavorites";
import { InlineError } from "@/shared/components/InlineError";

const CurrentWeather = ({
  location,
  unit,
}: {
  location: Location;
  unit: WeatherUnit;
}) => {
  const { data, isLoading, isError } = useCurrentWeather(location, unit);
  const { isFavorite, toggleFavorite } = useFavorites();

  if (isLoading) return <WeatherCardSkeleton />;
  if (!data || isError) {
    return (
      <InlineError
        title="Unable to load current weather"
        description="Please try again in a moment."
      />
    );
  }

  return (
    <WeatherCard
      data={data}
      temperatureUnitSymbol={TEMPERATURE_UNIT_MAP[unit]}
      isFavorite={isFavorite(data.location.lat, data.location.lon)}
      toggleFavorite={toggleFavorite}
    />
  );
};

export default CurrentWeather;
