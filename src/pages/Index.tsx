
import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Beams from '@/components/Beams';

const Index = () => {
  return (
<div className="min-h-screen bg-background text-foreground relative overflow-hidden">

  {/* Foreground Content */}
  <div className="relative z-10">
    <Navigation />
    <Hero />
    <About />
    <Projects />
    <Skills />
    <Contact />

    {/* Footer */}
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold mb-4 md:mb-0 text-primary">
            {'Harsha'}
          </div>
          <div className="text-muted-foreground">
            © 2025 Harsha. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  </div>
</div>

    
  );
};

export default Index;
