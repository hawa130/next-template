import { useState } from 'react'
import { Alert, type AlertProps } from '@/components/ui/alert'
import {
  ComponentConfigForm,
  ComponentPreviewCard,
  ComponentPreviewHeader,
  ComponentPreviewTitle,
} from '../_components/component-preview-card'

export const AlertPreview = () => {
  const [props, setProps] = useState<AlertProps>({
    variant: 'surface',
    color: 'info',
    title: 'Invalid Credentials',
    children: 'Your session has expired. Please log in again.',
  })

  const form = (
    <ComponentConfigForm<AlertProps>
      items={[
        {
          name: 'title',
          type: 'input',
          defaultValue: 'Invalid Credentials',
        },
        {
          name: 'children',
          type: 'input',
          defaultValue: 'Your session has expired. Please log in again.',
        },
        {
          name: 'variant',
          type: 'select',
          options: ['surface', 'outline', 'soft'],
          defaultValue: 'surface',
        },
        {
          name: 'color',
          type: 'select',
          options: ['default', 'primary', 'destructive', 'warning', 'success', 'info'],
          defaultValue: 'info',
        },
      ]}
      onChange={setProps}
    />
  )

  return (
    <section>
      <ComponentPreviewHeader>
        <ComponentPreviewTitle>Alert</ComponentPreviewTitle>
      </ComponentPreviewHeader>
      <ComponentPreviewCard form={form}>
        <Alert {...props} />
      </ComponentPreviewCard>
    </section>
  )
}