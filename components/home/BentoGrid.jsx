"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Search, FileBarChart, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Pre-purchase Inspection",
    description: "Detailed 200-point mechanical and cosmetic analysis for peace of mind.",
    icon: Search,
    className: "col-span-1 md:col-span-2",
  },
  {
    title: "Valuation",
    description: "Data-driven market analysis to determine true asset value.",
    icon: FileBarChart,
    className: "col-span-1",
  },
  {
    title: "Import Consulting",
    description: "Navigating complex regulations for international vehicle acquisition.",
    icon: Globe,
    className: "col-span-1",
  },
  {
    title: "Performance Tuning",
    description: "Bespoke modification strategies for track and street optimization.",
    icon: ArrowUpRight,
    className: "col-span-1 md:col-span-2",
  },
];

export default function BentoGrid() {
  return (
    <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-4xl font-bold tracking-tight mb-4">Our Services</h2>
        <p className="text-gray-500 max-w-xl text-lg">
          Specialized automotive consulting services tailored for the discerning collector and enthusiast.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={cn(
              "group p-8 border border-gray-200 bg-white hover:shadow-sm transition-all duration-300 ease-out hover:-translate-y-[2px]",
              service.className
            )}
          >
            <div className="flex justify-between items-start mb-8">
              <service.icon className="w-8 h-8 text-gray-900 stroke-1" />
              <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" />
            </div>
            
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-500 leading-relaxed">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
