'use client'

import { useEffect } from 'react'
import Header from '../src/components/Header/Header'
import Hero from '../src/components/Hero/Hero'
import Skills from '../src/components/Skills/Skills'
import Projects from '../src/components/Projects/Projects'
import ContactCTA from '../src/components/ContactCTA/ContactCTA'
import Footer from '../src/components/Footer/Footer'

export default function Home() {
  useEffect(() => {
    // Structured Data (JSON-LD) para SEO
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Kauã Cassiano',
      jobTitle: 'Desenvolvedor Web Fullstack',
      description: 'Desenvolvedor Web Fullstack com experiência em criação de landing pages, sistemas robustos, automações para WhatsApp, bots para Discord e muito mais.',
      url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
      email: 'equipe@khawantech.online',
      sameAs: [
        // Adicione suas redes sociais aqui
        // 'https://github.com/seu-usuario',
        // 'https://linkedin.com/in/seu-perfil',
      ],
      knowsAbout: [
        'Desenvolvimento Web',
        'React',
        'Next.js',
        'Java',
        'Spring Boot',
        'JavaScript',
        'TypeScript',
        'HTML',
        'CSS',
        'Tailwind CSS',
        'Node.js',
        'Python',
        'Discord Bots',
        'Automações',
        'Fullstack Development'
      ],
      alumniOf: {
        '@type': 'Organization',
        name: 'Desenvolvedor Autodidata'
      }
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(structuredData)
    document.head.appendChild(script)

    return () => {
      // Cleanup
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}
