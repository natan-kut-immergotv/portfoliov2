'use client'

import { motion } from 'framer-motion'
import { Code2, Database, Wrench, Smartphone } from 'lucide-react'
import { portfolioData } from '../../data/portfolioData'
import useLanguageStore from '../../store/useLanguageStore'

const categoryIcons = {
  0: Code2,
  1: Database,
  2: Smartphone,
  3: Wrench,
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

export default function Skills() {
  const language = useLanguageStore((s) => s.language)
  const data = portfolioData[language].skills

  return (
    <section
      id="skills"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-neutral-50 px-6 py-20 dark:bg-neutral-900"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 text-center">
            <motion.span
              className="inline-block rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Tech Stack
            </motion.span>
          </div>

          <h2 className="mb-6 text-center text-4xl font-bold tracking-tight text-neutral-900 dark:text-white md:text-5xl">
            {data.title}
          </h2>

          <p className="mx-auto mb-16 max-w-2xl text-center text-lg text-neutral-600 dark:text-neutral-400">
            {language === 'es'
              ? 'Herramientas y tecnologías que domino para crear soluciones web modernas'
              : 'Tools and technologies I master to build modern web solutions'}
          </p>

          <motion.div
            className="grid gap-6 md:grid-cols-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            {data.categories.map((category, categoryIndex) => {
              const Icon =
                categoryIcons[categoryIndex as keyof typeof categoryIcons]
              return (
                <motion.div
                  key={category.name}
                  className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl dark:bg-neutral-800"
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="relative">
                    <div className="mb-6 flex items-center gap-3">
                      <motion.div
                        className="rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 p-3 shadow-lg"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="h-6 w-6 text-white" />
                      </motion.div>
                      <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                        {category.name}
                      </h3>
                    </div>

                    <ul className="space-y-3">
                      {category.items.map((skill, index) => (
                        <motion.li
                          key={skill}
                          className="flex items-center gap-3 rounded-lg p-2 text-neutral-600 transition-colors duration-200 hover:bg-indigo-50 dark:text-neutral-300 dark:hover:bg-indigo-900/20"
                          whileHover={{ x: 4 }}
                          transition={{ duration: 0.2 }}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          custom={index}
                        >
                          <motion.span
                            className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400"
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            transition={{ duration: 0.3 }}
                          >
                            {index + 1}
                          </motion.span>
                          <span className="font-medium">{skill}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
