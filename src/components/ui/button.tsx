import Image from "next/image";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}
function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={`flex items-center justify-center gap-2 py-3 px-6 ${className} rounded-md opacity-85  hover:opacity-100 transition-all`}
    >
      {children}
    </button>
  );
}

interface IconProps {
  src: string;
  alt?: string;
  className?: string;
}
function Icon({ src, alt = "", className }: IconProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={16}
      height={16}
      className={`${className}`}
    />
  );
}
interface TextButtonProps {
  content: string;
  className?: string;
}
function TextButton({ content, className = "text-gray-100" }: TextButtonProps) {
  return <span className={`${className}`}>{content}</span>;
}

export { Button, TextButton, Icon };
