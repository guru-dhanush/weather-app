import { useCitySearch } from "../hooks/useCitySearch";
import CityList from "./CityList";

interface Props {
  query: string;
  onSelect: (city: any) => void;
}

const CitySuggestions = ({ query, onSelect }: Props) => {
  const { data, isLoading } = useCitySearch(query);
  if (!query) return null;
  return <CityList cities={data} onSelect={onSelect} loading={isLoading} />;
};

export default CitySuggestions;
