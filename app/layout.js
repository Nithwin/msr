import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import Navbar from "@/components/layout/Navbar";

export const metadata = {
  title: "MSR | Luxury Automotive Consulting",
  description: "Expertise Behind the Wheel. Premium consulting for Porsche, BMW, and more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black selection:bg-black selection:text-white`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
