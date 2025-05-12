"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Download, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Image src="/images/logo.png" alt="Gains Chat Logo" width={40} height={40} className="mr-2" />
            <span className={`font-bold text-xl ${isScrolled ? "text-[#007AFF]" : "text-white"}`}>Gains Chat</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className={`font-medium transition-colors hover:text-[#007AFF] ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
            >
              Features
            </a>
            <a
              href="#screenshots"
              className={`font-medium transition-colors hover:text-[#007AFF] ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
            >
              Screenshots
            </a>
            <a
              href="#comparison"
              className={`font-medium transition-colors hover:text-[#007AFF] ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
            >
              Why Choose Us
            </a>
            <Button
              className="bg-[#007AFF] hover:bg-[#0062CC] rounded-full px-6 py-2 flex items-center"
              onClick={() => window.open("https://apps.apple.com", "_blank")}
            >
              <Download size={16} className="mr-2" />
              Download App
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-full bg-[#007AFF]/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? "text-gray-800" : "text-white"} />
            ) : (
              <Menu className={isScrolled ? "text-gray-800" : "text-white"} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <a
                href="#features"
                className="font-medium text-gray-800 py-2 px-4 rounded hover:bg-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#screenshots"
                className="font-medium text-gray-800 py-2 px-4 rounded hover:bg-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Screenshots
              </a>
              <a
                href="#comparison"
                className="font-medium text-gray-800 py-2 px-4 rounded hover:bg-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Why Choose Us
              </a>
              <Button
                className="bg-[#007AFF] hover:bg-[#0062CC] rounded-full px-6 py-2 flex items-center justify-center"
                onClick={() => window.open("https://apps.apple.com", "_blank")}
              >
                <Download size={16} className="mr-2" />
                Download on App Store
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
