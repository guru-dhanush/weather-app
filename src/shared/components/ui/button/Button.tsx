import clsx from "clsx";
import styles from "./Button.module.css";

export type ButtonVariant = "primary" | "secondary" | "danger";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
}

export const Button = ({
  variant = "primary",
  size = "lg",
  isLoading = false,
  disabled,
  className,
  children,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={clsx(styles.button, styles[variant], styles[size], className)}
      disabled={disabled || isLoading}
      aria-busy={isLoading}
      {...rest}
    >
      {isLoading ? <span className={styles.loader} /> : children}
    </button>
  );
};
