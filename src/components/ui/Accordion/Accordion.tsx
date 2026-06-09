import type { AccordionProps } from "./Accordion.types";

import styles from "./Accordion.module.scss";

export default function Accordion({ className, children, ...props }: AccordionProps) {
  return (
    <div className={`${styles.accordion} ${className ?? ""}`} {...props}>
      <div className={`${styles["accordion__container"]}`}>{children}</div>
    </div>
  );
}
