"use client";

import Contato from "../../components/Contato";
import Footer from "../../components/Footer";
import HomeSection from "../../components/HomeSection";
import Navbar from "../../components/Navbar";
import SchoolCounters from "../../components/SchoolCounters";
import { SubjectCard } from "../../components/Subject-card";
import {
  Palette,
  Music2,
  BookOpen,
  Rocket,
  Coffee,
  PenTool,
  Laptop,
  Globe,
} from "lucide-react";

export default function Home() {
  // Definindo as informações dos subjects com novos ícones e cores
  const subjects = [
    {
      title: "Art & Drawing",
      icon: Palette,
      color: "#FF6B6B", // Soft Red
    },
    {
      title: "Music",
      icon: Music2,
      color: "#4ECDC4", // Teal
    },
    {
      title: "Reading",
      icon: BookOpen,
      color: "#45B7D1", // Sky Blue
    },
    {
      title: "Science",
      icon: Rocket,
      color: "#FDCB6E", // Warm Yellow
    },
    {
      title: "Creative Writing",
      icon: PenTool,
      color: "#A8E6CF", // Mint Green
    },
    {
      title: "Technology",
      icon: Laptop,
      color: "#FF8ED4", // Soft Pink
    },
    {
      title: "World Explorers",
      icon: Globe,
      color: "#5f27cd", // Deep Purple
    },
    {
      title: "Creativity",
      icon: Coffee,
      color: "#6C5CE7", // Purple
    },
  ];

  return (
    <div>
      <Navbar />
      <main>
        <HomeSection />

        {/* Título e descrição acima dos cartões */}
        <section className="py-16 px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Key Areas of Learning at Tete Junior School
            </h2>
            {/*<p className="text-gray-600 max-w-2xl mx-auto">
              Discover a world of fun and learning with our engaging educational
              activities!
            </p>*/}
          </div>

          {/* Exibindo os SubjectCards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {subjects.map((subject) => (
              <SubjectCard
                key={subject.title}
                title={subject.title}
                icon={subject.icon}
                color={subject.color}
              />
            ))}
          </div>
        </section>

        <SchoolCounters />
        <Contato />
      </main>
      <Footer />
    </div>
  );
}
