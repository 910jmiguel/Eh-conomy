'use client';

import { MapPin, Home, Info, Star } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/30 backdrop-blur-sm z-50 transition-all duration-300 hover:bg-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <ScrollLink
              to="home"
              spy={true}
              smooth={true}
              offset={-64}
              duration={500}
              className="flex items-center cursor-pointer group"
            >
              <MapPin className="h-8 w-8 text-red-600 transition-transform group-hover:scale-110" />
              <span className="ml-2 text-xl font-bold text-gray-900">Eh-conomy</span>
            </ScrollLink>
          </div>
          <div className="flex items-center space-x-8">
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
          </div>
        </div>
      </div>
    </nav>
  );
}