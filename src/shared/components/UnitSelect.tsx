import { useWeatherStore } from "@/store/weather.store";
import { WEATHER_UNIT_OPTIONS } from "../constant/constant";
import { Select } from "./ui/select/Select";

export const UnitSelect = () => {
  const unit = useWeatherStore((s) => s.unit);
  const setUnit = useWeatherStore((s) => s.setUnit);

  return (
    <Select value={unit} options={WEATHER_UNIT_OPTIONS} onChange={setUnit} />
  );
};
