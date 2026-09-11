"use client";
import React, { useEffect, useState } from 'react';

export default function AdminDashboard() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/contact')
      .then(res => res.json())
      .then(data => setMessages(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="min-h-screen pt-32 px-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-blue-400">Admin Dashboard</h1>
      
      <div className="bg-white/[0.02] border border-white/10 p-6 rounded-xl">
        <h2 className="text-xl font-bold mb-6">Recent Contact Inquiries</h2>
        {messages.length === 0 ? <p className="text-gray-400">No messages yet.</p> : (
          <div className="space-y-4">
            {messages.map((m: any) => (
              <div key={m.id} className="p-4 bg-black border border-gray-800 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <p className="font-bold text-white">{m.name} <span className="text-gray-500 text-sm font-normal">({m.email})</span></p>
                  <span className="text-xs text-gray-500">{m.createdAt ? new Date(m.createdAt).toLocaleDateString() : 'Just now'}</span>
                </div>
                <p className="text-sm font-semibold text-blue-300 mt-1">{m.subject}</p>
                <p className="text-gray-400 text-sm mt-2">{m.message}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
