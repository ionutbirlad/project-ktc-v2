import type { HTMLAttributes } from "react";

export type ButtonGroupAlignment = "justify" | "start" | "end" | "center" | "stack";
export type ButtonGroupProps = HTMLAttributes<HTMLDivElement> & {
  alignment?: ButtonGroupAlignment;
};
