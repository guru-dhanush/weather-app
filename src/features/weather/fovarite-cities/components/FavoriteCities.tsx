import { useAppStore, type City } from "@/store/app.store";
import styles from "./FavoriteCities.module.css";
import CityCard from "@/shared/components/CityCard";

const FavoriteCities = () => {
  const favorites = useAppStore((s) => s.favorites);
  const setLocation = useAppStore((s) => s.setLocation);
  const toggleFavorite = useAppStore((s) => s.toggleFavorite);

  if (!favorites.length) {
    return <div className={styles.empty}>No favorite cities ⭐</div>;
  }

  const handleSelectCity = (city: City) => {
    setLocation({ lat: city.lat, lon: city.lon }, "favorite");
  };

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Favorite Cities</h3>

      <div className={styles.list}>
        {favorites.map((city) => (
          <CityCard
            key={`${city.lat}-${city.lon}`}
            city={city}
            favorite={true}
            onSelect={handleSelectCity}
            onToggleFavorite={toggleFavorite}
          />
        ))}
      </div>
    </div>
  );
};

export default FavoriteCities;
