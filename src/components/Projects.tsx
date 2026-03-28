"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";

const projects = [
  {
    title: "Shop Verse",
    description: "Built a production-ready e-commerce platform featuring integrated Razorpay payment gateway, Supabase database, and secure user authentication.",
    techStack: ["Next.js", "Supabase", "Razorpay", "Tailwind CSS"],
    github: "#",
    live: "https://shop-verse-ruby.vercel.app"
  },
  {
    title: "Responsive Weather App",
    description: "Developed a dynamic weather application with real-time 5-day forecasting, local storage persistence, and beautiful changing UI backgrounds.",
    techStack: ["Next.js", "Tailwind CSS", "REST APIs", "React Hooks"],
    github: "#",
    live: "https://sky-cast-psi-coral.vercel.app"
  },
  {
    title: "Student Management System",
    description: "Created a comprehensive dashboard for tracking student records, managing classes, and analyzing attendance data efficiently.",
    techStack: ["Next.js", "TypeScript", "Database", "UI/UX"],
    github: "#",
    live: "https://student-management-system-eight-brown.vercel.app"
  },
  {
    title: "Go World",
    description: "An immersive travel-themed front-end experience featuring high-definition video backgrounds, sleek glassmorphism components, and a premium responsive design.",
    techStack: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    github: "https://github.com/vaithi018/Go-World",
    live: "https://go-world-beige.vercel.app"
  }

];

export default function Projects() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 inline-block relative">
            Featured Projects
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-accent glow-effect rounded-full"></div>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto mt-6 text-lg">
            A showcase of my recent work bridging infrastructure and digital performance.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              variants={item} 
              className="group relative bg-[#111111] border border-white/5 p-8 rounded-2xl hover:border-accent/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-semibold group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    {project.github && project.github !== "#" && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-accent transition-colors" title="View Source">
                        <Code2 size={20} />
                      </a>
                    )}
                    {project.live && project.live !== "#" && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-accent transition-colors" title="Live Preview">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
                
                <p className="text-foreground/80 mb-6 min-h-[80px]">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.techStack.map(tech => (
                    <span key={tech} className="text-xs font-mono text-accent bg-accent/10 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
