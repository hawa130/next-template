'use client'

import { useTheme } from 'next-themes'
import { Toaster as Sonner } from 'sonner'
import { type ComponentProps } from 'react'

type ToasterProps = ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme()

  return (
    <Sonner
      richColors
      closeButton
      visibleToasts={3}
      theme={theme as ToasterProps['theme']}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg',
          description: 'group-[.toast]:text-muted-fg',
          actionButton: 'group-[.toast]:bg-primary group-[.toast]:text-primary-fg',
          cancelButton: 'group-[.toast]:bg-muted group-[.toast]:text-muted-fg',
          error: 'group-[.toaster]:shadow-destructive-border',
          warning: 'group-[.toaster]:shadow-warning-border',
          success: 'group-[.toaster]:shadow-success-border',
          info: 'group-[.toaster]:shadow-info-border',
          closeButton: 'opacity-0 group-hover:opacity-100',
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
