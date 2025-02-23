'use client';
import { MapPin, Home, Info, Star, Leaf } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation'; // Import to check current path

export function Navbar() {
  const pathname = usePathname(); // Get current route

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 transition-all duration-300 hover:bg-white/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center cursor-pointer group">
              <Image src='/ehconomy-nb.png' alt="Logo" width={200} height={50} />
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            {pathname === '/' ? (
              <>
                {/* Use react-scroll on home page */}
                <ScrollLink
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-64}
                  duration={500}
                  className="flex items-center space-x-1 text-gray-800 hover:text-red-600 transition-colors duration-200 cursor-pointer"
                >
                  <Home className="h-5 w-5" />
                  <span>Home</span>
                </ScrollLink>
                <ScrollLink
                  to="mission"
                  spy={true}
                  smooth={true}
                  offset={-64}
                  duration={500}
                  className="flex items-center space-x-1 text-gray-800 hover:text-red-600 transition-colors duration-200 cursor-pointer"
                >
                  <Info className="h-5 w-5" />
                  <span>Our Mission</span>
                </ScrollLink>
                <ScrollLink
                  to="map"
                  spy={true}
                  smooth={true}
                  offset={-64}
                  duration={500}
                  className="flex items-center space-x-1 text-gray-800 hover:text-red-600 transition-colors duration-200 cursor-pointer"
                >
                  <MapPin className="h-5 w-5" />
                  <span>Map</span>
                </ScrollLink>
                <ScrollLink
                  to="credits"
                  spy={true}
                  smooth={true}
                  offset={-64}
                  duration={500}
                  className="flex items-center space-x-1 text-gray-800 hover:text-red-600 transition-colors duration-200 cursor-pointer"
                >
                  <Star className="h-5 w-5" />
                  <span>Credits</span>
                </ScrollLink>
              </>
            ) : (
              <>
                {/* Use Next.js Link on other pages to go back */}
                <Link
                  href="/"
                  className="flex items-center space-x-1 text-gray-800 hover:text-red-600 transition-colors duration-200 cursor-pointer"
                >
                  <Home className="h-5 w-5" />
                  <span>Home</span>
                </Link>
                <Link
                  href="/#mission"
                  className="flex items-center space-x-1 text-gray-800 hover:text-red-600 transition-colors duration-200 cursor-pointer"
                >
                  <Info className="h-5 w-5" />
                  <span>Our Mission</span>
                </Link>
                <Link
                  href="/#map"
                  className="flex items-center space-x-1 text-gray-800 hover:text-red-600 transition-colors duration-200 cursor-pointer"
                >
                  <MapPin className="h-5 w-5" />
                  <span>Map</span>
                </Link>
                <Link
                  href="/#credits"
                  className="flex items-center space-x-1 text-gray-800 hover:text-red-600 transition-colors duration-200 cursor-pointer"
                >
                  <Star className="h-5 w-5" />
                  <span>Credits</span>
                </Link>
              </>
            )}

            {/* Farms Link - Always Navigates to /list */}
            <Link
              href="/list"
              className="flex items-center space-x-1 text-gray-800 hover:text-green-600 transition-colors duration-200 cursor-pointer"
            >
              <Leaf className="h-5 w-5" />
              <span>Farms</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
