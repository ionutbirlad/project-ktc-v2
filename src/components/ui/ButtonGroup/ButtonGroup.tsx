import type { HTMLAttributes } from "react";

import styles from "./ButtonGroup.module.scss";

export type ButtonGroupAlignment = "justify" | "start" | "end" | "center" | "stack";
export type ButtonGroupProps = HTMLAttributes<HTMLDivElement> & {
  alignment?: ButtonGroupAlignment;
};

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
