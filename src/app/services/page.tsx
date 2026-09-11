export default function Services() {
  return (
    <div className="px-6 max-w-7xl mx-auto pt-20 pb-32">
      <h1 className="text-6xl md:text-8xl font-light tracking-tighter mb-20">
        Our <span className="font-bold">Services</span>
      </h1>
      
      <div className="flex flex-col">
        {/* Service Items - Open layout separated by thin lines */}
        <div className="py-16 border-t border-white/10 grid md:grid-cols-2 gap-8">
          <h3 className="text-3xl md:text-4xl font-light">AI & Machine Learning</h3>
          <p className="text-gray-400 text-lg leading-relaxed">
            Integrate generative AI, predictive analytics, and natural language processing into your existing enterprise workflows.
          </p>
        </div>

        <div className="py-16 border-t border-white/10 grid md:grid-cols-2 gap-8">
          <h3 className="text-3xl md:text-4xl font-light">Custom Web Platforms</h3>
          <p className="text-gray-400 text-lg leading-relaxed">
            High-performance Next.js and Spring Boot applications designed from scratch to scale to millions of users.
          </p>
        </div>

        <div className="py-16 border-t border-white/10 grid md:grid-cols-2 gap-8">
          <h3 className="text-3xl md:text-4xl font-light">Mobile Applications</h3>
          <p className="text-gray-400 text-lg leading-relaxed">
            Native iOS and Android applications with built-in on-device AI models for real-time data processing.
          </p>
        </div>

        <div className="py-16 border-t border-white/10 grid md:grid-cols-2 gap-8 border-b">
          <h3 className="text-3xl md:text-4xl font-light">Cloud & DevOps</h3>
          <p className="text-gray-400 text-lg leading-relaxed">
            Robust cloud infrastructure and automated Docker deployment pipelines ensuring 99.9% uptime.
          </p>
        </div>
      </div>
    </div>
  );
}
