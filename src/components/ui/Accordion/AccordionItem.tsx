import { useId, useState } from "react";

import { AccordionItemProps } from "./Accordion.types";

import { Icon } from "@/components/ui/Icon";

import styles from "./Accordion.module.scss";

export default function AccordionItem({
  title,
  description,
  className,
  ...props
}: AccordionItemProps) {
  const [showMore, setShowMore] = useState(false);
  const contentId = useId();

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div
      className={`${styles["accordion-item"]} ${showMore && `${styles["accordion-item--open"]}`} ${className ?? ""}`}
      aria-expanded={showMore}
      aria-controls={contentId}
      {...props}
    >
      <button onClick={handleShowMore} className={`${styles["accordion-item__title"]}`}>
        <div className={`${styles["accordion-item__title-text"]}`}>{title}</div>

        <div
          className={`${styles["accordion-item__title-icon"]} ${showMore && `${styles["accordion-item__title-icon--open"]}`}`}
        >
          <Icon name="chevron" size="s" />
        </div>
      </button>

      {showMore && (
        <div className={`${styles["accordion-item__content"]}`} id={contentId}>
          {description}
        </div>
      )}
    </div>
  );
}
