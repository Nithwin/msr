"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function LiveStock() {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchVehicles() {
      const { data, error } = await supabase
        .from('vehicles')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(4);
      
      if (data) setVehicles(data);
      setLoading(false);
    }

    fetchVehicles();
  }, []);

  return (
    <section className="py-24 px-6 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-[var(--color-primary)] font-bold tracking-wider uppercase text-sm mb-2 block">Current Availability</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Live Inventory</h2>
          </div>
          <Link href="/inventory" className="hidden md:inline-flex items-center text-white hover:text-[var(--color-primary)] transition-colors">
            View All Stock <ArrowUpRight className="ml-2 w-4 h-4" />
          </Link>
        </div>

        {loading ? (
             <div className="flex justify-center py-20">
                <Loader2 className="w-10 h-10 animate-spin text-[var(--color-primary)]" />
             </div>
        ) : vehicles.length === 0 ? (
            <div className="text-gray-500 py-10">
                No vehicles currently listed. Check back soon.
            </div>
        ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {vehicles.map((vehicle, index) => (
                <Link href={`#`} key={vehicle.id} className="group block">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-[var(--color-primary)] transition-colors duration-300"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={vehicle.image}
                        alt={vehicle.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60"></div>
                      
                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="text-xs font-bold bg-[var(--color-secondary)] text-white px-2 py-1 rounded mb-2 inline-block">
                            {vehicle.category}
                        </span>
                        <h3 className="text-lg font-bold text-white leading-tight">{vehicle.title}</h3>
                      </div>
                    </div>
                    
                    <div className="p-4 flex justify-between items-center text-sm font-medium text-gray-400 border-t border-white/5 group-hover:bg-white/5 transition-colors">
                      <span>{vehicle.price}</span>
                      <span className="text-[var(--color-primary)] group-hover:translate-x-1 transition-transform">Details &rarr;</span>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
        )}
      </div>
    </section>
  );
}
