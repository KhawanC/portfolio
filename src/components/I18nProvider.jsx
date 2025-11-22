'use client'

import { useEffect, useState } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18n from '../i18n/config'

export default function I18nProvider({ children }) {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const initI18n = async () => {
      try {
        if (typeof window !== 'undefined') {
          if (i18n.isInitialized) {
            setIsReady(true)
          } else {
            await i18n.init()
            setIsReady(true)
          }
        }
      } catch (error) {
        console.error('Error initializing i18n:', error)
        setIsReady(true)
      }
    }

    initI18n()
  }, [])

  if (!isReady) {
    return (
      <div className="min-h-screen bg-dark-primary flex items-center justify-center">
        <div className="text-white text-lg">Carregando...</div>
      </div>
    )
  }

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}


