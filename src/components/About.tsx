"use client";

import { motion, Variants } from "framer-motion";
import { Server, Code, BarChart } from "lucide-react";

export default function About() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 inline-block relative">
            About Me
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-accent glow-effect rounded-full"></div>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto mt-6 text-lg">
            I bridge the gap between robust infrastructure, high-performing web experiences, and digital visibility. With expertise spanning DevOps, Frontend development, and Digital Marketing, I build systems that scale and brands that grow.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Card 1: DevOps */}
          <motion.div 
            variants={item} 
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="bg-[#111111] border border-white/5 p-8 rounded-2xl transition-all hover:border-accent/30 hover:shadow-[0_10px_30px_-10px_rgba(0,216,255,0.2)]"
          >
            <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center text-accent mb-6 border border-white/10">
              <Server size={32} />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-glow">DevOps</h3>
            <p className="text-foreground/70 mb-6">
              Designing, deploying, and maintaining scalable infrastructure using modern cloud practices.
            </p>
            <div className="flex flex-wrap gap-2">
              {['AWS', 'Docker', 'Jenkins', 'Git', 'Linux'].map(skill => (
                <span key={skill} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm hover:bg-white/10 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 2: Frontend */}
          <motion.div 
            variants={item} 
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="bg-foreground/[0.02] border border-foreground/5 p-8 rounded-2xl transition-all hover:border-accent/30 hover:shadow-[0_10px_30px_-10px_rgba(0,216,255,0.2)]"
          >
            <div className="w-14 h-14 bg-foreground/[0.03] rounded-xl flex items-center justify-center text-accent mb-6 border border-foreground/10">
              <Code size={32} />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-glow">Frontend</h3>
            <p className="text-foreground/70 mb-6">
              Building responsive, accessible, and fast web applications with a focus on modern UI/UX.
            </p>
            <div className="flex flex-wrap gap-2">
              {['HTML', 'CSS', 'JavaScript', 'React', 'Next.js'].map(skill => (
                <span key={skill} className="px-3 py-1 bg-foreground/[0.03] border border-foreground/10 rounded-full text-sm hover:bg-white/10 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 3: Digital Marketing */}
          <motion.div 
            variants={item} 
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="bg-foreground/[0.02] border border-foreground/5 p-8 rounded-2xl transition-all hover:border-accent/30 hover:shadow-[0_10px_30px_-10px_rgba(0,216,255,0.2)]"
          >
            <div className="w-14 h-14 bg-foreground/[0.03] rounded-xl flex items-center justify-center text-accent mb-6 border border-foreground/10">
              <BarChart size={32} />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-glow">Digital Marketing</h3>
            <p className="text-foreground/70 mb-6">
              Driving traffic and engagement through targeted optimization and social media strategies.
            </p>
            <div className="flex flex-wrap gap-2">
              {['SEO', 'Social Media Marketing', 'Google Analytics', 'Content Strategy'].map(skill => (
                <span key={skill} className="px-3 py-1 bg-foreground/[0.03] border border-foreground/10 rounded-full text-sm hover:bg-white/10 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
