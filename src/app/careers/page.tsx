export default function Careers() {
  return (
    <div className="min-h-screen pt-32 px-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
        Join Our Team
      </h1>
      <p className="text-gray-400 mb-12">
        Help us build the future of artificial intelligence. We are always looking for passionate engineers and innovators.
      </p>

      <div className="space-y-6">
        {/* Placeholder for Job Postings */}
        <div className="p-6 border border-white/10 rounded-xl bg-white/[0.02] flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Senior AI Engineer</h3>
            <p className="text-gray-400 text-sm mb-2">Remote / Full-time</p>
            <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-500/20">Engineering</span>
          </div>
          <button className="mt-4 md:mt-0 px-6 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-200">
            Apply Now
          </button>
        </div>

        <div className="p-6 border border-white/10 rounded-xl bg-white/[0.02] flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Full-Stack Next.js Developer</h3>
            <p className="text-gray-400 text-sm mb-2">Remote / Full-time</p>
            <span className="px-3 py-1 bg-purple-500/10 text-purple-400 text-xs rounded-full border border-purple-500/20">Web Dev</span>
          </div>
          <button className="mt-4 md:mt-0 px-6 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-200">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}
