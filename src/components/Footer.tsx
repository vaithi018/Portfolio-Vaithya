"use client";

import { Code2, Briefcase } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 glassmorphism rounded-none">
      <div className="container mx-auto px-6 lg:px-12 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex flex-col items-center md:items-start">
          <span className="text-xl font-bold tracking-wider text-accent glow-effect mb-2">VAITHYA S</span>
          <p className="text-foreground/50 text-sm">
            © {new Date().getFullYear()} Vaithya S. All rights reserved.
          </p>
        </div>

        <div className="flex gap-6">
          <a href="#" className="text-foreground/60 hover:text-accent transition-colors">
            <Code2 size={20} />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/vaithya" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-accent transition-colors">
            <Briefcase size={20} />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
