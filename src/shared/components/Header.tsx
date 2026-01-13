import CitySearch from "@/features/weather/city-search/components/CitySearch";
import ThemeToggle from "./Theme/ThemeToggle";

const Header = ({ className }: { className: string }) => {
  return (
    <header className={className}>
      <img
        src="http://decisions.com/wp-content/uploads/2025/11/decisiosnprocess_maker_icon.svg"
        width={60}
      />
      <CitySearch />
      <ThemeToggle />
    </header>
  );
};

export default Header;
