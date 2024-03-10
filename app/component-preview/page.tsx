'use client'

import { ModeToggle } from './_components/mode-toggle'
import { ButtonPreview } from './_previews/button-preview'
import { ToastPreview } from './_previews/toast-preview'

export default function Page() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-6">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-semibold leading-none tracking-tight">
          Component Preview
        </h1>
        <ModeToggle />
      </div>
      <div className="space-y-5">
        <ButtonPreview />
        <ToastPreview />
      </div>
    </main>
  )
}