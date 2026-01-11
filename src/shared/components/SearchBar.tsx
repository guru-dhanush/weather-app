import { Input } from "./ui/Input/Input";

interface SearchBarProps {
  value: string;
  onChange: (string: any) => void;
}

const SearchBar = ({ onChange, value }: SearchBarProps) => {
  return (
    <div className="searchbar">
      <Input onChange={onChange} value={value} />
    </div>
  );
};

export default SearchBar;
