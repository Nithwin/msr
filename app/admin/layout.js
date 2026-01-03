"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { LayoutDashboard, PlusCircle, LogOut, Package } from "lucide-react";
import { deleteCookie } from "cookies-next";

import { ToastProvider } from "@/components/ui/Toast";

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    deleteCookie("admin_session");
    router.push("/admin");
  };

  const menu = [
    { name: "Overview", icon: LayoutDashboard, href: "/admin/dashboard" },
    { name: "Add Vehicle", icon: PlusCircle, href: "/admin/create" },
  ];

  if (pathname === "/admin") return <ToastProvider>{children}</ToastProvider>;

  return (
    <ToastProvider>
      <div className="min-h-screen bg-black text-white flex">
        {/* Sidebar */}
        <aside className="w-64 border-r border-white/10 bg-[#0A0A0A] hidden md:flex flex-col">
          <div className="p-8 border-b border-white/10">
             <Image src="/logo.png" alt="MSR" width={140} height={50} className="w-auto h-10 object-contain" />
          </div>
          
          <nav className="flex-1 p-4 space-y-2">
            {menu.map(item => {
              const isActive = pathname === item.href;
              return (
                <Link 
                  key={item.name} 
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    isActive 
                      ? "bg-[var(--color-primary)] text-black font-bold shadow-lg shadow-[var(--color-primary)]/20" 
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  {item.name}
                </Link>
              )
            })}
          </nav>

          <div className="p-4 border-t border-white/10">
            <button 
              onClick={handleLogout}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 w-full transition-all"
            >
              <LogOut className="w-5 h-5" />
              Logout
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto h-screen">
          <div className="md:hidden flex items-center justify-between p-4 border-b border-white/10 bg-[#0A0A0A]">
              <Image src="/logo.png" alt="MSR" width={100} height={40} className="w-auto h-8 object-contain" />
              <div className="flex gap-4">
                  <Link href="/admin/create" className="text-[var(--color-primary)]"><PlusCircle /></Link>
                  <button onClick={handleLogout} className="text-red-400"><LogOut /></button>
              </div>
          </div>
          <div className="p-6 md:p-12 max-w-7xl mx-auto">
             {children}
          </div>
        </main>
      </div>
    </ToastProvider>
  );
}
