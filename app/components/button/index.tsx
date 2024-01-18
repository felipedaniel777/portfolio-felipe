import { cn } from "@/app/lib/utils"
import { ButtonHTMLAttributes } from "react"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ children, className, ...props }: ButtonProps) => {
    return (
        <button
            className={cn(
                'bg-red-600/80 py-3 flex px-4 rounded-lg text-gray-50 items-center justify-center gap-2 hover:bg-red-500 transition-all disabled:opacity-50',
                className
            )}
            {...props}>
            {children}
        </button>
    )
}