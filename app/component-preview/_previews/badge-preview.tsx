import { useState } from 'react'
import { Badge, BadgeProps } from '@/components/ui/badge'
import {
  ComponentConfigForm,
  ComponentPreviewCard,
  ComponentPreviewHeader,
  ComponentPreviewTitle,
} from '../_components/component-preview-card'

export const BadgePreview = () => {
  const [props, setProps] = useState<BadgeProps>({
    children: 'Badge',
    variant: 'filled',
    color: 'default',
    size: 'md',
    circle: false,
  })

  const form = (
    <ComponentConfigForm<BadgeProps>
      items={[
        {
          name: 'children',
          type: 'input',
          defaultValue: 'Badge',
        },
        {
          name: 'variant',
          type: 'select',
          options: ['filled', 'light', 'outline', 'dashed'],
          defaultValue: 'filled',
        },
        {
          name: 'color',
          type: 'select',
          options: ['default', 'primary', 'destructive', 'warning', 'success', 'info'],
          defaultValue: 'default',
        },
        {
          name: 'size',
          type: 'radio',
          options: ['xs', 'sm', 'md', 'lg', 'xl'],
          defaultValue: 'md',
        },
        {
          name: 'circle',
          type: 'switch',
          defaultValue: false,
        },
      ]}
      onChange={setProps}
    />
  )

  return (
    <section>
      <ComponentPreviewHeader>
        <ComponentPreviewTitle>Badge</ComponentPreviewTitle>
      </ComponentPreviewHeader>
      <ComponentPreviewCard form={form}>
        <Badge {...props} />
      </ComponentPreviewCard>
    </section>
  )
}