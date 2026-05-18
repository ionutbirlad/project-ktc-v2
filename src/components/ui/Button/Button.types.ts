import { ButtonHTMLAttributes } from "react";

export type ButtonSize = "medium" | "small";

type DefaultButtonProps = {
  intent?: "default";
  variant?: "primary" | "neutral" | "subtle";
  size?: ButtonSize;
};

type DangerButtonProps = {
  intent: "danger";
  variant?: "primary" | "subtle";
  size?: ButtonSize;
};

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  (DefaultButtonProps | DangerButtonProps);
