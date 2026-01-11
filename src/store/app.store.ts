import { DEFAULT_LOCATION } from "@/shared/constant/constant";
import type { Location } from "@/shared/type";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type LocationSource = "default" | "geo" | "search" | "favorite";

export interface City extends Location {
  name: string;
  country: string;
  icon: string;
  temp: number;
  condition: string;
}

interface WeatherStore {
  selectedLocation: Location;
  source: LocationSource;
  favorites: City[];

  setLocation: (location: Location, source: LocationSource) => void;
  toggleFavorite: (city: City) => void;
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

      toggleFavorite: (City) =>
        set((state) => {
          const exists = state.favorites.some(
            (fav) => fav.lat === City.lat && fav.lon === City.lon
          );

          return {
            favorites: exists
              ? state.favorites.filter(
                  (fav) => fav.lat !== City.lat || fav.lon !== City.lon
                )
              : [...state.favorites, City],
          };
        }),

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
