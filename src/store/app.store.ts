import { DEFAULT_LOCATION } from "@/shared/constant/constant";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type LocationSource = "default" | "geo" | "search" | "favorite";

export interface Location {
  name?: string;
  lat: number;
  lon: number;
  country?: string;
}

interface WeatherStore {
  selectedLocation: Location;
  source: LocationSource;
  favorites: Location[];

  setLocation: (location: Location, source: LocationSource) => void;
  addFavorite: (location: Location) => void;
  removeFavorite: (lat: number, lon: number) => void;
  isFavorite: (lat: number, lon: number) => boolean;
}

export const useAppStore = create<WeatherStore>()(
  persist(
    (set, get) => ({
      selectedLocation: DEFAULT_LOCATION,
      source: "default",
      favorites: [],

      setLocation: (location, source) =>
        set({
          selectedLocation: location,
          source,
        }),

      addFavorite: (location) =>
        set((state) => {
          const exists = state.favorites.some(
            (fav) => fav.lat === location.lat && fav.lon === location.lon
          );

          if (exists) return state;

          return {
            favorites: [...state.favorites, location],
          };
        }),

      removeFavorite: (lat, lon) =>
        set((state) => ({
          favorites: state.favorites.filter(
            (fav) => fav.lat !== lat || fav.lon !== lon
          ),
        })),

      isFavorite: (lat, lon) => {
        return get().favorites.some(
          (fav) => fav.lat === lat && fav.lon === lon
        );
      },
    }),
    {
      name: "weather-store",
      partialize: (state) => ({
        favorites: state.favorites,
      }),
    }
  )
);
