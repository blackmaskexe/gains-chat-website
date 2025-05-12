"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.98 }}>
      <Card className="overflow-hidden border-none shadow-lg rounded-2xl h-full">
        <CardContent className="p-4 sm:p-6">
          <div className="p-2 sm:p-3 bg-[#007AFF]/10 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mb-3 sm:mb-4">
            {icon}
          </div>
          <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">{title}</h3>
          <p className="text-sm sm:text-base text-gray-600">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
