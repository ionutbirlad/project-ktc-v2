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
    <button
      className={`${styles["accordion-item"]} ${className ?? ""}`}
      onClick={handleShowMore}
      aria-expanded={showMore}
      aria-controls={contentId}
      {...props}
    >
      <div
        className={`${styles["accordion-item__container"]} ${showMore && `${styles["accordion-item__container--open"]}`}`}
      >
        <div className={`${styles["accordion-item__container-title"]}`}>
          <div className={`${styles["accordion-item__container-title-text"]}`}>{title}</div>

          <div
            className={`${styles["accordion-item__container-title-icon"]} ${showMore && `${styles["accordion-item__container-title-icon--open"]}`}`}
          >
            <Icon name="chevron" size="s" />
          </div>
        </div>

        {showMore && (
          <div className={`${styles["accordion-item__container-content"]}`} id={contentId}>
            {description}
          </div>
        )}
      </div>
    </button>
  );
}
