import { Checkbox } from '@/components/ui/checkbox'
import {
  ComponentPreviewCard,
  ComponentPreviewHeader,
  ComponentPreviewTitle,
} from '../_components/component-preview-card'
import { Label } from '@/components/ui/label'

export const CheckboxPreview = () => {
  return (
    <section>
      <ComponentPreviewHeader>
        <ComponentPreviewTitle>Checkbox</ComponentPreviewTitle>
      </ComponentPreviewHeader>
      <ComponentPreviewCard>
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <Label htmlFor="terms">Accept terms and conditions</Label>
        </div>
      </ComponentPreviewCard>
    </section>
  )
}