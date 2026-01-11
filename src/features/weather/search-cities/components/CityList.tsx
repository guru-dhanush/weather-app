interface Props {
  cities?: any[];
  loading: boolean;
  onSelect: (city: any) => void;
}

const CityList = ({ cities, loading, onSelect }: Props) => {
  if (loading) return <div className="suggestions">Loading...</div>;
  if (!cities?.length) return null;
  return (
    <ul className="suggestions">
      {cities.map((city) => (
        <li key={`${city.lat}-${city.lon}`} onClick={() => onSelect(city)}>
          {city.name}, {city.country}
        </li>
      ))}
    </ul>
  );
};

export default CityList;
