'use client'

import React from 'react'
import { motion, Variants } from 'framer-motion'
import { useTranslation } from 'next-i18next'
import { TrendingUp, Target, Brain, Shield } from 'lucide-react'

const ProblemSolution: React.FC = () => {
  const { t } = useTranslation('problem-solution')

  const fadeInUp: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const challenges = [
    {
      icon: TrendingUp,
      title: t('challenges.growth.title'),
      description: t('challenges.growth.description')
    },
    {
      icon: Target,
      title: t('challenges.decisions.title'),
      description: t('challenges.decisions.description')
    },
    {
      icon: Brain,
      title: t('challenges.ai.title'),
      description: t('challenges.ai.description')
    },
    {
      icon: Shield,
      title: t('challenges.privacy.title'),
      description: t('challenges.privacy.description')
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl font-bold mb-4">{t('title')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              className="bg-blue-50 p-8 rounded-xl"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: { 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: index * 0.2, duration: 0.6 }
                }
              }}
            >
              <challenge.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-3">{challenge.title}</h3>
              <p className="text-gray-600">{challenge.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h3 className="text-3xl font-bold mb-4">{t('solution.title')}</h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {t('solution.description')}
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            {t('solution.cta')}
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default ProblemSolution 