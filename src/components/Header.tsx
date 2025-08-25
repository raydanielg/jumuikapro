"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="w-full sticky top-0 z-30">
      {/* Top Bar */}
      <div className="w-full bg-green-700 text-white text-sm">
        <div className="max-w-6xl mx-auto px-4 py-2 flex justify-end gap-6">
          <Link href="/operators" className="hover:underline flex items-center">
            For Tour Operators / Agents
          </Link>
          <Link href="/accommodations" className="hover:underline flex items-center">
            For Accommodations
          </Link>
        </div>
      </div>

      {/* Main Header */}
      <div className="w-full border-b bg-white/80 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="relative group">
            <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
              Jumuika
            </span>
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-green-500 to-green-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/pricing" className="text-gray-700 hover:text-green-600 transition-colors whitespace-nowrap">
              Pricing & Features
            </Link>
            <Link href="/testimonials" className="text-gray-700 hover:text-green-600 transition-colors whitespace-nowrap">
              Testimonials
            </Link>
            <Link 
              href="/signup" 
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap"
            >
              Sign Up Free
            </Link>
            <Link 
              href="/signin" 
              className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap"
            >
              Sign In
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(true)} className="text-gray-700">
              <FiMenu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-gray-900/95 backdrop-blur-sm z-50 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
        <div className="flex flex-col h-full text-white">
          <div className="flex justify-between items-center p-5 border-b border-gray-700">
            <Link href="/" className="relative group" onClick={() => setIsMenuOpen(false)}>
              <span className="text-2xl font-bold text-white">
                Jumuika
              </span>
            </Link>
            <button onClick={() => setIsMenuOpen(false)} className="text-gray-400 hover:text-white">
              <FiX size={28} />
            </button>
          </div>

          <nav className="flex flex-col p-5 gap-1 flex-grow">
            <Link href="/operators" className="text-gray-300 text-sm mb-4" onClick={() => setIsMenuOpen(false)}>
              For Tour Operators / Agents
            </Link>

            <Link href="/pricing" className="text-white py-2 text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
              Pricing & Features
            </Link>
            <Link href="/testimonials" className="text-white py-2 text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
              Testimonials
            </Link>
            <Link href="/about" className="text-white py-2 text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
              About us
            </Link>
            <Link href="/contact" className="text-white py-2 text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>

            <Link 
              href="/signup" 
              className="w-full text-center bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full text-lg font-bold my-6"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign Up Free
            </Link>

            <div className="mt-auto">
              <p className="text-gray-400 text-sm mb-3">Follow Us</p>
              <div className="flex gap-4">
                <Link href="#" className="text-white"><FaFacebook size={22} /></Link>
                <Link href="#" className="text-white"><FaInstagram size={22} /></Link>
                <Link href="#" className="text-white"><FaLinkedin size={22} /></Link>
              </div>
            </div>
          </nav>

          <div className="p-5 border-t border-gray-700 text-gray-500 text-xs">
            <p className="mb-2">&copy; {new Date().getFullYear()} All Rights Reserved - Jumuika</p>
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
              <Link href="/cookies" className="hover:text-white">Cookie Statement</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
