"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What makes Links different from other link-in-bio tools?",
    a: "Links combines link-in-bio simplicity with mini-website depth — fast pages, deep customization, privacy-first analytics, one-click migration, data export, and zero platform commission on creator sales.",
  },
  {
    q: "Can I migrate from Linktree or similar platforms?",
    a: "Yes. Links supports one-click import from major link-in-bio competitors. Preview your imported profile, pick a theme, and publish — your original page stays untouched.",
  },
  {
    q: "Do I own my content?",
    a: "Absolutely. Your profile data and supported assets are exportable at any time. We treat creator content as portable data, not a lock-in trap.",
  },
  {
    q: "Is there a commission on creator sales?",
    a: "No. In the core commercial model, Links does not take a transaction commission on creator sales — just simple subscription pricing.",
  },
  {
    q: "When does Links launch?",
    a: "We're opening access soon. Join the waitlist for launch updates and priority onboarding when Links goes live.",
  },
  {
    q: "What do I get on the waitlist?",
    a: "Early access, launch updates, and priority onboarding so you're ready the moment Links goes live.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-pad scroll-mt-24 bg-[#f3f4f2] px-6">
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-4 text-[12px] font-medium uppercase tracking-[0.28em] text-accent">
          FAQ
        </p>
        <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-semibold tracking-[-0.04em] text-foreground">
          Questions,{" "}
          <span className="font-serif font-normal italic text-accent">
            answered
          </span>
        </h2>
      </div>

      <div className="mx-auto mt-12 flex max-w-2xl flex-col gap-3">
        {faqs.map((item, index) => {
          const isOpen = open === index;
          return (
            <div
              key={item.q}
              className="rounded-[4px] border border-black/12 bg-transparent px-4 py-3.5 backdrop-blur-[2px] sm:px-5"
            >
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 text-left"
                aria-expanded={isOpen}
              >
                <span className="text-[14px] font-medium leading-snug tracking-[-0.01em] text-foreground sm:text-[15px]">
                  {item.q}
                </span>
                <span
                  className={`flex size-8 shrink-0 items-center justify-center rounded-full text-[16px] transition-all duration-300 ${
                    isOpen
                      ? "rotate-45 bg-accent text-foreground"
                      : "bg-foreground text-white"
                  }`}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>
              {isOpen ? (
                <p className="mt-3 pr-10 text-[14px] leading-relaxed text-muted sm:text-[15px]">
                  {item.a}
                </p>
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}
