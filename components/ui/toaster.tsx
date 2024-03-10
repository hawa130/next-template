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
          actionButton:
            'group-[.toast]:bg-secondary group-[.toast]:text-secondary-fg group-[.toast]:font-medium hover:group-[.toast]:bg-accent hover:group-[.toast]:text-accent-fg active:group-[.toast]:bg-accent-dark',
          cancelButton: 'group-[.toast]:bg-muted group-[.toast]:text-muted-fg',
          error: 'group-[.toaster]:shadow-destructive-pale/60',
          warning: 'group-[.toaster]:shadow-warning-pale/60',
          success: 'group-[.toaster]:shadow-success-pale/60',
          info: 'group-[.toaster]:shadow-info-pale/60',
          closeButton: 'opacity-0 group-hover:opacity-100',
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
