'use client'

import * as React from 'react'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

export const segmentedControlVariants = cva(
  'inline-flex items-center justify-center rounded-lg bg-muted p-1 text-muted-fg',
  {
    variants: {
      size: {
        sm: 'h-8 [&>button]:h-6 [&>button]:text-xs [&>button]:px-2.5',
        md: 'h-9 [&>button]:h-7 [&>button]:text-sm [&>button]:px-3',
        lg: 'h-10 [&>button]:h-8 [&>button]:text-sm [&>button]:px-3.5',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
)

export const SegmentedControl = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> & VariantProps<typeof segmentedControlVariants>
>(({ className, size, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn(segmentedControlVariants({ size }), className)}
      {...props}
      ref={ref}
    />
  )
})
SegmentedControl.displayName = 'SegmentedControl'

export const SegmentedControlItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        'relative data-[state=checked]:z-[1] inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=checked]:bg-background data-[state=checked]:text-foreground data-[state=checked]:shadow before:absolute before:-left-[0.5px] before:h-5 not-first:before:border-l before:transition-colors before:data-[state=checked]:border-l-transparent before:next-sibling:data-[state=checked]:border-l-transparent',
        className,
      )}
      {...props}
    />
  )
})
SegmentedControlItem.displayName = 'SegmentedControlItem'
