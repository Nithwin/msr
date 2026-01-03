"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Trash2, Plus, Loader2, Search, Edit } from "lucide-react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";

export default function AdminDashboard() {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchVehicles();
  }, []);

  async function fetchVehicles() {
    setLoading(true);
    const { data, error } = await supabase.from('vehicles').select('*').order('created_at', { ascending: false });
    if (error) console.error("Error fetching vehicles:", error);
    else setVehicles(data || []);
    setLoading(false);
  }

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this vehicle?")) return;
    try {
        const { error } = await supabase.from('vehicles').delete().eq('id', id);
        if (error) throw error;
        setVehicles(vehicles.filter(v => v.id !== id));
    } catch (error) {
        alert("Error deleting vehicle: " + error.message);
    }
  };

  const filteredVehicles = vehicles.filter(v => 
      v.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      v.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <div className="h-full flex items-center justify-center text-white"><Loader2 className="animate-spin mr-2" /> Loading inventory...</div>;

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
            <h1 className="text-3xl font-bold text-white mb-2">Inventory Overview</h1>
            <p className="text-gray-400">Manage your live listings.</p>
        </div>
        <Link href="/admin/create" className="bg-[var(--color-primary)] text-black font-bold py-3 px-6 rounded-xl hover:bg-white transition-colors flex items-center gap-2">
            <Plus className="w-5 h-5" /> Add New Vehicle
        </Link>
      </div>

      <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-white/10 flex gap-4">
             <div className="relative flex-1 max-w-md">
                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                 <input 
                    type="text" 
                    placeholder="Search by name or category..." 
                    className="w-full bg-black/50 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-white focus:border-[var(--color-primary)] outline-none"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                 />
             </div>
        </div>

        {/* List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
           {filteredVehicles.length === 0 ? (
             <div className="col-span-full py-12 text-center text-gray-500">
                No vehicles found matching your search.
             </div>
           ) : (
              filteredVehicles.map(vehicle => (
                <div key={vehicle.id} className="bg-black/40 border border-white/5 rounded-xl overflow-hidden group hover:border-[var(--color-primary)] transition-all">
                  <div className="relative h-48 w-full">
                     <Image src={vehicle.image} alt={vehicle.title} fill className="object-cover" />
                     <div className="absolute top-2 right-2">
                         <span className="text-xs font-bold bg-black/60 backdrop-blur-md text-white px-2 py-1 rounded border border-white/10">
                             {vehicle.category}
                         </span>
                     </div>
                  </div>
                  
                  <div className="p-4">
                     <div className="flex justify-between items-start mb-2">
                         <h3 className="font-bold text-lg text-white line-clamp-1" title={vehicle.title}>{vehicle.title}</h3>
                     </div>
                     <p className="text-[var(--color-primary)] font-bold mb-4">{vehicle.price}</p>
                     
                     <div className="flex gap-2">
                        <Link 
                            href={`/admin/edit/${vehicle.id}`}
                            className="flex-1 py-2 flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-gray-400 rounded-lg transition-colors text-sm font-medium"
                        >
                            <Edit className="w-4 h-4" /> Edit
                        </Link>
                        <button 
                            onClick={() => handleDelete(vehicle.id)} 
                            className="flex-1 py-2 flex items-center justify-center gap-2 bg-white/5 hover:bg-red-500/10 hover:text-red-500 text-gray-400 rounded-lg transition-colors text-sm font-medium"
                        >
                           <Trash2 className="w-4 h-4" /> Delete
                        </button>
                     </div>
                  </div>
                </div>
              ))
           )}
        </div>
      </div>
    </div>
  );
}
