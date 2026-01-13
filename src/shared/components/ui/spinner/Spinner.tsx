import clsx from "clsx";
import styles from "./Spinner.module.css";

export type SpinnerSize = "sm" | "md" | "lg";

interface SpinnerProps {
  size?: SpinnerSize;
  className?: string;
}

export const Spinner = ({ size = "md", className }: SpinnerProps) => {
  return (
    <span
      className={clsx(styles.spinner, styles[size], className)}
      role="status"
      aria-label="Loading"
    />
  );
};
