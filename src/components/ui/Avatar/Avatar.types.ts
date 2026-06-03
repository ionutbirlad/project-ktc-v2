import { type HTMLAttributes } from "react";

type AvatarSize = "small" | "medium" | "large";
type AvatarVariant = "circle" | "square";
export type AvatarProps = HTMLAttributes<HTMLDivElement> & {
  src?: string;
  alt: string;
  fallback?: string;
  size?: AvatarSize;
  variant?: AvatarVariant;
};
