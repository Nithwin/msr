"use client";

import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingContact() {
  return (
    <motion.div 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 1, type: "spring", stiffness: 100 }}
      className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden bg-black/90 backdrop-blur-xl border-t border-white/10 p-4 gap-3 safe-area-pb"
    >
      <a 
        href="tel:+919597434342"
        className="flex-1 bg-[var(--color-surface)] border border-white/10 text-white flex items-center justify-center gap-2 py-3 rounded-xl font-bold active:scale-95 transition-transform"
      >
        <Phone className="w-5 h-5 text-[var(--color-primary)]" />
        Call Now
      </a>
      <a 
        href="https://wa.me/919597434342"
        className="flex-1 bg-[#25D366] text-white flex items-center justify-center gap-2 py-3 rounded-xl font-bold active:scale-95 transition-transform"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        WhatsApp
      </a>
    </motion.div>
  );
}
