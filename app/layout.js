import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata = {
  title: "MSR Consulting | Used Bikes & Cars - Kolathur, Salem",
  description: "Best place to buy and sell used bikes and cars in Kolathur, Mettur, Salem. Quality vehicles at the best market price by Jagades.",
  keywords: ["Used Bikes", "Used Cars", "Second Hand Bikes Salem", "Mettur", "Kolathur", "MSR Consulting", "Jagades", "Bike Consulting"],
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
        className={`${manrope.variable} antialiased bg-black text-white selection:bg-[#7000FF] selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
