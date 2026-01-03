"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Upload, Loader2, Info } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function CreateVehicle() {
  const router = useRouter();
  const [uploading, setUploading] = useState(false);
  
  const [newVehicle, setNewVehicle] = useState({
    title: "",
    price: "",
    category: "Bike", 
    description: "",
    image: null,
  });

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setNewVehicle({ ...newVehicle, image: e.target.files[0] });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newVehicle.image) return alert("Please select an image");
    setUploading(true);

    try {
      const fileExt = newVehicle.image.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const { error: uploadError } = await supabase.storage
        .from('vehicle-images')
        .upload(fileName, newVehicle.image);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('vehicle-images')
        .getPublicUrl(fileName);

      const { error: dbError } = await supabase
        .from('vehicles')
        .insert([
          {
            title: newVehicle.title,
            price: newVehicle.price,
            category: newVehicle.category,
            description: newVehicle.description,
            image: publicUrl,
          },
        ]);

      if (dbError) throw dbError;

      alert("Vehicle added successfully!");
      router.push("/admin/dashboard");

    } catch (error) {
      console.error(error);
      alert("Error: " + error.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Add New Vehicle</h1>
        <p className="text-gray-400">Add a bike or car to your live inventory.</p>
      </div>

      <div className="max-w-3xl bg-[#0A0A0A] border border-white/10 rounded-2xl p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-gray-400 mb-2 font-medium">Vehicle Name</label>
              <input required type="text" placeholder="e.g. Royal Enfield Classic 350" 
                className="w-full bg-black/50 border border-white/10 rounded-xl p-4 text-white focus:border-[var(--color-primary)] outline-none transition-colors"
                value={newVehicle.title} onChange={e => setNewVehicle({...newVehicle, title: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2 font-medium">Price (₹)</label>
              <input required type="text" placeholder="e.g. ₹ 1,85,000" 
                className="w-full bg-black/50 border border-white/10 rounded-xl p-4 text-white focus:border-[var(--color-primary)] outline-none transition-colors"
                value={newVehicle.price} onChange={e => setNewVehicle({...newVehicle, price: e.target.value})}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-gray-400 mb-2 font-medium">Category</label>
              <div className="flex gap-4">
                  {['Bike', 'Car'].map(type => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setNewVehicle({...newVehicle, category: type})}
                        className={`flex-1 py-3 rounded-xl font-medium border transition-all ${
                            newVehicle.category === type 
                            ? "bg-[var(--color-primary)] border-[var(--color-primary)] text-black" 
                            : "bg-black/50 border-white/10 text-gray-400 hover:border-white/30"
                        }`}
                      >
                          {type}
                      </button>
                  ))}
              </div>
            </div>
          </div>

          <div>
             <label className="block text-sm text-gray-400 mb-2 font-medium">Description</label>
             <textarea placeholder="Vehicle condition, ownership details, insurance status, etc..." 
               className="w-full bg-black/50 border border-white/10 rounded-xl p-4 text-white focus:border-[var(--color-primary)] outline-none h-32 transition-colors"
               value={newVehicle.description} onChange={e => setNewVehicle({...newVehicle, description: e.target.value})}
             />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2 font-medium">Vehicle Image</label>
            <div className="border-2 border-dashed border-white/10 rounded-xl p-10 text-center hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)]/5 transition-all cursor-pointer relative group">
              <input required type="file" accept="image/*" onChange={handleImageChange} className="absolute inset-0 opacity-0 cursor-pointer z-10" />
              <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] group-hover:text-black transition-colors">
                      <Upload className="w-8 h-8" />
                  </div>
                  <span className="text-lg font-medium text-white mb-1">
                      {newVehicle.image ? newVehicle.image.name : "Click to upload image"}
                  </span>
                  <span className="text-sm text-gray-500">Supports JPG, PNG, WEBP</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 flex justify-end">
             <button disabled={uploading} type="submit" className="bg-[var(--color-primary)] text-black font-bold py-4 px-12 rounded-xl hover:bg-white hover:scale-105 transition-all disabled:opacity-50 disabled:hover:scale-100 flex items-center gap-2">
               {uploading ? <Loader2 className="animate-spin" /> : null}
               {uploading ? "Publishing..." : "Publish Vehicle"}
             </button>
          </div>
        </form>
      </div>
    </div>
  );
}
