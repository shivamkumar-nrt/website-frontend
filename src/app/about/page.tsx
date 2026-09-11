export default function About() {
  return (
    <div className="min-h-screen pt-32 px-6 max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
        About Newrise Technosys
      </h1>
      <p className="text-gray-400 text-lg leading-relaxed mb-6 max-w-3xl">
        We are an AI-first software development company dedicated to transforming ideas into reality. 
        Our mission is to empower businesses with intelligent solutions, custom software, and robust mobile applications.
      </p>
      <div className="grid md:grid-cols-2 gap-8 mt-12">
        <div className="p-8 border border-white/10 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] transition-colors">
          <h3 className="text-2xl font-bold mb-3 text-white">Our Vision</h3>
          <p className="text-gray-400">To be the global leader in delivering cutting-edge AI and mobile technologies that drive human progress and automation.</p>
        </div>
        <div className="p-8 border border-white/10 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] transition-colors">
          <h3 className="text-2xl font-bold mb-3 text-white">Our Mission</h3>
          <p className="text-gray-400">To build highly scalable, secure, and intelligent systems that solve real-world problems for enterprises and startups alike.</p>
        </div>
      </div>
    </div>
  );
}
