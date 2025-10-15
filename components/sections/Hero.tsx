'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin } from 'lucide-react'
import { portfolioData } from '../../data/portfolioData'
import useLanguageStore from '../../store/useLanguageStore'
import { analytics } from '../../lib/analytics'

export default function Hero() {
  const language = useLanguageStore((s) => s.language)
  const data = portfolioData[language].hero

  const scrollToProjects = () => {
    analytics.trackCTAClick('Hero', 'View My Work')
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    analytics.trackCTAClick('Hero', 'Contact Me')
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSocialClick = (platform: string) => {
    analytics.trackSocialClick(platform)
  }

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-white to-neutral-50 px-6 dark:from-neutral-950 dark:to-neutral-900"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs - Más visibles en dark mode */}
        <motion.div
          className="absolute -left-20 top-20 h-96 w-96 rounded-full bg-indigo-300/40 blur-3xl dark:bg-indigo-500/20"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute -right-20 top-40 h-96 w-96 rounded-full bg-purple-300/40 blur-3xl dark:bg-purple-500/25"
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-300/30 blur-3xl dark:bg-cyan-400/20"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />

        {/* Additional glow for dark mode */}
        <motion.div
          className="absolute right-1/4 top-1/3 h-72 w-72 rounded-full bg-pink-400/0 blur-3xl dark:bg-pink-500/15"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 3,
          }}
        />

        {/* Floating Particles - Más visibles */}
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full bg-indigo-400/50 dark:bg-indigo-300/40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0, 0.8, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Grid Pattern - Más visible en dark */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]" />

        {/* Subtle shimmer effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-200/10 to-transparent dark:via-indigo-400/10"
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.p
          className="mb-4 text-lg font-medium text-neutral-600 dark:text-neutral-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {data.greeting}
        </motion.p>

        <motion.h1
          className="mb-4 text-5xl font-bold tracking-tight text-neutral-900 dark:text-white md:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {data.name}
        </motion.h1>

        <motion.h2
          className="mb-6 text-3xl font-semibold text-indigo-600 dark:text-indigo-400 md:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {data.role}
        </motion.h2>

        <motion.p
          className="mx-auto mb-10 max-w-2xl text-lg text-neutral-600 dark:text-neutral-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {data.description}
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <button
            onClick={scrollToProjects}
            className="group inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-8 py-3 font-medium text-white transition-all duration-300 hover:bg-indigo-700 hover:shadow-lg dark:bg-indigo-500 dark:hover:bg-indigo-600"
          >
            {data.cta}
            <ArrowDown className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-1" />
          </button>

          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 rounded-lg border-2 border-indigo-600 px-8 py-3 font-medium text-indigo-600 transition-all duration-300 hover:bg-indigo-50 dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-950"
          >
            {data.ctaSecondary}
          </button>
        </motion.div>

        <motion.div
          className="mt-12 flex items-center justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a
            href={portfolioData[language].contact.social.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleSocialClick('GitHub')}
            className="text-neutral-600 transition-colors duration-300 hover:text-indigo-600 dark:text-neutral-400 dark:hover:text-indigo-400"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href={portfolioData[language].contact.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleSocialClick('LinkedIn')}
            className="text-neutral-600 transition-colors duration-300 hover:text-indigo-600 dark:text-neutral-400 dark:hover:text-indigo-400"
          >
            <Linkedin className="h-6 w-6" />
          </a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.6,
          repeat: Infinity,
          repeatType: 'reverse',
          repeatDelay: 0.5,
        }}
      >
        <ArrowDown className="h-6 w-6 text-neutral-400" />
      </motion.div>
    </section>
  )
}
