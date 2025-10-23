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

export const runtime = "edge"

export default function Home() {
  return (
    <main className="min-h-[100dvh]">
      <CustomCursor />
      <HexagonalOverlay />
      <ScanlineEffect />
      <HudNavigation />

      <div id="hero" className="scroll-mt-24">
        <Hero />
      </div>
      <div id="services" className="scroll-mt-24">
        <Services />
      </div>
      <div id="engineering" className="scroll-mt-24">
        <EngineeringExcellence />
      </div>
      <div id="advantage" className="scroll-mt-24">
        <OurAdvantage />
      </div>
      <div id="results" className="scroll-mt-24">
        <ProvenResults />
      </div>
      <div id="competition" className="scroll-mt-24">
        <CompetitionComparison />
      </div>
      <div id="under-hood" className="scroll-mt-24">
        <UnderTheHood />
      </div>
      <div id="architecture" className="scroll-mt-24">
        <ArchitectureDiagram />
      </div>
      <div id="self-maintaining" className="scroll-mt-24">
        <SelfMaintainingSystems />
      </div>
      <div id="future" className="scroll-mt-24">
        <TheFuture />
      </div>
      <div id="tech-stack" className="scroll-mt-24">
        <TechStack />
      </div>
      <Footer />
    </main>
  )
}
