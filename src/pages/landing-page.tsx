
import { HeroSection } from "@/components/landing-page/hero";
import ProtectCommunitiesSection from "@/components/landing-page/pest-watch";
import PestIntelligenceSection from "@/components/landing-page/TheoryPrecision";


export default function LandingPage() {
  return (
    <main className="flex flex-col items-center ">
      <HeroSection />
      <PestIntelligenceSection />
      <ProtectCommunitiesSection />
    </main>
  )
}
