import type { City } from "@/store/app.store";

interface CityCardProps {
  city: City;
  favorite: boolean;
  onToggleFavorite: (city: City) => void;
  onSelect?: (city: City) => void;
}

const CityCard = ({
  city,
  favorite,
  onToggleFavorite,
  onSelect,
}: CityCardProps) => {
  return (
    <div className="city-card" onClick={() => onSelect?.(city)}>
      <div className="city-info">
        <img
          src={`https://openweathermap.org/img/wn/${city.icon}.png`}
          alt={city.condition}
          width={48}
          height={48}
        />

        <div>
          <strong>
            {city.name}, {city.country}
          </strong>
          <div className="meta">
            {city.condition} · {city.temp}°
          </div>
        </div>
      </div>

      <button
        className={`star ${favorite ? "favorite" : ""}`}
        onClick={(e) => {
          e.stopPropagation();
          onToggleFavorite(city);
        }}
        aria-label="Toggle favorite"
      />
    </div>
  );
};

export default CityCard;
