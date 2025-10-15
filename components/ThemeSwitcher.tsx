'use client'

import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import useThemeStore from '../store/useThemeStore'

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useThemeStore()

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      className="relative rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors duration-200"
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle theme"
      title={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
    >
      {theme === 'dark' ? (
        <Moon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
      ) : (
        <Sun className="h-5 w-5 text-gray-700 dark:text-gray-300" />
      )}
    </motion.button>
  )
}

