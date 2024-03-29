import * as React from 'react'

import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'

export const inputWrapperVariants = cva(
  'flex items-center h-9 w-full rounded-md border border-input bg-button px-3 text-sm ring-offset-background focus-within:outline-none focus-within:ring-2 focus-within:ring-ring/60 focus-within:ring-offset-0 [&:has(:disabled)]:cursor-not-allowed [&:has(:disabled)>input]:cursor-not-allowed [&:has(:disabled)]:opacity-50 transition-colors hover:border-ring [&:not(:focus-within)]:hover:bg-accent [&>input]:flex-grow [&>input]:bg-transparent [&>input]:h-full focus-visible:[&>input]:outline-none placeholder:[&>input]:text-muted-fg file:[&>input]:border-0 file:[&>input]:bg-transparent file:[&>input]:text-sm file:[&>input]:font-medium'
)

export const inputVariants = cva(
  'flex h-9 w-full rounded-md border border-input bg-button px-3 py-1 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 transition-colors hover:border-ring [&:not(:focus)]:hover:bg-accent'
)

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants(), className)}
        ref={ref}
        {...props}
      />
    )
  },
)
Input.displayName = 'Input'

export { Input }
