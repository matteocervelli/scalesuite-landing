import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

const serviceIcons = {
  auth: '/icons/auth.svg',
  financial: '/icons/financial.svg',
  strategic: '/icons/strategic.svg',
  dashboard: '/icons/dashboard.svg',
  okr: '/icons/okr.svg',
  decision: '/icons/decision.svg',
  meeting: '/icons/meeting.svg',
  ai: '/icons/ai.svg',
};

const ServiceCard = ({ name, delay }: { name: string; delay: number }) => {
  const { t } = useTranslation('common');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-900/5 transition-all duration-300 hover:shadow-xl"
    >
      <div className="relative z-10">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/10 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
          <Image
            src={serviceIcons[name as keyof typeof serviceIcons]}
            alt={t(`services.${name}.title`)}
            width={24}
            height={24}
            className="transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <h3 className="text-xl font-semibold text-gray-900">
          {t(`services.${name}.title`)}
        </h3>
        <p className="mt-4 text-gray-600">
          {t(`services.${name}.description`)}
        </p>
      </div>
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-50 opacity-0 transition-all duration-300 group-hover:opacity-100" />
    </motion.div>
  );
};

export default function Services() {
  const { t } = useTranslation('common');
  const services = ['auth', 'financial', 'strategic', 'dashboard', 'okr', 'decision', 'meeting', 'ai'];

  return (
    <section id="servizi" className="relative overflow-hidden bg-gray-50 py-24 sm:py-32">
      {/* Background decorativo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-4 top-20 h-72 w-72 rounded-full bg-blue-400 opacity-5 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-purple-400 opacity-5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            {t('services.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600"
          >
            {t('services.description')}
          </motion.p>
        </div>

        <div className="mx-auto mt-16 grid max-w-lg gap-8 sm:mt-20 sm:max-w-none lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={service}
              name={service}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 