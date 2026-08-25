"use client";

import { motion } from "framer-motion";
import { ThornTick } from "./thorn-tick";
import { Reveal, Stagger, StaggerChild, fadeUp, slideLeft, slideRight } from "./motion";

function CrossMark() {
  return (
    <span
      className="inline-flex size-[18px] items-center justify-center text-[15px] font-medium leading-none text-red-500"
      aria-hidden="true"
    >
      ×
    </span>
  );
}

const features = [
  "Unlimited links & blocks",
  "Privacy-first analytics",
  "One-click migration",
  "Full data export",
  "0% sales commission",
  "Custom domains",
];

const competitors = [
  {
    name: "Linktree",
    values: [true, false, false, false, false, true],
    price: "$9 /mo",
  },
  {
    name: "Beacons",
    values: [true, false, false, false, false, true],
    price: "$10 /mo",
  },
  {
    name: "Liinks",
    values: [true, false, true, false, false, true],
    price: "$8 /mo",
  },
  {
    name: "Bio.site",
    values: [true, false, false, false, false, false],
    price: "$12 /mo",
  },
];

export function Comparison() {
  return (
    <section
      id="compare"
      className="section-pad scroll-mt-24 bg-[#f3f4f2] px-6"
    >
      <div className="mx-auto max-w-5xl">
        <Reveal variant={fadeUp} className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-[12px] font-medium uppercase tracking-[0.28em] text-accent">
            Comparison
          </p>
          <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-semibold tracking-[-0.04em] text-foreground">
            How we{" "}
            <span className="font-serif font-normal italic text-accent">
              compare
            </span>
          </h2>
          <p className="mt-4 text-[clamp(0.95rem,1.8vw,1.05rem)] leading-relaxed text-muted">
            Links wins on ownership, privacy, migration, and price — without
            locking you into another generic link list.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-[280px_1fr] lg:items-stretch">
          <Reveal variant={slideLeft}>
            <motion.article
              className="flex flex-col rounded-[14px] bg-white p-6 shadow-[0_18px_50px_rgba(0,0,0,0.08)]"
              whileHover={{ y: -4, boxShadow: "0 24px 60px rgba(34,197,94,0.12)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-2.5">
                <span className="flex size-8 items-center justify-center rounded-full bg-foreground text-white">
                  <svg
                    width="14"
                    height="14"
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
                </span>
                <p className="text-lg font-semibold tracking-[-0.02em]">Links</p>
              </div>

              <Stagger className="mt-7 flex flex-1 flex-col gap-4" stagger={0.06}>
                <ul className="flex flex-1 flex-col gap-4">
                  {features.map((feature) => (
                    <StaggerChild key={feature}>
                      <li className="flex items-center gap-3 text-[14px] text-foreground">
                        <ThornTick />
                        {feature}
                      </li>
                    </StaggerChild>
                  ))}
                </ul>
              </Stagger>

              <p className="mt-8 border-t border-black/6 pt-5 text-[15px] font-semibold tracking-[-0.02em]">
                <span className="text-accent">$3</span>
                <span className="font-normal text-muted"> /mo</span>
              </p>
            </motion.article>
          </Reveal>

          <Reveal variant={slideRight}>
            <div className="overflow-x-auto rounded-[14px] bg-[#e9ebe8] p-4 sm:p-5">
              <div className="min-w-[520px]">
                <div className="grid grid-cols-4 gap-2 border-b border-black/8 pb-4">
                  {competitors.map((comp, i) => (
                    <motion.div
                      key={comp.name}
                      className="flex flex-col items-center gap-2 text-center"
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.12, duration: 0.85 }}
                    >
                      <span className="flex size-8 items-center justify-center rounded-full bg-white text-[11px] font-semibold text-muted">
                        {comp.name.charAt(0)}
                      </span>
                      <p className="text-[12px] font-medium text-muted">
                        {comp.name}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {features.map((feature, rowIndex) => (
                  <motion.div
                    key={feature}
                    className="grid grid-cols-4 gap-2 border-b border-black/6 py-3.5 last:border-b-0"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: rowIndex * 0.08, duration: 0.75 }}
                  >
                    {competitors.map((comp) => (
                      <div
                        key={`${comp.name}-${feature}`}
                        className="flex items-center justify-center"
                      >
                        {comp.values[rowIndex] ? (
                          <ThornTick size={16} />
                        ) : (
                          <CrossMark />
                        )}
                      </div>
                    ))}
                  </motion.div>
                ))}

                <div className="grid grid-cols-4 gap-2 border-t border-black/8 pt-4">
                  {competitors.map((comp) => (
                    <p
                      key={`${comp.name}-price`}
                      className="text-center text-[13px] font-semibold text-foreground"
                    >
                      {comp.price}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
