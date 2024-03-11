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
    variant: 'default',
    type: 'bordered',
    title: 'Invalid Credentials',
    description: 'Your session has expired. Please log in again.',
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
          name: 'description',
          type: 'input',
          defaultValue: 'Your session has expired. Please log in again.',
        },
        {
          name: 'variant',
          type: 'select',
          options: ['default', 'secondary', 'destructive', 'warning', 'success', 'info'],
          defaultValue: 'default',
        },
        {
          name: 'type',
          type: 'select',
          options: ['bordered', 'borderless'],
          defaultValue: 'bordered',
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