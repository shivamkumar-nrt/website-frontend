"use client";

import React from 'react';
import Link from 'next/link';
import { Cpu, Globe, Smartphone, ChevronRight, Menu } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500 selection:text-white overflow-hidden relative">
      
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/20 via-purple-900/10 to-transparent blur-3xl"></div>
      </div>

      {/* Navbar */}
      <nav className="flex items-center justify-between p-6 border-b border-white/10 backdrop-blur-md fixed w-full z-50 top-0 bg-black/50">
        <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 tracking-tighter">
          NEWRISE TECHNOSYS
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <Link href="/about" className="hover:text-white transition-colors">About</Link>
          <Link href="/services" className="hover:text-white transition-colors">Services</Link>
          <Link href="/careers" className="hover:text-white transition-colors">Careers</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <Link href="/admin" className="text-xs px-4 py-2 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all">
            Admin Panel
          </Link>
        </div>
        <button className="md:hidden text-white">
          <Menu size={24} />
        </button>
      </nav>

      {/* Hero Section */}
      <main className="pt-40 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-8 tracking-wide"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          FULL AI-POWERED IT COMPANY
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight"
        >
          Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600">Future</span> of <br/> Intelligence
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-400 max-w-2xl text-lg md:text-xl mb-12 leading-relaxed"
        >
          Newrise Technosys specializes in cutting-edge Artificial Intelligence, custom Software Development, and next-generation Mobile Applications for global enterprises.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link href="/contact" className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all flex items-center justify-center gap-2">
            Start a Project <ChevronRight size={18} />
          </Link>
          <Link href="/services" className="px-8 py-4 bg-transparent border border-gray-700 text-white font-semibold rounded-lg hover:border-gray-500 transition-all flex items-center justify-center">
            Explore Services
          </Link>
        </motion.div>
      </main>

      {/* Feature Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-3 gap-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.05] transition-colors group cursor-pointer"
        >
          <Cpu className="w-12 h-12 text-blue-400 mb-6 group-hover:scale-110 transition-transform" />
          <h3 className="text-2xl font-bold mb-3">AI & Machine Learning</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            We develop intelligent systems that learn, adapt, and automate complex business processes to give you a competitive edge.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.05] transition-colors group cursor-pointer"
        >
          <Globe className="w-12 h-12 text-purple-400 mb-6 group-hover:scale-110 transition-transform" />
          <h3 className="text-2xl font-bold mb-3">Custom Web Platforms</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Scalable, highly secure, and blazing fast web applications built with modern stacks tailored exactly to your enterprise needs.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.05] transition-colors group cursor-pointer"
        >
          <Smartphone className="w-12 h-12 text-indigo-400 mb-6 group-hover:scale-110 transition-transform" />
          <h3 className="text-2xl font-bold mb-3">Mobile Applications</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Native and cross-platform mobile experiences that combine beautiful UI with powerful on-device AI capabilities.
          </p>
        </motion.div>
      </section>
      
      {/* Footer minimal */}
      <footer className="py-8 text-center text-gray-600 text-sm border-t border-white/10">
        &copy; {new Date().getFullYear()} Newrise Technosys. All rights reserved.
      </footer>
    </div>
  );
}
