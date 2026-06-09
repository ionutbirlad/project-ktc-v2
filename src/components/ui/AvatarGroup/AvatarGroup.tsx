import type { AvatarGroupProps } from "./AvatarGroup.types";

import styles from "./AvatarGroup.module.scss";

export default function AvatarGroup({
  variant = "overlap",
  overflowCount,
  className,
  children,
  ...props
}: AvatarGroupProps) {
  return (
    <div className={`${styles["avatar-group"]} ${className ?? ""}`} {...props}>
      <div className={`${styles["avatar-group__container"]}`}>
        <div
          className={`${styles["avatar-group__container-preview"]} ${styles[`avatar-group__container-preview--${variant}`]}`}
        >
          {children}
        </div>

        {overflowCount && (
          <div className={`${styles["avatar-group__container-hidden"]}`}>{`+${overflowCount}`}</div>
        )}
      </div>
    </div>
  );
}
