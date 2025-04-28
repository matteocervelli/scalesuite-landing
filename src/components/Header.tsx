import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

interface NavigationItem {
  name: string;
  href: string;
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const router = useRouter();
  
  const navigation: NavigationItem[] = [
    { name: 'Home', href: '/' },
    { name: 'Servizi', href: '#servizi' },
    { name: 'Sicurezza', href: '#sicurezza' },
    { name: 'Contatti', href: '#contatti' },
  ];

  return (
    <header className="fixed w-full bg-white bg-opacity-95 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.svg"
                alt="ScaleSuite Logo"
                width={40}
                height={40}
                className="mr-2"
              />
              <span className="text-xl font-bold text-blue-600">ScaleSuite</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-blue-600 transition duration-300"
              >
                {item.name}
              </Link>
            ))}
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
              Richiedi Demo
            </button>
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => router.push(router.pathname, router.pathname, { locale: 'it' })}
                className={`text-sm ${router.locale === 'it' ? 'text-blue-600 font-bold' : 'text-gray-600'}`}
              >
                IT
              </button>
              <span className="text-gray-300">|</span>
              <button 
                onClick={() => router.push(router.pathname, router.pathname, { locale: 'en' })}
                className={`text-sm ${router.locale === 'en' ? 'text-blue-600 font-bold' : 'text-gray-600'}`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-600 hover:text-blue-600"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-gray-600 hover:text-blue-600 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
              Richiedi Demo
            </button>
            <div className="flex items-center space-x-2 pt-4 border-t">
              <button 
                onClick={() => {
                  router.push(router.pathname, router.pathname, { locale: 'it' });
                  setIsMenuOpen(false);
                }}
                className={`text-sm ${router.locale === 'it' ? 'text-blue-600 font-bold' : 'text-gray-600'}`}
              >
                IT
              </button>
              <span className="text-gray-300">|</span>
              <button 
                onClick={() => {
                  router.push(router.pathname, router.pathname, { locale: 'en' });
                  setIsMenuOpen(false);
                }}
                className={`text-sm ${router.locale === 'en' ? 'text-blue-600 font-bold' : 'text-gray-600'}`}
              >
                EN
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header; 