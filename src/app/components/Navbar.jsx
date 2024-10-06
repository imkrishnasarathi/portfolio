"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Close the menu when the route changes
    setIsMenuOpen(false);
  }, [pathname]);

  const NavLink = ({ href, children }) => {
    const isActive = pathname === href;
    return (
      <Link 
        href={href} 
        className={`block py-2 pl-3 pr-4 rounded md:p-0 ${
          isActive 
            ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700 dark:text-white md:dark:text-blue-500' 
            : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
        }`}
      >
        {children}
      </Link>
    );
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white bg-opacity-20 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            <Image src="/pic.png" alt="Logo" width={50} height={50} className="rounded-full" />
          </span>
        </Link>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Toggle menu</span>
          <div className={`w-6 h-6 relative ${isMenuOpen ? 'burger-open' : ''}`}>
            <span className="block absolute h-0.5 w-6 bg-current transform transition duration-500 ease-in-out" style={{top: isMenuOpen ? '50%' : '25%', transform: isMenuOpen ? 'rotate(45deg)' : 'rotate(0deg)'}}></span>
            <span className="block absolute h-0.5 w-6 bg-current transform transition duration-500 ease-in-out" style={{top: '50%', opacity: isMenuOpen ? 0 : 1}}></span>
            <span className="block absolute h-0.5 w-6 bg-current transform transition duration-500 ease-in-out" style={{top: isMenuOpen ? '50%' : '75%', transform: isMenuOpen ? 'rotate(-45deg)' : 'rotate(0deg)'}}></span>
          </div>
        </button>
        <div 
          className={`w-full md:block md:w-auto overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 md:max-h-96 md:opacity-100'
          }`} 
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:border-gray-700 bg-gray-700">
            <li>
              <NavLink href="/">Home</NavLink>
            </li>
            <li>
              <NavLink href="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink href="/articles">Articles</NavLink>
            </li>
            <li>
              <NavLink href="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
