import { ComponentPropsWithoutRef, forwardRef } from 'react'
import { Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

export const Spinner = forwardRef<
  SVGSVGElement,
  ComponentPropsWithoutRef<typeof Loader2>
>(({ className, ...props }, ref) => {
  return <Loader2 ref={ref} className={cn('animate-spin', className)} {...props} />
})
Spinner.displayName = 'Spinner'