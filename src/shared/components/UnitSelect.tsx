import { useAppStore } from "@/store/app.store";
import { WEATHER_UNIT_OPTIONS } from "../constant/constant";
import { Select } from "./ui/select/Select";

export const UnitSelect = () => {
  const unit = useAppStore((s) => s.unit);
  const setUnit = useAppStore((s) => s.setUnit);

  return (
    <Select value={unit} options={WEATHER_UNIT_OPTIONS} onChange={setUnit} />
  );
};
