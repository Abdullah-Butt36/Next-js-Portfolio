import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Projects | Abdullah Butt",
  description:
    "Explore the latest projects by Abdullah Butt, including ERP systems, AI developer tools, and more.",
};

const projects = [
  {
    title: "CodeFix - Developer Utility Suite",
    category: "Full-Stack Web App",
    description:
      "A high-performance platform for developers featuring a community Q&A forum (Stack Overflow Clone), an AI Coding Assistant, high-speed conversion tools, and essential developer utilities. Designed for seamless workflow optimization.",
    image: "/codefix.jpg",
    tech: ["React.js", "Supabase", "Tailwind CSS", "Framer Motion"],
    links: {
      live: "https://codefix-website-iota.vercel.app/",
      github:
        "https://github.com/codefixplatform-tech/codefix_website.git",
    },
    featured: true,
  },
  {
    title: "Faran Traders - ERP Solution",
    category: "Full-Stack Web App",
    description:
      "A professional business management system migrated from PHP to React and Supabase. It features real-time tracking of customers, suppliers, and ledger items with dynamic data visualization via interactive charts and custom print logic for business reports.",
    image: "/faran.jpg",
    tech: ["React.js", "Supabase", "Framer Motion", "Charts", "Print Logic"],
    links: {
      live: "https://faran-traders-management.vercel.app/",
      github:
        "https://github.com/Abdullah-Butt36/Faran-Traders-Management.git",
    },
    featured: false,
  },
  {
    title: "Premium Real Estate Hub",
    category: "Web Application",
    description:
      "A modern real estate platform focused on visual clarity and user experience. Implemented dynamic property filtering, interactive map integrations, and real-time data fetching for up-to-date listings.",
    image: "/realstate.jpg",
    tech: ["React.js", "Context API", "CSS Modules", "REST API"],
    links: {
      live: "#",
      github: "https://github.com/Abdullah-Butt36",
    },
    featured: false,
  },
];

/* ── Inline SVG icons (no Font Awesome) ── */
const GithubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

export default function ProjectsPage() {
  return (
    <section className="relative min-h-[calc(100vh-70px)] py-20 px-6 md:px-24 bg-gradient-to-b from-[#0d1b2a] to-[#0a0f1e] text-[#f0f0f0] overflow-hidden flex flex-col justify-center">
      {/* ── Background Blobs (matched to About page specs) ── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          className="absolute rounded-full filter blur-[100px] opacity-4 w-[320px] h-[320px] -top-[50px] -right-[50px] animate-pulse-slow"
          style={{ background: "radial-gradient(circle, #3a7bd5, #00d2ff)" }}
        />
        <div
          className="absolute rounded-full filter blur-[100px] opacity-4 w-[280px] h-[280px] -bottom-[50px] -left-[50px] animate-pulse-slow"
          style={{ background: "radial-gradient(circle, #7c3aed, #3a7bd5)", animationDelay: "3s" }}
        />
      </div>

      <div className="max-w-[1100px] mx-auto w-full relative z-10">
        {/* ── Header ── */}
        <div className="text-center mb-16 opacity-0 animate-fade-in-left">
          <span className="inline-block bg-[#00d2ff]/8 border border-[#00d2ff]/20 text-[#00d2ff] text-xs font-semibold tracking-[2px] uppercase py-[0.35rem] px-[1.2rem] rounded-full mb-4">
            Selected Works
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#f1f5f9] my-2 tracking-[-0.5px]">
            Featured{" "}
            <span className="bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-[60px] h-[3px] bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] mx-auto mt-4 rounded-[2px]" />
        </div>

        {/* ── Projects Grid ── */}
        <div className="flex flex-col gap-12 max-w-[700px] mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group rounded-[28px] overflow-hidden flex flex-col w-full border transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-4 hover:shadow-[0_50px_100px_rgba(0,0,0,0.5)] opacity-0 ${
                project.featured
                  ? "border-[#00d2ff]/20 bg-[#00d2ff]/[0.02] hover:border-[#00d2ff]/40 hover:bg-white/[0.04]"
                  : "border-white/[0.08] bg-white/[0.02] hover:border-[#00d2ff]/30 hover:bg-white/[0.04]"
              } ${index % 2 === 0 ? "animate-fade-in-left" : "animate-fade-in-right"}`}
              style={{ animationDelay: `${0.15 * (index + 1)}s` }}
            >
              {/* ── Image ── */}
              <div className="relative w-full overflow-hidden bg-black/20">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={700}
                  height={400}
                  className="w-full h-auto block transition-transform duration-600 ease-out group-hover:scale-110"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#0a0f1e]/60 backdrop-blur-[4px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                  <div className="flex gap-6">
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View Source"
                      className="w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center text-[#0d1b2a] transition-all duration-300 hover:bg-[#00d2ff] hover:text-white hover:-translate-y-[5px]"
                    >
                      <GithubIcon />
                    </a>
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Live Demo"
                      className="w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center text-[#0d1b2a] transition-all duration-300 hover:bg-[#00d2ff] hover:text-white hover:-translate-y-[5px]"
                    >
                      <ExternalLinkIcon />
                    </a>
                  </div>
                </div>
              </div>

              {/* ── Content ── */}
              <div className="p-8 flex flex-col flex-grow">
                {/* Meta row */}
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[0.75rem] font-bold text-[#64748b] uppercase tracking-[1px]">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="bg-[#00d2ff] text-white text-[0.65rem] font-extrabold py-[0.2rem] px-[0.6rem] rounded uppercase">
                      New
                    </span>
                  )}
                </div>

                <h3 className="text-[1.5rem] font-bold text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-[0.95rem] text-[#94a3b8] leading-[1.6] mb-6">
                  {project.description}
                </p>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-[0.6rem] mt-auto">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-[0.75rem] font-semibold text-[#00d2ff] bg-[#00d2ff]/8 border border-[#00d2ff]/10 py-[0.3rem] px-[0.8rem] rounded-full transition-all duration-300 hover:bg-[#00d2ff]/15 hover:border-[#00d2ff]/30"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
