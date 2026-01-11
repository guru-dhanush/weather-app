import { WeatherCard } from "./WeatherCard";
import type { Location } from "../../../../shared/type";
import { useCurrentWeather } from "../hooks/useCurrentWeather";

const CurrentWeather = ({ location }: { location: Location }) => {
  const { data, isLoading } = useCurrentWeather(location);

  if (isLoading) return <div>Loading...</div>;
  if (!data) return null;

  return (
    <div>
      <WeatherCard data={data} />
    </div>
  );
};

export default CurrentWeather;
