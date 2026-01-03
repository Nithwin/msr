"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function MeetTheExpert() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section id="expert" className="py-24 px-6 bg-[var(--color-surface)] relative overflow-hidden">
       {/* Background Decor */}
       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-secondary)] opacity-5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
        <motion.div 
           ref={ref}
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8 }}
           className="w-full lg:w-1/2 relative"
        >
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <motion.div
               style={{ y: y1 }}
               className="absolute inset-0 w-full h-[120%]"
            >
             <Image 
               src="/expert-ai.png" 
               alt="Mr. Jagades" 
               fill
               className="object-cover"
             />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            
            <div className="absolute bottom-8 left-8">
               <h3 className="text-3xl font-bold text-white mb-1">Mr. Jagades</h3>
               <p className="text-[var(--color-primary)] font-bold tracking-wider uppercase text-sm">Lead Consultant & Founder</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
           className="w-full lg:w-1/2"
        >
          <span className="text-[var(--color-primary)] font-bold tracking-widest uppercase mb-4 block">The Expert</span>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Decades of <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Automotive Mastery.</span>
          </h2>
          
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            With over 15 years in the high-performance automotive sector, Jagades has established himself as the definitive authority on superbike diagnostics, luxury imports, and valuation. 
          </p>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            His approach combines technical engineering precision with deep market insight, ensuring every client makes an investment, not just a purchase.
          </p>
          
          <div className="grid grid-cols-2 gap-8 mb-10">
             <div>
                <span className="block text-4xl font-bold text-white mb-1">500+</span>
                <span className="text-gray-500 text-sm font-medium uppercase tracking-wider">Superbikes Inspected</span>
             </div>
             <div>
                <span className="block text-4xl font-bold text-white mb-1">₹120Cr+</span>
                <span className="text-gray-500 text-sm font-medium uppercase tracking-wider">Asset Value Managed</span>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
