import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className = "", ...rest }, ref) => {
        return (
            <input
                {...rest}
                ref={ref}
                className={`block w-full my-3 rounded-md focus:outline-none placeholder-gray-400 bg-gray-900 text-gray-100 px-2 ${className}`}
                autoComplete="off"
            />
        );
    }
);
