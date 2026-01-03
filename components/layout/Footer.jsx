"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Linkedin, MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="mb-6 block">
              <Image src="/logo-transparent.png" alt="MSR Consulting" width={180} height={60} className="w-auto h-12 object-contain" />
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted partner for buying and selling quality used bikes and cars in Erode, Salem, and Mettur.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[var(--color-primary)] hover:text-black transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[var(--color-primary)] hover:text-black transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[var(--color-primary)] hover:text-black transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link href="/" className="hover:text-[var(--color-primary)] transition-colors">Home</Link></li>
              <li><Link href="/inventory" className="hover:text-[var(--color-primary)] transition-colors">Inventory</Link></li>
              <li><Link href="#machinery" className="hover:text-[var(--color-primary)] transition-colors">Services</Link></li>
              <li><Link href="#contact" className="hover:text-[var(--color-primary)] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-4 text-gray-400">
              <li>Vehicle Sourcing</li>
              <li>Paperwork & RTO</li>
              <li>Performance Tuning</li>
              <li>Asset Management</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-1" />
                <span>Kolathur, Mettur, Salem<br />India</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[var(--color-primary)] shrink-0" />
                <span>contact@msrconsulting.in</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[var(--color-primary)] shrink-0" />
                <span>+91 98427 49999</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>&copy; {currentYear} MSR Consulting. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
