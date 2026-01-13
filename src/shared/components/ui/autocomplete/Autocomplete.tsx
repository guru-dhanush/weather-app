import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import styles from "./Autocomplete.module.css";

interface AutocompleteProps<T> {
  value: string;
  onChange: (value: string) => void;
  items: T[];
  onSelect: (item: T) => void;
  renderItem: (item: T, isActive: boolean) => React.ReactNode;
  getKey: (item: T) => string;

  loading?: boolean;
  error?: string | null;
  minLength?: number;
  placeholder?: string;
}
export function Autocomplete<T>({
  value,
  onChange,
  items,
  onSelect,
  renderItem,
  getKey,
  loading = false,
  error = null,
  minLength = 0,
  placeholder,
}: AutocompleteProps<T>) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setActiveIndex(-1);
  }, [items]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) {
        setIsOpen(false);
        setActiveIndex(-1);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!items.length) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => (i + 1) % items.length);
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => (i <= 0 ? items.length - 1 : i - 1));
    }

    if (e.key === "Enter" && activeIndex >= 0) {
      e.preventDefault();
      onSelect(items[activeIndex]);
      setIsOpen(false);
    }

    if (e.key === "Escape") {
      setIsOpen(false);
      setActiveIndex(-1);
    }
  };

  return (
    <div className={styles.autocomplete} ref={containerRef}>
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        autoComplete="off"
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        onFocus={() => {
          if (value.length >= minLength) {
            setIsOpen(true);
          }
        }}
      />

      {isOpen && value.length >= minLength && (
        <div className={styles.list} role="listbox">
          {loading && <div className={styles.state}>Loading...</div>}
          {!loading && error && (
            <div className={styles.stateError}>{error}</div>
          )}
          {!loading && !error && items.length === 0 && (
            <div className={styles.state}>No results found</div>
          )}

          {!loading &&
            !error &&
            items.map((item, index) => (
              <div
                key={getKey(item)}
                role="option"
                aria-selected={index === activeIndex}
                className={clsx(
                  styles.item,
                  index === activeIndex && styles.active
                )}
                onClick={() => {
                  onSelect(item);
                  setIsOpen(false);
                }}
              >
                {renderItem(item, index === activeIndex)}
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
