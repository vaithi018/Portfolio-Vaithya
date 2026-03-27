"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const certificates = [
  {
    id: 1,
    title: "CodeSoft",
    image: "/CodeSoft Certificate.jpg"
  },
  {
    id: 2,
    title: "NPTEL CC",
    image: "/Nptel CC Certificate.jpg"
  },
  {
    id: 3,
    title: "NPTEL IIOT 4.0",
    image: "/Nptel IIOT 4.0.jpg"
  },
  {
    id: 4,
    title: "NPTEL IOT",
    image: "/Nptel IOT Certificate.jpg"
  }
];

export default function Certificates() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="certificates" className="py-24 relative bg-glassmorphism overflow-hidden">
      {/* Decorative gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent/5 blur-[120px] -z-10"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 inline-block relative">
            Certificates
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-accent glow-effect rounded-full"></div>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto mt-6 text-lg">
            Continuous learning is the key to scaling environments safely and growing digital presence exponentially.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="relative group cursor-pointer aspect-[4/3] rounded-xl overflow-hidden glassmorphism border-transparent hover:border-accent/40"
              onClick={() => setSelectedImage(cert.image)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={cert.image} 
                alt={cert.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-medium px-4 py-2 border border-white/20 rounded backdrop-blur-md">
                  Click to View
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white text-sm font-medium tracking-wide">
                  {cert.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-12 backdrop-blur-xl"
          >
            <button 
              className="absolute top-6 right-6 lg:top-10 lg:right-10 text-white/50 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={36} />
            </button>
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full max-h-screen object-contain drop-shadow-[0_0_30px_rgba(14,165,233,0.3)] glow-effect rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={selectedImage} 
                alt="Enlarged Certificate" 
                className="w-full h-full object-contain rounded-2xl" 
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
