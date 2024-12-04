"use client";

import Contato from "../../components/Contato";
import Footer from "../../components/Footer";
//import Galeria from "../../components/Galeria";
import HomeSection from "../../components/HomeSection";
import Navbar from "../../components/Navbar";
//import Sobre from "../../components/Sobre";
import { SubjectCard } from "../../components/Subject-card";
import {
  Code2,
  Frame,
  Music,
  Laptop,
  Eye,
  Brain,
  Scissors,
  Camera,
} from "lucide-react";

export default function Home() {
  // Definindo as informações dos subjects
  const subjects = [
    { title: "Development", icon: Code2, href: "/development" },
    { title: "Design", icon: Frame, href: "/design" },
    { title: "Music", icon: Music, href: "/music" },
    { title: "Computer science", icon: Laptop, href: "/computer-science" },
    { title: "Animation", icon: Eye, href: "/animation" },
    { title: "Machine learning", icon: Brain, href: "/machine-learning" },
    { title: "Art and drawing", icon: Scissors, href: "/art-and-drawing" },
    { title: "Photography", icon: Camera, href: "/photography" },
  ];

  return (
    <div>
      <Navbar />
      <main>
        <HomeSection />

        {/* Título e descrição acima dos cartões */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4">Explore Our Subjects</h2>
          <p className="text-muted-foreground">
            Choose a subject to dive deep into various topics and start your
            learning journey.
          </p>
        </div>

        {/* Exibindo os SubjectCards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {subjects.map((subject) => (
            <SubjectCard
              key={subject.title}
              title={subject.title}
              icon={subject.icon}
              href={subject.href}
            />
          ))}
        </div>
        {/*<Sobre />*/}
        {/* <Galeria />*/}
        <Contato />
      </main>
      <Footer />
    </div>
  );
}
