import styles from "./Input.module.css";

import React from "react";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
}

export const Input = ({
  label,
  error,
  helperText,
  fullWidth = true,
  id,
  ...props
}: InputProps) => {
  const inputId = id || `input-${Math.random().toString(36).slice(2)}`;

  return (
    <div className={`${styles.wrapper} ${fullWidth ? styles.full : ""}`}>
      {label && (
        <label htmlFor={inputId} className={styles.label}>
          {label}
        </label>
      )}

      <input
        id={inputId}
        className={`${styles.input} ${error ? styles.error : ""}`}
        aria-invalid={!!error}
        aria-describedby={helperText || error ? `${inputId}-desc` : undefined}
        {...props}
      />

      {(helperText || error) && (
        <p
          id={`${inputId}-desc`}
          className={`${styles.helper} ${error ? styles.errorText : ""}`}
        >
          {error || helperText}
        </p>
      )}
    </div>
  );
};
