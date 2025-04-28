import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white -z-10" />
      
      {/* Decorative circles */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 -z-10" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-purple-100 rounded-full blur-3xl opacity-20 -z-10" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Trasforma il Tuo Business con l'
              <span className="text-blue-600">Intelligenza Artificiale</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              ScaleSuite è la piattaforma all-in-one che aiuta i CEO delle PMI italiane 
              a prendere decisioni strategiche basate sui dati, automatizzare i processi 
              e scalare il business in modo intelligente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition duration-300"
              >
                Richiedi una Demo
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-medium hover:bg-blue-50 transition duration-300"
              >
                Scopri di Più
              </motion.button>
            </div>

            {/* Trust badges */}
            <div className="mt-12">
              <p className="text-sm text-gray-500 mb-4">Utilizzato con fiducia da aziende leader:</p>
              <div className="flex flex-wrap gap-8 items-center opacity-60">
                {/* Placeholder per i loghi dei clienti - da sostituire con loghi reali */}
                <div className="h-8 w-24 bg-gray-200 rounded animate-pulse" />
                <div className="h-8 w-24 bg-gray-200 rounded animate-pulse" />
                <div className="h-8 w-24 bg-gray-200 rounded animate-pulse" />
              </div>
            </div>
          </motion.div>

          {/* Hero image/illustration */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square">
              <Image
                src="/hero-illustration.svg"
                alt="ScaleSuite Dashboard"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Floating features */}
            <motion.div
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 2
              }}
              className="absolute top-1/4 -left-8 bg-white p-4 rounded-lg shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium">+45%</p>
                  <p className="text-xs text-gray-500">Efficienza</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 2,
                delay: 1
              }}
              className="absolute bottom-1/4 -right-8 bg-white p-4 rounded-lg shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium">+30%</p>
                  <p className="text-xs text-gray-500">Crescita</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 