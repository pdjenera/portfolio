"use client";

import { useState, FormEvent } from "react";
import SectionLabel from "@/components/atoms/SectionLabel";
import ScrollReveal from "@/components/ScrollReveal";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [project, setProject] = useState("");
  const [status, setStatus] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, project }),
      });

      if (res.ok) {
        setStatus("sent");
        setName("");
        setEmail("");
        setProject("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const buttonLabel =
    status === "sending"
      ? "Sending..."
      : status === "sent"
        ? "Sent — thank you ✓"
        : status === "error"
          ? "Error — try again"
          : "Send message →";

  return (
    <ScrollReveal>
      <section
        id="contact"
        className="max-w-[1140px] mx-auto px-[26px] pt-[74px] pb-16 border-t border-border"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[54px] items-start">
          <div>
            <SectionLabel>Contact</SectionLabel>
            <h2 className="font-heading font-bold text-[36px] leading-[1.1] tracking-[-0.02em] mb-[18px] -mt-[22px]">
              Let&apos;s build something.
            </h2>
            <p className="text-base leading-[1.65] text-muted mb-[30px] max-w-[380px]">
              Tell me about your project and I&apos;ll get back to you quickly
              with next steps and a clear quote.
            </p>
            <div className="flex flex-col gap-3.5 font-heading text-[15px]">
              <a
                href="mailto:pdjenera@gmail.com"
                className="flex items-center gap-3 text-fg transition-colors hover:text-accent"
              >
                <span className="text-accent">@</span> pdjenera@gmail.com
              </a>
              <a
                href="tel:9057198702"
                className="flex items-center gap-3 text-fg transition-colors hover:text-accent"
              >
                <span className="text-accent">#</span> 905 719 8702
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-card border border-border p-7 flex flex-col gap-4"
          >
            <div className="flex flex-col gap-[7px]">
              <label className="font-heading text-[11px] tracking-[0.1em] uppercase text-muted">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="font-body text-sm px-[13px] py-[11px] border border-border bg-bg text-fg outline-none focus:border-accent"
              />
            </div>
            <div className="flex flex-col gap-[7px]">
              <label className="font-heading text-[11px] tracking-[0.1em] uppercase text-muted">
                Email
              </label>
              <input
                type="email"
                placeholder="you@company.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="font-body text-sm px-[13px] py-[11px] border border-border bg-bg text-fg outline-none focus:border-accent"
              />
            </div>
            <div className="flex flex-col gap-[7px]">
              <label className="font-heading text-[11px] tracking-[0.1em] uppercase text-muted">
                Project
              </label>
              <textarea
                rows={4}
                placeholder="What are you looking to build?"
                required
                value={project}
                onChange={(e) => setProject(e.target.value)}
                className="font-body text-sm px-[13px] py-[11px] border border-border bg-bg text-fg outline-none resize-y focus:border-accent"
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="font-heading text-[13.5px] font-medium py-3.5 bg-fg text-bg border-none cursor-pointer transition-transform hover:-translate-y-0.5 disabled:opacity-60"
            >
              {buttonLabel}
            </button>
          </form>
        </div>
      </section>
    </ScrollReveal>
  );
}
