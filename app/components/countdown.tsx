"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "./section-heading";
import { Stagger, StaggerChild, scaleIn } from "./motion";

/** Launch target — adjust when the real date is set */
const LAUNCH_AT = new Date("2026-09-22T09:00:00+01:00").getTime();

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(now: number): TimeLeft {
  const distance = Math.max(0, LAUNCH_AT - now);
  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((distance / (1000 * 60)) % 60),
    seconds: Math.floor((distance / 1000) % 60),
  };
}

function pad(value: number) {
  return String(value).padStart(2, "0");
}

const units: { key: keyof TimeLeft; label: string }[] = [
  { key: "days", label: "Days" },
  { key: "hours", label: "Hours" },
  { key: "minutes", label: "Minutes" },
  { key: "seconds", label: "Seconds" },
];

export function Countdown() {
  const [time, setTime] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTime(getTimeLeft(Date.now()));
    const id = window.setInterval(() => {
      setTime(getTimeLeft(Date.now()));
    }, 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="section-pad relative overflow-hidden bg-white px-6">
      <div className="countdown-clouds" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 flex items-center gap-3 rounded-full bg-foreground/5 p-1.5 pr-5 ring-1 ring-foreground/10">
            <div
              className="flex size-10 items-center justify-center rounded-full bg-foreground text-surface shadow-[var(--shadow-logo)]"
              aria-label="Links"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M10.5 13.5a4.5 4.5 0 0 0 6.36.5l2.12-2.12a4.5 4.5 0 1 0-6.36-6.36l-1.2 1.2" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13.5 10.5a4.5 4.5 0 0 0-6.36-.5L5 12.12a4.5 4.5 0 1 0 6.36 6.36l1.2-1.2" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="flex items-center gap-2">
              <span className="animate-pulse-dot size-2 rounded-full bg-accent" />
              <span className="text-[13px] font-medium tracking-[-0.01em] text-foreground">
                Links goes live soon
              </span>
            </div>
          </div>
          <p className="max-w-xl text-[clamp(0.95rem,1.8vw,1.05rem)] leading-relaxed text-muted">
            We're putting the finishing touches on the platform. Reserve your spot before launch.
          </p>
        </div>

        <Stagger
          className="mt-12 grid w-full max-w-[860px] grid-cols-4 gap-3 sm:gap-6"
          stagger={0.2}
        >
          <div
            className="contents"
            role="timer"
            aria-live="polite"
            aria-label="Time until Links launches"
          >
            {units.map((unit, i) => (
              <StaggerChild key={unit.key}>
                <FlipCard
                  value={time ? pad(time[unit.key]) : "--"}
                  label={unit.label}
                  index={i}
                />
              </StaggerChild>
            ))}
          </div>
        </Stagger>
      </div>
    </section>
  );
}

function FlipCard({
  value,
  label,
  index,
}: {
  value: string;
  label: string;
  index: number;
}) {
  return (
    <motion.div
      className="flex flex-col items-center gap-3 sm:gap-4"
      variants={scaleIn}
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
    >
      <motion.div
        className="flip-card"
        aria-hidden="true"
        initial={{ rotateX: -90, opacity: 0 }}
        whileInView={{ rotateX: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 18,
          delay: index * 0.16,
        }}
      >
        <motion.span
          key={value}
          className="flip-card__value font-sans"
          initial={{ opacity: 0.4, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          {value}
        </motion.span>
        <span className="flip-card__hinge flip-card__hinge--left" />
        <span className="flip-card__hinge flip-card__hinge--right" />
        <span className="flip-card__split" />
      </motion.div>
      <span className="font-serif text-[clamp(0.85rem,2vw,1.05rem)] tracking-[-0.01em] text-muted">
        {label}
      </span>
    </motion.div>
  );
}
