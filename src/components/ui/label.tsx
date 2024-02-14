import { HTMLAttributes } from "react"

interface Labelprops extends HTMLAttributes<HTMLLabelElement> {
    content: string
}
export function Label({ content, ...rest }: Labelprops) {
    return (
        <label
            {...rest}
            className="text-gray-100 my-3" >
            {content}
        </label>
    )
}