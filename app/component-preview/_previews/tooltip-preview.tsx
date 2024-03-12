import { ComponentProps, useState } from 'react'
import {
  ComponentConfigForm,
  ComponentPreviewCard,
  ComponentPreviewHeader,
  ComponentPreviewTitle,
} from '../_components/component-preview-card'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Button } from '@/components/ui/button'

type PreviewForm = Partial<ComponentProps<typeof TooltipContent>>

export const TooltipPreview = () => {
  const [contentProps, setContentProps] = useState<PreviewForm>({
    side: 'top',
    align: 'center',
    showArrow: true,
  })

  const form = (
    <ComponentConfigForm<PreviewForm>
      items={[
        {
          name: 'side',
          type: 'select',
          options: ['top', 'right', 'bottom', 'left'],
          defaultValue: 'top',
        },
        {
          name: 'align',
          type: 'radio',
          options: ['start', 'center', 'end'],
          defaultValue: 'center',
        },
        {
          name: 'showArrow',
          displayName: 'show arrow',
          type: 'switch',
          defaultValue: true,
        },
      ]}
      onChange={setContentProps}
    />
  )

  return (
    <section>
      <ComponentPreviewHeader>
        <ComponentPreviewTitle>Tooltip</ComponentPreviewTitle>
      </ComponentPreviewHeader>
      <ComponentPreviewCard form={form}>
        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button>Hover on me</Button>
            </TooltipTrigger>
            <TooltipContent {...contentProps}>
              This is a tooltip
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </ComponentPreviewCard>
    </section>
  )
}