"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

export default function CursorGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()

      // Check if mouse is within the section
      if (e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom) {
        setIsHovering(true)
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      } else {
        setIsHovering(false)
      }
    }

    // Add touch support for mobile
    const handleTouchMove = (e: TouchEvent) => {
      if (!sectionRef.current || !e.touches[0]) return

      const rect = sectionRef.current.getBoundingClientRect()
      const touch = e.touches[0]

      if (
        touch.clientX >= rect.left &&
        touch.clientX <= rect.right &&
        touch.clientY >= rect.top &&
        touch.clientY <= rect.bottom
      ) {
        setIsHovering(true)
        setMousePosition({
          x: touch.clientX - rect.left,
          y: touch.clientY - rect.top,
        })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("touchmove", handleTouchMove as any)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("touchmove", handleTouchMove as any)
    }
  }, [])

  return (
    <section ref={sectionRef} className="w-full py-16 sm:py-24 md:py-32 relative overflow-hidden bg-gray-900">
      {/* Glow effect */}
      {isHovering && (
        <motion.div
          className="absolute pointer-events-none"
          animate={{
            x: mousePosition.x - 150,
            y: mousePosition.y - 150,
          }}
          transition={{ type: "spring", damping: 15 }}
          style={{
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,122,255,0.4) 0%, rgba(0,122,255,0) 70%)",
            filter: "blur(20px)",
          }}
        />
      )}

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6 text-white">
            Experience the Future of Workout Tracking
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8">
            Move your cursor around to see the magic happen. Just like how Gains Chat responds to your needs.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {[
              { number: "10K+", label: "Active Users" },
              { number: "1M+", label: "Workouts Logged" },
              { number: "4.9", label: "App Store Rating" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-800/50 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-gray-700"
              >
                <h3 className="text-2xl sm:text-3xl font-bold text-[#007AFF] mb-1 sm:mb-2">{stat.number}</h3>
                <p className="text-sm sm:text-base text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
