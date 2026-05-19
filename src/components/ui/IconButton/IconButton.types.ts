import { type ButtonHTMLAttributes } from "react";

export type IconButtonVariant = "primary" | "neutral" | "subtle";
export type IconButtonSize = "medium" | "small";

export type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: IconButtonVariant;
  size?: IconButtonSize;
};
