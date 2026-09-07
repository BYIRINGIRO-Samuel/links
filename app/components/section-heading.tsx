"use client";

import { Reveal, fadeUp } from "./motion";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  accent?: string;
  description?: string;
  dark?: boolean;
  align?: "center" | "left";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
  dark = false,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const alignClass = align === "left" ? "text-left" : "text-center";

  return (
    <Reveal variant={fadeUp} className={`mx-auto max-w-2xl ${alignClass} ${className}`}>
      {eyebrow ? (
        <p className="mb-4 text-[12px] font-medium uppercase tracking-[0.28em] text-accent">
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.04em] ${
          dark ? "text-white" : "text-foreground"
        }`}
      >
        {title}
        {accent ? (
          <>
            {" "}
            <span className="font-serif font-normal italic tracking-[-0.02em] text-accent">
              {accent}
            </span>
          </>
        ) : null}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-[clamp(0.95rem,1.8vw,1.05rem)] leading-relaxed ${
            dark ? "text-white/60" : "text-muted"
          }`}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
