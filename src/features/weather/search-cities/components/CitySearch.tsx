import { useDebounce } from "@/shared/hooks/useDebounce";
import { Autocomplete } from "@/shared/components/ui/autocomplete/Autocomplete";
import { useState } from "react";
import { useAppStore, type City } from "@/store/app.store";
import CityCard from "@/shared/components/CityCard";
import { useCitySearch } from "../hooks/useCitySearch";

const CitySearch = () => {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);

  const { data = [], isLoading, error } = useCitySearch(debouncedQuery);
  const setLocation = useAppStore((s) => s.setLocation);
  const favorites = useAppStore((s) => s.favorites);
  const toggleFavorite = useAppStore((s) => s.toggleFavorite);

  const isFavorite = (lat: number, lon: number) =>
    favorites.some((fav) => fav.lat === lat && fav.lon === lon);

  const handleSelectCity = (city: City) => {
    setLocation({ lat: city.lat, lon: city.lon }, "search");
    setQuery("");
  };

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
      renderItem={(city) => (
        <CityCard
          city={city}
          favorite={isFavorite(city.lat, city.lon)}
          onToggleFavorite={toggleFavorite}
        />
      )}
    />
  );
};

export default CitySearch;
