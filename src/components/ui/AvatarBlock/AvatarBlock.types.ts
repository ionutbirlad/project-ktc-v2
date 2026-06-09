import type { HTMLAttributes, ReactNode } from "react";

export type AvatarBlockProps = Omit<HTMLAttributes<HTMLDivElement>, "title"> & {
  title: string;
  description: string;
  children: ReactNode;
};
