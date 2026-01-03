"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { setCookie } from "cookies-next";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "admin@gmail.com" && password === "admin") {
      setCookie("admin_session", "true", { maxAge: 60 * 60 * 24 }); // 1 day
      router.push("/admin/dashboard");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl">
        <div className="flex justify-center mb-8">
            <Image src="/logo.png" alt="MSR" width={200} height={80} className="w-auto h-16" />
        </div>
        
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Admin Access</h2>
        
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-primary)] transition-colors"
              placeholder="admin@gmail.com"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-primary)] transition-colors"
              placeholder="••••••••"
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <button
            type="submit"
            className="w-full bg-[var(--color-primary)] text-black font-bold py-3 rounded-lg hover:bg-white transition-colors"
          >
            Login to Dashboard
          </button>
        </form>
      </div>
    </div>
  );
}
