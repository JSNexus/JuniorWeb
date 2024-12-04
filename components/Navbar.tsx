"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const menuLinks = [
    { href: "/", label: "Home" },
    { href: "about", label: "About" },
    { href: "galeria", label: "Gallery" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-lg"
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer"
        >
          <Link href="/">
            <Image
              src="/logo.svg" // Altere para o caminho correto do logo
              alt="Logo"
              width={40} // Specify width
              height={40}
              className="h-10 w-auto"
            />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-6">
          {menuLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-lg font-medium text-gray-700 hover:text-purple-600 transition-colors duration-300 ease-in-out"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger Menu Button */}
        <div className="lg:hidden pr-4">
          <button
            onClick={toggleMenu}
            className="relative w-8 h-8 flex items-center justify-center focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {/* Linha superior */}
            <span
              className={`absolute h-0.5 w-full bg-gray-800 transform transition-transform duration-300 ease-in-out ${
                menuOpen ? "rotate-45 top-3" : "top-2"
              }`}
            />
            {/* Linha do meio */}
            <span
              className={`absolute h-0.5 w-full bg-gray-800 transform transition-opacity duration-300 ease-in-out ${
                menuOpen ? "opacity-0" : "opacity-100 top-4"
              }`}
            />
            {/* Linha inferior */}
            <span
              className={`absolute h-0.5 w-full bg-gray-800 transform transition-transform duration-300 ease-in-out ${
                menuOpen ? "-rotate-45 top-3" : "top-6"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 bg-white z-40"
          >
            <div className="container mx-auto px-4 pt-24">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ staggerChildren: 0.1 }}
                className="space-y-6"
              >
                {menuLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100,
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={toggleMenu}
                      className="block text-2xl font-medium text-gray-800 hover:text-purple-600 py-3 border-b border-gray-200 transition-colors duration-300 ease-in-out"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
