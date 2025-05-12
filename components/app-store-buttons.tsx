"use client"

import { motion } from "framer-motion"
import { Apple } from "lucide-react"

export default function AppStoreButtons() {
  return (
    <div className="flex justify-center mt-6">
      <motion.a
        href="https://apps.apple.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-900 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Apple size={28} className="mr-3" />
        <div className="flex flex-col">
          <span className="text-xs">Download on the</span>
          <span className="text-xl font-semibold">App Store</span>
        </div>
      </motion.a>
    </div>
  )
}
