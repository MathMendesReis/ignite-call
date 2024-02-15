"use client"
import { Button } from "./button";
import { Text } from "./text";

interface ButtonNavigationProps {
    text: string,
    className?: string
}
export function ButtonNavigation({ text, className }: ButtonNavigationProps) {
    return (
        <Button className={className}>
            <Text content={text} />
        </Button>
    )
}