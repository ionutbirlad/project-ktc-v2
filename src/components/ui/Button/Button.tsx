import { ButtonProps } from "./Button.types";

import styles from "./Button.module.scss";

export default function Button({
  children,
  intent = "default",
  variant = "primary",
  size = "medium",
  disabled = false,
  className,
  onClick,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={`${styles.button} ${styles[`button--${intent}-${variant}`]} ${styles[`button--${size}`]} ${className ?? ""}`}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      <span className={`${styles["button__inner"]}`}>{children}</span>
    </button>
  );
}
