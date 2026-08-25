"use client";

import { Reveal, fadeUp } from "./motion";

export function Footer() {
  return (
    <Reveal variant={fadeUp}>
      <footer className="border-t border-black/6 bg-white px-6 py-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
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
            <span className="text-sm font-semibold tracking-[-0.02em]">
              Links
            </span>
          </div>
          <p className="text-[13px] text-muted">
            &copy; {new Date().getFullYear()} Links. Your personal website, in 60
            seconds.
          </p>
        </div>
      </footer>
    </Reveal>
  );
}
