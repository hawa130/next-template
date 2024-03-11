import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { AlertCircle, AlertTriangle, CircleCheck, Info } from 'lucide-react'

import { cn } from '@/lib/utils'

const alertVariants = cva(
  'relative w-full py-3 px-4 [&>svg~*]:pl-6 [&>svg+div]:py-0.5 [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground',
  {
    variants: {
      variant: {
        default: 'bg-background text-foreground',
        secondary: 'bg-secondary text-secondary-fg',
        destructive: 'border-destructive-pale bg-destructive-light text-destructive [&>svg]:text-destructive',
        warning: 'border-warning-pale bg-warning-light text-warning [&>svg]:text-warning',
        success: 'border-success-pale bg-success-light text-success [&>svg]:text-success',
        info: 'border-info-pale bg-info-light text-info [&>svg]:text-info',
      },
      type: {
        bordered: 'rounded-lg border',
        borderless: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      type: 'bordered',
    },
  },
)

export type AlertProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> & VariantProps<typeof alertVariants> & {
  icon?: React.ReactNode
  title?: React.ReactNode
  description?: React.ReactNode
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(({
  title,
  variant,
  description,
  icon,
  ...props
}, ref) => {
  const resolvedIcon = icon ?? ((variant) => {
    switch (variant) {
      case 'destructive':
        return <AlertCircle className="h-4 w-4" />
      case 'warning':
        return <AlertTriangle className="h-4 w-4" />
      case 'success':
        return <CircleCheck className="h-4 w-4" />
      case 'info':
        return <Info className="h-4 w-4" />
      default:
        return null
    }
  })(variant)

  return (
    <AlertContainer ref={ref} variant={variant} {...props}>
      {!(!title && !description) && resolvedIcon}
      {!!title && <AlertTitle>{title}</AlertTitle>}
      {!!description && <AlertDescription>{description}</AlertDescription>}
    </AlertContainer>
  )
})
Alert.displayName = 'Alert'

const AlertContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, type, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant, type }), className)}
    {...props}
  />
))
AlertContainer.displayName = 'AlertContainer'

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn('my-1 font-medium leading-none tracking-tight', className)}
    {...props}
  />
))
AlertTitle.displayName = 'AlertTitle'

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('text-sm text-foreground/75 [&_p]:leading-relaxed', className)}
    {...props}
  />
))
AlertDescription.displayName = 'AlertDescription'

export { Alert, AlertContainer, AlertTitle, AlertDescription }
