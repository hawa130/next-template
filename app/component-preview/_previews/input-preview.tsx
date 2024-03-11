import { useState } from 'react'
import {
  ComponentConfigForm,
  ComponentPreviewCard,
  ComponentPreviewHeader,
  ComponentPreviewTitle,
} from '../_components/component-preview-card'
import { Input, inputWrapperVariants } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Search } from 'lucide-react'

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
          <section className="w-full">
            <div className="w-full text-sm mb-1">Input</div>
            <Input type="email" placeholder="Email" {...props} />
          </section>
          <section className="w-full">
            <div className="w-full text-sm mb-1">Combined Input</div>
            <div className="w-full flex join">
              <label className={cn(inputWrapperVariants(), 'flex-grow')}>
                <Search className="h-4 w-4 mr-2 text-muted-fg" />
                <input placeholder="Search..." {...props} />
              </label>
              <Button className="flex-shrink-0" size="icon-md" icon={<Search className="h-4 w-4" />} />
            </div>
          </section>
          <section className="w-full">
            <div className="w-full text-sm mb-1">Textarea</div>
            <Textarea placeholder="Type your message here." {...props} />
          </section>
        </div>
      </ComponentPreviewCard>
    </section>
  )
}