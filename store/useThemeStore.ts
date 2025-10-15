'use client'

import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { analytics } from '../lib/analytics'

export type Theme = 'light' | 'dark'

type ThemeState = {
  theme: Theme
  toggleTheme: () => void
  setTheme: (theme: Theme) => void
}

const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: 'light',
      toggleTheme: () => {
        const newTheme = get().theme === 'dark' ? 'light' : 'dark'
        set({ theme: newTheme })
        analytics.trackThemeChange(newTheme)
      },
      setTheme: (theme) => {
        set({ theme })
        analytics.trackThemeChange(theme)
      },
    }),
    {
      name: 'app-theme',
      storage: createJSONStorage(() => localStorage),
      version: 1,
    }
  )
)

export default useThemeStore
