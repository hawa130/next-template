import * as React from 'react'
import { Slot, Slottable } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import { Loader2 } from 'lucide-react'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        filled: '',
        outline: 'border',
        dashed: 'border border-dashed',
        ghost: 'hover:bg-accent active:bg-accent-dark',
        light: 'bg-secondary hover:bg-accent active:bg-accent-dark',
        subtle: '',
        soft: '',
      },
      color: {
        default: '',
        primary: '',
        destructive: '',
        warning: '',
        success: '',
        info: '',
      },
      size: {
        '2xs': 'h-5 px-2 text-xs font-semibold',
        xs: 'h-6 px-2.5 text-xs',
        sm: 'h-8 px-3 text-sm',
        md: 'h-9 px-4 text-sm',
        lg: 'h-11 px-5 text-base',
        'icon-2xs': 'h-4 w-4',
        'icon-xs': 'h-6 w-6',
        'icon-sm': 'h-8 w-8',
        'icon-md': 'h-9 w-9',
        'icon-lg': 'h-11 w-11',
      },
    },
    compoundVariants: [
      {
        variant: ['filled', 'light', 'soft'],
        color: 'default',
        className: 'bg-secondary text-secondary-fg hover:bg-accent hover:text-accent-fg active:bg-accent-dark',
      },
      {
        variant: ['outline', 'dashed'],
        color: 'default',
        className: 'border-input bg-button hover:bg-accent hover:text-accent-fg hover:border-ring active:bg-accent-dark',
      },
      {
        variant: ['ghost', 'subtle'],
        color: 'default',
        className: 'hover:text-accent-fg',
      },
      {
        variant: 'filled',
        color: 'primary',
        className: 'bg-primary text-fg-invert hover:bg-primary/90 active:bg-primary-dark',
      },
      {
        variant: ['outline', 'dashed'],
        color: 'primary',
        className: 'border-primary text-primary hover:bg-primary-light active:text-primary-dark active:bg-primary-pale',
      },
      {
        variant: ['ghost', 'light'],
        color: 'primary',
        className: 'text-primary active:text-primary-dark',
      },
      {
        variant: 'subtle',
        color: 'primary',
        className: 'text-primary hover:bg-primary-light active:text-primary-dark active:bg-primary-pale',
      },
      {
        variant: 'soft',
        color: 'primary',
        className: 'text-primary bg-primary-light hover:bg-primary-light/90 active:text-primary-dark active:bg-primary-pale',
      },
      {
        variant: 'filled',
        color: 'destructive',
        className: 'bg-destructive text-fg-invert hover:bg-destructive/90 active:bg-destructive-dark',
      },
      {
        variant: ['outline', 'dashed'],
        color: 'destructive',
        className: 'border-destructive text-destructive hover:bg-destructive-light active:text-destructive-dark active:bg-destructive-pale',
      },
      {
        variant: ['ghost', 'light'],
        color: 'destructive',
        className: 'text-destructive active:text-destructive-dark',
      },
      {
        variant: 'subtle',
        color: 'destructive',
        className: 'text-destructive hover:bg-destructive-light active:text-destructive-dark active:bg-destructive-pale',
      },
      {
        variant: 'soft',
        color: 'destructive',
        className: 'text-destructive bg-destructive-light hover:bg-destructive-light/90 active:text-destructive-dark active:bg-destructive-pale',
      },
      {
        variant: 'filled',
        color: 'warning',
        className: 'bg-warning text-fg-invert hover:bg-warning/90 active:bg-warning-dark',
      },
      {
        variant: ['outline', 'dashed'],
        color: 'warning',
        className: 'border-warning text-warning hover:bg-warning-light active:text-warning-dark active:bg-warning-pale',
      },
      {
        variant: ['ghost', 'light'],
        color: 'warning',
        className: 'text-warning active:text-warning-dark',
      },
      {
        variant: 'subtle',
        color: 'warning',
        className: 'text-warning hover:bg-warning-light active:text-warning-dark active:bg-warning-pale',
      },
      {
        variant: 'soft',
        color: 'warning',
        className: 'text-warning bg-warning-light hover:bg-warning-light/90 active:text-warning-dark active:bg-warning-pale',
      },
      {
        variant: 'filled',
        color: 'success',
        className: 'bg-success text-fg-invert hover:bg-success/90 active:bg-success-dark',
      },
      {
        variant: ['outline', 'dashed'],
        color: 'success',
        className: 'border-success text-success hover:bg-success-light active:text-success-dark active:bg-success-pale',
      },
      {
        variant: ['ghost', 'light'],
        color: 'success',
        className: 'text-success active:text-success-dark',
      },
      {
        variant: 'subtle',
        color: 'success',
        className: 'text-success hover:bg-success-light active:text-success-dark active:bg-success-pale',
      },
      {
        variant: 'soft',
        color: 'success',
        className: 'text-success bg-success-light hover:bg-success-light/90 active:text-success-dark active:bg-success-pale',
      },
      {
        variant: 'filled',
        color: 'info',
        className: 'bg-info text-fg-invert hover:bg-info/90 active:bg-info-dark',
      },
      {
        variant: ['outline', 'dashed'],
        color: 'info',
        className: 'border-info text-info hover:bg-info-light active:text-info-dark active:bg-info-pale',
      },
      {
        variant: ['ghost', 'light'],
        color: 'info',
        className: 'text-info active:text-info-dark',
      },
      {
        variant: 'subtle',
        color: 'info',
        className: 'text-info hover:bg-info-light active:text-info-dark active:bg-info-pale',
      },
      {
        variant: 'soft',
        color: 'info',
        className: 'text-info bg-info-light hover:bg-info-light/90 active:text-info-dark active:bg-info-pale',
      },

    ],
    defaultVariants: {
      variant: 'outline',
      color: 'default',
      size: 'md',
    },
  },
)

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'>,
    VariantProps<typeof buttonVariants> {
  icon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  loading?: boolean;
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    className,
    children,
    loading,
    icon,
    rightIcon,
    variant,
    size = 'md',
    asChild = false,
    disabled,
    color,
    ...props
  }, ref) => {
    const Comp = asChild ? Slot : 'button'
    const isIcon = !!size?.startsWith('icon')

    return (
      <Comp
        disabled={disabled || loading}
        data-loading={loading ? '' : undefined}
        className={cn(buttonVariants({ variant, size, color, className }))}
        ref={ref}
        {...props}
      >
        {loading && (
          <Loader2 className={cn('w-4 h-4 animate-spin', {
            'mr-2': children,
            'w-3': size === 'sm',
            'w-3 mr-1.5': size?.endsWith('xs'),
          })} />
        )}
        {icon && !loading && (
          <span className={cn({
            'mr-2 w-4': !isIcon && children,
            'w-3': size === 'sm',
            'w-3 mr-1.5': size?.endsWith('xs'),
          })}>{icon}</span>
        )}
        <Slottable>{children}</Slottable>
        {rightIcon && <span className="ml-2">{rightIcon}</span>}
      </Comp>
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
