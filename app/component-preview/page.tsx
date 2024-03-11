'use client'

import { ModeToggle } from './_components/mode-toggle'
import { ButtonPreview } from './_previews/button-preview'
import { ToastPreview } from './_previews/toast-preview'
import { TooltipPreview } from './_previews/tooltip-preview'
import { RadioPreview } from './_previews/radio-preview'
import { CheckboxPreview } from './_previews/checkbox-preview'
import { CalendarPreview } from './_previews/calendar-preview'
import { PopoverPreview } from './_previews/popover-preview'
import { InputPreview } from './_previews/input-preview'
import { HoverCardPreview } from './_previews/hover-card-preview'
import { BadgePreview } from './_previews/badge-preview'
import { SliderPreview } from './_previews/slider-preview'
import { AlertPreview } from './_previews/alert-preview'

export default function Page() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-8">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-semibold leading-none tracking-tight">
          Component Preview
        </h1>
        <ModeToggle />
      </div>
      <div className="space-y-6">
        <ButtonPreview />
        <ToastPreview />
        <TooltipPreview />
        <HoverCardPreview />
        <PopoverPreview />
        <CheckboxPreview />
        <RadioPreview />
        <CalendarPreview />
        <InputPreview />
        <BadgePreview />
        <SliderPreview />
        <AlertPreview />
      </div>
    </main>
  )
}