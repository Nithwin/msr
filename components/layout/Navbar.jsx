"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MoveRight, Phone, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import Magnetic from "@/components/ui/Magnetic";

const navLinks = [
  { name: "Buy", href: "#machinery" },
  { name: "Sell/Trade", href: "#sell-trade" },
  { name: "The Expert", href: "#expert" },
  { name: "Why Us", href: "#comparison" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
        className={cn(
          "pointer-events-auto flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500",
          scrolled 
            ? "w-full max-w-5xl bg-black/60 backdrop-blur-3xl border border-white/10 shadow-2xl shadow-purple-500/10" 
            : "w-full max-w-7xl bg-transparent border border-transparent"
        )}
      >
        {/* Logo */}
        <Link href="/" className="relative z-50 flex items-center gap-2 group">
           <div className="w-10 h-10 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:rotate-12 transition-transform">
             M
           </div>
           <span className={cn("font-bold text-xl tracking-tight transition-colors", scrolled ? "text-white" : "text-white")}>
             MSR <span className="font-light opacity-70">Consulting</span>
           </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-2 bg-white/5 rounded-full px-2 py-1 border border-white/5 backdrop-blur-md">
          {navLinks.map((link) => (
            <Magnetic key={link.name}>
              <Link 
                href={link.href}
                className="relative px-5 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors rounded-full block group"
              >
                <span className="relative z-10">{link.name}</span>
                <motion.div 
                  className="absolute inset-0 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  layoutId="nav-pill"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              </Link>
            </Magnetic>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
            <Link 
            href="#contact"
            className="flex items-center gap-2 text-sm font-bold bg-white text-black px-6 py-2.5 hover:bg-gray-200 transition-all rounded-full"
            >
            Get in Touch
            <MoveRight className="w-4 h-4" />
            </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden relative z-50 p-2 text-white bg-white/10 rounded-full backdrop-blur-md"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="absolute top-16 right-0 w-full bg-black/90 backdrop-blur-3xl border border-white/10 rounded-3xl p-6 flex flex-col gap-4 shadow-2xl"
            >
               {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-white/80 hover:text-white hover:bg-white/10 px-4 py-3 rounded-xl transition-all"
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-px bg-white/10 my-2" />
              <Link 
                 href="#contact"
                 onClick={() => setMobileMenuOpen(false)}
                 className="flex items-center justify-center gap-2 bg-[var(--color-primary)] text-white p-4 rounded-xl font-bold"
              >
                 <Phone className="w-5 h-5" /> Call Now
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
