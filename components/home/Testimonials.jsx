"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Rajesh K.",
    role: "Collector, Bangalore",
    text: "MSR Consulting sourced a GT3 RS for me that was simply unattainable through normal channels. Their network is real.",
    accent: "from-red-500 to-orange-500"
  },
  {
    name: "Sarah Jenkins",
    role: "Expat, Mumbai",
    text: "Importing my vintage Mercedes seemed impossible until I met Jagades. He handled the entire regulatory nightmare flawlessly.",
    accent: "from-blue-500 to-indigo-500"
  },
  {
    name: "Vikram Malhotra",
    role: "Track Enthusiast, Chennai",
    text: "The setup advice for my M1000RR dropped 2 seconds off my lap time at MMRT. Technical knowledge is unmatched.",
    accent: "from-emerald-500 to-teal-500"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-[var(--color-navy)] mb-10 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
      
      <div className="max-w-7xl mx-auto relative z-10 px-4 md:px-0">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Client Stories</h2>
          <p className="text-white/60 text-base md:text-lg">Trusted by India's most discerning enthusiasts.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl relative group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className={cn("absolute top-0 left-0 w-full h-1 bg-gradient-to-r", t.accent)} />
              <Quote className="w-10 h-10 text-white/20 mb-6" />
              <p className="text-gray-300 text-lg leading-relaxed mb-6">"{t.text}"</p>
              
              <div className="flex items-center gap-4">
                <div className={cn("w-12 h-12 rounded-full bg-gradient-to-br flex items-center justify-center text-white font-bold text-xl", t.accent)}>
                  {t.name[0]}
                </div>
                <div>
                  <h4 className="text-white font-bold">{t.name}</h4>
                  <p className="text-white/50 text-sm">{t.role}</p>
                </div>
              </div>
              
              <div className="absolute bottom-8 right-8 flex gap-1">
                {[...Array(5)].map((_, starI) => (
                  <Star key={starI} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
