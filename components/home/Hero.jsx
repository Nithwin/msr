"use client";

import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen pt-20 flex flex-col lg:flex-row items-center justify-center overflow-hidden">
      <div className="w-full lg:w-1/2 px-6 lg:pl-24 flex flex-col justify-center py-20 lg:py-0 z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight mb-8"
        >
          Expertise <br />
          Behind the <br />
          Wheel.
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link 
            href="#contact"
            className="inline-flex items-center justify-center bg-black text-white px-8 py-4 text-base font-medium min-w-[180px] hover:bg-gray-900 transition-colors"
          >
            Book Consultation
          </Link>
          <Link 
            href="#inventory"
            className="inline-flex items-center justify-center border border-gray-200 text-black px-8 py-4 text-base font-medium min-w-[180px] hover:bg-gray-50 transition-colors group"
          >
            View Inventory
            <MoveRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>

      <div className="w-full lg:w-1/2 relative h-[50vh] lg:h-screen">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
           className="relative w-full h-full"
        >
          <Image
            src="/hero-car.png"
            alt="Silver Porsche 911 GT3 Studio Shot"
            fill
            className="object-contain lg:object-cover object-center"
            priority
          />
          {/* Subtle vignette for integration if needed, but keeping it clean for now per "No Gradients" rule */}
        </motion.div>
      </div>
    </section>
  );
}
