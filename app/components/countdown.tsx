"use client";

import { useEffect, useState } from "react";
import { SectionHeading } from "./section-heading";

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

        <div
          className="mt-12 grid w-full max-w-[860px] grid-cols-4 gap-3 sm:gap-6"
          role="timer"
          aria-live="polite"
          aria-label="Time until Links launches"
        >
          {units.map((unit) => (
            <FlipCard
              key={unit.key}
              value={time ? pad(time[unit.key]) : "--"}
              label={unit.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FlipCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-3 sm:gap-4">
      <div className="flip-card" aria-hidden="true">
        <span className="flip-card__value font-sans">{value}</span>
        <span className="flip-card__hinge flip-card__hinge--left" />
        <span className="flip-card__hinge flip-card__hinge--right" />
        <span className="flip-card__split" />
      </div>
      <span className="font-serif text-[clamp(0.85rem,2vw,1.05rem)] tracking-[-0.01em] text-muted">
        {label}
      </span>
    </div>
  );
}
