import styles from "./FavoriteButton.module.css";

interface FavoriteButtonProps {
  active: boolean;
  onToggle: (e: React.MouseEvent<HTMLButtonElement>) => void;
  size?: number;
  disabled?: boolean;
  ariaLabel?: string;
}

export const FavoriteButton = ({
  active,
  onToggle,
  size = 20,
  disabled = false,
  ariaLabel,
}: FavoriteButtonProps) => {
  return (
    <button
      type="button"
      className={styles.star_button}
      onClick={onToggle}
      disabled={disabled}
      aria-label={
        ariaLabel ?? (active ? "Remove from favorites" : "Add to favorites")
      }
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={active ? "#FFC107" : "none"}
        stroke={active ? "#FFC107" : "#94a3b8"}
        strokeWidth="2"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    </button>
  );
};
