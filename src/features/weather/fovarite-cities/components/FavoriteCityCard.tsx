import { useAppStore, type City } from "@/store/app.store";
import styles from "./FavoriteCities.module.css";

interface Props {
  city: City;
  onSelect: () => void;
}

const FavoriteCityCard = ({ city, onSelect }: Props) => {
  const toggleFavorite = useAppStore((s) => s.toggleFavorite);

  return (
    <div className={styles.card}>
      <button className={styles.city} onClick={onSelect}>
        <strong>{city.name}</strong>
        <span>{city.country}</span>
      </button>

      <button
        className={styles.remove}
        onClick={() => toggleFavorite(city)}
        aria-label="Remove from favorites"
      >
        ★
      </button>
    </div>
  );
};

export default FavoriteCityCard;
``;
