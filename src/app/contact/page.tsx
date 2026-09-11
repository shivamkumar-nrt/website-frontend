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
    <div className="px-6 max-w-4xl mx-auto pt-20 pb-32">
      <h1 className="text-6xl md:text-8xl font-light tracking-tighter mb-6">
        Let's <span className="font-bold">Talk</span>
      </h1>
      <p className="text-gray-400 text-xl font-light mb-20">Ready to start your next AI project? Drop us a message.</p>
      
      {/* Form without boxes - clean minimalist inputs */}
      <form className="space-y-12" onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <input 
              type="text" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} 
              className="w-full bg-transparent border-b border-white/20 py-4 text-white text-lg font-light focus:outline-none focus:border-purple-500 transition-colors placeholder:text-gray-600" 
              placeholder="Your Name" 
            />
          </div>
          <div>
            <input 
              type="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} 
              className="w-full bg-transparent border-b border-white/20 py-4 text-white text-lg font-light focus:outline-none focus:border-purple-500 transition-colors placeholder:text-gray-600" 
              placeholder="Email Address" 
            />
          </div>
        </div>
        <div>
          <input 
            type="text" required value={formData.subject} onChange={e => setFormData({...formData, subject: e.target.value})} 
            className="w-full bg-transparent border-b border-white/20 py-4 text-white text-lg font-light focus:outline-none focus:border-purple-500 transition-colors placeholder:text-gray-600" 
            placeholder="Subject / Project Inquiry" 
          />
        </div>
        <div>
          <textarea 
            rows={4} required value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} 
            className="w-full bg-transparent border-b border-white/20 py-4 text-white text-lg font-light focus:outline-none focus:border-purple-500 transition-colors placeholder:text-gray-600 resize-none" 
            placeholder="Tell us about your requirements..."
          ></textarea>
        </div>
        
        <div className="flex items-center gap-6 pt-4">
          <button type="submit" className="px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors">
            {status || 'Send Message'}
          </button>
        </div>
      </form>
    </div>
  );
}
