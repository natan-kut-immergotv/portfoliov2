'use client'

// Google Analytics 4 Configuration
const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX'

declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, unknown>
    ) => void
    dataLayer?: unknown[]
  }
}

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window === 'undefined') return

  // Create dataLayer if it doesn't exist
  window.dataLayer = window.dataLayer || []

  // Define gtag function
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer?.push(args)
  }

  // Initialize GA4
  window.gtag('js', new Date() as unknown as string)
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: window.location.pathname,
    send_page_view: true,
  })
}

// Page view tracking
export const trackPageView = (url: string) => {
  if (typeof window === 'undefined' || !window.gtag) return

  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  })
}

// Event tracking
export const trackEvent = (
  category: string,
  action: string,
  label?: string,
  value?: number
) => {
  if (typeof window === 'undefined' || !window.gtag) return

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}

// Specific event trackers
export const analytics = {
  // CTA clicks
  trackCTAClick: (location: string, label: string) => {
    trackEvent('CTA', 'click', `${location} - ${label}`)
  },

  // Navigation
  trackNavigation: (section: string) => {
    trackEvent('Navigation', 'section_view', section)
  },

  // Theme change
  trackThemeChange: (theme: 'light' | 'dark') => {
    trackEvent('Settings', 'theme_change', theme)
  },

  // Language change
  trackLanguageChange: (language: string) => {
    trackEvent('Settings', 'language_change', language)
  },

  // Form submission
  trackFormSubmit: (formName: string, success: boolean) => {
    trackEvent('Form', 'submit', formName, success ? 1 : 0)
  },

  // Project view
  trackProjectView: (projectSlug: string) => {
    trackEvent('Project', 'view', projectSlug)
  },

  // External link click
  trackExternalLink: (url: string, type: 'github' | 'demo' | 'social') => {
    trackEvent('External Link', 'click', `${type} - ${url}`)
  },

  // Download/View resume
  trackResumeView: () => {
    trackEvent('Resume', 'view', 'CV Download')
  },

  // Social media click
  trackSocialClick: (platform: string) => {
    trackEvent('Social', 'click', platform)
  },

  // Performance metrics
  trackPerformance: (metric: string, value: number) => {
    trackEvent('Performance', metric, undefined, Math.round(value))
  },
}

// Web Vitals tracking
export const reportWebVitals = (metric: {
  name: string
  value: number
  id: string
}) => {
  if (typeof window === 'undefined' || !window.gtag) return

  window.gtag('event', metric.name, {
    event_category: 'Web Vitals',
    value: Math.round(
      metric.name === 'CLS' ? metric.value * 1000 : metric.value
    ),
    event_label: metric.id,
    non_interaction: true,
  })
}
