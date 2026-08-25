import { SiteNav } from "@/components/site-nav"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { WorkSection } from "@/components/work-section"
import { ContactSection } from "@/components/contact-section"
import { SiteFooter } from "@/components/site-footer"
import { SmoothScroll } from "@/components/smooth-scroll"

export default function Page() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <SmoothScroll />
      <div className="grain" aria-hidden="true" />
      <SiteNav />
      <main>
        <HeroSection />
        <AboutSection />
        <WorkSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}
