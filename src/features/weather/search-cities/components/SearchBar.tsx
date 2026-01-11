import { Button } from "@/shared/components/ui/button/Button";
import { Input } from "@/shared/components/ui/Input/Input";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
}

const SearchBar = ({ value, onChange, onSearch }: SearchBarProps) => {
  return (
    <div className="searchbar">
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search city..."
      />
      <Button size="sm" onClick={onSearch}>
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
