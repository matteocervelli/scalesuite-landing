'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'next-i18next'
import { Shield, Lock, Key, UserCheck, Database, FileCheck } from 'lucide-react'

const PrivacySection: React.FC = () => {
  const { t } = useTranslation('privacy')

  const features = [
    {
      icon: Shield,
      title: t('features.encryption.title'),
      description: t('features.encryption.description')
    },
    {
      icon: Lock,
      title: t('features.access.title'),
      description: t('features.access.description')
    },
    {
      icon: Key,
      title: t('features.authentication.title'),
      description: t('features.authentication.description')
    },
    {
      icon: UserCheck,
      title: t('features.compliance.title'),
      description: t('features.compliance.description')
    },
    {
      icon: Database,
      title: t('features.storage.title'),
      description: t('features.storage.description')
    },
    {
      icon: FileCheck,
      title: t('features.audit.title'),
      description: t('features.audit.description')
    }
  ]

  return (
    <section className="py-24 bg-white">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-blue-50 p-8 rounded-xl"
            >
              <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-3xl font-bold mb-4">{t('certifications.title')}</h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {t('certifications.description')}
          </p>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            <img
              src="/images/certifications/iso27001.png"
              alt="ISO 27001"
              className="h-16 object-contain"
            />
            <img
              src="/images/certifications/gdpr.png"
              alt="GDPR Compliant"
              className="h-16 object-contain"
            />
            <img
              src="/images/certifications/soc2.png"
              alt="SOC 2"
              className="h-16 object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PrivacySection 