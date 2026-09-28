import { useState, useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { ScreenshotModal } from './components/ScreenshotModal'
import { HeroSection } from './sections/HeroSection'
import { ProjectSnapshotSection } from './sections/ProjectSnapshotSection'
import { ProblemSection } from './sections/ProblemSection'
import { SolutionSection } from './sections/SolutionSection'
import { WorkflowSection } from './sections/WorkflowSection'
import { AgentControllerSection } from './sections/AgentControllerSection'
import { SingleImageSection } from './sections/SingleImageSection'
import { ChangeAnalysisSection } from './sections/ChangeAnalysisSection'
import { OpticalSarFusionSection } from './sections/OpticalSarFusionSection'
import { ValidationSection } from './sections/ValidationSection'
import { EvidenceSection } from './sections/EvidenceSection'
import { ConfidenceSection } from './sections/ConfidenceSection'
import { ExecutionTraceSection } from './sections/ExecutionTraceSection'
import { InteractiveDemoSection } from './sections/InteractiveDemoSection'
import { ScreenshotsGallerySection } from './sections/ScreenshotsGallerySection'
import { ArchitectureSection } from './sections/ArchitectureSection'
import { TechStackSection } from './sections/TechStackSection'
import { ResearchAdaptationSection } from './sections/ResearchAdaptationSection'
import { EngineeringDecisionsSection } from './sections/EngineeringDecisionsSection'
import { UseCasesSection } from './sections/UseCasesSection'
import { FeasibilitySection } from './sections/FeasibilitySection'
import { RoadmapSection } from './sections/RoadmapSection'
import { FinalCtaSection } from './sections/FinalCtaSection'
import { SCREENSHOTS } from './data/screenshots'
import { ScreenshotItem } from './types'
import { ChevronUp } from 'lucide-react'

export function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('satquery-theme')
    if (saved === 'dark' || saved === 'light') return saved
    return 'dark'
  })

  const [activeModalScreenshot, setActiveModalScreenshot] = useState<ScreenshotItem | null>(null)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('satquery-theme', theme)
  }, [theme])

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Pre-selected screenshots for section showcases
  const heroScreenshot = SCREENSHOTS.find((s) => s.id === 'dashboard') || SCREENSHOTS[0]
  const singleImageScreenshot = SCREENSHOTS.find((s) => s.id === 'analysis-output') || SCREENSHOTS[2]
  const changeScreenshot = SCREENSHOTS.find((s) => s.id === 'analysis-setup') || SCREENSHOTS[1]
  const opticalSarScreenshot = SCREENSHOTS.find((s) => s.id === 'optical-sar-output') || SCREENSHOTS[3]

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Sticky Global Navigation */}
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection
          heroScreenshot={heroScreenshot}
          onOpenScreenshot={setActiveModalScreenshot}
        />

        {/* 2. Project Snapshot Section */}
        <ProjectSnapshotSection />

        {/* 3. The Problem Section */}
        <ProblemSection />

        {/* 4. The Solution Section */}
        <SolutionSection />

        {/* 5. 11-Step Lifecycle Workflow */}
        <WorkflowSection />

        {/* 6. The Agentic Controller & Model Registry */}
        <AgentControllerSection />

        {/* 7. Single Image Intelligence */}
        <SingleImageSection
          screenshot={singleImageScreenshot}
          onOpenScreenshot={setActiveModalScreenshot}
        />

        {/* 8. Bi-Temporal Change Analysis */}
        <ChangeAnalysisSection
          screenshot={changeScreenshot}
          onOpenScreenshot={setActiveModalScreenshot}
        />

        {/* 9. Optical + SAR Cross-Modal Fusion */}
        <OpticalSarFusionSection
          screenshot={opticalSarScreenshot}
          onOpenScreenshot={setActiveModalScreenshot}
        />

        {/* 10. Input & Metadata Validation Gate */}
        <ValidationSection />

        {/* 11. Answers with Verifiable Spatial Evidence */}
        <EvidenceSection />

        {/* 12. Multi-Factor Confidence Engine */}
        <ConfidenceSection />

        {/* 13. Observable Execution Trace */}
        <ExecutionTraceSection />

        {/* 14. Interactive End-to-End Walkthrough */}
        <InteractiveDemoSection />

        {/* 15. Real Application Screenshots Gallery */}
        <ScreenshotsGallerySection
          onOpenScreenshot={setActiveModalScreenshot}
        />

        {/* 16. Tiered System Architecture */}
        <ArchitectureSection />

        {/* 17. Technology Stack Matrix */}
        <TechStackSection />

        {/* 18. Research & Model Adaptation */}
        <ResearchAdaptationSection />

        {/* 19. Architectural & Engineering Decisions */}
        <EngineeringDecisionsSection />

        {/* 20. Real-World Impact Domains */}
        <UseCasesSection />

        {/* 21. Feasibility & Viability Matrix */}
        <FeasibilitySection />

        {/* 22. Phased Development Roadmap */}
        <RoadmapSection />

        {/* 23. Final Call to Action */}
        <FinalCtaSection />
      </main>

      {/* Global Technical Footer */}
      <Footer />

      {/* Fullscreen Screenshot Modal Lightbox */}
      <ScreenshotModal
        screenshot={activeModalScreenshot}
        screenshots={SCREENSHOTS}
        onClose={() => setActiveModalScreenshot(null)}
        onSelect={setActiveModalScreenshot}
      />

      {/* Floating Scroll To Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-30 p-3 rounded-full bg-card/90 border border-border shadow-xl hover:border-cyan-500 text-foreground transition-all hover:scale-110 active:scale-95 backdrop-blur-md"
          aria-label="Scroll to top"
          title="Back to top"
        >
          <ChevronUp className="w-5 h-5 text-cyan-500" />
        </button>
      )}
    </div>
  )
}
