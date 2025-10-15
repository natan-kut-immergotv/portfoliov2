'use client'

import { useEffect, useState } from 'react'

export type SectionId = 'home' | 'about' | 'skills' | 'projects' | 'contact'

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<SectionId>('home')

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id as SectionId)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section)
      })
    }
  }, [])

  return activeSection
}

