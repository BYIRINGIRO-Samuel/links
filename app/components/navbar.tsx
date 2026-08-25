"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { href: "#hero", label: "Home" },
  { href: "#how", label: "How it works" },
  { href: "#preview", label: "Preview" },
  { href: "#compare", label: "Compare" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#hero");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) {
          setActive(`#${visible.target.id}`);
        }
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: [0.1, 0.35, 0.6] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.header
        className={`fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 transition-all duration-300 ${
          scrolled ? "pt-3" : "pt-5"
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 1.1 }}
      >
        <nav
          className={`flex w-full max-w-5xl items-center justify-between gap-4 rounded-full border px-3 py-2 transition-all duration-300 ${
            scrolled
              ? "border-black/8 bg-white/85 shadow-[0_12px_40px_rgba(0,0,0,0.08)] backdrop-blur-xl"
              : "border-black/5 bg-white/55 shadow-[0_8px_28px_rgba(0,0,0,0.04)] backdrop-blur-md"
          }`}
          aria-label="Primary"
        >
          <a
            href="#hero"
            className="flex items-center gap-2.5 rounded-full pl-1.5 pr-2"
          >
            <span className="flex size-9 items-center justify-center rounded-full bg-foreground text-white shadow-[0_8px_20px_rgba(0,0,0,0.18)]">
              <LinksMark size={15} />
            </span>
            <span className="hidden text-sm font-semibold tracking-[-0.02em] sm:inline">
              Links
            </span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {links.slice(1).map((link) => {
              const isActive = active === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="group relative flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[13px] text-muted transition-colors hover:text-foreground"
                >
                  {isActive ? (
                    <motion.span
                      className="nav-active-pill"
                      layoutId="nav-active"
                      transition={{ type: "spring", stiffness: 380, damping: 28 }}
                      aria-hidden="true"
                    />
                  ) : null}
                  <span
                    className={
                      isActive ? "font-medium text-foreground" : undefined
                    }
                  >
                    {link.label}
                  </span>
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <motion.a
              href="#waitlist"
              className="rounded-full bg-accent px-4 py-2 text-[13px] font-semibold text-foreground shadow-[0_10px_24px_rgba(34,197,94,0.35)] transition-transform hover:-translate-y-0.5"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Join Waitlist
            </motion.a>
            <button
              type="button"
              className="flex size-9 items-center justify-center rounded-full border border-black/8 md:hidden"
              aria-expanded={open}
              aria-label="Toggle menu"
              onClick={() => setOpen((value) => !value)}
            >
              <span className="sr-only">Menu</span>
              <span className="flex flex-col gap-1">
                <span className="block h-px w-4 bg-foreground" />
                <span className="block h-px w-4 bg-foreground" />
              </span>
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-x-4 top-[4.5rem] z-50 rounded-[24px] border border-black/8 bg-white/95 p-3 shadow-[0_20px_50px_rgba(0,0,0,0.12)] backdrop-blur-xl md:hidden"
            initial={{ opacity: 0, y: -12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            {links.slice(1).map((link, i) => {
              const isActive = active === link.href;
              return (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-foreground hover:bg-black/[0.03]"
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  {isActive ? (
                    <span className="nav-active-pill" aria-hidden="true" />
                  ) : (
                    <span className="size-2.5 rounded-full bg-black/15" />
                  )}
                  {link.label}
                </motion.a>
              );
            })}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

function LinksMark({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M10.5 13.5a4.5 4.5 0 0 0 6.36.5l2.12-2.12a4.5 4.5 0 1 0-6.36-6.36l-1.2 1.2"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5 10.5a4.5 4.5 0 0 0-6.36-.5L5 12.12a4.5 4.5 0 1 0 6.36 6.36l1.2-1.2"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
