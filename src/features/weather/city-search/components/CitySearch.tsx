import { useDebounce } from "@/shared/hooks/useDebounce";
import { Autocomplete } from "@/shared/components/ui/autocomplete/Autocomplete";
import { useCallback, useState } from "react";
import { useWeatherStore } from "@/store/weather.store";
import CityCard from "@/shared/components/CityCard/CityCard";
import { useCitySearch } from "../hooks/useCitySearch";
import { useFavorites } from "../../fovarite-cities/hook/useFavorites";
import type { City } from "@/shared/type";

const CitySearch = () => {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);

  const { data = [], isLoading, error } = useCitySearch(debouncedQuery);
  const setLocation = useWeatherStore((s) => s.setLocation);
  const { isFavorite, toggleFavorite } = useFavorites();

  const handleSelectCity = (city: City) => {
    setLocation({ lat: city.lat, lon: city.lon }, "search");
    setQuery("");
  };

  const renderCity = useCallback(
    (city: City) => (
      <CityCard
        city={city}
        favorite={isFavorite(city.lat, city.lon)}
        onToggleFavorite={toggleFavorite}
      />
    ),
    [isFavorite, toggleFavorite]
  );

  return (
    <Autocomplete
      value={query}
      onChange={setQuery}
      items={data}
      loading={isLoading}
      error={error ? "Failed to load cities" : null}
      getKey={(city) => `${city.lat}-${city.lon}`}
      placeholder="Search city"
      onSelect={handleSelectCity}
      renderItem={(city) => renderCity(city)}
    />
  );
};

export default CitySearch;
