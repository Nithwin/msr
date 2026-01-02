import Hero from "@/components/home/Hero";
import BentoGrid from "@/components/home/BentoGrid";
import TheGarage from "@/components/home/TheGarage";
import TrustSignals from "@/components/home/TrustSignals";
import BookingEngine from "@/components/home/BookingEngine";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <BentoGrid />
      <TheGarage />
      <TrustSignals />
      <BookingEngine />
    </main>
  );
}
