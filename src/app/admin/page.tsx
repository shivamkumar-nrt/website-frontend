"use client";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function AdminLogin() {
  const router = useRouter();
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') {
      router.push('/admin/dashboard');
    } else {
      alert('Incorrect Password!');
    }
  };

  return (
    <div className="min-h-screen pt-32 flex justify-center px-6">
      <form onSubmit={handleLogin} className="w-full max-w-md bg-white/[0.02] p-8 rounded-2xl border border-white/10 space-y-6">
        <h1 className="text-2xl font-bold text-center text-blue-400">Admin Access</h1>
        <div>
          <label className="block text-sm mb-2 text-gray-400">Password</label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} required className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500" placeholder="Enter password (admin123)" />
        </div>
        <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-bold transition-colors">Login</button>
      </form>
    </div>
  );
}
