'use client'

import { motion } from 'framer-motion'
import useLanguageStore, { Language } from '../store/useLanguageStore'

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguageStore()

  const handleLanguageChange = (lng: Language) => {
    setLanguage(lng)
  }

  return (
    <div className="flex items-center gap-1 rounded-lg border border-gray-200 dark:border-neutral-700 p-1">
      <motion.button
        type="button"
        onClick={() => handleLanguageChange('es')}
        className={`px-2 py-1 rounded text-sm font-medium transition-all duration-300 ${
          language === 'es'
            ? 'bg-blue-600 text-white'
            : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-neutral-800'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        ES
      </motion.button>
      <motion.button
        type="button"
        onClick={() => handleLanguageChange('en')}
        className={`px-2 py-1 rounded text-sm font-medium transition-all duration-300 ${
          language === 'en'
            ? 'bg-blue-600 text-white'
            : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-neutral-800'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        EN
      </motion.button>
    </div>
  )
}

