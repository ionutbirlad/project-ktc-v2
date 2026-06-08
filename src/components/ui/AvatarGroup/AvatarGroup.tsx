import type { AvatarGroupProps } from "./AvatarGroup.types";

import styles from "./AvatarGroup.module.scss";

export default function AvatarGroup({
  variant = "overlap",
  className,
  ...props
}: AvatarGroupProps) {
  return (
    <div
      className={`${styles["avatar-group"]} ${styles[`avatar-group--${variant}`]} ${className ?? ""}`}
      {...props}
    >
      <div className={`${styles["avatar-group__container"]}`}>
        <div className={`${styles["avatar-group__container-preview"]}`}>AVATAR GROUP HERE</div>

        <div className={`${styles["avatar-group__container-hidden"]}`}>PREVIEW NUMBER HERE</div>
      </div>
    </div>
  );
}
