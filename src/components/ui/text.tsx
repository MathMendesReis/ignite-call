import { ElementType } from "react"

interface TextProps {
    content: string
    element?: ElementType
    className?: string
}

export function Text({ content, element = 'p', className }: TextProps) {
    const Component = element
    return (
        <Component className={`text-white leading-[160%] ${className}`}>{content}</Component>
    )
}