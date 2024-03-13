import { ComponentProps, useState } from 'react'
import { Slider } from '@/components/ui/slider'
import { Progress } from '@/components/ui/progress'
import {
  ComponentConfigForm,
  ComponentPreviewCard,
  ComponentPreviewHeader,
  ComponentPreviewTitle,
} from '../_components/component-preview-card'
import { Input } from '@/components/ui/input'
import { RingProgress } from '@/components/ui/ring-progress'

type SliderProps = ComponentProps<typeof Slider>

export const SliderPreview = () => {
  const [sliderProps, setSliderProps] = useState<SliderProps>({
    min: 0,
    max: 100,
    step: 1,
  })

  const [value, setValue] = useState(50)

  const form = (
    <ComponentConfigForm<SliderProps>
      items={[
        {
          name: 'min',
          type: 'number',
          defaultValue: 0,
        },
        {
          name: 'max',
          type: 'number',
          defaultValue: 100,
        },
        {
          name: 'step',
          type: 'number',
          defaultValue: 1,
        },
      ]}
      onChange={setSliderProps}
    />
  )

  return (
    <section>
      <ComponentPreviewHeader>
        <ComponentPreviewTitle>Slider & Progress</ComponentPreviewTitle>
      </ComponentPreviewHeader>
      <ComponentPreviewCard form={form}>
        <div className="w-2/3">
          <Input
            className="ml-auto w-[72px]"
            type="number"
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
          />
        </div>
        <div className="w-2/3 mt-6">
        <Slider value={[value]} onValueChange={([v]) => setValue(v)} {...sliderProps} />
        </div>
        <div className="w-2/3 mt-7">
          <Progress value={value} max={sliderProps.max!} />
        </div>
        <div className="mt-7">
          <RingProgress value={value} max={sliderProps.max!}>
            <div className="text-sm font-medium">
              {(value / sliderProps.max! * 100).toFixed(1)}%
            </div>
          </RingProgress>
        </div>
      </ComponentPreviewCard>
    </section>
  )
}