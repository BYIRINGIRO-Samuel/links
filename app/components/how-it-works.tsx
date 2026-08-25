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
        <div className="mb-14 flex items-center gap-3 sm:gap-4">
          <span className="h-px flex-1 bg-accent" />
          <span className="size-1.5 shrink-0 rounded-full bg-accent" />
          <h2 className="shrink-0 px-1 text-center text-[clamp(1.5rem,4vw,2rem)] font-semibold tracking-[-0.03em] text-white">
            How It{" "}
            <span className="font-serif font-normal italic tracking-[-0.02em]">
              works
            </span>
          </h2>
          <span className="size-1.5 shrink-0 rounded-full bg-accent" />
          <span className="h-px flex-1 bg-accent" />
        </div>

        <div className="relative mx-auto">
          {/* Centered vertical rail */}
          <div
            className="absolute bottom-8 left-1/2 top-3 w-px -translate-x-1/2 bg-accent"
            aria-hidden="true"
          />

          {/* Start */}
          <div className="relative z-10 mb-10 flex items-center justify-center gap-3">
            <div className="relative flex size-5 items-center justify-center">
              <span className="absolute size-9 rounded-full border border-accent/20" />
              <span className="absolute size-6 rounded-full border border-accent/35" />
              <span className="relative size-2.5 rounded-full bg-accent shadow-[0_0_12px_rgba(34,197,94,0.7)]" />
            </div>
            <p className="absolute left-[calc(50%+18px)] text-[13px] font-medium tracking-[-0.01em] text-white/80">
              Start
            </p>
          </div>

          {/* Steps — cards centered on the line */}
          <ol className="relative space-y-8">
            {steps.map((step) => (
              <li key={step.verb} className="relative">
                <span
                  className="absolute left-1/2 top-[-16px] z-10 -translate-x-1/2 text-accent"
                  aria-hidden="true"
                >
                  <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                    <path d="M6 10L0.5 0.5h11L6 10Z" fill="currentColor" />
                  </svg>
                </span>

                <div className="relative z-10 mx-auto flex w-full max-w-[340px] items-center gap-4 rounded-xl border border-white/8 bg-[#1e1e1e] px-5 py-4 sm:gap-5 sm:px-6 sm:py-5">
                  <span className="flex size-10 shrink-0 items-center justify-center text-white/90">
                    <StepIcon name={step.icon} />
                  </span>
                  <p className="text-[14px] leading-relaxed text-white/70 sm:text-[15px]">
                    <span className="font-medium text-white">{step.verb}</span>
                    {" — "}
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          {/* End with thorn-border tick */}
          <div className="relative z-10 mt-10 flex items-center justify-center gap-4">
            <div className="relative flex shrink-0 items-center justify-center">
              <ThornCheck />
            </div>
            <p className="max-w-[240px] text-[14px] leading-relaxed sm:text-[15px]">
              <span className="font-semibold text-accent">Once published</span>
              <span className="text-white">
                , congratulations — your personal website is live.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ThornCheck() {
  // Soft-spike circular seal (fully rounded thorns)
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
