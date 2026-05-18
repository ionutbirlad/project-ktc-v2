import type { HTMLAttributes } from "react";

import styles from "./ButtonGroup.module.scss";

type ButtonGroupAlignments = "justify" | "start" | "end" | "center" | "stack";
type ButtonGroupProps = HTMLAttributes<HTMLDivElement> & {
  alignment?: ButtonGroupAlignments;
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
      {...props}
    >
      {children}
    </div>
  );
}
