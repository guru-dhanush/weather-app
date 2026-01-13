import { useTheme } from "@/shared/context/ThemeContext";
import styles from "./ThemeToggle.module.css";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <label className={styles.switch}>
      <input
        type="checkbox"
        checked={isDark}
        onChange={toggleTheme}
        aria-label="Toggle theme"
      />
      <span className={`${styles.slider} ${styles.round}`} />
    </label>
  );
};

export default ThemeToggle;
