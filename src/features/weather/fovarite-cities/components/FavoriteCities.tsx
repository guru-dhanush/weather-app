import { useWeatherStore } from "@/store/weather.store";
import styles from "./FavoriteCities.module.css";
import CityCard from "@/shared/components/CityCard/CityCard";
import { useFavorites } from "../hook/useFavorites";
import { useThrottle } from "@/shared/hooks/useThrottle";
import type { City } from "@/shared/type";

const FavoriteCities = () => {
  const setLocation = useWeatherStore((s) => s.setLocation);
  const { favorites, toggleFavorite } = useFavorites();

  const handleSelectCity = (city: City) => {
    setLocation({ lat: city.lat, lon: city.lon }, "favorite");
  };

  const throttleHandleSelect = useThrottle(handleSelectCity, 500);

  if (!favorites.length) {
    // return <div className={styles.empty}>No favorite cities ⭐</div>;
    return null;
  }

  return (
    <section className={styles.carousel}>
      {favorites.map((city) => (
        <div className={styles.card} key={`${city.lat}-${city.lon}`}>
          <CityCard
            city={city}
            size="sm"
            width={280}
            favorite={true}
            onSelect={throttleHandleSelect}
            onToggleFavorite={toggleFavorite}
          />
        </div>
      ))}
    </section>
  );
};

export default FavoriteCities;
