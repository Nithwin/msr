"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function BookingEngine() {
  return (
    <section id="contact" className="py-32 px-6 max-w-5xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">
          Start Your Journey.
        </h2>
        
        <form className="max-w-2xl mx-auto space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <input 
               type="text" 
               placeholder="Vehicle Type (e.g. 911 GT3)" 
               className="w-full p-4 bg-gray-50 border border-gray-200 outline-none focus:border-black focus:ring-0 transition-colors placeholder:text-gray-400"
             />
             <input 
               type="text" 
               placeholder="Budget Range" 
               className="w-full p-4 bg-gray-50 border border-gray-200 outline-none focus:border-black focus:ring-0 transition-colors placeholder:text-gray-400"
             />
          </div>
          <input 
             type="date" 
             className="w-full p-4 bg-gray-50 border border-gray-200 outline-none focus:border-black focus:ring-0 transition-colors text-gray-600"
          />
          
          <button 
            type="submit" 
            className="w-full bg-black text-white p-4 font-medium text-lg flex items-center justify-center gap-2 hover:bg-gray-900 transition-colors group"
          >
            Request Consultation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
      </motion.div>
    </section>
  );
}
