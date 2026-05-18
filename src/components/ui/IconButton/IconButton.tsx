import type { IconButtonProps } from "./IconButton.types";

import styles from "./IconButton.module.scss";

export default function IconButton({
  children,
  variant = "primary",
  size = "medium",
  disabled,
  className,
  onClick,
  ...props
}: IconButtonProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      className={`${styles["icon-button"]} ${styles[`icon-button--${variant}`]} ${styles[`icon-button--${size}`]} ${className ?? ""}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
