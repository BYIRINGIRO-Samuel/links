import { WaitlistForm } from "./waitlist-form";

export function FinalCta() {
  return (
    <section className="section-pad relative overflow-hidden bg-foreground px-6 text-white">
      <div className="dark-section-glow" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <p className="text-[12px] font-medium uppercase tracking-[0.28em] text-accent">
          Early access
        </p>
        <h2 className="mt-4 text-[clamp(2rem,5vw,3rem)] font-semibold leading-[1.08] tracking-[-0.04em]">
          Be first to build your{" "}
          <span className="font-serif font-normal text-accent">personal web</span>
        </h2>
        <p className="mt-4 text-[clamp(0.95rem,1.8vw,1.05rem)] leading-relaxed text-white/60">
          Join the waitlist for early access, launch updates, and
          priority onboarding when Links goes live.
        </p>
        <div className="mt-9 [&_form]:bg-white/10 [&_form]:shadow-none [&_input]:text-white [&_input]:placeholder:text-white/40 [&_button]:bg-accent [&_button]:text-foreground [&_button]:shadow-[0_18px_40px_rgba(34,197,94,0.35)]">
          <WaitlistForm />
        </div>
      </div>
    </section>
  );
}
