import { useState } from 'react'
import { Button, ButtonProps } from '@/components/ui/button'
import {
  ComponentConfigForm,
  ComponentPreviewCard,
  ComponentPreviewTitle,
} from '../_components/component-preview-card'

export const ButtonPreview = () => {
  const [buttonProps, setButtonProps] = useState<ButtonProps>({
    variant: 'filled',
    color: 'default',
    size: 'md',
    children: 'Button',
  })

  const form = (
    <ComponentConfigForm<ButtonProps>
      items={[
        {
          name: 'children',
          displayName: 'label',
          type: 'input',
          defaultValue: 'Button',
        },
        {
          name: 'variant',
          type: 'select',
          options: ['filled', 'outline', 'dashed', 'ghost', 'light', 'subtle', 'soft'],
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
          type: 'select',
          options: ['2xs', 'xs', 'sm', 'md', 'lg'],
          defaultValue: 'md',
        },
        {
          name: 'loading',
          type: 'switch',
          defaultValue: false,
        },
        {
          name: 'disabled',
          type: 'switch',
          defaultValue: false,
        },
      ]}
      onChange={setButtonProps}
    />
  )

  return (
    <section>
      <ComponentPreviewTitle>Button</ComponentPreviewTitle>
      <ComponentPreviewCard form={form}>
        <Button {...buttonProps} />
      </ComponentPreviewCard>
    </section>
  )
}