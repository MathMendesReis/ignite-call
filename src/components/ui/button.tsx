import Image from "next/image";
import { HtmlHTMLAttributes } from "react";

interface ButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    className?: string

}
function Button({ children, className, ...rest }: ButtonProps) {
    return (
        <button
            {...rest}
            className={`flex items-center justify-center gap-2 py-3 px-6 ${className} rounded-md hover:opacity-100 transition-all`}>
            {children}
        </button>
    )
}

interface IconProps {
    src: string
    alt?: string

}
function Icon({ src, alt = '' }: IconProps) {
    return (
        <Image src={src} alt={alt} width={16} height={16} />
    )
}
interface TextButtonProps {
    content: string
}
function TextButton({ content }: TextButtonProps) {
    return (
        <span className="text-gray-100">{content}</span>
    )
}


export { Button, TextButton, Icon }