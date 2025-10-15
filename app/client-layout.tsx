'use client'

import { ReactNode, useEffect } from 'react'
import Script from 'next/script'
import '../lib/i18n'
import useThemeStore from '../store/useThemeStore'
import useLanguageStore from '../store/useLanguageStore'
import Navbar from '../components/Navbar'
import { initGA } from '../lib/analytics'

type ClientLayoutProps = {
  children: ReactNode
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const theme = useThemeStore((s) => s.theme)
  const language = useLanguageStore((s) => s.language)

  useEffect(() => {
    const html = document.documentElement
    html.lang = language
    if (theme === 'dark') {
      html.classList.add('dark')
    } else {
      html.classList.remove('dark')
    }
  }, [language, theme])

  useEffect(() => {
    initGA()
  }, [])

  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX'

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Navbar />
      {children}
    </>
  )
}

