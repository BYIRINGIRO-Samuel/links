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
        <SectionHeading
          title="Links"
          accent="goes live soon"
          description="We're putting the finishing touches on the platform. Reserve your spot before launch."
        />

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
