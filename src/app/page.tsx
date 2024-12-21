"use client";

import EducationSection from "./components/EducationSection";
import Footer from "./components/Footer";
import HomeSection from "./components/HomeSection";

export default function Home() {
  return (
    <div>
      <main>
        <HomeSection />
        <EducationSection />
      </main>
      <Footer />
    </div>
  );
}
