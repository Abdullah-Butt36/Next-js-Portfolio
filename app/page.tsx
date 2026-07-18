import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Abdullah Butt | Full-Stack Developer",
  description: "Welcome to the portfolio of Abdullah Butt, a Full-Stack Developer specializing in React and modern web solutions.",
};

export default function Home() {
  return (
    <>
      <section className="min-h-[calc(100vh-70px)] flex justify-center items-center gap-20 py-20 px-6 md:px-24 bg-gradient-to-br from-[#0a0f1e] via-[#0d1b2a] to-[#0a0f1e] text-[#f0f0f0] overflow-hidden relative flex-wrap">
      {/* Animated background blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute rounded-full filter blur-[80px] opacity-20 w-[500px] h-[500px] -top-[150px] -left-[150px] animate-float-blob"
          style={{ background: "radial-gradient(circle, #00d2ff, #3a7bd5)" }}
        ></div>
        <div 
          className="absolute rounded-full filter blur-[80px] opacity-20 w-[400px] h-[400px] -bottom-[100px] -right-[100px] animate-float-blob"
          style={{ background: "radial-gradient(circle, #7c3aed, #00d2ff)", animationDelay: "3s" }}
        ></div>
        <div 
          className="absolute rounded-full filter blur-[80px] opacity-20 w-[300px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-float-blob"
          style={{ background: "radial-gradient(circle, #f43f5e, #7c3aed)", animationDelay: "6s" }}
        ></div>
      </div>

      {/* Main Content Column */}
      <div className="flex-1 basis-[400px] max-w-[560px] relative z-10 opacity-0 animate-fade-in-left">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#00d2ff]/8 border border-[#00d2ff]/25 rounded-full py-[0.35rem] px-4 text-[0.85rem] text-[#00d2ff] font-medium mb-6 tracking-[0.3px]">
          <span className="w-2 h-2 bg-[#00d2ff] rounded-full animate-badge-pulse"></span>
          Available for Work
        </div>

        {/* Title */}
        <h1 className="text-[2.6rem] sm:text-[3rem] md:text-[3.8rem] font-extrabold leading-[1.15] text-[#f1f5f9] m-0 mb-2 tracking-[-1px]">
          Hi, I'm <br />
          <span className="bg-gradient-to-r from-white via-[#00d2ff] to-[#3a7bd5] bg-clip-text text-transparent">
            Abdullah Butt
          </span>
        </h1>

        {/* Role */}
        <p className="text-[1.15rem] text-[#cbd5e1] mt-2 mb-6 font-medium">
          Full-Stack Developer
        </p>

        {/* Tagline */}
        <p className="text-[1.05rem] text-[#94a3b8] leading-[1.75] mb-10 max-w-[480px]">
          Passionate about crafting clean, responsive, and high-performance web experiences using <strong className="text-[#e2e8f0] font-semibold">React.js, Next.js, TypeScript</strong>, and modern technologies.
        </p>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 md:gap-4 flex-wrap sm:flex-nowrap mb-12">
          <Link href="/projects" className="group inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full text-sm md:text-base font-semibold transition-all duration-300 cursor-pointer bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] text-white shadow-[0_8px_24px_rgba(0,210,255,0.25)] hover:-translate-y-[3px] hover:shadow-[0_12px_32px_rgba(0,210,255,0.4)] whitespace-nowrap">
            View My Work
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
          <a href="/Abdullah Aslam - Professional Resume.pdf" download className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full text-sm md:text-base font-semibold transition-all duration-300 cursor-pointer bg-[#00d2ff]/8 border border-[#00d2ff]/25 text-[#00d2ff] hover:bg-[#00d2ff]/15 hover:border-[#00d2ff] hover:shadow-[0_8px_24px_rgba(0,210,255,0.2)] hover:-translate-y-[3px] whitespace-nowrap">
            Download CV
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </a>
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full text-sm md:text-base font-semibold transition-all duration-300 cursor-pointer bg-transparent text-[#cbd5e1] border border-white/15 hover:bg-white/6 hover:border-white/30 hover:text-white hover:-translate-y-[3px] whitespace-nowrap">
            Contact Me
          </Link>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-6">
          <div className="flex flex-col gap-[0.2rem]">
            <span className="text-[1.6rem] font-bold text-white leading-none">1.5+</span>
            <span className="text-[0.75rem] text-[#64748b] uppercase tracking-[1px] font-medium">Years Exp.</span>
          </div>
          <div className="w-[1px] h-[35px] bg-white/10"></div>
          <div className="flex flex-col gap-[0.2rem]">
            <span className="text-[1.6rem] font-bold text-white leading-none">10+</span>
            <span className="text-[0.75rem] text-[#64748b] uppercase tracking-[1px] font-medium">Projects</span>
          </div>
          <div className="w-[1px] h-[35px] bg-white/10"></div>
          <div className="flex flex-col gap-[0.2rem]">
            <span className="text-[1.6rem] font-bold text-white leading-none">5+</span>
            <span className="text-[0.75rem] text-[#64748b] uppercase tracking-[1px] font-medium">Technologies</span>
          </div>
        </div>
      </div>

      {/* Image Column */}
      <div 
        className="flex-1 basis-[280px] max-w-[360px] flex justify-center items-center relative z-10 opacity-0 animate-fade-in-right" 
        style={{ animationDelay: "0.2s" }}
      >
        <div className="absolute w-[110%] h-[110%] rounded-full z-0 blur-[4px] opacity-60 animate-spin-ring bg-gradient-to-r from-transparent via-[#00d2ff] to-[#3a7bd5]"></div>
        <div className="relative z-10 rounded-full p-[5px] bg-gradient-to-br from-[#00d2ff] via-[#3a7bd5] to-[#7c3aed]">
          <Image
            src="/pic.png"
            alt="Abdullah Butt"
            width={300}
            height={300}
            priority
            className="block w-full max-w-[300px] aspect-square rounded-full object-cover border-4 border-[#0a0f1e]"
          />
        </div>
        </div>
      </section>
    </>
  );
}

