import { useState } from 'react'
import {
  ComponentConfigForm,
  ComponentPreviewCard,
  ComponentPreviewHeader,
  ComponentPreviewTitle,
} from '../_components/component-preview-card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

type PropsForm = { disabled: boolean }

export const InputPreview = () => {
  const [props, setProps] = useState<PropsForm>({
    disabled: false,
  })

  const form = (
    <ComponentConfigForm<PropsForm>
      items={[
        {
          name: 'disabled',
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
        <ComponentPreviewTitle>Input</ComponentPreviewTitle>
      </ComponentPreviewHeader>
      <ComponentPreviewCard form={form}>
        <div className="w-full flex flex-col items-center gap-3">
          <Input type="email" placeholder="Email" {...props} />
          <Textarea placeholder="Type your message here." {...props} />
        </div>
      </ComponentPreviewCard>
    </section>
  )
}