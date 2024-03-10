'use client'

import { ComponentConfigForm, ComponentPreviewCard, ComponentPreviewTitle } from './_components/component-preview-card'
import { Button, ButtonProps } from '@/components/base/button'
import { useState } from 'react'
import { ModeToggle } from '@/app/component-preview/_components/mode-toggle'

export default function Page() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-6">
      <div className="flex justify-end mb-4">
        <ModeToggle />
      </div>
      <ButtonPreview />
    </main>
  )
}

const ButtonPreview = () => {
  const [buttonProps, setButtonProps] = useState<ButtonProps>({
    variant: 'filled',
    color: 'primary',
    size: 'md',
  })

  const form = (
    <ComponentConfigForm<ButtonProps>
      items={[
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
          name: 'disabled',
          type: 'switch',
          defaultValue: false,
        }
      ]}
      onChange={setButtonProps}
    />
  )

  return (
    <section>
      <ComponentPreviewTitle>Button</ComponentPreviewTitle>
      <ComponentPreviewCard form={form}>
        <Button {...buttonProps}>Button</Button>
      </ComponentPreviewCard>
    </section>
  )
}