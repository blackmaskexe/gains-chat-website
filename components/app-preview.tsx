"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { MessageSquare, User } from "lucide-react"

export default function AppPreview() {
  const [activeMessage, setActiveMessage] = useState(0)

  const conversation = [
    {
      role: "user",
      content: "I did 3 sets of bench press today. 135lbs for 10 reps, 155lbs for 8 reps, and 175lbs for 6 reps.",
    },
    {
      role: "assistant",
      content:
        "Great job! I've logged your bench press workout. That's a total volume of 3,350 lbs. Your bench press is up 5% from your last session.",
    },
    { role: "user", content: "What's my current bench press PR?" },
    {
      role: "assistant",
      content:
        "Your current bench press PR is 185 lbs for 4 reps, which you achieved on March 15th. You're getting close to your goal of 225 lbs!",
    },
  ]

  // Auto-advance through messages
  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveMessage((prev) => (prev + 1) % conversation.length)
    }, 5000)

    return () => clearTimeout(timer)
  }, [activeMessage, conversation.length])

  return (
    <div className="max-w-md mx-auto relative py-16">
      {/* Phone frame - now positioned first in the DOM for better layering */}
      <div className="absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[280px] h-[570px] bg-black rounded-[40px] border-[14px] border-black"></div>

      {/* App UI - positioned on top of the phone frame */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="relative z-10 mx-auto w-[252px] rounded-3xl overflow-hidden border border-gray-200"
      >
        {/* App header */}
        <div className="bg-[#007AFF] text-white p-4 flex items-center justify-between">
          <h3 className="font-bold">Gains Chat</h3>
          <div className="flex space-x-2">
            <div className="w-2 h-2 rounded-full bg-white/50"></div>
            <div className="w-2 h-2 rounded-full bg-white/50"></div>
            <div className="w-2 h-2 rounded-full bg-white"></div>
          </div>
        </div>

        {/* Chat area */}
        <div className="h-[400px] p-4 bg-gray-50 overflow-y-auto flex flex-col space-y-4">
          {conversation.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: index <= activeMessage ? 1 : 0,
                y: index <= activeMessage ? 0 : 10,
              }}
              transition={{ duration: 0.3, delay: index * 0.2 }}
              className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-2xl ${
                  message.role === "user"
                    ? "bg-[#007AFF] text-white rounded-tr-none"
                    : "bg-gray-200 text-gray-800 rounded-tl-none"
                }`}
              >
                <div className="flex items-center mb-1">
                  {message.role === "assistant" ? (
                    <MessageSquare size={14} className="mr-1" />
                  ) : (
                    <User size={14} className="mr-1" />
                  )}
                  <span className="text-xs font-semibold">{message.role === "user" ? "You" : "Gains Assistant"}</span>
                </div>
                <p className="text-sm">{message.content}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Input area */}
        <div className="p-4 border-t border-gray-200 bg-white">
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
            <input
              type="text"
              placeholder="Message your AI workout buddy..."
              className="bg-transparent flex-1 outline-none text-sm"
            />
            <button className="ml-2 text-[#007AFF]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 2L11 13"></path>
                <path d="M22 2L15 22L11 13L2 9L22 2Z"></path>
              </svg>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
