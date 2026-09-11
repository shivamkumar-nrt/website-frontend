"use client";
import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const res = await fetch('http://localhost:8080/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setStatus('Message Sent Successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('Failed to send message.');
      }
    } catch (err) {
      setStatus('Error connecting to server.');
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Contact Us</h1>
      <p className="text-gray-400 mb-10 text-center">Ready to start your next AI project? Drop us a message.</p>
      
      <form className="space-y-6 bg-white/[0.02] p-8 rounded-2xl border border-white/10" onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-300">Your Name</label>
            <input type="text" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500" placeholder="John Doe" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-300">Email Address</label>
            <input type="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500" placeholder="john@example.com" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-300">Subject</label>
          <input type="text" required value={formData.subject} onChange={e => setFormData({...formData, subject: e.target.value})} className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500" placeholder="AI Project Inquiry" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-300">Message</label>
          <textarea rows={5} required value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500" placeholder="Tell us about your requirements..."></textarea>
        </div>
        <button type="submit" className="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-bold transition-colors">
          {status || 'Send Message'}
        </button>
      </form>
    </div>
  );
}
