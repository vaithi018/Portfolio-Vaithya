"use client";

import { motion } from "framer-motion";
import { Download, Terminal, Mail, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 pb-12">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col items-center justify-center gap-12 w-full max-w-4xl mx-auto">
          
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-accent/20 p-2 relative overflow-visible"
          >
            <div className="absolute inset-0 rounded-full border-2 border-accent/40 animate-[spin_10s_linear_infinite] border-dashed"></div>
            <div className="w-full h-full rounded-full overflow-hidden relative z-10 border-2 border-accent/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/profile.jpg" 
                alt="VAITHYA" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Subtle glow behind image */}
            <div className="absolute inset-4 rounded-full bg-accent/10 blur-2xl -z-10"></div>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex-1 text-center space-y-6 flex flex-col items-center"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-lg md:text-xl text-accent tracking-widest uppercase font-medium"
            >
              Hello, I am
            </motion.h2>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-5xl md:text-7xl font-bold tracking-tight text-glow"
            >
              VAITHYA
            </motion.h1>

            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-2xl md:text-3xl text-foreground/80 font-light"
            >
              DevOps Engineer
            </motion.h3>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto"
            >
              "Building scalable systems & infrastructure"
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-wrap gap-4 justify-center pt-4"
            >
              <a href="#projects" className="px-6 py-3 rounded-full bg-accent text-black font-medium hover:bg-accent/90 transition-all flex items-center gap-2">
                <Terminal size={18} />
                View Projects
              </a>
              <a href="/resume.pdf" download="Vaithya_S_Resume.pdf" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full border border-accent/50 text-accent hover:bg-accent/10 transition-all flex items-center gap-2">
                <Download size={18} />
                Download Resume
              </a>
              <a href="#contact" className="px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/5 transition-all flex items-center gap-2">
                <Mail size={18} />
                Contact Me
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll down indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/50 hidden md:flex"
        >
          <span className="text-sm tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={24} className="text-accent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
