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
    <div
      className={`${styles["avatar-group"]} ${styles[`avatar-group--${variant}`]} ${className ?? ""}`}
      {...props}
    >
      <div className={`${styles["avatar-group__container"]}`}>
        <div className={`${styles["avatar-group__container-preview"]}`}>{children}</div>

        <div className={`${styles["avatar-group__container-hidden"]}`}>{overflowCount}</div>
      </div>
    </div>
  );
}
