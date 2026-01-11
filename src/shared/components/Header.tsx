import CitySearch from "@/features/weather/search-cities";
import ThemeToggle from "./Theme/ThemeToggle";

const Header = () => {
  return (
    <header className="header">
      <CitySearch />
      <ThemeToggle />
    </header>
  );
};

export default Header;
