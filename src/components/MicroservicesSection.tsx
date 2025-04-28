'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'

const MicroservicesSection: React.FC = () => {
  const { t } = useTranslation('microservices')

  const services = [
    {
      id: 'auth',
      title: t('services.auth.title'),
      description: t('services.auth.description'),
      imagePath: '/images/mockups/auth-service.png'
    },
    {
      id: 'financial',
      title: t('services.financial.title'), 
      description: t('services.financial.description'),
      imagePath: '/images/mockups/financial-analyzer.png'
    },
    {
      id: 'strategic',
      title: t('services.strategic.title'),
      description: t('services.strategic.description'),
      imagePath: '/images/mockups/strategic-map.png'
    },
    {
      id: 'dashboard',
      title: t('services.dashboard.title'),
      description: t('services.dashboard.description'),
      imagePath: '/images/mockups/dashboard-builder.png'
    },
    {
      id: 'okr',
      title: t('services.okr.title'),
      description: t('services.okr.description'),
      imagePath: '/images/mockups/okr-tracker.png'
    },
    {
      id: 'decision',
      title: t('services.decision.title'),
      description: t('services.decision.description'),
      imagePath: '/images/mockups/decision-matrix.png'
    },
    {
      id: 'meeting',
      title: t('services.meeting.title'),
      description: t('services.meeting.description'),
      imagePath: '/images/mockups/meeting-assistant.png'
    },
    {
      id: 'ai',
      title: t('services.ai.title'),
      description: t('services.ai.description'),
      imagePath: '/images/mockups/ai-service.png'
    }
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">{t('title')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={service.imagePath}
                  alt={service.title}
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MicroservicesSection 