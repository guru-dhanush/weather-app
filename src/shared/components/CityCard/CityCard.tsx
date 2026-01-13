import styles from "./CityCard.module.css";
import React from "react";
import { FavoriteButton } from "../FavoriteButton/FavoriteButton";
import type { City } from "@/shared/type";

type CityCardSize = "sm" | "md" | "lg";

interface CityCardProps {
  city: City;
  favorite: boolean;
  size?: CityCardSize;
  onToggleFavorite: (city: City) => void;
  onSelect?: (city: City) => void;
  width?: number | string;
}

const CityCard = React.memo(
  ({
    city,
    favorite,
    size = "sm",
    onToggleFavorite,
    onSelect,
    width,
  }: CityCardProps) => {
    
    const sizeMap: Record<CityCardSize, number> = {
      sm: 16,
      md: 20,
      lg: 24,
    };

    const starSize = sizeMap[size];
    return (
      <div
        className={`${styles.city_card} ${styles[size]}`}
        style={{ width }}
        onClick={() => onSelect?.(city)}
      >
        <div className={styles.city_info}>
          <img
            className={styles.icon}
            src={`https://openweathermap.org/img/wn/${city.icon}.png`}
            alt={city.condition}
          />

          <div className={styles.text}>
            <strong className={styles.title}>
              {city.name}, {city.country}
            </strong>
            {city.condition && city.temp && (
              <div className={styles.meta}>
                {city.condition} · {city.temp}°
              </div>
            )}
          </div>
        </div>
        <FavoriteButton
          active={favorite}
          size={starSize}
          onToggle={(e) => {
            e.stopPropagation();
            onToggleFavorite(city);
          }}
        />
      </div>
    );
  }
);

export default CityCard;
