"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal, fadeUp, slideLeft, slideRight } from "./motion";

const cards = [
  {
    label: "Builder",
    title: "Block editor",
    meta: "Live",
  },
  {
    label: "Analytics",
    title: "Privacy first",
    meta: "0%",
  },
  {
    label: "Ownership",
    title: "Export anytime",
    meta: "Pro",
  },
];

const floatCard = {
  hidden: { opacity: 0, y: 24, scale: 0.92 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.15,
      delay: 0.45 + i * 0.22,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export function ProductPreview() {
  return (
    <section
      id="preview"
      className="section-pad relative scroll-mt-24 overflow-hidden bg-white px-6"
    >
      <div className="relative z-10 mx-auto max-w-7xl">
        <Reveal variant={fadeUp} className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
          <p className="mb-4 text-[12px] font-medium uppercase tracking-[0.28em] text-accent">
            Preview
          </p>
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.04em] text-foreground">
            See Links in{" "}
            <span className="font-serif font-normal italic tracking-[-0.02em] text-accent">
              action
            </span>
          </h2>
          <p className="mt-4 text-[clamp(0.95rem,1.8vw,1.05rem)] leading-relaxed text-muted">
            A fast, branded public page from one URL — built for creators who
            want control, speed, and ownership.
          </p>
        </Reveal>

        {/* Mobile */}
        <div className="mx-auto flex max-w-md flex-col items-center gap-5 lg:hidden">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src="/links-phone-hand.png"
              alt="Hand holding a phone showing a Links profile"
              width={1200}
              height={1600}
              className="h-auto max-h-[380px] w-auto bg-transparent object-contain"
              priority
            />
          </motion.div>
          <div className="flex w-full flex-col items-center gap-3">
            {cards.map((card, i) => (
              <motion.div
                key={card.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={floatCard}
              >
                <PillCard card={card} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop */}
        <div className="relative mx-auto hidden min-h-[460px] max-w-5xl lg:block">
          <motion.div
            className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2"
            initial={{ opacity: 0, y: 60, scale: 0.88 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.4,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/links-phone-hand.png"
                alt="Hand holding a phone showing a Links profile"
                width={1200}
                height={1600}
                className="h-auto max-h-[440px] w-auto bg-transparent object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.1)] xl:max-h-[480px]"
                priority
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute left-[4%] top-[12%] z-30 -rotate-3 xl:left-[8%]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideLeft}
            custom={0}
          >
            <motion.div
              animate={{ y: [0, -6, 0], rotate: [-3, -1, -3] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <PillCard card={cards[0]} />
            </motion.div>
          </motion.div>
          <motion.div
            className="absolute bottom-[10%] left-[6%] z-30 rotate-2 xl:left-[10%]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideLeft}
            transition={{ delay: 0.25 }}
          >
            <motion.div
              animate={{ y: [0, 8, 0], rotate: [2, 4, 2] }}
              transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <PillCard card={cards[1]} />
            </motion.div>
          </motion.div>
          <motion.div
            className="absolute right-[4%] top-[22%] z-30 rotate-3 xl:right-[8%]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideRight}
            transition={{ delay: 0.4 }}
          >
            <motion.div
              animate={{ y: [0, -8, 0], rotate: [3, 1, 3] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <PillCard card={cards[2]} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function PillCard({ card }: { card: (typeof cards)[number] }) {
  return (
    <article className="flex w-[230px] items-center gap-3 rounded-[14px] border border-white/10 bg-[#141414] px-3 py-2.5 shadow-[0_14px_36px_rgba(0,0,0,0.28)]">
      <span className="flex size-9 shrink-0 items-center justify-center">
        <PillIcon title={card.title} />
      </span>
      <div className="min-w-0 flex-1">
        <p className="truncate text-[11px] leading-none text-white/45">
          {card.label}
        </p>
        <p className="mt-1 truncate text-[13px] font-semibold leading-none tracking-[-0.02em] text-white">
          {card.title}
        </p>
      </div>
      <span className="shrink-0 self-end pb-0.5 text-[11px] text-accent">
        {card.meta}
      </span>
    </article>
  );
}

function PillIcon({ title }: { title: string }) {
  const common = {
    width: 26,
    height: 26,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#22c55e",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  if (title.includes("Block")) {
    return (
      <svg {...common}>
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
      </svg>
    );
  }

  if (title.includes("Privacy")) {
    return (
      <svg {...common}>
        <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" />
        <path d="M9.5 12l1.8 1.8L15 10" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M10.5 13.5a4.5 4.5 0 0 0 6.36.5l2.12-2.12a4.5 4.5 0 1 0-6.36-6.36l-1.2 1.2" />
      <path d="M13.5 10.5a4.5 4.5 0 0 0-6.36-.5L5 12.12a4.5 4.5 0 1 0 6.36 6.36l1.2-1.2" />
    </svg>
  );
}
