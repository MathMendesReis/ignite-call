import { Text } from "../ui/text";


interface HeaderProps {
    title: string
    paragraph: string
}
export function Header({ title, paragraph }: HeaderProps) {
    return (
        <>
            <Text
                element='h1'
                className="text-4xl font-bold"
                content={title} />
            <Text
                className="text-gray-100"
                content={paragraph} />
        </>
    )
}