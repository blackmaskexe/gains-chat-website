"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const screenshots = [
  {
    id: 1,
    src: "/images/homeMockup.png",
    alt: "Home Screen",
    title: "Intuitive Home Interface",
    description:
      "Navigate easily with our clean, user-friendly home screen that puts workout logging at your fingertips.",
  },
  {
    id: 2,
    src: "/images/graphMockup.png",
    alt: "Progress Graph",
    title: "Visual Progress Tracking",
    description: "Watch your progress grow with detailed graphs that visualize your improvement over time.",
  },
  {
    id: 3,
    src: "/images/goalsMockup.png",
    alt: "Goals Screen",
    title: "Set & Track Goals",
    description: "Set ambitious goals for each exercise and track how close you are to achieving them.",
  },
  {
    id: 4,
    src: "/images/logandhistoryMockup.png",
    alt: "Chat and History",
    title: "AI Chat & Workout History",
    description: "Chat with your AI workout assistant and view your detailed workout history in one place.",
  },
]

export default function ScreenshotsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.3 })

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % screenshots.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + screenshots.length) % screenshots.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  }

  return (
    <section id="screenshots" className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4" ref={containerRef}>
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={variants}
          custom={0}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">App Screenshots</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take a peek at the powerful features and clean design of the Gains Chat app
          </p>
        </motion.div>

        <div className="relative">
          {/* Main Screenshot Display */}
          <div className="flex justify-center items-center">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row items-center gap-8 md:gap-16"
            >
              <div className="w-full md:w-1/2 relative">
                <div className="relative h-[500px] md:h-[600px] flex items-center justify-center">
                  <div className="absolute w-full h-full bg-[#007AFF]/10 rounded-full filter blur-[80px] opacity-70"></div>
                  <Image
                    src={screenshots[currentIndex].src || "/placeholder.svg"}
                    alt={screenshots[currentIndex].alt}
                    width={400}
                    height={800}
                    className="relative z-10 object-contain"
                  />
                </div>
              </div>

              <div className="w-full md:w-1/2 text-left">
                <motion.h3
                  className="text-2xl md:text-3xl font-bold mb-4 text-[#007AFF]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  {screenshots[currentIndex].title}
                </motion.h3>
                <motion.p
                  className="text-lg text-gray-600 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  {screenshots[currentIndex].description}
                </motion.p>

                <motion.div
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <button
                    onClick={() => window.open("https://apps.apple.com", "_blank")}
                    className="bg-[#007AFF] hover:bg-[#0062CC] text-white px-6 py-3 rounded-xl transition-colors flex items-center"
                  >
                    Download Now
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-lg z-20 hover:bg-white transition-colors"
            aria-label="Previous screenshot"
          >
            <ChevronLeft className="text-[#007AFF]" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-lg z-20 hover:bg-white transition-colors"
            aria-label="Next screenshot"
          >
            <ChevronRight className="text-[#007AFF]" />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-8 space-x-2">
          {screenshots.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? "bg-[#007AFF]" : "bg-gray-300"
              }`}
              aria-label={`Go to screenshot ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
