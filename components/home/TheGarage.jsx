"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function TheGarage() {
  return (
    <section id="garage" className="py-24 px-6 border-t border-gray-100 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold tracking-tight mb-4">The Garage</h2>
          <p className="text-gray-500">Comparative analysis: MSR Consulting vs. Standard Dealership</p>
        </div>

        <div className="overflow-x-auto">
          <motion.table 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             viewport={{ once: true }}
             className="w-full text-left border-collapse"
          >
            <thead>
              <tr className="border-b border-gray-200">
                <th className="py-6 px-4 font-medium text-gray-500 uppercase text-xs tracking-widest w-1/3">Criteria</th>
                <th className="py-6 px-4 font-bold text-black text-lg w-1/3 bg-white border-l border-r border-gray-200">MSR Consulting</th>
                <th className="py-6 px-4 font-medium text-gray-400 text-lg w-1/3">Standard Dealership</th>
              </tr>
            </thead>
            <tbody>
              {[
                { criteria: "Sourcing Network", msr: "Global (Private & Public)", standard: "Restricted to Local Inventory" },
                { criteria: "Inspection Depth", msr: "200+ Point Forensic Check", standard: "Basic Safety Check" },
                { criteria: "Negotiation Strategy", msr: "Data-Backed Advocacy", standard: "Sales Commission Driven" },
                { criteria: "Post-Purchase Support", msr: "Lifetime Fleet Management", standard: "Limited Warranty Only" },
                { criteria: "Market & Asset Trends", msr: "Investment & Appreciation Focus", standard: "Sales Volume Focus" }
              ].map((row, i) => (
                <tr key={i} className="border-b border-gray-200 hover:bg-white transition-colors">
                  <td className="py-6 px-4 font-medium text-gray-900">{row.criteria}</td>
                  <td className="py-6 px-4 font-medium text-black bg-white border-l border-r border-gray-200 flex items-center gap-2">
                    <Check className="w-4 h-4 text-black" />
                    {row.msr}
                  </td>
                  <td className="py-6 px-4 text-gray-400">{row.standard}</td>
                </tr>
              ))}
            </tbody>
          </motion.table>
        </div>
      </div>
    </section>
  );
}
