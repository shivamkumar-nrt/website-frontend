"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="px-6 max-w-7xl mx-auto pb-32">
      
      {/* Background Orbs (No boxes, just light) */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-[10%] left-[20%] w-96 h-96 bg-purple-600/10 rounded-full blur-[150px] mix-blend-screen"></div>
        <div className="absolute top-[40%] right-[10%] w-[40rem] h-[40rem] bg-blue-600/10 rounded-full blur-[150px] mix-blend-screen"></div>
      </div>

      {/* Hero Section - Open Typography */}
      <main className="pt-32 pb-40 flex flex-col items-start text-left">
        <motion.p 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
          className="text-purple-400 font-medium tracking-wide mb-6 uppercase text-sm"
        >
          Next-Generation Artificial Intelligence
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
          className="text-6xl md:text-[7rem] font-light tracking-tighter mb-10 leading-[1.05]"
        >
          Intelligence, <br/>
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            Engineered.
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
          className="text-gray-400 max-w-2xl text-xl md:text-2xl font-light leading-relaxed"
        >
          We craft intelligent ecosystems that learn, adapt, and scale. No boundaries, just pure innovation. Welcome to the new era of computing.
        </motion.p>
      </main>

      {/* Services List - Open text layout, NO BOXES */}
      <section className="py-20 flex flex-col gap-24">
        
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">Enterprise AI Models</h2>
            <p className="text-gray-400 text-lg leading-relaxed">Custom-trained neural networks and LLM integrations designed specifically for your proprietary data architecture. We build AI that understands your business at its core.</p>
          </div>
          <div className="h-px w-full bg-gradient-to-r from-purple-500/50 to-transparent md:hidden"></div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 h-px w-full bg-gradient-to-l from-blue-500/50 to-transparent md:bg-transparent"></div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">Cloud Native Scale</h2>
            <p className="text-gray-400 text-lg leading-relaxed">Serverless architectures that scale infinitely from day one. Blazing fast web platforms engineered with Next.js, Spring Boot, and robust microservices.</p>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">Smart Mobile</h2>
            <p className="text-gray-400 text-lg leading-relaxed">On-device machine learning for lightning-fast mobile experiences. We bring heavy AI compute power directly to the user's pocket without sacrificing battery life.</p>
          </div>
        </motion.div>

      </section>
    </div>
  );
}
