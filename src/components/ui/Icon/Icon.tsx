import { HamburgerMenuIcon, StarIcon, UserIcon } from "@/components/icons";

import styles from "./Icon.module.scss";

export const icons = {
  star: <StarIcon />,
  hamburgerMenu: <HamburgerMenuIcon />,
  user: <UserIcon />,
} as const;

export type IconNames = keyof typeof icons;

type IconSize = "xs" | "s" | "m" | "l" | "xl" | "xxl";
type IconProps = {
  name: IconNames;
  size?: IconSize;
};

export default function Icon({ name, size = "m" }: IconProps) {
  const SelectedIcon = icons[name];

  return (
    <span className={styles["icon-wrapper"]}>
      <span className={`${styles["icon-wrapper__icon"]} ${styles[`icon-wrapper__icon--${size}`]}`}>
        {SelectedIcon}
      </span>
    </span>
  );
}
