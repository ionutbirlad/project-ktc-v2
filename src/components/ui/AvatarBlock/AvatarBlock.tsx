import type { AvatarBlockProps } from "./AvatarBlock.types";

import styles from "./AvatarBlock.module.scss";

export default function AvatarBlock({
  title,
  description,
  className,
  children,
  ...props
}: AvatarBlockProps) {
  return (
    <div className={`${styles["avatar-block"]} ${className ?? ""}`} {...props}>
      <div className={`${styles["avatar-block__container"]}`}>
        <div className={`${styles["avatar-block__container-avatar"]}`}>{children}</div>

        <div className={`${styles["avatar-block__container-text"]}`}>
          <div className={`${styles["avatar-block__container-text-title"]}`}>{title}</div>

          <div className={`${styles["avatar-block__container-text-description"]}`}>
            {description}
          </div>
        </div>
      </div>
    </div>
  );
}
