"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

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
    description:
      "Watch your progress grow with detailed graphs that visualize your improvement over time.",
  },
  {
    id: 3,
    src: "/images/goalsMockup.png",
    alt: "Goals Screen",
    title: "Set & Track Goals",
    description:
      "Set ambitious goals for each exercise and track how close you are to achieving them.",
  },
  {
    id: 4,
    src: "/images/logandhistoryMockup.png",
    alt: "Chat and History",
    title: "AI Chat & Workout History",
    description:
      "Chat with your AI workout assistant and view your detailed workout history in one place.",
  },
];

export default function ScreenshotsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + screenshots.length) % screenshots.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

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
  };

  return (
    <section
      id="screenshots"
      className="py-24 overflow-hidden mx-auto px-4 md:px-10"
    >
      {/* Increased padding and max-width for larger content */}
      <div ref={containerRef}>
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={variants}
          custom={0}
          className="text-center mb-16"
        >
          {/* Increased margin for more spacing */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {/* Larger heading */}
            App Screenshots
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {/* Larger text and wider container */}
            Take a peek at the powerful features and clean design of the Gains
            Chat app
          </p>
        </motion.div>
        <div className="relative px-6 md:px-20">
          {/* Increased padding for more spacing around content */}
          <div className="flex justify-center items-center">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row items-center gap-6 md:gap-10 lg:gap-12 w-full max-w-7xl mx-auto"
            >
              {/* Increased gap and max-width for larger content */}
              <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                <div className="relative w-full h-[300px] sm:h-[380px] md:h-[420px] lg:h-[500px] max-w-[220px] sm:max-w-[260px] md:max-w-[320px] lg:max-w-[360px]">
                  {/* Increased sizes for larger screenshots */}
                  <div className="absolute inset-0 bg-[#007AFF]/10 rounded-full filter blur-[60px] opacity-50"></div>
                  <Image
                    src={screenshots[currentIndex].src || "/placeholder.svg"}
                    alt={screenshots[currentIndex].alt}
                    fill
                    sizes="(max-width: 639px) 220px, (max-width: 767px) 260px, (max-width: 1023px) 320px, 360px"
                    className="relative z-10 object-contain"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 md:min-w-0 text-center md:text-left">
                {/* Increased width for larger text */}
                <motion.h3
                  className="text-2xl md:text-3xl font-bold mb-4 text-[#007AFF]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  {/* Larger heading */}
                  {screenshots[currentIndex].title}
                </motion.h3>
                <motion.p
                  className="text-lg md:text-xl text-gray-600 mb-8 overflow-wrap: break-word;"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  {/* Larger text and increased margin */}
                  {screenshots[currentIndex].description}
                </motion.p>
                <motion.div
                  className="flex items-center justify-center md:justify-start gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <button
                    onClick={() =>
                      window.open(
                        "https://apps.apple.com/us/app/gains-chat/id6744004900",
                        "_blank"
                      )
                    }
                    className="bg-[#007AFF] hover:bg-[#0062CC] text-white px-6 py-3 rounded-xl transition-colors flex items-center text-lg"
                  >
                    {/* Larger button and text */}
                    Download Now
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </div>
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/80 p-4 rounded-full shadow-lg z-20 hover:bg-white transition-colors"
            aria-label="Previous screenshot"
          >
            {/* Larger button */}
            <ChevronLeft className="text-[#007AFF] w-6 h-6" />
            {/* Larger icon */}
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/80 p-4 rounded-full shadow-lg z-20 hover:bg-white transition-colors"
            aria-label="Next screenshot"
          >
            {/* Larger button */}
            <ChevronRight className="text-[#007AFF] w-6 h-6" />
            {/* Larger icon */}
          </button>
        </div>
        <div className="flex justify-center mt-16 space-x-3">
          {/* Increased margin and spacing */}
          {screenshots.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-4 h-4 rounded-full transition-colors ${
                index === currentIndex
                  ? "bg-[#007AFF]"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to screenshot ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
