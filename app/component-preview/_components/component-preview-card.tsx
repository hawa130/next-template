import { useForm } from 'react-hook-form'
import { ComponentProps, HTMLAttributes, ReactNode, useMemo } from 'react'

import { cn } from '@/lib/utils'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/base/form'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/base/select'
import { Input } from '@/components/base/input'
import { Switch } from '@/components/base/switch'

export const ComponentPreviewTitle = ({ children }: { children: ReactNode }) => {
  return <h2 className="text-lg font-medium mb-2">{children}</h2>
}

export interface ComponentPreviewCardProps extends HTMLAttributes<HTMLDivElement> {
  form?: ReactNode
}

export const ComponentPreviewCard = ({ className, children, form, ...props }: ComponentPreviewCardProps) => {
  return (
    <div
      className={cn('overflow-auto border rounded-lg grid grid-cols-[minmax(0,1fr)_240px]', className)}
      {...props}
    >
      <ComponentPreviewSection>{children}</ComponentPreviewSection>
      <div className="border-l p-4 bg-body">{form}</div>
    </div>
  )
}

export const ComponentPreviewSection = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn('flex items-center justify-center', className)} {...props} />
}

export type ComponentConfigFormItemBase = {
  displayName?: string
  description?: string
}

export type ComponentConfigFormItem<T extends Record<string, any>> = ComponentConfigFormItemBase & {
  [P in keyof T]:
    | { name: P & string; type: 'select'; options: (T[P] & string)[]; defaultValue?: T[P] & string }
    | { name: P & string; type: 'input'; placeholder?: string; defaultValue?: T[P] & string }
    | { name: P & string; type: 'switch'; defaultValue?: T[P] & boolean }
}[keyof T]

type Test = ComponentConfigFormItem<{ name: string, age: string }>

// export type ComponentConfigFormItem<T extends Record<string, any>> = ComponentConfigFormItemBase & ({
//   name:
//   type: 'select'
//   options: string[]
//   defaultValue?: string
// } | {
//   type: 'input'
//   placeholder?: string
//   defaultValue?: string
// } | {
//   type: 'switch'
//   defaultValue?: boolean
// })

interface ComponentConfigFormField extends ComponentConfigFormItemBase, Omit<ComponentProps<typeof FormField>, 'name'> {
  name: string
}

const ComponentConfigFormField = ({ name, displayName, description, render, ...props }: ComponentConfigFormField) => {
  return (
    <FormField
      name={name}
      render={(params) => (
        <FormItem>
          <FormLabel>{displayName ?? name}</FormLabel>
          {render(params)}
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
      {...props}
    />
  )
}

export interface ComponentConfigFormProps<T extends Record<string, any>> {
  items: ComponentConfigFormItem<T>[]
  onChange?: (values: T) => void
  className?: string
}

export const ComponentConfigForm = <T extends Record<string, any>>({ items, onChange, className }: ComponentConfigFormProps<T>) => {
  const defaultValues = useMemo(
    () => Object.fromEntries(items.map(item => [item.name, item.defaultValue])),
    [items],
  )

  const form = useForm({ defaultValues })

  form.watch((values) => onChange?.({ ...form.getValues(), ...values } as T))

  return (
    <Form {...form}>
      <form className={cn('space-y-2.5', className)}>
        {items.map(item => {
          switch (item.type) {
            case 'select':
              return (
                <ComponentConfigFormField
                  key={item.name}
                  name={item.name}
                  control={form.control}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {item.options.map(opt => <SelectItem key={opt} value={opt}>{opt}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  )}
                />
              )
            case 'input':
              return (
                <ComponentConfigFormField
                  key={item.name}
                  name={item.name}
                  control={form.control}
                  render={({ field }) => (
                    <FormControl>
                      <Input placeholder={item.placeholder} {...field} />
                    </FormControl>
                  )}
                />
              )
            case 'switch':
              return (
                <FormField
                  key={item.name}
                  name={item.name}
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="flex justify-between items-center">
                      <div>
                        <FormLabel>{item.displayName ?? item.name}</FormLabel>
                        {item.description && <FormDescription>{item.description}</FormDescription>}
                      </div>
                      <FormControl>
                        <Switch defaultChecked={!!field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )
            default:
              return null
          }
        })}
      </form>
    </Form>
  )
}