"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { WaitlistForm } from "./waitlist-form";

const avatars = [
  { src: "/avatars/a.svg", alt: "" },
  { src: "/avatars/b.svg", alt: "" },
  { src: "/avatars/c.svg", alt: "" },
];

const ease = [0.22, 1, 0.36, 1] as const;

const heroStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.16, delayChildren: 0.25 },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 32, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.2, ease },
  },
};

const logoItem = {
  hidden: { opacity: 0, scale: 0.5, rotate: -12 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { type: "spring" as const, stiffness: 180, damping: 20 },
  },
};

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative flex min-h-[88dvh] flex-1 items-center justify-center overflow-hidden px-6 pb-20 pt-28"
    >
      <div className="hero-mist" aria-hidden="true">
        <span className="hero-cloud left-[-8%] top-[28%] h-[280px] w-[420px] bg-[radial-gradient(circle,rgba(160,160,160,0.5)_0%,transparent_70%)]" />
        <span className="hero-cloud right-[-10%] top-[32%] h-[260px] w-[400px] bg-[radial-gradient(circle,rgba(150,150,150,0.45)_0%,transparent_70%)] [animation-delay:-9s]" />
        <span className="hero-cloud left-[35%] top-[18%] h-[180px] w-[280px] bg-[radial-gradient(circle,rgba(34,197,94,0.18)_0%,transparent_70%)] [animation-delay:-2s]" />
        <span className="hero-cloud left-[22%] bottom-[8%] h-[200px] w-[360px] bg-[radial-gradient(circle,rgba(175,175,175,0.28)_0%,transparent_70%)] [animation-delay:-4s]" />
        <span className="hero-cloud right-[18%] bottom-[12%] h-[180px] w-[320px] bg-[radial-gradient(circle,rgba(34,197,94,0.12)_0%,transparent_70%)] [animation-delay:-12s]" />
      </div>

      <motion.div
        className="relative z-10 mx-auto flex w-full max-w-[640px] flex-col items-center text-center"
        initial={reduce ? "visible" : "hidden"}
        animate="visible"
        variants={heroStagger}
      >
        <motion.div
          variants={logoItem}
          className="mb-8 flex size-[56px] items-center justify-center rounded-full bg-foreground text-surface shadow-[var(--shadow-logo)] ring-4 ring-accent/25"
          aria-label="Links"
        >
          <LinksMark />
        </motion.div>

        <motion.div
          variants={heroItem}
          className="mb-5 flex items-center gap-2"
        >
          <span className="animate-pulse-dot size-2 rounded-full bg-accent" />
          <span className="text-[13px] font-medium tracking-[-0.01em] text-foreground">
            Links goes live soon
          </span>
        </motion.div>

        <motion.h1
          variants={heroItem}
          className="max-w-[15ch] text-[clamp(2.5rem,7vw,3.85rem)] font-semibold leading-[1.05] tracking-[-0.045em] text-foreground"
        >
          Your personal website in{" "}
          <motion.span
            className="font-serif text-[1.06em] font-normal tracking-[-0.02em] text-accent"
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 1, ease }}
          >
            60 seconds
          </motion.span>
        </motion.h1>

        <motion.p
          variants={heroItem}
          className="mt-5 max-w-[38ch] text-[clamp(0.98rem,2vw,1.1rem)] leading-[1.6] text-muted"
        >
          A fast, branded public destination from one URL — customize deeply,
          measure privately, and own every link.
        </motion.p>

        <motion.div
          id="waitlist"
          variants={heroItem}
          className="mt-9 w-full scroll-mt-28"
        >
          <WaitlistForm />
        </motion.div>

        <motion.div
          variants={heroItem}
          className="mt-6 flex items-center gap-3"
        >
          <div className="flex -space-x-2.5" aria-hidden="true">
            {avatars.map((avatar, i) => (
              <motion.div
                key={avatar.src}
                initial={reduce ? false : { opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1 + i * 0.12, duration: 0.85, ease }}
              >
                <Image
                  src={avatar.src}
                  alt={avatar.alt}
                  width={28}
                  height={28}
                  className="size-7 rounded-full border-2 border-background object-cover"
                />
              </motion.div>
            ))}
          </div>
          <p className="text-[13px] tracking-[-0.01em] text-muted">
            Join creators, brands &amp; builders
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

function LinksMark() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
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
