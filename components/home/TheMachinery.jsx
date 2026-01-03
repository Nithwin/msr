"use client";

import { motion } from "framer-motion";
import { Gauge, Bike, Car, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Bikes",
    subtitle: "Quality Pre-owned Bikes",
    icon: Bike,
    className: "col-span-1 md:col-span-1",
  },
  {
    title: "Cars",
    subtitle: "Best Value Used Cars",
    icon: Car,
    className: "col-span-1",
  },
  {
    title: "Service",
    subtitle: "Maintenance & Repairs",
    icon: Wrench,
    className: "col-span-1",
  },
  {
    title: "Consulting",
    subtitle: "Valuation & Buy/Sell Advice",
    icon: Gauge,
    className: "col-span-1",
  },
];

export default function TheMachinery() {
  return (
    <section id="machinery" className="py-24 px-6 max-w-7xl mx-auto relative overflow-hidden">
      {/* Grainy Gradient Background */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <svg className="invisible w-0 h-0">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.6" stitchTiles="stitch" />
            <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
          </filter>
        </svg>
        <div className="absolute inset-0 bg-[#0a0a0a]" />
        <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] opacity-20 animate-bg-spin bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)]" />
        <div className="absolute top-0 left-0 w-full h-full opacity-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      <div className="mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">The Machinery</h2>
        <p className="text-white/60 text-lg">Comprehensive automotive expertise across all categories.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={cn(
              "group p-8 border border-white/5 bg-white/5 backdrop-blur-sm relative overflow-hidden rounded-2xl shadow-xl hover:shadow-purple-500/20 hover:border-white/20 transition-all duration-500",
              service.className
            )}
          >
             <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />

             {/* Decorative Background Icon */}
             <service.icon className="absolute -right-8 -bottom-8 w-40 h-40 text-white/5 group-hover:text-white/10 transition-colors duration-500 -rotate-12" />

            <div className="relative z-10">
              <div className="w-14 h-14 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] text-white flex items-center justify-center mb-6 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                 <service.icon className="w-7 h-7" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 font-medium leading-relaxed mb-4 group-hover:text-gray-300 transition-colors">{service.subtitle}</p>
              
              <div className="w-8 h-1 bg-[var(--color-secondary)] rounded-full group-hover:w-16 transition-all duration-300" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
