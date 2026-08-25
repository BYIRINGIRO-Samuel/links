"use client";

import { motion } from "framer-motion";
import { Reveal, Stagger, StaggerChild, scaleIn } from "./motion";

const steps = [
  {
    verb: "Claim",
    body: "Pick a username, add your bio and avatar — your branded profile URL is ready in seconds.",
    icon: "user" as const,
  },
  {
    verb: "Build",
    body: "Drag links, media, forms, and folders into place, then customize themes until it feels like you.",
    icon: "blocks" as const,
  },
  {
    verb: "Publish",
    body: "Go live and share one link everywhere. Track clicks and grow with privacy-first analytics.",
    icon: "share" as const,
  },
];

export function HowItWorks() {
  return (
    <section
      id="how"
      className="section-pad relative scroll-mt-24 overflow-hidden bg-[#121212] px-6"
    >
      <div className="relative z-10 mx-auto max-w-lg">
        <Reveal className="mb-14 flex items-center gap-3 sm:gap-4">
          <motion.span
            className="h-px flex-1 bg-accent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ originX: 1 }}
          />
          <motion.span
            className="size-1.5 shrink-0 rounded-full bg-accent"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 280, damping: 16, delay: 0.35 }}
          />
          <h2 className="shrink-0 px-1 text-center text-[clamp(1.5rem,4vw,2rem)] font-semibold tracking-[-0.03em] text-white">
            How It{" "}
            <span className="font-serif font-normal italic tracking-[-0.02em]">
              works
            </span>
          </h2>
          <motion.span
            className="size-1.5 shrink-0 rounded-full bg-accent"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 280, damping: 16, delay: 0.35 }}
          />
          <motion.span
            className="h-px flex-1 bg-accent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ originX: 0 }}
          />
        </Reveal>

        <div className="relative mx-auto">
          <motion.div
            className="absolute bottom-8 left-1/2 top-3 w-px -translate-x-1/2 bg-accent"
            aria-hidden="true"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
            style={{ originY: 0 }}
          />

          <Reveal className="relative z-10 mb-10 flex items-center justify-center gap-3">
            <motion.div
              className="relative flex size-5 items-center justify-center"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 320, damping: 16 }}
            >
              <span className="absolute size-9 rounded-full border border-accent/20" />
              <span className="absolute size-6 rounded-full border border-accent/35" />
              <span className="relative size-2.5 rounded-full bg-accent shadow-[0_0_12px_rgba(34,197,94,0.7)]" />
            </motion.div>
            <p className="absolute left-[calc(50%+18px)] text-[13px] font-medium tracking-[-0.01em] text-white/80">
              Start
            </p>
          </Reveal>

          <Stagger className="relative space-y-8" stagger={0.28}>
            <ol className="relative space-y-8">
              {steps.map((step, i) => (
                <StaggerChild key={step.verb}>
                  <li className="relative">
                    <motion.span
                      className="absolute left-1/2 top-[-16px] z-10 -translate-x-1/2 text-accent"
                      aria-hidden="true"
                      initial={{ y: -12, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.22, duration: 0.85 }}
                    >
                      <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                        <path d="M6 10L0.5 0.5h11L6 10Z" fill="currentColor" />
                      </svg>
                    </motion.span>

                    <motion.div
                      className="relative z-10 mx-auto flex w-full max-w-[340px] items-center gap-4 rounded-xl border border-white/8 bg-[#1e1e1e] px-5 py-4 sm:gap-5 sm:px-6 sm:py-5"
                      whileHover={{
                        scale: 1.02,
                        borderColor: "rgba(34,197,94,0.25)",
                        transition: { duration: 0.25 },
                      }}
                    >
                      <span className="flex size-10 shrink-0 items-center justify-center text-white/90">
                        <StepIcon name={step.icon} />
                      </span>
                      <p className="text-[14px] leading-relaxed text-white/70 sm:text-[15px]">
                        <span className="font-medium text-white">{step.verb}</span>
                        {" — "}
                        {step.body}
                      </p>
                    </motion.div>
                  </li>
                </StaggerChild>
              ))}
            </ol>
          </Stagger>

          <Reveal variant={scaleIn} className="relative z-10 mt-10 flex items-center justify-center gap-4">
            <motion.div
              className="relative flex shrink-0 items-center justify-center"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 140, damping: 16, delay: 0.5 }}
            >
              <ThornCheck />
            </motion.div>
            <p className="max-w-[240px] text-[14px] leading-relaxed sm:text-[15px]">
              <span className="font-semibold text-accent">Once published</span>
              <span className="text-white">
                , congratulations — your personal website is live.
              </span>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ThornCheck() {
  const spikes = 16;
  const outer = 20;
  const inner = 15.5;
  const cx = 22;
  const cy = 22;
  const points: string[] = [];

  for (let i = 0; i < spikes * 2; i++) {
    const angle = (Math.PI * i) / spikes - Math.PI / 2;
    const radius = i % 2 === 0 ? outer : inner;
    const x = cx + Math.cos(angle) * radius;
    const y = cy + Math.sin(angle) * radius;
    points.push(`${x.toFixed(2)},${y.toFixed(2)}`);
  }

  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      aria-hidden="true"
      className="drop-shadow-[0_0_16px_rgba(34,197,94,0.6)]"
    >
      <polygon points={points.join(" ")} fill="#22c55e" />
      <circle cx="22" cy="22" r="11" fill="#22c55e" />
      <path
        d="M15.5 22.2l4.2 4.2 8.8-9"
        stroke="#121212"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StepIcon({ name }: { name: "user" | "blocks" | "share" }) {
  const common = {
    width: 26,
    height: 26,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  if (name === "user") {
    return (
      <svg {...common}>
        <circle cx="12" cy="8" r="3.5" />
        <path d="M5 19c1.5-3.5 4-5 7-5s5.5 1.5 7 5" />
      </svg>
    );
  }

  if (name === "blocks") {
    return (
      <svg {...common}>
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <circle cx="18" cy="5" r="2.5" />
      <circle cx="6" cy="12" r="2.5" />
      <circle cx="18" cy="19" r="2.5" />
      <path d="M8.5 11l7-4.5M8.5 13l7 4.5" />
    </svg>
  );
}
