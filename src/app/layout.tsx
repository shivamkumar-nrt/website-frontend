import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from 'next/link';
import { BrainCircuit } from 'lucide-react';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Newrise Technosys | AI Software Company",
  description: "AI-based software development, mobile application, full AI company.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-black text-white antialiased selection:bg-purple-500/30 flex flex-col min-h-screen`}>
        
        {/* Global Navbar - Borderless, clean */}
        <nav className="fixed w-full z-50 top-0 bg-black/60 backdrop-blur-2xl">
          <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <BrainCircuit className="w-8 h-8 text-purple-500" />
              <span className="text-xl font-bold tracking-widest uppercase">Newrise</span>
            </div>
            <div className="hidden md:flex gap-10 text-sm font-medium text-gray-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <Link href="/about" className="hover:text-white transition-colors">About</Link>
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <Link href="/careers" className="hover:text-white transition-colors">Careers</Link>
            </div>
            <div className="flex gap-6 items-center">
              <Link href="/admin" className="hidden md:block text-xs text-gray-600 hover:text-white transition-colors">Admin</Link>
              <Link href="/contact" className="text-sm font-bold text-white hover:text-purple-400 transition-colors">
                Let's Talk →
              </Link>
            </div>
          </div>
        </nav>

        {/* Main Content Area */}
        <main className="flex-grow pt-24">
          {children}
        </main>

        {/* Global Footer - Minimal */}
        <footer className="w-full px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-600 max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <BrainCircuit className="w-5 h-5 opacity-50" />
            <span>&copy; {new Date().getFullYear()} Newrise Technosys. All rights reserved.</span>
          </div>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
