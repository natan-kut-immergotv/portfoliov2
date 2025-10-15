'use client'

import { notFound } from 'next/navigation'
import { motion } from 'framer-motion'
import { NextSeo } from 'next-seo'
import { Github, ExternalLink, ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { portfolioData } from '../../../data/portfolioData'
import useLanguageStore from '../../../store/useLanguageStore'

type ProjectPageProps = {
  params: {
    slug: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const language = useLanguageStore((s) => s.language)
  const projects = portfolioData[language].projects

  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <>
      <NextSeo
        title={project.title}
        description={project.description}
        canonical={`https://natankutnowski.com/projects/${params.slug}`}
        openGraph={{
          type: 'article',
          locale: language === 'es' ? 'es_ES' : 'en_US',
          url: `https://natankutnowski.com/projects/${params.slug}`,
          siteName: 'Natan Kutnowski Portfolio',
          title: project.title,
          description: project.description,
          images: [
            {
              url: `https://natankutnowski.com${project.image}`,
              width: 1200,
              height: 630,
              alt: project.title,
            },
          ],
          article: {
            authors: ['Natan Kutnowski'],
            tags: project.tags,
          },
        }}
        twitter={{
          cardType: 'summary_large_image',
          handle: '@natankutnowski',
          site: '@natankutnowski',
        }}
      />

      <main className="min-h-screen bg-white dark:bg-neutral-950">
        {/* Back Button */}
        <motion.div
          className="mx-auto max-w-6xl px-6 pt-24"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-neutral-600 transition-colors duration-200 hover:text-indigo-600 dark:text-neutral-400 dark:hover:text-indigo-400"
          >
            <ArrowLeft className="h-4 w-4" />
            {language === 'es' ? 'Volver a Proyectos' : 'Back to Projects'}
          </Link>
        </motion.div>

        {/* Hero Section */}
        <section className="mx-auto max-w-6xl px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-neutral-900 dark:text-white md:text-5xl lg:text-6xl">
              {project.title}
            </h1>

            <div className="mb-8 flex flex-wrap gap-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="mb-8 text-xl leading-relaxed text-neutral-600 dark:text-neutral-300">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="h-5 w-5" />
                {language === 'es' ? 'Ver Demo' : 'View Demo'}
              </motion.a>

              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-neutral-300 px-6 py-3 font-medium text-neutral-700 transition-all duration-300 hover:border-indigo-600 hover:text-indigo-600 dark:border-neutral-600 dark:text-neutral-300 dark:hover:border-indigo-400 dark:hover:text-indigo-400"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="h-5 w-5" />
                {language === 'es' ? 'Ver Código' : 'View Code'}
              </motion.a>
            </div>
          </motion.div>
        </section>

        {/* Project Image */}
        <motion.section
          className="mx-auto max-w-6xl px-6 py-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-neutral-200 shadow-2xl dark:bg-neutral-800">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
            />
          </div>
        </motion.section>

        {/* Full Description */}
        <motion.section
          className="mx-auto max-w-4xl px-6 py-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="mb-6 text-3xl font-bold text-neutral-900 dark:text-white">
            {language === 'es' ? 'Sobre el Proyecto' : 'About the Project'}
          </h2>

          <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none">
            <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
              {project.fullDescription}
            </p>
          </div>
        </motion.section>

        {/* Technologies */}
        <motion.section
          className="mx-auto max-w-4xl px-6 py-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="mb-6 text-3xl font-bold text-neutral-900 dark:text-white">
            {language === 'es' ? 'Tecnologías Utilizadas' : 'Technologies Used'}
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {project.tags.map((tech, index) => (
              <motion.div
                key={tech}
                className="rounded-xl bg-neutral-50 p-6 text-center shadow-sm dark:bg-neutral-900"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <p className="font-semibold text-neutral-900 dark:text-white">
                  {tech}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          className="mx-auto max-w-4xl px-6 py-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 p-12 text-center text-white">
            <h2 className="mb-4 text-3xl font-bold">
              {language === 'es'
                ? '¿Interesado en trabajar juntos?'
                : 'Interested in working together?'}
            </h2>
            <p className="mb-8 text-lg opacity-90">
              {language === 'es'
                ? 'Siempre estoy abierto a nuevos proyectos y colaboraciones.'
                : "I'm always open to new projects and collaborations."}
            </p>
            <Link
              href="/#contact"
              className="inline-block rounded-lg bg-white px-8 py-3 font-medium text-indigo-600 transition-transform duration-300 hover:scale-105"
            >
              {language === 'es' ? 'Contáctame' : 'Get in Touch'}
            </Link>
          </div>
        </motion.section>
      </main>
    </>
  )
}
