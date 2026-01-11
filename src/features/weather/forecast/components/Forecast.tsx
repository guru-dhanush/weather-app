import ForecastCard from "./ForecastList";
import type { Location } from "../../../../shared/type";
import { useForecastWeather } from "../hooks/useForecastWeather";

const ForecastWeather = ({ location }: { location: Location }) => {
  const { data, isLoading } = useForecastWeather(location);

  if (isLoading) return <div>Loading...</div>;
  if (!data) return null;

  return (
    <div>
      <ForecastCard data={data} />
    </div>
  );
};

export default ForecastWeather;
