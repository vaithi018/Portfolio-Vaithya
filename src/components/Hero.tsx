"use client";

import { motion, Variants } from "framer-motion";
import { Download, Terminal, Mail, ChevronDown } from "lucide-react";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -30, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      x: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, x: 30, scale: 0.8, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      x: 0, 
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div 
          className="flex flex-col-reverse lg:flex-row items-center justify-center gap-12 lg:gap-24 w-full max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <h2 className="text-lg md:text-xl text-accent tracking-[0.3em] uppercase font-medium">
                Hello, I am
              </h2>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-glow leading-tight">
                VAITHYA
              </h1>
              <h3 className="text-2xl md:text-4xl text-foreground/80 font-light tracking-wide">
                DevOps Engineer
              </h3>
            </motion.div>

            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-foreground/60 max-w-xl mx-auto lg:mx-0 leading-relaxed italic"
            >
              "Building scalable systems & high-performance infrastructure with a focus on reliability and growth."
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4 justify-center lg:justify-start pt-6"
            >
              <a href="#projects" className="px-8 py-4 rounded-full bg-accent text-black font-semibold hover:scale-105 transition-all flex items-center gap-2 text-glow">
                <Terminal size={20} />
                View Projects
              </a>
              <motion.a 
                href="#contact" 
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px var(--accent-glow)" }}
                animate={{ boxShadow: ["0 0 0px var(--accent-glow)", "0 0 15px var(--accent-glow)", "0 0 0px var(--accent-glow)"] }}
                transition={{ boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" } }}
                className="px-8 py-4 rounded-full border border-white/20 text-white font-medium hover:bg-white/5 transition-all flex items-center gap-2 "
              >
                <Mail size={20} />
                Contact Me
              </motion.a>
            </motion.div>
          </div>

          {/* Profile Image Section */}
          <motion.div
            variants={imageVariants}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="w-56 h-56 md:w-80 md:h-80 rounded-full border-4 border-accent/20 p-3 relative"
              >
                <div className="absolute inset-0 rounded-full border-2 border-accent/30 animate-[spin_15s_linear_infinite] border-dashed"></div>
                <div className="w-full h-full rounded-full overflow-hidden relative z-10 border-2 border-accent/10 shadow-2xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src="/profile.jpg" 
                    alt="VAITHYA" 
                    className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                {/* Subtle outer glow pulse */}
                <motion.div 
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="absolute inset-0 rounded-full bg-accent/20 blur-3xl -z-10"
                ></motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll down indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/40 hidden md:flex"
        >
          <span className="text-xs tracking-[0.4em] uppercase">Explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={24} className="text-accent/60" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
