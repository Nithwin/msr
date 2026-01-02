"use client";

import { motion } from "framer-motion";

export default function BookingEngine() {
  return (
    <section id="contact" className="py-24 px-6 bg-[var(--color-surface)] text-white border-t border-white/10 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Secure Your Purchase.</h2>
          <p className="text-gray-400 mb-12 text-lg">Schedule a priority consultation for inspection or import.</p>
        </motion.div>
        
        <form className="space-y-8">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="relative group">
                <input 
                  type="text" 
                  placeholder=" " 
                  className="peer w-full bg-transparent border-b border-white/20 focus:border-[var(--color-primary)] py-4 outline-none transition-all text-white placeholder-transparent"
                />
                <label className="absolute left-0 top-4 text-gray-500 text-lg transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-4 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-[var(--color-primary)]">
                  Vehicle of Interest
                </label>
             </div>
             
             <div className="relative group text-left">
               <select className="w-full bg-transparent border-b border-white/20 focus:border-[var(--color-primary)] py-4 outline-none transition-all text-white appearance-none cursor-pointer">
                  <option className="bg-black text-gray-400">Buying</option>
                  <option className="bg-black text-gray-400">Selling</option>
                  <option className="bg-black text-gray-400">Valuation</option>
                  <option className="bg-black text-gray-400">Inspection</option>
               </select>
               <label className="absolute left-0 -top-6 text-sm text-[var(--color-primary)]">Service Type</label>
             </div>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative group">
                <input 
                  type="text" 
                  placeholder=" " 
                  className="peer w-full bg-transparent border-b border-white/20 focus:border-[var(--color-primary)] py-4 outline-none transition-all text-white placeholder-transparent"
                />
                 <label className="absolute left-0 top-4 text-gray-500 text-lg transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-4 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-[var(--color-primary)]">
                  Full Name
                </label>
              </div>
              
              <div className="relative group">
                <input 
                  type="tel" 
                  placeholder=" " 
                  className="peer w-full bg-transparent border-b border-white/20 focus:border-[var(--color-primary)] py-4 outline-none transition-all text-white placeholder-transparent"
                />
                 <label className="absolute left-0 top-4 text-gray-500 text-lg transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-4 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-[var(--color-primary)]">
                  Phone Number
                </label>
              </div>
           </div>
           
           <div className="relative group text-left">
               <input 
                 type="date" 
                 className="w-full bg-transparent border-b border-white/20 focus:border-[var(--color-primary)] py-4 outline-none transition-all text-white appearance-none"
               />
               <label className="absolute left-0 -top-6 text-sm text-[var(--color-primary)]">Preferred Date</label>
           </div>
           
           <motion.button 
             whileHover={{ scale: 1.02 }}
             whileTap={{ scale: 0.98 }}
             className="w-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white font-bold py-5 rounded-lg text-lg shadow-lg hover:shadow-purple-500/30 transition-all uppercase tracking-widest mt-8"
           >
             Book Appointment
           </motion.button>
        </form>
      </div>
    </section>
  );
}
