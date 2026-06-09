import { type HTMLAttributes } from "react";

export type AvatarBlockProps = HTMLAttributes<HTMLDivElement> & {
  title: string;
  description: string;
};
