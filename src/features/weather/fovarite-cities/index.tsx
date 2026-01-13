import { ErrorBoundary } from "@/shared/components/ErrorBoundary/ErrorBoundary";
import FavoriteCities from "./components/FavoriteCities";

const Favorites = () => {
  return (
    <ErrorBoundary fallback={<div>Failed to load favorites</div>}>
      <FavoriteCities />
    </ErrorBoundary>
  );
};

export default Favorites;
