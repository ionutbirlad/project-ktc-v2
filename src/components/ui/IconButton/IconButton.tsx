import { ButtonHTMLAttributes } from "react";

import styles from "./IconButton.module.scss";

type IconButtonVariant = "primary" | "neutral" | "subtle";
type IconButtonSize = "medium" | "small";

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: IconButtonVariant;
  size?: IconButtonSize;
};

export default function IconButton({
  children,
  variant = "primary",
  size = "medium",
  disabled,
  className,
  ...props
}: IconButtonProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      className={`${styles["icon-button"]} ${styles[`icon-button--${variant}`]} ${styles[`icon-button--${size}`]} ${className ?? ""}`}
      {...props}
    >
      {children}
    </button>
  );
}
