import { portfolioData } from '../data/portfolioData'

type Language = 'en' | 'es'

const siteUrl = 'https://portfolio-front-iota-dun.vercel.app'

interface MetadataImage {
  url: string
  width: number
  height: number
  alt: string
}

interface OpenGraphMetadata {
  type: string
  locale: string
  url: string
  siteName: string
  title: string
  description: string
  images: MetadataImage[]
  publishedTime?: string
  authors?: string[]
}

interface TwitterMetadata {
  card: string
  title: string
  description: string
  images: string[]
  creator: string
  handle?: string
  site?: string
}

interface SEOMetadata {
  title: string | { default: string; template: string }
  description: string
  keywords?: string[]
  openGraph: OpenGraphMetadata
  twitter?: TwitterMetadata
  canonical?: string
}

export const getBaseMetadata = (language: Language = 'en'): SEOMetadata => {
  return {
    title: {
      default: 'Natan Kutnowski | Frontend Developer',
      template: '%s | Natan Kutnowski',
    },
    description:
      language === 'es'
        ? 'Desarrollador Frontend especializado en React, Next.js y TypeScript. Creo experiencias web modernas, rápidas y accesibles.'
        : 'Frontend Developer specialized in React, Next.js and TypeScript. Creating modern, fast and accessible web experiences.',
    keywords:
      language === 'es'
        ? [
            'Natan Kutnowski',
            'Desarrollador Frontend',
            'React',
            'Next.js',
            'TypeScript',
            'Tailwind CSS',
            'Desarrollador Web',
            'Portfolio',
          ]
        : [
            'Natan Kutnowski',
            'Frontend Developer',
            'React',
            'Next.js',
            'TypeScript',
            'Tailwind CSS',
            'Web Developer',
            'Portfolio',
          ],
    openGraph: {
      type: 'website',
      locale: language === 'es' ? 'es_ES' : 'en_US',
      url: siteUrl,
      siteName: 'Natan Kutnowski Portfolio',
      title: 'Natan Kutnowski | Frontend Developer',
      description:
        language === 'es'
          ? 'Desarrollador Frontend especializado en React, Next.js y TypeScript.'
          : 'Frontend Developer specialized in React, Next.js and TypeScript.',
      images: [
        {
          url: `${siteUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: 'Natan Kutnowski Portfolio',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Natan Kutnowski | Frontend Developer',
      description:
        language === 'es'
          ? 'Desarrollador Frontend especializado en React, Next.js y TypeScript.'
          : 'Frontend Developer specialized in React, Next.js and TypeScript.',
      images: [`${siteUrl}/og-image.png`],
      creator: '@natankutnowski',
    },
    canonical: siteUrl,
  }
}

interface Project {
  id: number
  slug: string
  title: string
  description: string
  fullDescription: string
  tags: string[]
  image: string
  github: string
  demo: string
}

export const getProjectMetadata = (
  slug: string,
  language: Language = 'en'
): SEOMetadata => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data = (portfolioData as any)[language]
  const allProjects = data.projects as Project[]
  const project = allProjects.find((p: Project) => p.slug === slug)

  if (!project) {
    return getBaseMetadata(language)
  }

  return {
    title: project.title,
    description: project.description,
    canonical: `${siteUrl}/projects/${slug}`,
    openGraph: {
      type: 'article',
      locale: language === 'es' ? 'es_ES' : 'en_US',
      url: `${siteUrl}/projects/${slug}`,
      siteName: 'Natan Kutnowski Portfolio',
      title: project.title,
      description: project.description,
      images: [
        {
          url: `${siteUrl}${project.image}`,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
      publishedTime: new Date().toISOString(),
      authors: ['Natan Kutnowski'],
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.description,
      images: [`${siteUrl}${project.image}`],
      creator: '@natankutnowski',
    },
    keywords: [...project.tags, 'portfolio', 'web development', 'project'],
  }
}

export const getSectionMetadata = (
  section: 'about' | 'skills' | 'projects' | 'contact',
  language: Language = 'en'
): SEOMetadata => {
  const titles = {
    about: {
      en: 'About Me',
      es: 'Sobre Mí',
    },
    skills: {
      en: 'Skills & Technologies',
      es: 'Habilidades & Tecnologías',
    },
    projects: {
      en: 'Projects',
      es: 'Proyectos',
    },
    contact: {
      en: 'Contact',
      es: 'Contacto',
    },
  }

  const descriptions = {
    about: {
      en: 'Learn more about Natan Kutnowski, a passionate frontend developer with expertise in React, Next.js and TypeScript.',
      es: 'Conoce más sobre Natan Kutnowski, un desarrollador frontend apasionado con experiencia en React, Next.js y TypeScript.',
    },
    skills: {
      en: 'Explore the technologies and skills I use to build modern web applications.',
      es: 'Explora las tecnologías y habilidades que uso para construir aplicaciones web modernas.',
    },
    projects: {
      en: 'Browse through my portfolio of web development projects and experiments.',
      es: 'Navega por mi portafolio de proyectos y experimentos de desarrollo web.',
    },
    contact: {
      en: 'Get in touch with me for collaborations, projects or just to say hello.',
      es: 'Ponte en contacto conmigo para colaboraciones, proyectos o simplemente para saludar.',
    },
  }

  return {
    title: titles[section][language],
    description: descriptions[section][language],
    canonical: `${siteUrl}/#${section}`,
    openGraph: {
      type: 'website',
      locale: language === 'es' ? 'es_ES' : 'en_US',
      url: `${siteUrl}/#${section}`,
      siteName: 'Natan Kutnowski Portfolio',
      title: titles[section][language],
      description: descriptions[section][language],
      images: [
        {
          url: `${siteUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: 'Natan Kutnowski Portfolio',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: titles[section][language],
      description: descriptions[section][language],
      images: [`${siteUrl}/og-image.png`],
      creator: '@natankutnowski',
    },
  }
}
