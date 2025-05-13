"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Dumbbell,
  LineChart,
  MessageSquare,
  Shield,
  Sparkles,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import CursorGlow from "@/components/cursor-glow";
import FeatureCard from "@/components/feature-card";
import ComparisonTable from "@/components/comparison-table";
import Navbar from "@/components/navbar";
import ScreenshotsSection from "@/components/screenshots-section";
import AppStoreButtons from "@/components/app-store-buttons";
import FloatingCTA from "@/components/floating-cta";
import Image from "next/image";

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);

  const featureVariants = {
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
    <main className="flex min-h-screen flex-col items-center">
      <Navbar />
      <FloatingCTA />

      {/* Hero Section with Parallax */}
      <div
        ref={targetRef}
        className="w-full relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-16"
      >
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#007AFF] to-blue-600" />
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#007AFF]/5 rounded-t-[100px]" />
        </motion.div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center md:text-left md:w-1/2"
            >
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6">
                Gains Chat
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-white/90">
                Your AI Workout Assistant at Your Fingertips
              </p>

              <p className="text-white/80 text-base md:text-lg mb-8">
                Track your workouts effortlessly with the help of your own AI
                Workout Assistant! Simply chat with your AI and let it log your
                progress.
              </p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <AppStoreButtons />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="md:w-1/2 relative"
            >
              <div className="relative h-[400px] md:h-[500px] flex items-center justify-center">
                <div className="absolute w-full h-full bg-white/20 rounded-full filter blur-[80px]"></div>
                <Image
                  src="/images/logandhistoryMockup.png"
                  alt="Gains Chat App Home Screen"
                  width={350}
                  height={700}
                  className="relative z-10 object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section id="features" className="w-full py-20 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Key Features
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Everything you need to track and improve your fitness journey
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <motion.div
              custom={0}
              variants={featureVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <FeatureCard
                icon={<MessageSquare className="text-[#007AFF]" size={24} />}
                title="Chat-Like Interface"
                description="Log workouts through an intuitive chat interface with your AI assistant"
              />
            </motion.div>

            <motion.div
              custom={1}
              variants={featureVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <FeatureCard
                icon={<Sparkles className="text-[#007AFF]" size={24} />}
                title="AI Workout Buddy"
                description="Get personalized advice and answers to all your fitness questions"
              />
            </motion.div>

            <motion.div
              custom={2}
              variants={featureVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <FeatureCard
                icon={<LineChart className="text-[#007AFF]" size={24} />}
                title="Progress Tracking"
                description="Visualize your progress with detailed graphs and analytics"
              />
            </motion.div>

            <motion.div
              custom={3}
              variants={featureVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <FeatureCard
                icon={<Shield className="text-[#007AFF]" size={24} />}
                title="Secure Cloud Storage"
                description="Your data stays safe in the cloud with encrypted passwords"
              />
            </motion.div>

            <motion.div
              custom={4}
              variants={featureVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <FeatureCard
                icon={<Dumbbell className="text-[#007AFF]" size={24} />}
                title="Goal Setting"
                description="Set and track goals for specific lifts and exercises"
              />
            </motion.div>

            <motion.div
              custom={5}
              variants={featureVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <FeatureCard
                icon={<Sparkles className="text-[#007AFF]" size={24} />}
                title="AI-Powered Tips"
                description="Get suggestions to overcome plateaus and improve performance"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-12 text-center"
          >
            <Button
              size="lg"
              className="bg-[#007AFF] hover:bg-[#0062CC] rounded-full px-8 py-6 text-lg"
              onClick={() =>
                window.open(
                  "https://apps.apple.com/us/app/gains-chat/id6744004900",
                  "_blank"
                )
              }
            >
              Download Now <Download className="ml-2" size={18} />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Screenshots Section */}
      <ScreenshotsSection />

      {/* Interactive Cursor Glow Section */}
      {/* <CursorGlow /> */}

      {/* Comparison Section */}
      <section id="comparison" className="w-full py-20 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Why Choose Gains Chat?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              See how Gains Chat compares to traditional workout trackers
            </motion.p>
          </div>

          <ComparisonTable />
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 bg-[#007AFF]/5">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6"
            >
              Ready to Transform Your Workout Experience?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8"
            >
              Join thousands of fitness enthusiasts who have revolutionized
              their workout tracking with Gains Chat.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex justify-center"
            >
              <AppStoreButtons />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="w-full py-12 bg-gray-900 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start">
                <Image
                  src="/images/logo.png"
                  alt="Gains Chat Logo"
                  width={40}
                  height={40}
                  className="mr-2"
                />
                <span className="text-xl font-bold">Gains Chat</span>
              </div>
              <p className="text-gray-400 mt-2">
                © 2025 Gains Chat. All rights reserved.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <a
                href="#"
                className="text-gray-400 hover:text-[#007AFF] transition-colors"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#007AFF] transition-colors"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#007AFF] transition-colors"
              >
                Contact
              </a>
              <Button
                variant="outline"
                className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
                onClick={() => window.open("https://apps.apple.com", "_blank")}
              >
                <Download size={16} className="mr-2" />
                Download App
              </Button>
            </div>
          </div>
        </div>
      </footer> */}
    </main>
  );
}
