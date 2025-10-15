'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink, Eye } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { portfolioData } from '../../data/portfolioData'
import useLanguageStore from '../../store/useLanguageStore'
import { analytics } from '../../lib/analytics'

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

export default function Projects() {
  const language = useLanguageStore((s) => s.language)
  const projects = portfolioData[language].projects

  return (
    <section
      id="projects"
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
            {language === 'es' ? 'Proyectos' : 'Projects'}
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-lg text-neutral-600 dark:text-neutral-300">
            {language === 'es'
              ? 'Una selección de trabajos y experimentos recientes.'
              : 'A selection of recent works and experiments.'}
          </p>

          <motion.div
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className="group overflow-hidden rounded-2xl bg-neutral-50 shadow-lg transition-all duration-300 hover:shadow-2xl dark:bg-neutral-900"
                variants={itemVariants}
                whileHover={{ y: -8 }}
              >
                <Link href={`/projects/${project.slug}`}>
                  <div className="relative h-56 w-full overflow-hidden bg-neutral-200 dark:bg-neutral-800">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/40">
                      <Eye className="h-12 w-12 translate-y-4 text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100" />
                    </div>
                  </div>
                </Link>

                <div className="p-6">
                  <Link href={`/projects/${project.slug}`}>
                    <h3 className="mb-3 text-xl font-bold text-neutral-900 transition-colors duration-200 hover:text-indigo-600 dark:text-white dark:hover:text-indigo-400">
                      {project.title}
                    </h3>
                  </Link>

                  <p className="mb-4 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                    {project.description}
                  </p>

                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-1 items-center justify-center gap-2 rounded-lg border-2 border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-700 transition-all duration-300 hover:border-indigo-600 hover:text-indigo-600 dark:border-neutral-600 dark:text-neutral-300 dark:hover:border-indigo-400 dark:hover:text-indigo-400"
                      onClick={(e) => {
                        e.stopPropagation()
                        analytics.trackExternalLink(project.github, 'github')
                      }}
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
                      onClick={(e) => {
                        e.stopPropagation()
                        analytics.trackExternalLink(project.demo, 'demo')
                      }}
                    >
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </a>
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
