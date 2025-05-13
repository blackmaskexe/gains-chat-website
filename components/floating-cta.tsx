"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, X } from "lucide-react";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDismissed) {
        setIsVisible(true);
      }
    }, 5000);

    const scrollHandler = () => {
      if (window.scrollY > 1000 && !isDismissed) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="fixed bottom-4 right-4 z-50"
        >
          <div className="bg-white rounded-2xl shadow-xl p-4 max-w-xs">
            <button
              onClick={handleDismiss}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              aria-label="Close"
            >
              <X size={16} />
            </button>

            <div className="flex items-start mb-3">
              <div className="bg-[#007AFF]/10 rounded-full p-2 mr-3">
                <Download size={20} className="text-[#007AFF]" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Get Gains Chat Now</h3>
                <p className="text-sm text-gray-600">
                  Track your workouts with AI assistance
                </p>
              </div>
            </div>

            <button
              onClick={() =>
                window.open(
                  "https://apps.apple.com/us/app/gains-chat/id6744004900",
                  "_blank"
                )
              }
              className="w-full bg-[#007AFF] hover:bg-[#0062CC] text-white py-2 rounded-lg font-medium transition-colors"
            >
              Download on App Store
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
