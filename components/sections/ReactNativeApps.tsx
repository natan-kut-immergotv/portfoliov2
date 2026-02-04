'use client'

import { motion } from 'framer-motion'
import { portfolioData } from '../../data/portfolioData'
import useLanguageStore from '../../store/useLanguageStore'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

export default function ReactNativeApps() {
  const language = useLanguageStore((s) => s.language)
  const data = portfolioData[language].reactNativeApps

  return (
    <section
      id="react-native-apps"
      className="flex min-h-screen items-center justify-center bg-white px-6 py-20 dark:bg-neutral-950"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-center text-4xl font-bold tracking-tight text-neutral-900 dark:text-white md:text-5xl">
            {data.title}
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-lg text-neutral-600 dark:text-neutral-300">
            {data.subtitle}
          </p>

          <motion.div
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {data.items.map((app) => (
              <motion.div
                key={app.id}
                className="group overflow-hidden rounded-2xl bg-neutral-50 shadow-lg transition-all duration-300 hover:shadow-2xl dark:bg-neutral-900"
                variants={itemVariants}
                whileHover={{ y: -8 }}
              >
                <div className="relative aspect-video w-full overflow-hidden rounded-t-2xl bg-neutral-200 dark:bg-neutral-800">
                  <iframe
                    src={`https://www.youtube.com/embed/${app.videoId}`}
                    title={app.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full"
                  />
                </div>

                <div className="p-6">
                  <h3 className="mb-3 text-xl font-bold text-neutral-900 dark:text-white">
                    {app.title}
                  </h3>

                  <p className="mb-4 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                    {app.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {app.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
