import { useCallback, useState } from 'react'

export interface UseUncontrolledOptions<T> {
  value?: T
  onChange?: (value: T, ...extra: any[]) => void
}

export function useUncontrolled<T>(
  defaultValue: T,
  options: UseUncontrolledOptions<T>,
): [T, (value: T, ...extra: any[]) => void] {
  const { value, onChange } = options
  const [state, setState] = useState<T>(defaultValue)

  const isControlled = value !== undefined

  const handleChange = useCallback((next: T, ...extra: any[]) => {
    if (!isControlled) {
      setState(next)
    }
    onChange?.(next, ...extra)
  }, [isControlled, onChange])

  if (isControlled) {
    return [value as T, handleChange]
  }

  return [state, handleChange]
}