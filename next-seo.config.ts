import type { DefaultSeoProps } from 'next-seo'

const SEO: DefaultSeoProps = {
  titleTemplate: '%s | Portfolio',
  defaultTitle: 'Portfolio',
  description: 'Personal portfolio built with Next.js 14',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://portfolio-front-iota-dun.vercel.app',
    siteName: 'Portfolio',
  },
  twitter: {
    cardType: 'summary_large_image',
  },
}

export default SEO
