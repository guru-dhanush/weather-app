import { ErrorBoundary } from "@/shared/components/ErrorBoundary/ErrorBoundary";
import CitySearch from "./components/CitySearch";

const SearchCity = () => {
  return (
    <ErrorBoundary fallback={<div>Failed to search cities</div>}>
      <CitySearch />
    </ErrorBoundary>
  );
};

export default SearchCity;
