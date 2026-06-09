import type { AvatarGroupProps } from "./AvatarGroup.types";

import styles from "./AvatarGroup.module.scss";

export default function AvatarGroup({
  variant = "overlap",
  overflowCount,
  className,
  children,
  ...props
}: AvatarGroupProps) {
  const hasOverflow = typeof overflowCount === "number" && overflowCount > 0;

  return (
    <div className={`${styles["avatar-group"]} ${className ?? ""}`} role="group" {...props}>
      <div className={`${styles["avatar-group__container"]}`}>
        <div
          className={`${styles["avatar-group__container-preview"]} ${styles[`avatar-group__container-preview--${variant}`]}`}
        >
          {children}
        </div>

        {hasOverflow && (
          <div
            className={`${styles["avatar-group__container-counter"]}`}
          >{`+${overflowCount}`}</div>
        )}
      </div>
    </div>
  );
}
