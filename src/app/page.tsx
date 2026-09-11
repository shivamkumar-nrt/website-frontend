"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="px-6 max-w-7xl mx-auto pb-10 overflow-hidden">
      
      {/* Background Orbs */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-[10%] left-[20%] w-96 h-96 bg-purple-600/10 rounded-full blur-[150px] mix-blend-screen"></div>
        <div className="absolute top-[40%] right-[10%] w-[40rem] h-[40rem] bg-blue-600/10 rounded-full blur-[150px] mix-blend-screen"></div>
      </div>

      {/* Hero Section */}
      <main className="pt-32 pb-40 flex flex-col items-start text-left min-h-[90vh] justify-center">
        <motion.p initial="hidden" animate="visible" variants={fadeUp} className="text-purple-400 font-medium tracking-widest mb-6 uppercase text-sm">
          Welcome to Newrise Technosys
        </motion.p>
        
        <motion.h1 initial="hidden" animate="visible" variants={fadeUp} className="text-6xl md:text-[8rem] font-light tracking-tighter mb-10 leading-[1.05]">
          Intelligence, <br/>
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">
            Engineered.
          </span>
        </motion.h1>
        
        <motion.p initial="hidden" animate="visible" variants={fadeUp} className="text-gray-400 max-w-3xl text-xl md:text-2xl font-light leading-relaxed mb-12">
          We are an elite software engineering firm specializing in artificial intelligence, full-stack web platforms, and mobile applications. We build systems that learn, adapt, and scale globally.
        </motion.p>
        
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <Link href="/contact" className="px-10 py-5 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors inline-block">
            Start Your Project
          </Link>
        </motion.div>
      </main>

      {/* About Section */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="py-32 border-t border-white/10">
        <h2 className="text-sm font-bold tracking-widest uppercase text-gray-500 mb-8">Who We Are</h2>
        <div className="grid md:grid-cols-2 gap-16">
          <h3 className="text-4xl md:text-5xl font-light leading-snug text-white">
            Pioneering the next generation of digital infrastructure.
          </h3>
          <div className="text-gray-400 text-lg font-light leading-relaxed space-y-6">
            <p>
              At Newrise Technosys, we believe that artificial intelligence is not just a feature—it is the foundation of modern technology. Our team comprises world-class engineers, data scientists, and designers dedicated to pushing the boundaries of what is possible.
            </p>
            <p>
              Whether it is training custom machine learning models, deploying highly scalable cloud architectures, or designing intuitive mobile interfaces, we deliver end-to-end solutions that transform enterprises.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Comprehensive Services Section */}
      <section className="py-32 border-t border-white/10">
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-sm font-bold tracking-widest uppercase text-gray-500 mb-16">
          Our Capabilities
        </motion.h2>
        
        <div className="flex flex-col gap-24">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-4 text-3xl font-light text-purple-400">01</div>
            <div className="md:col-span-8">
              <h3 className="text-4xl md:text-5xl font-light mb-6 tracking-tight text-white">Enterprise AI Models</h3>
              <p className="text-gray-400 text-lg leading-relaxed max-w-3xl">
                We design and integrate custom-trained neural networks, Large Language Models (LLMs), and predictive analytics tailored to your proprietary data. Our AI solutions automate complex business workflows, enhance decision-making, and provide deep insights that drive growth.
              </p>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-4 text-3xl font-light text-blue-400">02</div>
            <div className="md:col-span-8">
              <h3 className="text-4xl md:text-5xl font-light mb-6 tracking-tight text-white">Cloud-Native Web Platforms</h3>
              <p className="text-gray-400 text-lg leading-relaxed max-w-3xl">
                Using powerful frameworks like Next.js, React, and Spring Boot, we engineer blazing-fast, secure, and scalable web applications. Our serverless and microservices architectures ensure that your platform can handle millions of users seamlessly from day one.
              </p>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-4 text-3xl font-light text-cyan-400">03</div>
            <div className="md:col-span-8">
              <h3 className="text-4xl md:text-5xl font-light mb-6 tracking-tight text-white">Intelligent Mobile Apps</h3>
              <p className="text-gray-400 text-lg leading-relaxed max-w-3xl">
                We bring heavy compute power directly to the user's pocket. By embedding on-device machine learning models into native iOS and Android applications, we deliver lightning-fast, highly personalized mobile experiences that don't compromise battery life.
              </p>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-4 text-3xl font-light text-white">04</div>
            <div className="md:col-span-8">
              <h3 className="text-4xl md:text-5xl font-light mb-6 tracking-tight text-white">Cloud & DevOps</h3>
              <p className="text-gray-400 text-lg leading-relaxed max-w-3xl">
                Security and uptime are non-negotiable. We build robust cloud infrastructures using AWS, Docker, and Kubernetes. Our automated CI/CD pipelines ensure rapid deployment and continuous integration without downtime.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="py-32 border-t border-white/10">
         <div className="text-center max-w-4xl mx-auto">
           <h2 className="text-4xl md:text-5xl font-light mb-8 text-white">Powered by the best technologies.</h2>
           <p className="text-gray-400 text-xl font-light leading-relaxed mb-12">
             We leverage a modern, enterprise-grade technology stack to ensure your products are built for the future.
           </p>
           <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 text-2xl md:text-3xl font-bold text-gray-700">
              <span className="hover:text-white transition-colors cursor-default">Next.js</span>
              <span className="hover:text-white transition-colors cursor-default">React</span>
              <span className="hover:text-white transition-colors cursor-default">Spring Boot</span>
              <span className="hover:text-white transition-colors cursor-default">PostgreSQL</span>
              <span className="hover:text-white transition-colors cursor-default">TensorFlow</span>
              <span className="hover:text-white transition-colors cursor-default">OpenAI</span>
              <span className="hover:text-white transition-colors cursor-default">AWS</span>
              <span className="hover:text-white transition-colors cursor-default">Docker</span>
           </div>
         </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="py-32 border-t border-white/10 text-center">
        <h2 className="text-5xl md:text-7xl font-light tracking-tighter mb-8 text-white">Ready to innovate?</h2>
        <p className="text-gray-400 text-xl font-light mb-12">Let's build something extraordinary together.</p>
        <Link href="/contact" className="px-12 py-6 bg-white text-black text-lg font-bold rounded-full hover:bg-gray-200 transition-colors inline-block">
          Get in Touch
        </Link>
      </motion.section>

    </div>
  );
}
