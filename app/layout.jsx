import { Inter } from 'next/font/google'
import './globals.css'
import I18nProvider from '../src/components/I18nProvider'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'Kauã Cassiano - Desenvolvedor Web Fullstack',
    template: '%s | Kauã Cassiano'
  },
  description: 'Desenvolvedor Web Fullstack com experiência em criação de landing pages, sistemas robustos, automações para WhatsApp, bots para Discord e muito mais.',
  keywords: ['desenvolvedor', 'fullstack', 'web', 'react', 'next.js', 'java', 'spring boot', 'discord bots', 'portfólio', 'desenvolvedor web', 'programador', 'freelancer'],
  authors: [{ name: 'Kauã Cassiano', url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000' }],
  creator: 'Kauã Cassiano',
  publisher: 'Kauã Cassiano',
  category: 'Portfolio',
  classification: 'Portfolio Website',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    alternateLocale: ['en_US'],
    url: '/',
    title: 'Kauã Cassiano - Desenvolvedor Web Fullstack',
    description: 'Desenvolvedor Web Fullstack com experiência em criação de landing pages, sistemas robustos, automações para WhatsApp, bots para Discord e muito mais.',
    siteName: 'Kauã Cassiano Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Kauã Cassiano - Desenvolvedor Web Fullstack',
        type: 'image/png',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kauã Cassiano - Desenvolvedor Web Fullstack',
    description: 'Desenvolvedor Web Fullstack com experiência em criação de landing pages, sistemas robustos, automações para WhatsApp, bots para Discord e muito mais.',
    images: ['/og-image.png'],
    creator: '@kauacassiano',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
    languages: {
      'pt-BR': '/?lang=pt',
      'en-US': '/?lang=en',
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || 'google-site-verification-code',
  },
  other: {
    'contact:email': 'equipe@khawantech.online',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className="font-sans antialiased">
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  )
}
