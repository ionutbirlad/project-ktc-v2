import { AccordionItemProps } from "./Accordion.types";

import { Icon } from "../Icon";

import styles from "./Accordion.module.scss";

export default function AccordionItem({
  title,
  description,
  className,
  ...props
}: AccordionItemProps) {
  return (
    <button className={`${styles["accordion-item"]} ${className ?? ""}`} {...props}>
      <div className={`${styles["accordion-item__container"]}`}>
        <div className={`${styles["accordion-item__container-title"]}`}>
          <div className={`${styles["accordion-item__container-title-text"]}`}>{title}</div>

          <div className={`${styles["accordion-item__container-title-icon"]}`}>
            <Icon name="chevron" />
          </div>
        </div>

        <div className={`${styles["accordion-item__container-content"]}`}>{description}</div>
      </div>
    </button>
  );
}
