"use client";

import { HeroSection } from "@/components/home/HeroSection";
import { CoursesSection } from "@/components/home/CoursesSection";
import { TandemSection } from "@/components/home/TandemSection";
import { AboutSection } from "@/components/home/AboutSection";
import { CTASection } from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CoursesSection />
      <TandemSection />
      <AboutSection />
      <CTASection />
    </>
  );
}
