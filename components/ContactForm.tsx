"use client";

import { useState, useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";

const PaperPlaneIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
  </svg>
);

const SpinnerIcon = () => (
  <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
  </svg>
);

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<{ type: string; message: string }>({ type: "", message: "" });
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setStatus({ type: "", message: "" });

    emailjs
      .sendForm("service_3asji8p", "template_hgv93sh", form.current!, "iGwNSW8quH5PQNZ3N")
      .then(
        () => {
          setIsSending(false);
          setStatus({ type: "success", message: "Message sent successfully! ✅" });
          setFormData({ name: "", email: "", subject: "", message: "" });
          setTimeout(() => setStatus({ type: "", message: "" }), 5000);
        },
        (error) => {
          setIsSending(false);
          setStatus({ type: "error", message: "Failed to send message. Please try again. ❌" });
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      {/* Name + Email Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex flex-col gap-[0.6rem] mb-6">
          <label className="text-[0.9rem] font-semibold text-[#94a3b8] ml-[0.5rem]">Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="bg-slate-800/60 border border-white/[0.15] rounded-xl py-4 px-4 text-white font-[inherit] text-[0.95rem] transition-all duration-300 placeholder:text-[#475569] focus:outline-none focus:border-[#00d2ff] focus:bg-slate-700/60 focus:shadow-[0_0_18px_rgba(0,210,255,0.15)]"
          />
        </div>
        <div className="flex flex-col gap-[0.6rem] mb-6">
          <label className="text-[0.9rem] font-semibold text-[#94a3b8] ml-[0.5rem]">Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="bg-slate-800/60 border border-white/[0.15] rounded-xl py-4 px-4 text-white font-[inherit] text-[0.95rem] transition-all duration-300 placeholder:text-[#475569] focus:outline-none focus:border-[#00d2ff] focus:bg-slate-700/60 focus:shadow-[0_0_18px_rgba(0,210,255,0.15)]"
          />
        </div>
      </div>

      {/* Subject */}
      <div className="flex flex-col gap-[0.6rem] mb-6">
        <label className="text-[0.9rem] font-semibold text-[#94a3b8] ml-[0.5rem]">Subject</label>
        <input
          type="text"
          name="subject"
          placeholder="What is this about?"
          value={formData.subject}
          onChange={handleInputChange}
          required
          className="bg-slate-800/60 border border-white/[0.15] rounded-xl py-4 px-4 text-white font-[inherit] text-[0.95rem] transition-all duration-300 placeholder:text-[#475569] focus:outline-none focus:border-[#00d2ff] focus:bg-slate-700/60 focus:shadow-[0_0_18px_rgba(0,210,255,0.15)]"
        />
      </div>

      {/* Message */}
      <div className="flex flex-col gap-[0.6rem] mb-6">
        <label className="text-[0.9rem] font-semibold text-[#94a3b8] ml-[0.5rem]">Message</label>
        <textarea
          name="message"
          rows={5}
          placeholder="Your message here..."
          value={formData.message}
          onChange={handleInputChange}
          required
          className="bg-slate-800/60 border border-white/[0.15] rounded-xl py-4 px-4 text-white font-[inherit] text-[0.95rem] transition-all duration-300 resize-none placeholder:text-[#475569] focus:outline-none focus:border-[#00d2ff] focus:bg-slate-700/60 focus:shadow-[0_0_18px_rgba(0,210,255,0.15)]"
        />
      </div>

      {/* Status Message */}
      {status.message && (
        <div
          className={`py-4 px-4 rounded-xl mb-6 text-[0.9rem] font-semibold text-center animate-[fadeIn_0.4s_ease] ${
            status.type === "success"
              ? "bg-[#00d2ff]/10 text-[#00d2ff] border border-[#00d2ff]/20"
              : "bg-[#f43f5e]/10 text-[#f43f5e] border border-[#f43f5e]/20"
          }`}
        >
          {status.message}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSending}
        className="w-full py-4 bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] border-none rounded-[14px] text-white text-[1rem] font-bold cursor-pointer flex items-center justify-center gap-[0.8rem] transition-all duration-300 mt-4 shadow-[0_10px_20px_rgba(0,210,255,0.25)] hover:-translate-y-[3px] hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(0,210,255,0.45)] hover:brightness-110 active:scale-[0.98] active:-translate-y-[1px] active:shadow-[0_8px_16px_rgba(0,210,255,0.3)] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:scale-100 disabled:hover:shadow-[0_10px_20px_rgba(0,210,255,0.25)]"
      >
        {isSending ? (
          <>
            <span>Sending...</span>
            <SpinnerIcon />
          </>
        ) : (
          <>
            <span>Send Message</span>
            <PaperPlaneIcon />
          </>
        )}
      </button>
    </form>
  );
}
