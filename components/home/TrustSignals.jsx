"use client";

import { motion } from "framer-motion";

const brands = [
  "PORSCHE", "BMW M", "MERCEDES-AMG", "AUDI SPORT", "FERRARI", "MCLAREN", "ASTON MARTIN", "LAMBORGHINI"
];

export default function TrustSignals() {
  return (
    <section className="py-12 border-y border-gray-100 overflow-hidden bg-white">
      <div className="flex w-full whitespace-nowrap overflow-hidden">
        <motion.div 
          className="flex min-w-full items-center justify-around gap-16"
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
        >
           {[...brands, ...brands].map((brand, i) => (
             <span key={i} className="text-3xl font-bold tracking-tighter text-gray-200 select-none">
               {brand}
             </span>
           ))}
        </motion.div>
        <motion.div 
          className="flex min-w-full items-center justify-around gap-16"
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
        >
            {[...brands, ...brands].map((brand, i) => (
             <span key={`dup-${i}`} className="text-3xl font-bold tracking-tighter text-gray-200 select-none">
               {brand}
             </span>
           ))}
        </motion.div>
      </div>
    </section>
  );
}
