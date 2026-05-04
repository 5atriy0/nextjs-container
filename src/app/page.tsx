import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center p-6 font-[family-name:var(--font-geist-sans)]">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/20 rounded-full blur-[120px] animate-pulse delay-700"></div>
      </div>

      <main className="relative z-10 w-full max-w-2xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl hover:translate-y-[-4px] transition-transform duration-500">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-white/20 bg-neutral-900 flex items-center justify-center">
              <Image
                src="/my-profile.png"
                alt="Profile Picture"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                Satriyo Bagus Susianto
              </span>
            </h1>
            <p className="text-gray-400 text-lg font-mono">
              Student ID: <span className="text-blue-400">2341720249</span>
            </p>
          </div>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-10"></div>

        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-200 flex items-center gap-2">
            <svg
              className="w-5 h-5 text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
            Tech Interests
          </h2>
          
          <div className="flex flex-wrap gap-3">
            {[
              { name: "Data Analyst", color: "from-blue-500/20 to-blue-600/20", border: "border-blue-500/30", text: "text-blue-300" },
              { name: "Web Development", color: "from-emerald-500/20 to-emerald-600/20", border: "border-emerald-500/30", text: "text-emerald-300" },
            ].map((interest) => (
              <span
                key={interest.name}
                className={`px-4 py-2 rounded-full border ${interest.border} bg-gradient-to-br ${interest.color} ${interest.text} text-sm font-medium hover:scale-105 transition-transform cursor-default shadow-lg shadow-black/20`}
              >
                {interest.name}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 text-center">
          <p className="text-gray-500 text-sm italic">
            "POLINEMA Student - Information Technology Department"
          </p>
        </div>
      </main>
    </div>
  );
}
