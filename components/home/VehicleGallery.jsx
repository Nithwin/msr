"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const vehicles = [
  {
    id: 1,
    title: "Track Precision",
    category: "Superbikes",
    image: "/vehicle-1.png",
    accent: "from-red-600 to-red-900",
  },
  {
    id: 2,
    title: "Urban Command",
    category: "Cruisers",
    image: "/vehicle-2.png",
    accent: "from-blue-600 to-slate-900",
  },
  {
    id: 3,
    title: "Aerodynamic Mastery",
    category: "Supercars",
    image: "/vehicle-3.png",
    accent: "from-orange-500 to-orange-800",
  },
  {
    id: 4,
    title: "Executive Presence",
    category: "Luxury Sedans",
    image: "/vehicle-4.png",
    accent: "from-indigo-400 to-slate-800",
  },
];

export default function VehicleGallery() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % vehicles.length);
  const prev = () => setCurrent((prev) => (prev - 1 + vehicles.length) % vehicles.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden bg-black">
      {vehicles.map((vehicle, index) => (
        <motion.div
           key={vehicle.id}
           initial={{ opacity: 0 }}
           animate={{ opacity: index === current ? 1 : 0 }}
           transition={{ duration: 0.7 }}
           className="absolute inset-0 w-full h-full"
        >
          {/* Image */}
          <div className="relative w-full h-full">
            <Image
              src={vehicle.image}
              alt={vehicle.title}
              fill
              className="object-cover object-center sm:object-center"
              priority={index === 0}
            />
            {/* Gradient Overlay */}
            <div className={cn("absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-80", vehicle.accent)} />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/90" />
          </div>
          
          {/* Content */}
          <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 z-10 flex flex-col items-start justify-end h-full">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: index === current ? 0 : 20, opacity: index === current ? 1 : 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-white uppercase border border-white/30 backdrop-blur-md rounded-full">
                {vehicle.category}
              </span>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-2 leading-tight">
                {vehicle.title}
              </h2>
            </motion.div>
          </div>
        </motion.div>
      ))}

      {/* Controls */}
      <div className="absolute bottom-8 right-8 flex gap-2 z-20">
        <button onClick={prev} className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-colors">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button onClick={next} className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-colors">
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}
