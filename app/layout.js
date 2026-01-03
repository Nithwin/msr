import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgressBar from "@/components/ui/ScrollProgressBar";

export const metadata = {
  title: "MSR Consulting | Superbike & Luxury Car Experts",
  description: "Premier automotive consulting by Jagades in Kolathur, Mettur, Salem. Specializing in Superbike diagnostics, Luxury Car valuation, and Performance Tuning.",
  keywords: ["Superbikes", "Luxury Cars", "Automotive Consulting", "Used Bikes Salem", "Superbike Service", "MSR Consulting", "Jagades", "Kolathur", "Mettur", "Salem"],
  openGraph: {
    title: "MSR Consulting | Automotive Mastery",
    description: "Expert consultation for Superbikes & Luxury Cars. Track & Street Performance Setup.",
    url: "https://msrconsulting.in",
    siteName: "MSR Consulting",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "MSR Consulting Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: "/logo-transparent.png",
    shortcut: "/logo-transparent.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} antialiased bg-white text-black selection:bg-[var(--color-navy)] selection:text-white`}
      >
        <ScrollProgressBar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
