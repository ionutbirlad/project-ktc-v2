import type { AvatarProps } from "./Avatar.types";

import Image from "next/image";

import styles from "./Avatar.module.scss";

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
            <Image src={src} alt={alt} width={300} height={300} />
          </div>
        ) : (
          <div className={`${styles["avatar__container-fallback"]}`}>{fallback}</div>
        )}
      </div>
    </div>
  );
}
