import { ButtonHTMLAttributes } from "react";

import styles from "./Button.module.scss";

type ButtonSize = "medium" | "small";

type DefaultButtonProps = {
  intent?: "default";
  variant?: "primary" | "neutral" | "subtle";
  size?: ButtonSize;
};

type DangerButtonProps = {
  intent: "danger";
  variant?: "primary" | "subtle";
  size?: ButtonSize;
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  (DefaultButtonProps | DangerButtonProps);

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
      className={`${styles.button} ${styles[`button--${intent}-${variant}`]} ${styles[`button--${size}`]} ${className ?? ""}`}
      disabled={disabled}
      {...props}
    >
      <span>{children}</span>
    </button>
  );
}
