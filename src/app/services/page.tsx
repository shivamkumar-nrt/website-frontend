export default function Services() {
  return (
    <div className="min-h-screen pt-32 px-6 max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
        Our Core Services
      </h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-8 border border-white/10 rounded-xl bg-white/[0.02]">
          <h3 className="text-2xl font-bold mb-3">AI & Machine Learning</h3>
          <p className="text-gray-400">Integrate generative AI, predictive analytics, and natural language processing into your existing enterprise workflows.</p>
        </div>
        <div className="p-8 border border-white/10 rounded-xl bg-white/[0.02]">
          <h3 className="text-2xl font-bold mb-3">Custom Web Platforms</h3>
          <p className="text-gray-400">High-performance Next.js and Spring Boot applications designed from scratch to scale to millions of users.</p>
        </div>
        <div className="p-8 border border-white/10 rounded-xl bg-white/[0.02]">
          <h3 className="text-2xl font-bold mb-3">Mobile Applications</h3>
          <p className="text-gray-400">Native iOS and Android applications with built-in on-device AI models for real-time data processing.</p>
        </div>
        <div className="p-8 border border-white/10 rounded-xl bg-white/[0.02]">
          <h3 className="text-2xl font-bold mb-3">Cloud & DevOps</h3>
          <p className="text-gray-400">Robust cloud infrastructure and automated Docker deployment pipelines ensuring 99.9% uptime.</p>
        </div>
      </div>
    </div>
  );
}
