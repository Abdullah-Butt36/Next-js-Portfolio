import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Me | Abdullah Butt",
  description:
    "Get in touch with Abdullah Butt for project collaborations or teaching opportunities.",
};

/* ── Inline SVG Icons ── */
const EnvelopeIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
);

const MapPinIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
);

const UpworkIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
  </svg>
);

const GithubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);



/* ── Data ── */
const emailAddress = "abdullahbutt1054@gmail.com";
const phoneNumber = "+92 - 324 - 1738798";

const contactInfos = [
  { icon: <EnvelopeIcon />, label: "Email Me", value: emailAddress, },
  { icon: <PhoneIcon />, label: "Call Me", value: phoneNumber, },
  { icon: <MapPinIcon />, label: "Location", value: "Wazirabad, Punjab, Pakistan" },
];

const socialLinks = [
  { platform: "Upwork", url: "https://www.upwork.com/freelancers/~01169d69aea13a86c2", icon: <UpworkIcon /> },
  { platform: "GitHub", url: "https://github.com/Abdullah-Butt36", icon: <GithubIcon /> },
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/abdullah-butt-087ab8280/", icon: <LinkedInIcon /> },
  { platform: "Twitter", url: "https://x.com/Abdullah7865130", icon: <TwitterIcon /> },
];

export default function ContactPage() {


  return (
    <section className="relative min-h-[calc(100vh-70px)] py-20 px-6 md:px-24 bg-gradient-to-b from-[#0d1b2a] to-[#0a0f1e] text-[#f0f0f0] overflow-hidden flex flex-col justify-center">
      {/* ── Background Blobs ── */}
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
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#f1f5f9] my-2 tracking-[-0.5px]">
            Let&apos;s{" "}
            <span className="bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <div className="w-[60px] h-[3px] bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] mx-auto mt-4 rounded-[2px]" />
          <p className="text-[1.05rem] text-[#94a3b8] max-w-[600px] mx-auto mt-6 leading-[1.6]">
            Have a project in mind or just want to say hi? I&apos;m always open to discussing new opportunities.
          </p>
        </div>

        {/* ── Grid: Info (left) + Form (right) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 items-start">
          {/* ── Left: Contact Info ── */}
          <div className="flex flex-col gap-8 opacity-0 animate-fade-in-left" style={{ animationDelay: "0.15s" }}>
            {/* Info Cards */}
            <div className="flex flex-col gap-[1.2rem]">
              {contactInfos.map((info, index) => (
                <div
                  key={index}
                  className="group bg-white/[0.03] border border-white/[0.07] rounded-[20px] p-6 flex items-center gap-[1.2rem] transition-all duration-300 hover:bg-white/[0.05] hover:border-[#00d2ff]/20 hover:translate-x-2"
                >
                  <div className="w-[50px] h-[50px] min-w-[50px] bg-gradient-to-br from-[#00d2ff]/[0.13] to-[#3a7bd5]/[0.13] border border-[#00d2ff]/20 rounded-[14px] flex items-center justify-center text-[#00d2ff]">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-[0.85rem] font-semibold text-[#64748b] uppercase tracking-[1px] mb-[0.3rem]">
                      {info.label}
                    </h4>
                    <a
                      
                      className="text-[1.05rem] text-[#f1f5f9] no-underline font-medium transition-colors duration-300 hover:text-[#00d2ff]"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Profiles Box */}
            <div className="bg-white/[0.03] border border-white/[0.07] rounded-[24px] p-8">
              <h4 className="text-[1.1rem] text-white font-bold mb-6">Social Profiles</h4>
              <div className="grid grid-cols-2 gap-[0.8rem]">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-[0.7rem] bg-white/[0.04] border border-white/[0.08] py-[0.6rem] px-4 rounded-full text-[#94a3b8] no-underline text-[0.9rem] font-medium transition-all duration-300 hover:bg-[#00d2ff]/10 hover:border-[#00d2ff]/30 hover:text-white hover:scale-105"
                  >
                    {link.icon}
                    <span>{link.platform}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: Contact Form ── */}
          <div className="bg-white/[0.03] border border-white/[0.07] rounded-[28px] p-10 backdrop-blur-[15px] opacity-0 animate-fade-in-right" style={{ animationDelay: "0.2s" }}>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
