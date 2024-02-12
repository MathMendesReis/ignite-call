import { ElementType } from "react"

interface CardPageProps {
    children: React.ReactNode
    element?: ElementType
}

export function CardPage({ children, element = 'main' }: CardPageProps) {
    const Component = element
    return (
        <Component className="max-w-[1400px] mx-auto min-h-screen px-3 py-2">
            {children}
        </Component>
    )
}