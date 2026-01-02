"use client";

import { motion } from "framer-motion";
import { ArrowRight, BadgeIndianRupee, RefreshCw } from "lucide-react";
import Link from "next/link";

export default function SellTrade() {
  return (
    <section className="py-24 px-6 bg-[var(--color-surface)] relative overflow-hidden border-t border-white/10">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--color-primary)] opacity-10 blur-[120px] rounded-full point-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
        >
          <span className="text-[var(--color-primary)] font-bold tracking-widest uppercase mb-4 block">Buy • Sell • Exchange</span>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Unlock the Value <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">of Your Asset.</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            Whether you're looking to upgrade to the latest model or liquidate a collectible, MSR Consulting provides a seamless, secure, and discrete transaction experience.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
             <Link 
               href="#contact" 
               className="inline-flex items-center justify-center bg-white text-black px-8 py-4 text-lg font-bold hover:bg-gray-200 transition-colors rounded-sm"
             >
               Sell My Vehicle
             </Link>
             <Link 
               href="#contact" 
               className="inline-flex items-center justify-center border border-white/20 text-white px-8 py-4 text-lg font-bold hover:bg-white/10 transition-colors rounded-sm"
             >
               Request Valuation
             </Link>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-6">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
             className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors"
           >
              <BadgeIndianRupee className="w-10 h-10 text-green-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Instant Cash Offer</h3>
              <p className="text-gray-400">Direct purchase for qualified vehicles. No waiting, no hassle. Immediate liquidity.</p>
           </motion.div>
           
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.4 }}
             className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors"
           >
              <RefreshCw className="w-10 h-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Premium Exchange</h3>
              <p className="text-gray-400">Trade-in your current vehicle against any unit in our active inventory with best-in-market value.</p>
           </motion.div>
        </div>
      </div>
    </section>
  );
}
