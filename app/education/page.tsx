import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education | Abdullah Butt",
  description: "View the educational background and certifications of Abdullah Butt.",
};

const educationEntries = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Punjab College (Affiliated to University of Gujrat)",
    years: "2023 - 2027 (Expected)",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zM12 14v7" />
      </svg>
    ),
    details: [
      "Specializing in Modern Web Technologies and Software Architecture.",
      "Core Subjects: Data Structures, Algorithms, Database Systems, Software Engineering.",
      "Maintaining strong academic performance with a focus on practical coding.",
    ],
  },
  {
    degree: "Full Stack Web Developer Certification",
    institution: "Online Learning Hub",
    years: "2023 - 2024",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    details: [
      "Comprehensive training in MERN Stack (MongoDB, Express, React, Node.js) and Next js.",
      "Built multiple responsive frontend and full-stack projects.",
      "Learned advanced JavaScript (ES6+), RESTful APIs, and Git version control.",
    ],
  },
  {
    degree: "Intermediate in Computer Science (ICS)",
    institution: "Punjab College, Wazirabad",
    years: "2021 - 2023",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
      </svg>
    ),
    details: [
      "Focused on Computer Science, Mathematics, and Physics.",
      "Developed foundational logic and problem-solving skills.",
      "Introduction to C Language and procedural programming.",
    ],
  },
];

export default function EducationPage() {
  return (
    <section className="relative min-h-screen py-24 px-6 md:px-8 bg-gradient-to-b from-[#0a0f1e] to-[#0d1b2a] text-[#f0f0f0] overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          className="absolute rounded-full filter blur-[100px] opacity-4 w-[320px] h-[320px] -top-[100px] -left-[150px] animate-pulse-slow"
          style={{ background: "radial-gradient(circle, #00d2ff, #7c3aed)" }}
        ></div>
        <div
          className="absolute rounded-full filter blur-[100px] opacity-4 w-[280px] h-[280px] -bottom-[100px] -right-[100px] animate-pulse-slow"
          style={{ background: "radial-gradient(circle, #f43f5e, #3a7bd5)", animationDelay: "3s" }}
        ></div>
      </div>

      <div className="max-w-[900px] mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20 opacity-0 animate-fade-in-left">
          <span className="inline-block bg-[#00d2ff]/8 border border-[#00d2ff]/20 text-[#00d2ff] text-xs font-semibold tracking-[2px] uppercase py-[0.35rem] px-[1.2rem] rounded-full mb-4">
            Academic Background
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#f1f5f9] my-2 tracking-[-0.5px]">
            My{" "}
            <span className="bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <div className="w-[60px] h-[3px] bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] mx-auto mt-4 rounded-[2px]"></div>
        </div>

        {/* Timeline */}
        <div className="relative pl-[50px] md:pl-[50px] before:content-[''] before:absolute before:left-[17px] before:top-0 before:w-[2px] before:h-full before:bg-gradient-to-b before:from-[#00d2ff] before:via-[#3a7bd5] before:to-transparent before:opacity-30">
          {educationEntries.map((entry, index) => (
            <div
              key={index}
              className={`relative mb-14 last:mb-0 group opacity-0 animate-fade-in-right`}
              style={{ animationDelay: `${0.1 + index * 0.15}s` }}
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[50px] top-0 w-9 h-9 bg-[#0d1b2a] border-2 border-[#00d2ff] rounded-full flex items-center justify-center text-[#00d2ff] text-sm z-[2] shadow-[0_0_15px_rgba(0,210,255,0.3)] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#00d2ff] group-hover:text-white group-hover:shadow-[0_0_25px_rgba(0,210,255,0.5)]">
                {entry.icon}
              </div>

              {/* Card */}
              <div className="bg-white/[0.03] border border-white/[0.07] rounded-[20px] p-8 md:p-8 backdrop-blur-[10px] transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] relative hover:bg-white/[0.05] hover:border-[#00d2ff]/20 md:hover:translate-x-[10px]">
                {/* Duration Badge */}
                <span className="inline-block text-[0.85rem] font-semibold text-[#00d2ff] bg-[#00d2ff]/10 py-1 px-3 rounded-full mb-4">
                  {entry.years}
                </span>

                {/* Degree */}
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-[-0.3px]">
                  {entry.degree}
                </h3>

                {/* Institution */}
                <p className="text-[1.1rem] text-slate-400 font-medium mb-6">
                  {entry.institution}
                </p>

                {/* Details */}
                <ul className="list-none p-0 m-0 space-y-3">
                  {entry.details.map((detail, dIndex) => (
                    <li
                      key={dIndex}
                      className="relative pl-6 text-slate-300 leading-relaxed text-[0.95rem] before:content-['→'] before:absolute before:left-0 before:text-[#3a7bd5] before:font-bold"
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
