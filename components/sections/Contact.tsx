'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Github, Linkedin, Mail } from 'lucide-react'
import { portfolioData } from '../../data/portfolioData'
import useLanguageStore from '../../store/useLanguageStore'
import { analytics } from '../../lib/analytics'

export default function Contact() {
  const language = useLanguageStore((s) => s.language)
  const data = portfolioData[language].contact

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  })

  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const newErrors = {
      name: formData.name.trim() === '',
      email: !validateEmail(formData.email),
      message: formData.message.trim() === '',
    }

    setErrors(newErrors)

    if (!newErrors.name && !newErrors.email && !newErrors.message) {
      try {
        const response = await fetch('https://formspree.io/f/xnnglbro', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
          }),
        })

        if (response.ok) {
          setStatus('success')
          setFormData({ name: '', email: '', message: '' })
          analytics.trackFormSubmit('contact', true)
          setTimeout(() => setStatus('idle'), 3000)
        } else {
          throw new Error('Failed to send message')
        }
      } catch (error) {
        setStatus('error')
        analytics.trackFormSubmit('contact', false)
        setTimeout(() => setStatus('idle'), 3000)
      }
    } else {
      setStatus('error')
      analytics.trackFormSubmit('contact', false)
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: false }))
  }

  return (
    <section
      id="contact"
      className="flex min-h-screen items-center justify-center bg-neutral-50 px-6 py-20 dark:bg-neutral-900"
    >
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-center text-4xl font-bold tracking-tight text-neutral-900 dark:text-white md:text-5xl">
            {data.title}
          </h2>
          <p className="mb-12 text-center text-lg text-neutral-600 dark:text-neutral-300">
            {data.subtitle}
          </p>

          <div className="grid gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                  >
                    {data.form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full rounded-lg border-2 px-4 py-3 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-neutral-800 dark:text-white ${
                      errors.name
                        ? 'border-red-500'
                        : 'border-neutral-300 dark:border-neutral-600'
                    }`}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                  >
                    {data.form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full rounded-lg border-2 px-4 py-3 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-neutral-800 dark:text-white ${
                      errors.email
                        ? 'border-red-500'
                        : 'border-neutral-300 dark:border-neutral-600'
                    }`}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                  >
                    {data.form.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full resize-none rounded-lg border-2 px-4 py-3 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-neutral-800 dark:text-white ${
                      errors.message
                        ? 'border-red-500'
                        : 'border-neutral-300 dark:border-neutral-600'
                    }`}
                  />
                </div>

                <motion.button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="h-5 w-5" />
                  {data.form.submit}
                </motion.button>

                {status === 'success' && (
                  <motion.p
                    className="text-center text-sm font-medium text-green-600 dark:text-green-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    {data.form.success}
                  </motion.p>
                )}

                {status === 'error' && (
                  <motion.p
                    className="text-center text-sm font-medium text-red-600 dark:text-red-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    {data.form.error}
                  </motion.p>
                )}
              </form>
            </motion.div>

            <motion.div
              className="flex flex-col justify-center space-y-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div>
                <h3 className="mb-6 text-2xl font-semibold text-neutral-900 dark:text-white">
                  {language === 'es' ? 'Conectemos' : "Let's Connect"}
                </h3>
                <p className="mb-8 text-neutral-600 dark:text-neutral-300">
                  {language === 'es'
                    ? 'Sígueme en mis redes sociales y mantente al día con mis últimos proyectos.'
                    : 'Follow me on social media and stay updated with my latest projects.'}
                </p>
              </div>

              <div className="space-y-4">
                <motion.a
                  href={data.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-lg border-2 border-neutral-300 p-4 transition-all duration-300 hover:border-indigo-600 hover:bg-indigo-50 dark:border-neutral-600 dark:hover:border-indigo-400 dark:hover:bg-neutral-800"
                  whileHover={{ x: 8 }}
                >
                  <Github className="h-6 w-6 text-neutral-700 dark:text-neutral-300" />
                  <span className="font-medium text-neutral-700 dark:text-neutral-300">
                    GitHub
                  </span>
                </motion.a>

                <motion.a
                  href={data.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-lg border-2 border-neutral-300 p-4 transition-all duration-300 hover:border-indigo-600 hover:bg-indigo-50 dark:border-neutral-600 dark:hover:border-indigo-400 dark:hover:bg-neutral-800"
                  whileHover={{ x: 8 }}
                >
                  <Linkedin className="h-6 w-6 text-neutral-700 dark:text-neutral-300" />
                  <span className="font-medium text-neutral-700 dark:text-neutral-300">
                    LinkedIn
                  </span>
                </motion.a>

                <motion.a
                  href={`mailto:${data.social.email}`}
                  className="flex items-center gap-4 rounded-lg border-2 border-neutral-300 p-4 transition-all duration-300 hover:border-indigo-600 hover:bg-indigo-50 dark:border-neutral-600 dark:hover:border-indigo-400 dark:hover:bg-neutral-800"
                  whileHover={{ x: 8 }}
                >
                  <Mail className="h-6 w-6 text-neutral-700 dark:text-neutral-300" />
                  <span className="font-medium text-neutral-700 dark:text-neutral-300">
                    Email
                  </span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
