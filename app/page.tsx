import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { EngineeringExcellence } from "@/components/engineering-excellence"
import { OurAdvantage } from "@/components/our-advantage"
import { ProvenResults } from "@/components/proven-results"
import { CompetitionComparison } from "@/components/competition-comparison"
import { UnderTheHood } from "@/components/under-the-hood"
import { ArchitectureDiagram } from "@/components/architecture-diagram"
import { SelfMaintainingSystems } from "@/components/self-maintaining-systems" // Added self-maintaining systems import
import { TheFuture } from "@/components/the-future"
import { TechStack } from "@/components/tech-stack"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <EngineeringExcellence />
      <OurAdvantage />
      <ProvenResults />
      <CompetitionComparison />
      <UnderTheHood />
      <ArchitectureDiagram />
      <SelfMaintainingSystems /> {/* Added self-maintaining systems section after architecture */}
      <TheFuture />
      <TechStack />
      <Footer />
    </main>
  )
}
