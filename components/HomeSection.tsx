"use client";

import { motion, Variants } from "framer-motion";
import {
  NotebookIcon,
  PencilIcon,
  EraserIcon,
  PenIcon,
  PaletteIcon,
  ScissorsIcon,
  LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

interface SchoolSupply {
  icon: LucideIcon;
  color: string;
}

export default function HomeSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const schoolSupplies: SchoolSupply[] = [
    { icon: NotebookIcon, color: "text-blue-500" },
    { icon: PencilIcon, color: "text-green-500" },
    { icon: EraserIcon, color: "text-gray-600" },
    { icon: PenIcon, color: "text-red-500" },
    { icon: PaletteIcon, color: "text-purple-500" },
    { icon: ScissorsIcon, color: "text-orange-500" },
  ];

  const fallingVariants: Variants = {
    hidden: {
      y: -100,
      opacity: 0,
      rotate: Math.random() * 360,
    },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      rotate: 0,
      transition: {
        delay: custom * 0.2,
        type: "spring",
        stiffness: 70,
        damping: 10,
      },
    }),
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 to-pink-50 p-6"
    >
      {/* Playful background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{
            scale: [0.5, 1.2, 1, 0.8, 1],
            opacity: [0, 1, 0.7, 0.5, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="absolute top-10 left-10 w-32 h-32 bg-yellow-300 rounded-full blur-xl"
        />
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{
            scale: [0.5, 1.2, 1, 0.8, 1],
            opacity: [0, 1, 0.7, 0.5, 0],
            rotate: [0, -360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "loop",
            delay: 2,
          }}
          className="absolute bottom-10 right-10 w-40 h-40 bg-green-300 rounded-full blur-xl"
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8 flex justify-center space-x-4 items-center"
        >
          <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
            Tete Júnior School
          </h1>
        </motion.div>

        {isMounted && (
          <motion.div
            initial="hidden"
            animate="visible"
            className="flex justify-center space-x-6 mb-8 h-20"
          >
            {schoolSupplies.map((supply, index) => {
              const IconComponent = supply.icon;
              return (
                <motion.div
                  key={index}
                  custom={index}
                  variants={fallingVariants}
                  className="will-change-transform"
                >
                  <IconComponent
                    className={`${supply.color} w-10 h-10 hover:scale-125 transition-transform`}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        )}

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-2xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          Together Achieving Excellence
        </motion.p>

        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <Link href="/about">
            <button
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white 
                px-8 py-4 rounded-full text-xl font-bold hover:from-purple-700 hover:to-blue-700 
                transition-all duration-300 ease-in-out transform hover:scale-105 
                flex items-center justify-center mx-auto space-x-3 shadow-lg hover:shadow-xl"
            >
              <NotebookIcon className="w-8 h-8 mr-2" />
              Meet Our School
            </button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
