"use client";

import { motion } from "framer-motion";
import { Check, X, ShieldCheck } from "lucide-react";

const comparisonData = [
  { feature: "200-Point Inspection", msr: true, retail: false },
  { feature: "Global Sourcing Network", msr: true, retail: false },
  { feature: "Paperwork & RTO Clearance", msr: true, retail: true },
  { feature: "Post-Sale Technical Support", msr: true, retail: false },
  { feature: "Buyback Guarantee", msr: true, retail: false },
  { feature: "Custom ECU Tuning Advise", msr: true, retail: false },
];

export default function ComparisonMatrix() {
  return (
    <section id="comparison" className="py-24 px-6 bg-black border-t border-white/10 relative">
      {/* Glow Effect */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[var(--color-primary)] opacity-5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-[var(--color-secondary)] font-bold tracking-widest uppercase mb-4 block">The Advantage</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Choose Specialist Consulting?</h2>
          <p className="text-gray-400">The difference between buying a vehicle and investing in an asset.</p>
        </div>

        <div className="overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl shadow-2xl">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-6 px-6 text-left text-gray-400 font-medium w-1/2">Service Feature</th>
                <th className="py-6 px-6 text-center text-gray-500 font-medium w-1/4">Generic Dealer</th>
                <th className="py-6 px-6 text-center text-[var(--color-primary)] font-bold bg-[var(--color-primary)]/5 w-1/4 border-l border-[var(--color-primary)]/20">
                   MSR Consulting
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <motion.tr 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="border-b border-white/5 hover:bg-white/5 transition-colors"
                >
                  <td className="py-5 px-6 text-white font-medium">{row.feature}</td>
                  <td className="py-5 px-6 text-center">
                    {row.retail ? (
                      <Check className="w-6 h-6 text-gray-600 mx-auto" />
                    ) : (
                      <X className="w-6 h-6 text-gray-700 mx-auto opacity-50" />
                    )}
                  </td>
                  <td className="py-5 px-6 text-center bg-[var(--color-primary)]/5 border-l border-[var(--color-primary)]/20 relative">
                     {index === 0 && (
                        <div className="absolute top-0 right-0 -mt-1 -mr-1">
                           <span className="absolute animate-ping inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                        </div>
                     )}
                    {row.msr ? (
                      <div className="flex justify-center">
                        <div className="bg-green-500/20 p-1 rounded-full">
                           <Check className="w-5 h-5 text-green-400" />
                        </div>
                      </div>
                    ) : (
                      <X className="w-6 h-6 text-red-500 mx-auto" />
                    )}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-8 flex justify-center items-center gap-2 text-gray-500 text-sm">
           <ShieldCheck className="w-5 h-5" />
           <span>All MSR transactions are protected by our authenticity verification process.</span>
        </div>
      </div>
    </section>
  );
}
