'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { portfolioData } from '../../data/portfolioData'
import useLanguageStore from '../../store/useLanguageStore'

export default function About() {
  const language = useLanguageStore((s) => s.language)
  const data = portfolioData[language].about

  return (
    <section
      id="about"
      className="flex min-h-screen items-center justify-center bg-white px-6 py-20 dark:bg-neutral-950"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-12 text-center text-4xl font-bold tracking-tight text-neutral-900 dark:text-white md:text-5xl">
            {data.title}
          </h2>

          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <motion.div
              className="flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative">
                <motion.div
                  className="absolute -inset-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 opacity-20 blur-2xl"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.3, 0.2],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                <div className="relative h-64 w-64 rounded-full overflow-hidden shadow-2xl">
                  <Image
                    src="/avatar.png"
                    alt="Natan Kutnowski - Frontend Developer"
                    width={256}
                    height={256}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col justify-center space-y-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {data.bio.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-300"
                >
                  {paragraph}
                </p>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
