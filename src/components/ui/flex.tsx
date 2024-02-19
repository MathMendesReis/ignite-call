import { ElementType, HTMLAttributes } from "react";

interface FlexProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  element?: ElementType;
}

export function Flex({ children, element = "main", className }: FlexProps) {
  const Component = element;
  return (
    <Component
      className={`flex place-items-center w-full h-full flex-wrap ${className}`}
    >
      {children}
    </Component>
  );
}
