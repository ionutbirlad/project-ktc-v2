import { ButtonHTMLAttributes, ReactNode } from "react";

import styles from "./Button.module.scss";

type ButtonIntent = "default" | "danger";
type ButtonVariant = "primary" | "neutral" | "subtle";
type ButtonSize = "medium" | "small";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  intent?: ButtonIntent;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  className?: string;
};

export default function Button({
  children,
  intent = "default",
  variant = "primary",
  size = "medium",
  disabled = false,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${styles[`button--${intent}`]} ${styles[`button--${variant}`]} ${styles[`button--${size}`]} ${className ?? ""}`}
      disabled={disabled}
      {...props}
    >
      <span className="button__inner">{children}</span>
    </button>
  );
}
