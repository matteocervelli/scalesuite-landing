import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

export default function Hero() {
  const { t } = useTranslation('common');

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-20 sm:py-32">
      {/* Cerchi decorativi */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -left-4 top-20 h-72 w-72 rounded-full bg-blue-400 opacity-10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute right-0 top-0 h-72 w-72 rounded-full bg-purple-400 opacity-10 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.1, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div className="relative z-10 mx-auto max-w-2xl lg:mx-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-display text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                {t('hero.title')}
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                {t('hero.description')}
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <motion.a
                  href="#demo"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-xl bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  {t('hero.cta.demo')}
                </motion.a>
                <motion.a
                  href="#learn-more"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-base font-semibold leading-7 text-gray-900 hover:text-gray-700"
                >
                  {t('hero.cta.learnMore')} <span aria-hidden="true">→</span>
                </motion.a>
              </div>
              
              {/* Trust badges */}
              <div className="mt-16">
                <p className="text-sm font-semibold text-gray-900">{t('hero.trustedBy')}</p>
                <motion.div 
                  className="mt-8 flex items-center gap-x-8 opacity-75"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.75 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  {/* Placeholder per i loghi dei clienti */}
                  <div className="h-8 w-32 bg-gray-200 rounded animate-pulse" />
                  <div className="h-8 w-32 bg-gray-200 rounded animate-pulse" />
                  <div className="h-8 w-32 bg-gray-200 rounded animate-pulse" />
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Illustrazione */}
          <div className="relative mx-auto w-full max-w-xl lg:mx-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <Image
                src="/hero-illustration.svg"
                alt="Dashboard illustration"
                width={800}
                height={800}
                className="w-full"
                priority
              />

              {/* Feature cards fluttuanti */}
              <motion.div
                className="absolute -left-8 top-1/3 rounded-2xl bg-white p-4 shadow-lg ring-1 ring-gray-900/10"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <p className="text-sm font-semibold text-gray-900">
                  +45% {t('hero.stats.efficiency')}
                </p>
              </motion.div>

              <motion.div
                className="absolute -right-8 top-1/2 rounded-2xl bg-white p-4 shadow-lg ring-1 ring-gray-900/10"
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <p className="text-sm font-semibold text-gray-900">
                  +67% {t('hero.stats.growth')}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 