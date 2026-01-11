import { useState } from "react";
import SearchBar from "@/shared/components/SearchBar";
import CitySuggestions from "./components/CitySuggestions";
import { useAppStore } from "@/store/app.store";

const CitySearch = () => {
  const [query, setQuery] = useState("");
  const setLocation = useAppStore((s) => s.setLocation);

  const handleSelectCity = (city: any) => {
    setLocation(
      {
        name: city.name,
        country: city.country,
        lat: city.lat,
        lon: city.lon,
      },
      "search"
    );
    setQuery("");
  };

  return (
    <div className="city-search">
      <SearchBar value={query} onChange={setQuery} />
      {query && <CitySuggestions query={query} onSelect={handleSelectCity} />}
    </div>
  );
};

export default CitySearch;
