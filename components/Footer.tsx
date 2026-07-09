import React from "react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-[#0f172a]/95 to-[#050a19] text-[#cbd5e1] border-t border-white/[0.08] pt-14 pb-6 px-6 md:px-16">
      <div className="max-w-6xl mx-auto w-full">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start flex-wrap gap-10 mb-10">
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-white to-[#00d2ff] bg-clip-text text-transparent mb-2">
              Abdullah Butt
            </h2>
            <p className="text-sm text-slate-400 font-normal">
              Full Stack Developer & Creative Thinker
            </p>
          </div>

          <div className="flex flex-col">
            <h4 className="text-[0.85rem] font-semibold uppercase tracking-[1.5px] text-slate-400 mb-5">
              Quick Links
            </h4>
            <ul className="list-none p-0 m-0 flex flex-col gap-3">
              <li>
                <Link href="/about" className="text-slate-400 no-underline text-[0.95rem] transition-all duration-300 inline-block hover:text-[#00d2ff] hover:pl-1.5">
                  About
                </Link>
              </li>
              <li>
                <Link href="/education" className="text-slate-400 no-underline text-[0.95rem] transition-all duration-300 inline-block hover:text-[#00d2ff] hover:pl-1.5">
                  Education
                </Link>
              </li>
              <li>
                <Link href="/skills" className="text-slate-400 no-underline text-[0.95rem] transition-all duration-300 inline-block hover:text-[#00d2ff] hover:pl-1.5">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-slate-400 no-underline text-[0.95rem] transition-all duration-300 inline-block hover:text-[#00d2ff] hover:pl-1.5">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 no-underline text-[0.95rem] transition-all duration-300 inline-block hover:text-[#00d2ff] hover:pl-1.5">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h4 className="text-[0.85rem] font-semibold uppercase tracking-[1.5px] text-slate-400 mb-5">
              Connect With Me
            </h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/Abdullah-Butt36"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-[42px] h-[42px] rounded-full border border-white/[0.12] flex items-center justify-center text-slate-400 transition-all duration-300 bg-white/[0.03] hover:bg-gradient-to-br hover:from-[#00d2ff]/10 hover:to-[#3a7bd5]/10 hover:border-[#00d2ff] hover:text-[#00d2ff] hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,210,255,0.15)]"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/abdullah-butt-087ab8280/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-[42px] h-[42px] rounded-full border border-white/[0.12] flex items-center justify-center text-slate-400 transition-all duration-300 bg-white/[0.03] hover:bg-gradient-to-br hover:from-[#00d2ff]/10 hover:to-[#3a7bd5]/10 hover:border-[#00d2ff] hover:text-[#00d2ff] hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,210,255,0.15)]"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://x.com/Abdullah7865130"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-[42px] h-[42px] rounded-full border border-white/[0.12] flex items-center justify-center text-slate-400 transition-all duration-300 bg-white/[0.03] hover:bg-gradient-to-br hover:from-[#00d2ff]/10 hover:to-[#3a7bd5]/10 hover:border-[#00d2ff] hover:text-[#00d2ff] hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,210,255,0.15)]"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent mb-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center flex-wrap gap-4">
          <p className="text-[0.85rem] text-slate-500 m-0">
            &copy; {currentYear} <span className="text-slate-400 font-medium">Abdullah Butt</span>. All Rights Reserved.
          </p>
          <p className="text-[0.85rem] text-slate-500 m-0">
            Built with <span className="text-rose-500 inline-block animate-heartbeat">❤</span> & Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
