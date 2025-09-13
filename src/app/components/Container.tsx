import { JSX, ReactNode } from "react";

type Props = {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  children: ReactNode;
};

export default function Container({
  as: Tag = "div",
  className = "",
  children,
}: Props) {
  return (
    <Tag className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </Tag>
  );
}
