"use client"

import { motion } from "framer-motion"
import { Check, X } from "lucide-react"

export default function ComparisonTable() {
  const features = [
    { name: "Chat-based workout logging", gainsChat: true, traditional: false },
    { name: "AI workout assistant", gainsChat: true, traditional: false },
    { name: "Cloud data storage", gainsChat: true, traditional: "Some" },
    { name: "Progress visualization", gainsChat: true, traditional: true },
    { name: "Goal setting", gainsChat: true, traditional: true },
    { name: "AI-powered tips", gainsChat: true, traditional: false },
    { name: "No manual exercise selection", gainsChat: true, traditional: false },
    { name: "Plateau identification", gainsChat: true, traditional: "Limited" },
  ]

  return (
    <div className="overflow-x-auto -mx-4 sm:mx-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="min-w-full rounded-3xl overflow-hidden shadow-lg"
      >
        <div className="min-w-full divide-y divide-gray-200">
          {/* Table Header */}
          <div className="bg-gray-50 grid grid-cols-3">
            <div className="px-4 sm:px-6 py-4 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
              Feature
            </div>
            <div className="px-2 sm:px-6 py-4 text-center text-xs sm:text-sm font-medium text-[#007AFF] uppercase tracking-wider">
              Gains Chat
            </div>
            <div className="px-2 sm:px-6 py-4 text-center text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
              Traditional
            </div>
          </div>

          {/* Table Body */}
          <div className="bg-white divide-y divide-gray-200">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ backgroundColor: "#f9fafb" }}
                className="grid grid-cols-3 hover:bg-gray-50"
              >
                <div className="px-4 sm:px-6 py-4 text-xs sm:text-sm font-medium text-gray-900">{feature.name}</div>
                <div className="px-2 sm:px-6 py-4 flex justify-center items-center">
                  {feature.gainsChat === true ? (
                    <span className="inline-flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-green-100">
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                    </span>
                  ) : (
                    <span className="text-xs sm:text-sm text-gray-500">{feature.gainsChat}</span>
                  )}
                </div>
                <div className="px-2 sm:px-6 py-4 flex justify-center items-center">
                  {feature.traditional === true ? (
                    <span className="inline-flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-green-100">
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                    </span>
                  ) : feature.traditional === false ? (
                    <span className="inline-flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-red-100">
                      <X className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
                    </span>
                  ) : (
                    <span className="text-xs sm:text-sm text-gray-500">{feature.traditional}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
