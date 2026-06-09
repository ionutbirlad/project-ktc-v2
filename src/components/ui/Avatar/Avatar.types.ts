import { type ImageProps } from "next/image";
import { type HTMLAttributes } from "react";

export type AvatarSize = "small" | "medium" | "large";
export type AvatarVariant = "circle" | "square";
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
