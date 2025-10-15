'use client'

import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import i18n from '../lib/i18n'
import { analytics } from '../lib/analytics'

export type Language = 'en' | 'es'

type LanguageState = {
  language: Language
  setLanguage: (lng: Language) => void
}

const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      language: 'en',
      setLanguage: (lng) => {
        i18n.changeLanguage(lng)
        set({ language: lng })
        analytics.trackLanguageChange(lng)
      },
    }),
    {
      name: 'app-language',
      storage: createJSONStorage(() => localStorage),
      version: 1,
    }
  )
)

export default useLanguageStore
