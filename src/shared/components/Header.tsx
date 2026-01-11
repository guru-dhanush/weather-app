import CitySearch from "@/features/weather/search-cities";
import ThemeToggle from "./Theme/ThemeToggle";

const Header = () => {
  return (
    <header className="header">
      <img
        src="http://decisions.com/wp-content/uploads/2025/11/decisiosnprocess_maker_icon.svg"
        width={100}
      />
      <CitySearch />
      <ThemeToggle />
    </header>
  );
};

export default Header;
