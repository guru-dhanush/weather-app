import type { City, TemperatureUnitSymbol } from "@/shared/type";
import type { WeatherUIData } from "../types/weather.types";
import styles from "./WeatherCard.module.css";
import { UnitSelect } from "@/shared/components/UnitSelect";
import { FavoriteButton } from "@/shared/components/FavoriteButton/FavoriteButton";
import { memo } from "react";
interface Props {
  data: WeatherUIData;
  temperatureUnitSymbol: TemperatureUnitSymbol;
  isFavorite: boolean;
  toggleFavorite: (city: City) => void;
}

// UnitSelect is a global preference control.
// It is kept here for now since the Header already has the theme toggle.
// With more time, a Sidebar would be created where the theme toggle can be moved,
// and UnitSelect can remain in the Header

export const WeatherCard = memo(
  ({ data, temperatureUnitSymbol, isFavorite, toggleFavorite }: Props) => {
    const {
      location: { city: name, country, lat, lon },
      condition: { icon },
    } = data;

    return (
      <section className={styles.card}>
        <div className={styles.content}>
          <header className={styles.header}>
            <div>
              <h2 className={styles.city}>
                {data.location.city}, {data.location.country}
                <FavoriteButton
                  active={isFavorite}
                  size={16}
                  onToggle={(e) => {
                    e.stopPropagation();
                    toggleFavorite({ name, country, lat, lon, icon });
                  }}
                />
              </h2>
              <UnitSelect />
            </div>
          </header>

          <div>
            <div className={styles.temp_cloud}>
              <div className={styles.temp}>
                {data.current.temperature}
                {temperatureUnitSymbol}
              </div>
              <img
                src={`https://openweathermap.org/img/wn/${data.condition.icon}@2x.png`}
                alt={data.condition.description}
                className={styles.icon}
              />
            </div>
            <span className={styles.feelsLike}>
              Feels like {data.current.feelsLike}°. {data.condition.description}
            </span>
          </div>

          <div className={styles.range}>
            <span>Max {data.current.maxTemp}°</span>
            <span>Min {data.current.minTemp}°</span>
          </div>
        </div>
        <div className={styles.meta}>
          <div>
            <span className={styles.label}>Humidity</span>
            <span>{data.current.humidity}%</span>
          </div>
          <div className={styles.divider}></div>
          <div>
            <span className={styles.label}>Visibility</span>
            <span>{data.current.visibilityKm} km</span>
          </div>
          <div className={styles.divider}></div>
          <div>
            <span className={styles.label}>Wind</span>
            <span>{data.wind.speedKmh} km/h</span>
          </div>
        </div>
      </section>
    );
  }
);
