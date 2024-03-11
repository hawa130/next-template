import { HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

export interface ComponentPreviewCardProps extends HTMLAttributes<HTMLDivElement> {
  form?: ReactNode
}

export const ComponentPreviewCard = ({ className, children, form, ...props }: ComponentPreviewCardProps) => {
  return (
    <div
      className={cn('overflow-auto border rounded-lg',
        !!form && 'grid grid-cols-[minmax(0,1fr)_240px]',
        className,
      )}
      {...props}
    >
      <ComponentPreviewSection>{children}</ComponentPreviewSection>
      {!!form && <div className="border-l p-4 bg-body">{form}</div>}
    </div>
  )
}

export const ComponentPreviewSection = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn('flex flex-col items-center justify-center p-4 min-h-[120px]', className)} {...props} />
}

export * from './header'
export * from './form'