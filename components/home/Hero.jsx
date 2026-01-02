"use client";

import Link from "next/link";
import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="object-cover w-full h-full opacity-60"
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
        <motion.div 
           variants={container}
           initial="hidden"
           animate="show"
           className="max-w-4xl"
        >
          <motion.h1 variants={item} className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] text-white mb-6">
            Precision Advice <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]">For the Road Ahead.</span>
          </motion.h1>
          
          <motion.p variants={item} className="text-xl md:text-2xl font-medium text-gray-300 max-w-2xl mb-10 leading-relaxed">
            Expert consultation for Superbikes & Luxury Cars by Jagades.
          </motion.p>
          
          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="#contact"
              className="group relative inline-flex items-center justify-center bg-[var(--color-navy)] text-white px-8 py-5 text-lg font-bold min-w-[200px] overflow-hidden rounded-sm transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(var(--color-primary-rgb),0.5)]"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shine_1s_ease-in-out_infinite]" />
              <span className="relative z-10">Start Driving</span>
            </Link>
            <Link 
              href="#machinery"
              className="group relative inline-flex items-center justify-center border-2 border-[var(--color-navy)] text-[var(--color-navy)] px-8 py-5 text-lg font-bold min-w-[200px] overflow-hidden rounded-sm transition-colors"
            >
              <span className="absolute inset-0 w-full h-full bg-[var(--color-navy)] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10 flex items-center group-hover:text-white transition-colors duration-300">
                View Services
                <MoveRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
