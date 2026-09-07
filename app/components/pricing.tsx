"use client";

import { motion } from "framer-motion";
import { ThornTick } from "./thorn-tick";
import { Reveal, Stagger, StaggerChild, fadeUp } from "./motion";

const plans = [
  {
    name: "Starter",
    price: "$3",
    features: [
      "1 profile",
      "Unlimited links",
      "Themes & customization",
      "Core analytics",
      "Forms & QR codes",
      "Multi-page navigation",
      "Rich media & Folders",
    ],
    featured: false,
  },
  {
    name: "Pro",
    price: "$7",
    features: [
      "Multiple profiles",
      "Custom domain & SSL",
      "Advanced analytics",
      "A/B testing",
      "AI Chat (Beta)",
      "Custom social previews",
    ],
    featured: true,
  },
  {
    name: "Business",
    price: "$15",
    features: [
      "Higher profile limits",
      "Team permissions",
      "Priority support",
      "White-label options",
      "Advanced governance",
      "Higher API limits",
    ],
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="section-pad scroll-mt-24 bg-white px-6">
      <Reveal variant={fadeUp} className="mx-auto max-w-2xl text-center">
        <p className="mb-4 text-[12px] font-medium uppercase tracking-[0.28em] text-accent">
          Pricing
        </p>
        <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-semibold tracking-[-0.04em] text-foreground">
          Our Pricing{" "}
          <span className="font-serif font-normal italic text-accent">
            Plans
          </span>
        </h2>
        <p className="mt-4 text-[clamp(0.95rem,1.8vw,1.05rem)] leading-relaxed text-muted">
          Simple subscription pricing. No transaction commission. Upgrade when
          you need more power.
        </p>
      </Reveal>

      <Stagger
        className="mx-auto mt-16 grid max-w-5xl gap-10 md:grid-cols-3 md:gap-6"
        stagger={0.22}
      >
        {plans.map((plan) => (
          <StaggerChild key={plan.name}>
            <motion.article
              className={`relative flex flex-col rounded-[14px] px-6 pb-7 pt-12 text-center ${
                plan.featured
                  ? "border-2 border-accent bg-white shadow-[0_20px_50px_rgba(34,197,94,0.15)]"
                  : "border border-black/10 bg-white"
              }`}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
            >
              <motion.div
                className={`absolute left-1/2 top-0 flex size-[72px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-[1.15rem] font-semibold tracking-[-0.03em] shadow-[0_10px_28px_rgba(0,0,0,0.18)] ${
                  plan.featured
                    ? "bg-accent text-foreground"
                    : "bg-foreground text-white"
                }`}
                initial={{ scale: 0, rotate: -90 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 160,
                  damping: 18,
                  delay: plan.featured ? 0.35 : 0.1,
                }}
              >
                {plan.price}
              </motion.div>

              <h3 className="text-lg font-semibold tracking-[-0.02em] text-foreground">
                {plan.name}
              </h3>

              <ul className="mt-6 flex flex-1 flex-col gap-3 text-left">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2.5 text-[14px] text-muted"
                  >
                    <ThornTick size={16} />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#waitlist"
                className={`mt-8 inline-flex items-center justify-center rounded-[10px] px-5 py-2.5 text-[13px] font-semibold transition-transform hover:-translate-y-0.5 ${
                  plan.featured
                    ? "bg-foreground text-white shadow-[0_12px_28px_rgba(0,0,0,0.2)]"
                    : "border border-foreground text-foreground hover:bg-foreground hover:text-white"
                }`}
              >
                Join Waitlist
              </a>
            </motion.article>
          </StaggerChild>
        ))}
      </Stagger>
    </section>
  );
}
