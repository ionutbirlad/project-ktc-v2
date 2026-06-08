import { type ImageProps } from "next/image";
import { type HTMLAttributes } from "react";

type AvatarSize = "small" | "medium" | "large";
type AvatarVariant = "circle" | "square";
type AvatarWithImage = {
  src: ImageProps["src"];
  alt: string;
  fallback?: string;
  size?: AvatarSize;
  variant?: AvatarVariant;
};
type AvatarWithFallback = {
  src?: undefined;
  alt?: string;
  fallback: string;
  size?: AvatarSize;
  variant?: AvatarVariant;
};

export type AvatarProps = HTMLAttributes<HTMLDivElement> & (AvatarWithImage | AvatarWithFallback);
