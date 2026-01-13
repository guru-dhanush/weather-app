import { useAppStore } from "@/store/app.store";
import { useMemo, useCallback } from "react";

const getCityKey = (lat: number, lon: number) => `${lat}-${lon}`;

export function useFavorites() {
  const favorites = useAppStore((s) => s.favorites);
  const toggleFavorite = useAppStore((s) => s.toggleFavorite);

  const favoriteSet = useMemo(() => {
    return new Set(favorites.map((f) => getCityKey(f.lat, f.lon)));
  }, [favorites]);

  const isFavorite = useCallback(
    (lat: number, lon: number) => {
      return favoriteSet.has(getCityKey(lat, lon));
    },
    [favoriteSet]
  );

  return {
    favorites,
    isFavorite,
    toggleFavorite,
  };
}
