import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me | Abdullah Butt",
  description: "Learn more about Abdullah Butt's journey as a Full-Stack Developer and his experience in the MERN stack.",
};

export default function AboutPage() {
  const skills = [
    {
      label: "React.js",
      icon: (
        <svg className="w-4 h-4 text-[#00d2ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M5.636 18.364l3.536-3.536m0-5.656L5.636 5.636M12 9a3 3 0 100 6 3 3 0 000-6z" />
        </svg>
      ),
    },
    {
      label: "Node.js",
      icon: (
        <svg className="w-4 h-4 text-[#00d2ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      label: "JavaScript",
      icon: (
        <svg className="w-4 h-4 text-[#00d2ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      label: "MongoDB",
      icon: (
        <svg className="w-4 h-4 text-[#00d2ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
    },
    {
      label: "Express.js",
      icon: (
        <svg className="w-4 h-4 text-[#00d2ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      label: "Git & GitHub",
      icon: (
        <svg className="w-4 h-4 text-[#00d2ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
    },
    {
      label: "Supabase",
      icon: (
        <svg className="w-4 h-4 text-[#00d2ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      label: "Next.js",
      icon: (
        <svg className="w-4 h-4 text-[#00d2ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 8l6 8m0-8v8" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative min-h-[calc(100vh-70px)] py-20 px-6 md:px-24 bg-gradient-to-b from-[#0d1b2a] to-[#0a0f1e] text-[#f0f0f0] overflow-hidden flex flex-col justify-center">
      {/* Background Blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute rounded-full filter blur-[100px] opacity-4 w-[320px] h-[320px] -top-[50px] -right-[50px] animate-pulse-slow"
          style={{ background: "radial-gradient(circle, #3a7bd5, #00d2ff)" }}
        ></div>
        <div 
          className="absolute rounded-full filter blur-[100px] opacity-4 w-[280px] h-[280px] -bottom-[50px] -left-[50px] animate-pulse-slow"
          style={{ background: "radial-gradient(circle, #7c3aed, #3a7bd5)", animationDelay: "3s" }}
        ></div>
      </div>

      <div className="max-w-[1100px] mx-auto w-full relative z-10">
        {/* Header */}
        <div className="text-center mb-16 opacity-0 animate-fade-in-left">
          <span className="inline-block bg-[#00d2ff]/8 border border-[#00d2ff]/20 text-[#00d2ff] text-xs font-semibold tracking-[2px] uppercase py-[0.35rem] px-[1.2rem] rounded-full mb-4">
            Get To Know Me
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#f1f5f9] my-2 tracking-[-0.5px]">
            About <span className="bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-[60px] h-[3px] bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] mx-auto mt-4 rounded-[2px]"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 items-start">
          {/* Left — Personal Info */}
          <div className="bg-white/[0.03] border border-white/[0.07] rounded-[20px] p-8 backdrop-blur-[10px] transition-all duration-300 hover:border-[#00d2ff]/20 hover:-translate-y-1 opacity-0 animate-fade-in-left" style={{ animationDelay: "0.1s" }}>
            <div className="w-[50px] h-[50px] rounded-[14px] bg-gradient-to-br from-[#00d2ff]/10 to-[#3a7bd5]/10 border border-[#00d2ff]/20 flex items-center justify-center mb-5 text-[1.4rem] text-[#00d2ff]">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-[1.3rem] font-bold text-white mb-4">My Journey</h3>
            <p className="text-[#94a3b8] leading-[1.8] text-[0.97rem] mb-3">
              I'm <strong className="text-[#e2e8f0] font-semibold">Abdullah Butt</strong>, a passionate Full-Stack Developer focused on building clean, performant, and scalable web applications.
            </p>
            <p className="text-[#94a3b8] leading-[1.8] text-[0.97rem] mb-3">
              I have <strong className="text-[#e2e8f0] font-semibold">1.5 years of experience in the MERN stack</strong>, working on hands-on, <strong className="text-[#e2e8f0] font-semibold">company-standard projects</strong>. After building robust foundations with MongoDB, Express, React, and Node.js, I have now transitioned to <strong className="text-[#e2e8f0] font-semibold">Next.js</strong> to develop highly optimized, server-rendered, and SEO-friendly applications.
            </p>
            <p className="text-[#94a3b8] leading-[1.8] text-[0.97rem] mb-0">
              I currently teach web development at the university level, guiding students through the fundamentals of modern web technologies — an experience that deepens my own understanding and keeps my passion alive.
            </p>
          </div>

          {/* Right — Stats + Skills */}
          <div className="flex flex-col gap-8 opacity-0 animate-fade-in-right" style={{ animationDelay: "0.2s" }}>
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl py-6 px-4 text-center flex flex-col gap-[0.4rem] transition-all duration-300 hover:border-[#00d2ff]/25 hover:-translate-y-[3px]">
                <span className="text-3xl font-extrabold bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] bg-clip-text text-transparent leading-none">
                  1.5+
                </span>
                <span className="text-[0.78rem] text-slate-500 uppercase tracking-[0.8px] font-medium">
                  Years of Experience
                </span>
              </div>
              <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl py-6 px-4 text-center flex flex-col gap-[0.4rem] transition-all duration-300 hover:border-[#00d2ff]/25 hover:-translate-y-[3px]">
                <span className="text-3xl font-extrabold bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] bg-clip-text text-transparent leading-none">
                  10+
                </span>
                <span className="text-[0.78rem] text-slate-500 uppercase tracking-[0.8px] font-medium">
                  Projects Completed
                </span>
              </div>
              <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl py-6 px-4 text-center flex flex-col gap-[0.4rem] transition-all duration-300 hover:border-[#00d2ff]/25 hover:-translate-y-[3px]">
                <span className="text-3xl font-extrabold bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] bg-clip-text text-transparent leading-none">
                  10+
                </span>
                <span className="text-[0.78rem] text-slate-500 uppercase tracking-[0.8px] font-medium">
                  Students Mentored
                </span>
              </div>
              <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl py-6 px-4 text-center flex flex-col gap-[0.4rem] transition-all duration-300 hover:border-[#00d2ff]/25 hover:-translate-y-[3px]">
                <span className="text-3xl font-extrabold bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] bg-clip-text text-transparent leading-none">
                  5+
                </span>
                <span className="text-[0.78rem] text-slate-500 uppercase tracking-[0.8px] font-medium">
                  Technologies Mastered
                </span>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="bg-white/[0.03] border border-white/[0.07] rounded-[20px] p-8 backdrop-blur-[10px] transition-all duration-300 hover:border-[#00d2ff]/20 hover:-translate-y-1">
              <h3 className="text-lg font-bold text-white mb-5">Tech I Work With</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <div 
                    className="inline-flex items-center gap-2 bg-[#00d2ff]/5 border border-[#00d2ff]/15 text-slate-400 text-sm font-medium py-1.5 px-4 rounded-full transition-all duration-300 hover:bg-[#00d2ff]/10 hover:border-[#00d2ff]/35 hover:text-[#e2e8f0] hover:-translate-y-[2px]" 
                    key={index}
                  >
                    {skill.icon}
                    <span>{skill.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Passion Block */}
        <div className="flex flex-col md:flex-row items-start gap-6 bg-white/[0.03] border border-white/[0.07] rounded-[20px] p-8 mt-2 transition-colors duration-300 hover:border-rose-500/25 opacity-0 animate-fade-in-left" style={{ animationDelay: "0.3s" }}>
          <div className="flex-shrink-0 w-[50px] h-[50px] bg-rose-500/10 border border-rose-500/25 rounded-[14px] flex items-center justify-center text-[1.3rem] text-rose-500">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
          <div className="passion-content">
            <h3 className="text-lg font-bold text-white mb-2">What Drives Me</h3>
            <p className="text-slate-400 leading-[1.8] text-[0.97rem] m-0">
              Coding isn't just my profession — it's my hobby. I get immense satisfaction from turning ideas into functional, beautiful reality through code. My goal is to build meaningful digital experiences and grow as a dedicated Full-Stack Developer, contributing to exciting projects while constantly expanding my technical expertise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
