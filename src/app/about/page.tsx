export default function About() {
  return (
    <div className="px-6 max-w-7xl mx-auto pt-20 pb-32">
      <h1 className="text-6xl md:text-8xl font-light tracking-tighter mb-12">
        About <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Newrise</span>
      </h1>
      
      <p className="text-gray-300 text-2xl md:text-3xl font-light leading-relaxed max-w-4xl mb-32">
        We are an AI-first software company. Our mission is to empower businesses with intelligent solutions, removing the friction between human ambition and technological limits.
      </p>

      <div className="flex flex-col gap-20 border-t border-white/10 pt-20">
        <div>
          <h3 className="text-4xl font-light mb-6">Our Vision</h3>
          <p className="text-gray-400 text-xl font-light max-w-3xl leading-relaxed">
            To be the global standard in delivering cutting-edge AI and mobile technologies that drive human progress, automation, and a connected future.
          </p>
        </div>
        
        <div>
          <h3 className="text-4xl font-light mb-6">Our Approach</h3>
          <p className="text-gray-400 text-xl font-light max-w-3xl leading-relaxed">
            We don't use templates. Every system is built from the ground up to be highly scalable, secure, and intelligent, solving real-world problems for enterprises and startups alike.
          </p>
        </div>
      </div>
    </div>
  );
}
