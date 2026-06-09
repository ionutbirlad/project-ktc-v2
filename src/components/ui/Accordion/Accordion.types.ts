import type { HTMLAttributes, ReactNode } from "react";

export type AccordionItemProps = Omit<HTMLAttributes<HTMLButtonElement>, "title"> & {
  title: string;
  description: string;
  className?: string;
};
export type AccordionProps = HTMLAttributes<HTMLDivElement> & {
  className?: string;
  children: ReactNode;
};
