"use client"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-background">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance">
            Hi, I'm <span className="text-primary">Yogiswara</span>
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-border hover:bg-accent hover:text-accent-foreground bg-transparent"
              asChild
            >
              <a href="/CV_Yogiswara.pdf" download="CV_Yogiswara.pdf">
                Download CV
              </a>
            </Button>
          </div>
          <div 
            className="animate-bounce cursor-pointer"
            onClick={() => scrollToSection('about')}
          >
            <ArrowDown className="w-6 h-6 text-muted-foreground mx-auto" />
          </div>
        </div>
      </div>
    </section>
  )
}