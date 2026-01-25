"use client";

import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";
import { TechnologyGrid } from "@/components/TechnologyGrid";
import { PortfolioSection } from "@/components/PortfolioSection";
import { LeadershipSection } from "@/components/LeadershipSection";
import { RoadmapSection } from "@/components/RoadmapSection";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#051025] text-white">
      <Navbar />
      <HeroSection />

      <AboutSection />
      <TechnologyGrid />
      <PortfolioSection />
      <LeadershipSection />
      <RoadmapSection />

      <Footer />
    </main>
  )
}
