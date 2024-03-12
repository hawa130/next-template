'use client'

import * as React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'

import { cn } from '@/lib/utils'
import { cva, VariantProps } from 'class-variance-authority'

export const tabsListVariants = cva(
  'inline-flex items-center justify-center',
  {
    variants: {
      variant: {
        default: 'h-9 rounded-lg bg-muted p-1',
        line: 'relative after:z-[-1] after:absolute after:bottom-0 after:inset-x-0 after:border-b after:border-input',
        none: '',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export const tabsTriggerVariants = cva(
  'px-3 inline-flex items-center justify-center whitespace-nowrap text-sm transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'text-muted-fg py-1 rounded-md font-medium ring-offset-background focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow',
        line: 'text-foreground/70 pt-1.5 pb-3 rounded-md relative data-[state=active]:font-medium hover:text-accent-fg data-[state=active]:text-primary before:z-[-1] before:absolute before:inset-x-0 before:top-0 before:bottom-1.5 before:rounded-md before:transition-colors hover:before:bg-accent hover:data-[state=active]:before:bg-primary/10 data-[state=active]:after:absolute data-[state=active]:after:h-[3px] data-[state=active]:after:bg-primary data-[state=active]:after:bottom-0 data-[state=active]:after:inset-x-3 data-[state=active]:after:rounded-full focus-visible:before:ring-2 focus-visible:before:ring-ring/60',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)


const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> & VariantProps<typeof tabsListVariants>
>(({ className, variant, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(tabsListVariants({ variant, className }))}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> & VariantProps<typeof tabsTriggerVariants>
>(({ className, variant, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(tabsTriggerVariants({ variant, className }))}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2',
      className,
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
