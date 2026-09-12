"use client";

import { motion } from "framer-motion";
import { ThornTick } from "./thorn-tick";
import { Reveal, fadeUp } from "./motion";

function CrossMark({ size = 16 }: { size?: number }) {
  return (
    <span
      className="inline-flex items-center justify-center font-medium leading-none text-red-500"
      style={{ width: size, height: size, fontSize: size * 0.85 }}
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
  "Multi-page navigation",
  "AI Chat (Beta)",
  "Custom social previews",
  "Rich media & Folders",
];

const products = [
  {
    name: "Links",
    short: "Links",
    values: [true, true, true, true, true, true, true, true, true, true],
    price: "$3 /mo",
    featured: true,
  },
  {
    name: "Linktree",
    short: "LT",
    values: [true, false, false, false, false, true, false, false, false, false],
    price: "$9 /mo",
    featured: false,
  },
  {
    name: "Beacons",
    short: "Be",
    values: [true, false, false, false, false, true, false, false, false, false],
    price: "$10 /mo",
    featured: false,
  },
  {
    name: "links",
    short: "Li",
    values: [true, false, true, false, false, true, true, true, true, true],
    price: "$8 /mo",
    featured: false,
  },
  {
    name: "Bio.site",
    short: "Bio",
    values: [true, false, false, false, false, false, false, false, false, false],
    price: "$12 /mo",
    featured: false,
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

        <Reveal variant={fadeUp} className="mt-12">
          <div className="overflow-hidden rounded-[14px] border border-black/6 bg-white shadow-[0_18px_50px_rgba(0,0,0,0.06)]">
            {/* Product header — sticky so names stay visible while scrolling features */}
            <div className="sticky top-0 z-10 border-b border-black/8 bg-white/95 backdrop-blur-md">
              <div className="grid grid-cols-[minmax(0,1.35fr)_repeat(5,minmax(0,1fr))] gap-1 px-3 py-3 sm:gap-2 sm:px-5 sm:py-4">
                <div className="flex items-end pb-1">
                  <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-muted sm:text-[12px]">
                    Feature
                  </span>
                </div>
                {products.map((product) => (
                  <div
                    key={product.name}
                    className="flex flex-col items-center gap-1.5 text-center"
                  >
                    <span
                      className={`flex size-7 items-center justify-center rounded-full text-[10px] font-semibold sm:size-8 sm:text-[11px] ${product.featured
                          ? "bg-foreground text-white"
                          : "bg-[#e9ebe8] text-muted"
                        }`}
                    >
                      {product.featured ? (
                        <LinksMark />
                      ) : (
                        product.name.charAt(0)
                      )}
                    </span>
                    <p
                      className={`text-[10px] font-semibold leading-tight tracking-[-0.01em] sm:text-[12px] ${product.featured ? "text-foreground" : "text-muted"
                        }`}
                    >
                      <span className="sm:hidden">{product.short}</span>
                      <span className="hidden sm:inline">{product.name}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Feature rows — label + all product marks in the same view */}
            <div>
              {features.map((feature, rowIndex) => (
                <motion.div
                  key={feature}
                  className="grid grid-cols-[minmax(0,1.35fr)_repeat(5,minmax(0,1fr))] gap-1 border-b border-black/6 px-3 py-3.5 last:border-b-0 sm:gap-2 sm:px-5 sm:py-4"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: rowIndex * 0.06, duration: 0.6 }}
                >
                  <p className="flex items-center pr-1 text-[12px] font-medium leading-snug tracking-[-0.01em] text-foreground sm:text-[14px]">
                    {feature}
                  </p>
                  {products.map((product) => (
                    <div
                      key={`${product.name}-${feature}`}
                      className={`flex items-center justify-center rounded-lg py-1 ${product.featured ? "bg-accent/8" : ""
                        }`}
                    >
                      {product.values[rowIndex] ? (
                        <ThornTick size={15} />
                      ) : (
                        <CrossMark size={15} />
                      )}
                    </div>
                  ))}
                </motion.div>
              ))}
            </div>

            {/* Price row */}
            <div className="grid grid-cols-[minmax(0,1.35fr)_repeat(5,minmax(0,1fr))] gap-1 border-t border-black/8 bg-[#f7f8f6] px-3 py-3.5 sm:gap-2 sm:px-5 sm:py-4">
              <p className="flex items-center text-[12px] font-medium text-muted sm:text-[14px]">
                Price
              </p>
              {products.map((product) => (
                <p
                  key={`${product.name}-price`}
                  className={`flex items-center justify-center text-center text-[11px] font-semibold tracking-[-0.02em] sm:text-[13px] ${product.featured ? "text-accent" : "text-foreground"
                    }`}
                >
                  {product.price}
                </p>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function LinksMark() {
  return (
    <svg
      width="12"
      height="12"
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
