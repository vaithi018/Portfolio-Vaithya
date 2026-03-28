"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Mail, Loader2, Phone, Briefcase, Code2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setIsSuccess(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        alert("Failed to send message: " + result.message);
      }
    } catch (error) {
      alert("Something went wrong! Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 inline-block relative">
            Get In Touch
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-accent glow-effect rounded-full"></div>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto mt-6 text-lg">
            Whether you have a question, a project proposition, or just want to say hi, my inbox is always open.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px] -z-10"></div>
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-glow mb-6">Contact Information</h3>
              <p className="text-foreground/70 mb-8 leading-relaxed">
                I'm currently looking for new opportunities in DevOps and Digital Marketing. 
                I'm ready to bring technical scaling and market growth to your team.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-foreground/80 group">
                <div className="bg-accent/10 p-3 rounded-full border border-accent/20 group-hover:bg-accent group-hover:text-white transition-all glow-effect">
                  <Mail size={24} />
                </div>
                <a href="mailto:vaithya18@gmail.com" className="text-lg hover:text-accent transition-colors break-all">vaithya18@gmail.com</a>
              </div>

              <div className="flex items-center gap-4 text-foreground/80 group">
                <div className="bg-accent/10 p-3 rounded-full border border-accent/20 group-hover:bg-accent group-hover:text-white transition-all glow-effect">
                  <Phone size={24} />
                </div>
                <a href="tel:+918270428389" className="text-lg hover:text-accent transition-colors">8270428389</a>
              </div>
              
              <div className="flex items-center gap-4 text-foreground/80 group">
                <div className="bg-accent/10 p-3 rounded-full border border-accent/20 group-hover:bg-accent group-hover:text-white transition-all glow-effect">
                  <Briefcase size={24} />
                </div>
                <a href="https://www.linkedin.com/in/vaithya" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-accent transition-colors break-all">linkedin.com/in/vaithya</a>
              </div>

              <div className="flex items-center gap-4 text-foreground/80 group">
                <div className="bg-accent/10 p-3 rounded-full border border-accent/20 group-hover:bg-accent group-hover:text-white transition-all glow-effect">
                  <Code2 size={24} />
                </div>
                <a href="https://github.com/vaithi018" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-accent transition-colors break-all">github.com/vaithi018</a>
              </div>
            </div>
            
          </motion.div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-[1.5]"
          >
            <form onSubmit={handleSubmit} className="bg-[#0a0a0a] border border-white/10 p-8 md:p-10 space-y-6 relative overflow-hidden rounded-2xl">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50"></div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/80" htmlFor="name">Your Name</label>
                <input 
                  type="text" 
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/80" htmlFor="email">Your Email</label>
                <input 
                  type="email" 
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/80" htmlFor="message">Your Message</label>
                <textarea 
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full flex justify-center items-center gap-2 bg-accent hover:bg-accent/90 focus:ring-4 focus:ring-accent/50 text-black font-medium py-3 px-6 rounded-lg transition-all disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending...
                  </>
                ) : isSuccess ? (
                  "Message Sent!"
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
