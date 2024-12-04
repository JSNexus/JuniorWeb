"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Target,
  Eye,
  Heart,
  Star,
  Trophy,
  Globe,
} from "lucide-react";
import React from "react";

export default function Sobre() {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="bg-gradient-to-br from-purple-50 to-white py-16 px-4">
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* História Section */}
          <motion.div
            variants={cardVariants}
            className="bg-white shadow-2xl rounded-2xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-3xl"
          >
            <div className="p-8">
              <div className="flex items-center mb-6">
                <BookOpen className="w-12 h-12 text-purple-600 mr-4" />
                <h2 className="text-4xl font-bold text-purple-600">About Us</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Tete Junior School is a distinguished educational institution
                dedicated to fostering excellence in learning and nurturing the
                holistic development of every student. Our school is proudly
                registered and certified to deliver both international and
                national curricula, combining global standards with local
                relevance. At Tete Junior School, we believe in the power of an
                innovative and personalized approach to education.
              </p>
              <br></br>
              <p>
                {" "}
                Our mission is to empower students to achieve their fullest
                potential by tailoring learning experiences to their unique
                needs, interests, and abilities. We strive to cultivate an
                inspiring and inclusive environment where students develop not
                only academically but also socially, emotionally, and ethically.
              </p>
              <br></br>
              <p>
                {" "}
                Our dedicated team of educators leverages cutting-edge teaching
                methods and state-of-the-art facilities to ensure a
                comprehensive and engaging learning journey. Join us at Tete
                Junior School, where we prepare young minds to become
                tomorrow&apos;s leaders, equipped with the knowledge, skills,
                and values to excel in an ever-changing world. Together, we
                create a community that values curiosity, creativity, and
                lifelong learning.
              </p>
            </div>
          </motion.div>

          {/* Right Side Sections */}
          <div className="space-y-8">
            {/* Missão */}
            <motion.div
              variants={cardVariants}
              className="bg-white shadow-2xl rounded-2xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-3xl"
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <Target className="w-10 h-10 text-purple-600 mr-4" />
                  <h3 className="text-3xl font-semibold text-purple-600">
                    Our Mission
                  </h3>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Our mission is to provide high-quality education that fosters
                  critical thinking, creativity, and social responsibility
                  through a commitment to high academic standards and innovative
                  teaching methods. We aim to develop citizens who are prepared
                  to face the challenges of the modern world and contribute
                  positively to society.
                </p>
              </div>
            </motion.div>

            {/* Visão */}
            <motion.div
              variants={cardVariants}
              className="bg-white shadow-2xl rounded-2xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-3xl"
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <Eye className="w-10 h-10 text-purple-600 mr-4" />
                  <h3 className="text-3xl font-semibold text-purple-600">
                    Our Vision
                  </h3>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To be recognized as the leading educational institution in
                  pedagogical innovation and human development, promoting an
                  inclusive, safe, welcoming, and inspiring educational
                  environment where all students feel valued and have
                  opportunities to reach their full potential without fear of
                  discrimination or violence.
                </p>
              </div>
            </motion.div>

            {/* Valores */}
            <motion.div
              variants={cardVariants}
              className="bg-white shadow-2xl rounded-2xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-3xl"
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <Heart className="w-10 h-10 text-purple-600 mr-4" />
                  <h3 className="text-3xl font-semibold text-purple-600">
                    Main Objectives
                  </h3>
                </div>
                <ul className="space-y-4">
                  {[
                    {
                      icon: Star,
                      text: "To be an international and bilingual curriculum school.",
                    },
                    { icon: Globe, text: "To integrate educational values." },
                    {
                      icon: Trophy,
                      text: "To have highly qualified and experienced staff.",
                    },
                  ].map((value, index) => (
                    <li
                      key={index}
                      className="flex items-center text-gray-700 text-lg"
                    >
                      <value.icon className="w-6 h-6 mr-3 text-purple-500" />
                      {value.text}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
