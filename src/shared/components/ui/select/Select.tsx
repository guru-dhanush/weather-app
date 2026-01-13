import clsx from "clsx";
import styles from "./Select.module.css";

export interface SelectOption<T extends string> {
  label: string;
  value: T;
}

interface SelectProps<T extends string> {
  value: T;
  options: SelectOption<T>[];
  onChange: (value: T) => void;
  className?: string;
}

export function Select<T extends string>({
  value,
  options,
  onChange,
  className,
}: SelectProps<T>) {
  return (
    <select
      className={clsx(styles.select, className)}
      value={value}
      onChange={(e) => onChange(e.target.value as T)}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
