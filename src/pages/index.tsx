import React from 'react';
import { type NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Header from '../components/Header';
import Hero from '../components/Hero.jsx';
import ProblemSolution from '../components/ProblemSolution';
import Services from '../components/Services';
import Footer from '../components/Footer';
import PrivacySection from '../components/PrivacySection';
import ContactCTA from '../components/ContactCTA';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';

const Home: NextPage = () => {
  const { t } = useTranslation('common');
  
  return (
    <>
      <Head>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph */}
        <meta property="og:title" content={t('meta.title')} />
        <meta property="og:description" content={t('meta.description')} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.png" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('meta.title')} />
        <meta name="twitter:description" content={t('meta.description')} />
        <meta name="twitter:image" content="/og-image.png" />
      </Head>

      <Header />

      <main className="overflow-hidden">
        <Hero />
        <ProblemSolution />
        <Services />
        <PrivacySection />
        <ContactCTA />
      </main>

      <Footer />
    </>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'privacy', 'contact', 'problem-solution'])),
    },
  };
};

export default Home; 