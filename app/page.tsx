import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { EngineeringExcellence } from "@/components/engineering-excellence"
import { OurAdvantage } from "@/components/our-advantage"
import { ProvenResults } from "@/components/proven-results"
import { CompetitionComparison } from "@/components/competition-comparison"
import { UnderTheHood } from "@/components/under-the-hood"
import { ArchitectureDiagram } from "@/components/architecture-diagram"
import { SelfMaintainingSystems } from "@/components/self-maintaining-systems"
import { TheFuture } from "@/components/the-future"
import { TechStack } from "@/components/tech-stack"
import { Footer } from "@/components/footer"
import { HudNavigation } from "@/components/hud-navigation"
import { CustomCursor } from "@/components/custom-cursor"
import { HexagonalOverlay } from "@/components/hexagonal-overlay"
import { ScanlineEffect } from "@/components/scanline-effect"

export default function Home() {
  return (
    <main className="min-h-screen">
      <CustomCursor />
      <HexagonalOverlay />
      <ScanlineEffect />
      <HudNavigation />

      <div id="hero">
        <Hero />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="engineering">
        <EngineeringExcellence />
      </div>
      <div id="advantage">
        <OurAdvantage />
      </div>
      <div id="results">
        <ProvenResults />
      </div>
      <div id="competition">
        <CompetitionComparison />
      </div>
      <div id="under-hood">
        <UnderTheHood />
      </div>
      <div id="architecture">
        <ArchitectureDiagram />
      </div>
      <div id="self-maintaining">
        <SelfMaintainingSystems />
      </div>
      <div id="future">
        <TheFuture />
      </div>
      <div id="tech-stack">
        <TechStack />
      </div>
      <Footer />
    </main>
  )
}
