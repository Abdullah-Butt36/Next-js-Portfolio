import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills | Abdullah Butt",
  description: "Explore the technical skill set of Abdullah Butt, ranging from React to Supabase and beyond.",
};

export default function SkillsPage() {
  const skillsData = [
    {
      category: "Frontend Architecture",
      icon: (
        <svg className="w-5 h-5 text-[#00d2ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      skills: [
        {
          name: "React.js",
          icon: (
            <svg className="w-4 h-4 text-[#00d2ff] transition-transform duration-300 group-hover/tag:scale-120" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M5.636 18.364l3.536-3.536m0-5.656L5.636 5.636M12 9a3 3 0 100 6 3 3 0 000-6z" />
            </svg>
          ),
        },
        {
          name: "Next.js",
          icon: (
            <svg className="w-4 h-4 text-[#00d2ff] transition-transform duration-300 group-hover/tag:scale-120" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 8l6 8m0-8v8" />
            </svg>
          ),
        },
        {
          name: "Redux Toolkit",
          icon: (
            <svg className="w-4 h-4 text-[#00d2ff] transition-transform duration-300 group-hover/tag:scale-120" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
            </svg>
          ),
        },
        {
          name: "JavaScript (ES6+)",
          icon: (
            <svg className="w-4 h-4 text-[#00d2ff] transition-transform duration-300 group-hover/tag:scale-120" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          ),
        },
        {
          name: "TypeScript",
          icon: (
            <svg className="w-4 h-4 text-[#00d2ff] transition-transform duration-300 group-hover/tag:scale-120" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          ),
        },
        {
          name: "NextAuth.js",
          icon: (
            <svg className="w-4 h-4 text-[#00d2ff] transition-transform duration-300 group-hover/tag:scale-120" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          ),
        },
      ],
    },
    {
      category: "Backend & Cloud",
      icon: (
        <svg className="w-5 h-5 text-[#00d2ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      skills: [
        {
          name: "Node.js",
          icon: (
            <svg className="w-4 h-4 text-[#00d2ff] transition-transform duration-300 group-hover/tag:scale-120" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          ),
        },
        {
          name: "Express.js",
          icon: (
            <svg className="w-4 h-4 text-[#00d2ff] transition-transform duration-300 group-hover/tag:scale-120" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          ),
        },
        {
          name: "Supabase",
          icon: (
            <svg className="w-4 h-4 text-[#00d2ff] transition-transform duration-300 group-hover/tag:scale-120" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          ),
        },
        {
          name: "RESTful APIs",
          icon: (
            <svg className="w-4 h-4 text-[#00d2ff] transition-transform duration-300 group-hover/tag:scale-120" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m-8 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
          ),
        },
        {
          name: "JWT Authentication",
          icon: (
            <svg className="w-4 h-4 text-[#00d2ff] transition-transform duration-300 group-hover/tag:scale-120" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m-9 5a3 3 0 11-6 0 3 3 0 016 0zm6.342-1.658L17 8l4 4-3 3-3-3 1.342-1.658z" />
            </svg>
          ),
        },
      ],
    },
    {
      category: "Databases",
      icon: (
        <svg className="w-5 h-5 text-[#00d2ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      skills: [
        {
          name: "MongoDB",
          icon: (
            <svg className="w-4 h-4 text-[#00d2ff] transition-transform duration-300 group-hover/tag:scale-120" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
            </svg>
          ),
        },
        {
          name: "PostgreSQL",
          icon: (
            <svg className="w-4 h-4 text-[#00d2ff] transition-transform duration-300 group-hover/tag:scale-120" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 22V4c0-.5.2-1 .6-1.4C5 2.2 5.5 2 6 2h12c.5 0 1 .2 1.4.6.4.4.6.9.6 1.4v18l-7-4-7 4z" />
            </svg>
          ),
        },
        {
          name: "SQL",
          icon: (
            <svg className="w-4 h-4 text-[#00d2ff] transition-transform duration-300 group-hover/tag:scale-120" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
            </svg>
          ),
        },
        {
          name: "Mongoose",
          icon: (
            <svg className="w-4 h-4 text-[#00d2ff] transition-transform duration-300 group-hover/tag:scale-120" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          ),
        },
        {
          name: "Firebase",
          icon: (
            <svg className="w-4 h-4 text-[#00d2ff] transition-transform duration-300 group-hover/tag:scale-120" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          ),
        },
      ],
    },
    {
      category: "UI & Animation",
      icon: (
        <svg className="w-5 h-5 text-[#00d2ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      skills: [
        {
          name: "Tailwind CSS",
          icon: (
            <svg className="w-4 h-4 text-[#00d2ff] transition-transform duration-300 group-hover/tag:scale-120" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5l6.74-6.76z" />
              <line x1="16" y1="8" x2="2" y2="22" />
              <line x1="17.5" y1="15" x2="9" y2="23.5" />
            </svg>
          ),
        },
        {
          name: "Framer Motion",
          icon: (
            <svg className="w-4 h-4 text-[#00d2ff] transition-transform duration-300 group-hover/tag:scale-120" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.828 3h4.343L19 7.828V12.17L14.172 17H9.828L5 12.172V7.83L9.828 3z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v8m-4-4h8" />
            </svg>
          ),
        },
        {
          name: "Responsive Design",
          icon: (
            <svg className="w-4 h-4 text-[#00d2ff] transition-transform duration-300 group-hover/tag:scale-120" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
              <line x1="12" y1="18" x2="12" y2="18.01" />
            </svg>
          ),
        },
        {
          name: "Sass / SCSS",
          icon: (
            <svg className="w-4 h-4 text-[#00d2ff] transition-transform duration-300 group-hover/tag:scale-120" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
            </svg>
          ),
        },
        {
          name: "Shadcn UI",
          icon: (
            <svg className="w-4 h-4 text-[#00d2ff] transition-transform duration-300 group-hover/tag:scale-120" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
          ),
        },
        {
          name: "Material UI",
          icon: (
            <svg className="w-4 h-4 text-[#00d2ff] transition-transform duration-300 group-hover/tag:scale-120" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
            </svg>
          ),
        },
      ],
    },
    {
      category: "Tools & Testing",
      icon: (
        <svg className="w-5 h-5 text-[#00d2ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
      skills: [
        {
          name: "Git & GitHub",
          icon: (
            <svg className="w-4 h-4 text-[#00d2ff] transition-transform duration-300 group-hover/tag:scale-120" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
          ),
        },
        {
          name: "Docker",
          icon: (
            <svg className="w-4 h-4 text-[#00d2ff] transition-transform duration-300 group-hover/tag:scale-120" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
              <line x1="2" y1="10" x2="22" y2="10" />
              <line x1="12" y1="3" x2="12" y2="17" />
            </svg>
          ),
        },
        {
          name: "npm / yarn",
          icon: (
            <svg className="w-4 h-4 text-[#00d2ff] transition-transform duration-300 group-hover/tag:scale-120" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
              <line x1="12" y1="22.08" x2="12" y2="12" />
            </svg>
          ),
        },
        {
          name: "Vercel",
          icon: (
            <svg className="w-4 h-4 text-[#00d2ff] transition-transform duration-300 group-hover/tag:scale-120" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l10 18H2L12 3z" />
            </svg>
          ),
        },
        {
          name: "Netlify",
          icon: (
            <svg className="w-4 h-4 text-[#00d2ff] transition-transform duration-300 group-hover/tag:scale-120" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
          ),
        },
        {
          name: "Postman",
          icon: (
            <svg className="w-4 h-4 text-[#00d2ff] transition-transform duration-300 group-hover/tag:scale-120" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
            </svg>
          ),
        },
      ],
    },
  ];

  return (
    <section className="relative min-h-[calc(100vh-70px)] py-20 px-6 md:px-16 lg:px-24 bg-gradient-to-b from-[#0d1b2a] via-[#0b111e] to-[#0a0f1e] text-[#f0f0f0] overflow-hidden flex flex-col justify-center">
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
            My Technical Arsenal
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#f1f5f9] my-2 tracking-[-0.5px]">
            Technical <span className="bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-[60px] h-[3px] bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] mx-auto mt-4 rounded-[2px]"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, catIndex) => (
            <div
              key={catIndex}
              className="bg-white/[0.02] border border-white/[0.07] rounded-[24px] p-8 backdrop-blur-[12px] transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col gap-6 hover:bg-white/[0.05] hover:border-[#00d2ff]/25 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] group/card opacity-0 animate-fade-in-right"
              style={{ animationDelay: `${0.1 + catIndex * 0.15}s` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4">
                <div className="w-[45px] h-[45px] bg-gradient-to-br from-[#00d2ff]/10 to-[#3a7bd5]/10 border border-[#00d2ff]/20 rounded-xl flex items-center justify-center text-[#00d2ff] transition-all duration-300 group-hover/card:scale-110 group-hover/card:bg-[#00d2ff]/20 group-hover/card:border-[#00d2ff]/40">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">{category.category}</h3>
              </div>

              {/* Skills Tags List */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    className="group/tag inline-flex items-center gap-2.5 bg-white/[0.04] border border-white/[0.08] hover:border-[#00d2ff]/30 text-[#cbd5e1] hover:text-white py-2 px-4 rounded-full text-[0.88rem] font-medium transition-all duration-300 hover:bg-[#00d2ff]/10 hover:scale-[1.05] cursor-default"
                    key={skillIndex}
                  >
                    {skill.icon}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
