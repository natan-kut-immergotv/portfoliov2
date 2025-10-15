'use client'

import { motion } from 'framer-motion'
import { AlertCircle } from 'lucide-react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-6 dark:bg-neutral-950">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <AlertCircle className="mx-auto mb-6 h-20 w-20 text-indigo-600 dark:text-indigo-400" />

        <h1 className="mb-4 text-4xl font-bold text-neutral-900 dark:text-white">
          Project Not Found
        </h1>

        <p className="mb-8 text-lg text-neutral-600 dark:text-neutral-300">
          The project you&apos;re looking for doesn&apos;t exist or has been
          removed.
        </p>

        <Link
          href="/#projects"
          className="inline-block rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
        >
          Back to Projects
        </Link>
      </motion.div>
    </div>
  )
}
