import Hero from "@/components/home/Hero";
import VelocityScroll from "@/components/home/VelocityScroll";
import VehicleGallery from "@/components/home/VehicleGallery";
import LiveStock from "@/components/home/LiveStock";
import SellTrade from "@/components/home/SellTrade";
import TheMachinery from "@/components/home/TheMachinery";
import MeetTheExpert from "@/components/home/MeetTheExpert";
import Testimonials from "@/components/home/Testimonials";
import ComparisonMatrix from "@/components/home/ComparisonMatrix";
import FloatingContact from "@/components/home/FloatingContact";
import BookingEngine from "@/components/home/BookingEngine";

export default function Home() {
  return (
    <main className="min-h-screen bg-black pb-20 md:pb-0">
      <Hero />
      <VelocityScroll />
      <VehicleGallery />
      <LiveStock />
      <SellTrade />
      <TheMachinery />
      <MeetTheExpert />
      <ComparisonMatrix />
      <Testimonials />
      <BookingEngine />
      <FloatingContact />
    </main>
  );
}
