import type { AvatarProps } from "./Avatar.types";

import Image from "next/image";

import styles from "./Avatar.module.scss";

const avatarSizes = {
  small: 24,
  medium: 32,
  large: 40,
} as const;

export default function Avatar({
  src,
  alt,
  fallback,
  size = "medium",
  variant = "circle",
  className,
  ...props
}: AvatarProps) {
  return (
    <div
      className={`${styles.avatar} ${styles[`avatar--${variant}`]} ${styles[`avatar--${size}`]} ${className ?? ""}`}
      {...props}
    >
      <div className={`${styles["avatar__container"]}`}>
        {src ? (
          <div className={`${styles["avatar__container-image"]}`}>
            <Image src={src} alt={alt} width={avatarSizes[size]} height={avatarSizes[size]} />
          </div>
        ) : (
          <div className={`${styles["avatar__container-fallback"]}`}>{fallback}</div>
        )}
      </div>
    </div>
  );
}
