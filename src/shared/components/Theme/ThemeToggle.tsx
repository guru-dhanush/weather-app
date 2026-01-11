import { useTheme } from "@/shared/context/ThemeContext";
import { Button } from "../ui/button/Button";
import styles from "./ThemeToggle.module.css";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      className={`${styles.switch} ${theme === "dark" ? styles.dark : ""}`}
      onClick={toggleTheme}
      aria-label="Toggle theme"
      size="sm"
    >
      <span className={styles.knob} />
    </Button>
  );
};
export default ThemeToggle;
