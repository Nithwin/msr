"use client";

import { useEffect, useState, use } from "react";
import { useRouter } from "next/navigation";
import { Upload, Loader2, Save, ArrowLeft } from "lucide-react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { useToast } from "@/components/ui/Toast";

export default function EditVehicle({ params }) {
  // Unwrap params using React.use()
  const resolvedParams = use(params);
  const id = resolvedParams.id;
  
  const router = useRouter();
  const { addToast } = useToast();
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  
  const [vehicle, setVehicle] = useState({
    title: "",
    price: "",
    category: "", 
    description: "",
    image: null,
    imageUrl: "" // To store existing image URL
  });

  useEffect(() => {
    fetchVehicle();
  }, [id]);

  async function fetchVehicle() {
    try {
      const { data, error } = await supabase.from('vehicles').select('*').eq('id', id).single();
      if (error) throw error;
      setVehicle({
        title: data.title,
        price: data.price,
        category: data.category,
        description: data.description,
        imageUrl: data.image,
        image: null
      });
    } catch (error) {
      addToast("Error fetching vehicle details", "error");
      router.push("/admin/dashboard");
    } finally {
      setLoading(false);
    }
  }

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setVehicle({ ...vehicle, image: e.target.files[0] });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUpdating(true);

    try {
      let publicUrl = vehicle.imageUrl;

      // 1. Upload New Image if Selected
      if (vehicle.image) {
        const fileExt = vehicle.image.name.split('.').pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const { error: uploadError } = await supabase.storage
          .from('vehicle-images')
          .upload(fileName, vehicle.image);

        if (uploadError) throw uploadError;

        const { data } = supabase.storage
          .from('vehicle-images')
          .getPublicUrl(fileName);
        
        publicUrl = data.publicUrl;
      }

      // 2. Update DB
      const { error: dbError } = await supabase
        .from('vehicles')
        .update({
          title: vehicle.title,
          price: vehicle.price,
          category: vehicle.category,
          description: vehicle.description,
          image: publicUrl,
        })
        .eq('id', id);

      if (dbError) throw dbError;

      addToast("Vehicle updated successfully!", "success");
      router.push("/admin/dashboard");

    } catch (error) {
      console.error(error);
      addToast("Error updating vehicle: " + error.message, "error");
    } finally {
      setUpdating(false);
    }
  };

  if (loading) return <div className="h-full flex items-center justify-center text-white"><Loader2 className="animate-spin mr-2" /> Loading details...</div>;

  return (
    <div>
      <div className="mb-8 flex items-center gap-4">
        <Link href="/admin/dashboard" className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
            <ArrowLeft className="w-5 h-5 text-gray-400" />
        </Link>
        <div>
            <h1 className="text-3xl font-bold text-white mb-2">Edit Vehicle</h1>
            <p className="text-gray-400">Update vehicle details.</p>
        </div>
      </div>

      <div className="max-w-3xl bg-[#0A0A0A] border border-white/10 rounded-2xl p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-gray-400 mb-2 font-medium">Vehicle Name</label>
              <input required type="text" placeholder="e.g. Royal Enfield Classic 350" 
                className="w-full bg-black/50 border border-white/10 rounded-xl p-4 text-white focus:border-[var(--color-primary)] outline-none transition-colors"
                value={vehicle.title} onChange={e => setVehicle({...vehicle, title: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2 font-medium">Price (₹)</label>
              <input required type="text" placeholder="e.g. ₹ 1,85,000" 
                className="w-full bg-black/50 border border-white/10 rounded-xl p-4 text-white focus:border-[var(--color-primary)] outline-none transition-colors"
                value={vehicle.price} onChange={e => setVehicle({...vehicle, price: e.target.value})}
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
                        onClick={() => setVehicle({...vehicle, category: type})}
                        className={`flex-1 py-3 rounded-xl font-medium border transition-all ${
                            vehicle.category === type 
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
               value={vehicle.description} onChange={e => setVehicle({...vehicle, description: e.target.value})}
             />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2 font-medium">Vehicle Image</label>
            <div className="border-2 border-dashed border-white/10 rounded-xl p-10 text-center hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)]/5 transition-all cursor-pointer relative group">
              <input type="file" accept="image/*" onChange={handleImageChange} className="absolute inset-0 opacity-0 cursor-pointer z-10" />
              <div className="flex flex-col items-center">
                  {vehicle.imageUrl && !vehicle.image && (
                      <img src={vehicle.imageUrl} alt="Current" className="w-32 h-24 object-cover rounded-lg mb-4 border border-white/20" />
                  )}
                  {vehicle.image && (
                       <div className="mb-4 text-[var(--color-primary)] font-bold">New Image Selected</div>
                  )}
                  <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] group-hover:text-black transition-colors">
                      <Upload className="w-8 h-8" />
                  </div>
                  <span className="text-lg font-medium text-white mb-1">
                      {vehicle.image ? vehicle.image.name : "Click to change image"}
                  </span>
                  <span className="text-sm text-gray-500">Supports JPG, PNG, WEBP</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 flex justify-end">
             <button disabled={updating} type="submit" className="bg-[var(--color-primary)] text-black font-bold py-4 px-12 rounded-xl hover:bg-white hover:scale-105 transition-all disabled:opacity-50 disabled:hover:scale-100 flex items-center gap-2">
               {updating ? <Loader2 className="animate-spin" /> : <Save className="w-5 h-5" />}
               {updating ? "Updating..." : "Save Changes"}
             </button>
          </div>
        </form>
      </div>
    </div>
  );
}
