"use client";

import { useEffect, useState } from "react";

export function Loader() {
  const [phase, setPhase] = useState<"enter" | "joined" | "exit" | "done">(
    "enter",
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const joinTimer = window.setTimeout(() => setPhase("joined"), 900);
    const exitTimer = window.setTimeout(() => setPhase("exit"), 910);
    const doneTimer = window.setTimeout(() => {
      setPhase("done");
      document.body.style.overflow = "";
    }, 1200);

    return () => {
      window.clearTimeout(joinTimer);
      window.clearTimeout(exitTimer);
      window.clearTimeout(doneTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className={`loader-screen ${phase === "exit" ? "loader-screen--exit" : ""}`}
      aria-hidden="true"
    >
      <div className="loader-mist" />

      <div className="loader-stage">
        <div
          className={`loader-mark ${phase === "joined" || phase === "exit" ? "loader-mark--joined" : ""}`}
        >
          <svg
            className="loader-link loader-link--a"
            width="72"
            height="72"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M10.5 13.5a4.5 4.5 0 0 0 6.36.5l2.12-2.12a4.5 4.5 0 1 0-6.36-6.36l-1.2 1.2"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <svg
            className="loader-link loader-link--b"
            width="72"
            height="72"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M13.5 10.5a4.5 4.5 0 0 0-6.36-.5L5 12.12a4.5 4.5 0 1 0 6.36 6.36l1.2-1.2"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
