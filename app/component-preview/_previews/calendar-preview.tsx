import { useState } from 'react'
import type { DateRange } from 'react-day-picker'
import { addDays } from 'date-fns'
import {
  ComponentConfigForm,
  ComponentPreviewCard,
  ComponentPreviewHeader,
  ComponentPreviewTitle,
} from '../_components/component-preview-card'
import { Calendar } from '@/components/ui/calendar'

type PropsForm = {
  range: boolean
  language: 'zh' | 'en'
}

export const CalendarPreview = () => {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 25),
  })

  const [props, setProps] = useState<PropsForm>({
    range: false,
    language: 'en',
  })

  const form = (
    <ComponentConfigForm<PropsForm>
      items={[
        {
          name: 'range',
          type: 'switch',
          defaultValue: false,
        },
        {
          name: 'language',
          type: 'select',
          options: ['en', 'zh'],
          defaultValue: 'en',
        },
      ]}
      onChange={setProps}
    />
  )

  return (
    <section>
      <ComponentPreviewHeader>
        <ComponentPreviewTitle>Calendar</ComponentPreviewTitle>
      </ComponentPreviewHeader>
      <ComponentPreviewCard form={form}>
        {props.range ? (
          <Calendar
            language={props.language}
            mode="range"
            defaultMonth={dateRange?.from}
            selected={dateRange}
            onSelect={setDateRange}
            numberOfMonths={2}
          />
        ) : (
          <Calendar
            language={props.language}
            mode="single"
            selected={date}
            onSelect={setDate}
          />
        )}
      </ComponentPreviewCard>
    </section>
  )
}