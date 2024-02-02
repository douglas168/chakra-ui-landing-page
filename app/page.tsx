"use client";
import HeroSection from "@/components/HeroSection";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <div>
      <HeroSection></HeroSection>
      <Features></Features>
      <Testimonials />
      <Pricing />
    </div>
  );
}
