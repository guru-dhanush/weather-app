import { DEFAULT_LOCATION } from "@/shared/constant/constant";
import type {
  Location,
  LocationSource,
  WeatherUnit,
  City,
} from "@/shared/type";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface WeatherStore {
  selectedLocation: Location;
  source: LocationSource;
  favorites: City[];
  unit: WeatherUnit;

  setLocation: (location: Location, source: LocationSource) => void;
  toggleFavorite: (city: City) => void;
  isFavorite: (lat: number, lon: number) => boolean;
  setUnit: (unit: WeatherUnit) => void;
}

export const useAppStore = create<WeatherStore>()(
  persist(
    (set, get) => ({
      selectedLocation: DEFAULT_LOCATION,
      source: "default",
      favorites: [],
      unit: "imperial",

      setLocation: (location, source) =>
        set({
          selectedLocation: location,
          source,
        }),

      setUnit: (unit) =>
        set({
          unit,
        }),

      toggleFavorite: (city) =>
        set((state) => {
          const { lat, lon, name, icon, country } = city;

          const exists = state.favorites.some(
            (fav) => fav.lat === city.lat && fav.lon === city.lon
          );

          return {
            favorites: exists
              ? state.favorites.filter(
                  (fav) => fav.lat !== city.lat || fav.lon !== city.lon
                )
              : [...state.favorites, { lat, lon, name, icon, country }],
          };
        }),

      isFavorite: (lat, lon) =>
        get().favorites.some((fav) => fav.lat === lat && fav.lon === lon),
    }),
    {
      name: "weather-store",
      partialize: (state) => ({
        selectedLocation: state.selectedLocation,
        source: state.source,
        favorites: state.favorites,
        unit: state.unit,
      }),
    }
  )
);
