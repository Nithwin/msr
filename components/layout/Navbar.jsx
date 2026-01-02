"use client";

import Link from "next/link";
import { MoveRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tighter">
          MSR
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="#services" className="hover:text-gray-600 transition-colors">Services</Link>
          <Link href="#inventory" className="hover:text-gray-600 transition-colors">Inventory</Link>
          <Link href="#garage" className="hover:text-gray-600 transition-colors">The Garage</Link>
        </div>

        <Link 
          href="#contact"
          className="group flex items-center gap-2 text-sm font-medium bg-black text-white px-5 py-2.5 hover:bg-gray-900 transition-colors"
        >
          Book Consultation
          <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </nav>
  );
}
