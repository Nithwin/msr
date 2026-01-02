import Image from "next/image";
import Link from "next/link";
import { MoveLeft, CheckCircle, Phone, MessageCircle } from "lucide-react";
import { inventory } from "@/data/inventory";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return inventory.map((vehicle) => ({
    id: vehicle.id,
  }));
}

export default function InventoryDetail({ params }) {
  const vehicle = inventory.find((v) => v.id === params.id);

  if (!vehicle) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
          <MoveLeft className="w-4 h-4 mr-2" /> Back to Showroom
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Section */}
          <div className="relative h-[60vh] lg:h-auto rounded-2xl overflow-hidden border border-white/10">
             <Image
               src={vehicle.image}
               alt={vehicle.title}
               fill
               className="object-cover"
               priority
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>

          {/* Details Section */}
          <div className="flex flex-col justify-center">
            <span className="text-[var(--color-primary)] font-bold tracking-widest uppercase mb-2">
              {vehicle.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{vehicle.title}</h1>
            <p className="text-3xl font-light text-gray-300 mb-8">{vehicle.price}</p>
            
            <div className="prose prose-invert max-w-none mb-10 text-gray-400 text-lg leading-relaxed">
              <p>{vehicle.description}</p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mb-12">
               {Object.entries(vehicle.specs).map(([key, value]) => (
                 <div key={key} className="bg-white/5 p-4 rounded-xl border border-white/10 hover:border-[var(--color-primary)] transition-colors">
                    <span className="text-xs text-gray-400 uppercase block mb-1">{key}</span>
                    <span className="text-lg font-medium text-white">{value}</span>
                 </div>
               ))}
            </div>
            
            <div className="flex flex-col gap-4">
              <a 
                href="https://wa.me/919597434342"
                className="w-full bg-[#25D366] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:brightness-110 transition-all text-lg"
              >
                <MessageCircle className="w-5 h-5" />
                Inquire on WhatsApp
              </a>
               <a 
                href="tel:+919597434342"
                className="w-full bg-[var(--color-primary)] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[var(--color-secondary)] transition-all text-lg"
              >
                <Phone className="w-5 h-5" />
                Call for Appointment
              </a>
            </div>
            
            <div className="mt-8 flex items-center gap-2 text-sm text-gray-500">
               <CheckCircle className="w-4 h-4 text-green-500" />
               <span>Available for immediate delivery. Verified by MSR Consulting.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
