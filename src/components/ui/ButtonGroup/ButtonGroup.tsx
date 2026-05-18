import type { ButtonGroupProps } from "./ButtonGroup.types";

import styles from "./ButtonGroup.module.scss";

export default function ButtonGroup({
  alignment = "start",
  children,
  className,
  ...props
}: ButtonGroupProps) {
  return (
    <div
      className={`${styles["button-group"]} ${styles[`button-group--align-${alignment}`]} ${className ?? ""}`}
      role="group"
      {...props}
    >
      {children}
    </div>
  );
}
