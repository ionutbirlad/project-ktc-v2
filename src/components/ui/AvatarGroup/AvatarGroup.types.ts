import { type HTMLAttributes } from "react";

export type AvatarGroupVariant = "spaced" | "overlap";

export type AvatarGroupProps = HTMLAttributes<HTMLDivElement> & {
  variant?: AvatarGroupVariant;
};
