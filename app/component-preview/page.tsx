'use client'

import { ModeToggle } from '@/app/component-preview/_components/mode-toggle'
import { ButtonPreview } from '@/app/component-preview/_previews/button-preview'

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