'use client'

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'

if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(Backend)
    .init({
      fallbackLng: 'en',
      supportedLngs: ['en', 'es'],
      ns: ['common'],
      defaultNS: 'common',
      load: 'languageOnly',
      interpolation: { escapeValue: false },
      detection: {
        order: ['localStorage', 'navigator'],
        caches: ['localStorage'],
        lookupLocalStorage: 'app-language'
      },
      backend: {
        loadPath: '/locales/{{lng}}/{{ns}}.json'
      },
      react: {
        useSuspense: false
      }
    })
}

export default i18n

