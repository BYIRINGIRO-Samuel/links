"use client";

import { useState, useRef, useEffect } from "react";
import { Reveal, fadeUp } from "./motion";

const DEMO_FEATURES = [
  "Header & Profile Pic",
  "Live Preview",
  "Fonts & Colors",
  "Block Styles",
  "Add Blocks",
  "Templates",
  "Social Links",
  "Device Toggle",
];

export function EditorDemo() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onTimeUpdate = () => {
      if (video.duration) setProgress((video.currentTime / video.duration) * 100);
    };
    video.addEventListener("timeupdate", onTimeUpdate);
    return () => video.removeEventListener("timeupdate", onTimeUpdate);
  }, []);

  return (
    <section id="editor-demo" className="section-pad relative overflow-hidden bg-[#f7f8f6] px-6">
      <Reveal variant={fadeUp} className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
        <p className="mb-4 text-[12px] font-medium uppercase tracking-[0.28em] text-accent">
          Instant Live Preview
        </p>
        <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.04em] text-foreground">
          Edit it live,{" "}
          <span className="font-serif font-normal italic tracking-[-0.02em] text-accent">
            see it instantly
          </span>
        </h2>
        <p className="mt-4 text-[clamp(0.95rem,1.8vw,1.05rem)] leading-relaxed text-muted">
          No refreshing, no guessing. Every change you make updates in real-time on your live preview.
        </p>
      </Reveal>

      {/* Feature chips */}
      <Reveal variant={fadeUp} className="mx-auto mb-8 flex max-w-3xl flex-wrap items-center justify-center gap-2">
        {DEMO_FEATURES.map((f) => (
          <span
            key={f}
            className="inline-flex items-center gap-1.5 rounded-full border border-black/8 bg-white px-3 py-1 text-[12px] font-medium text-black/60 shadow-xs"
          >
            <span className="size-1.5 rounded-full bg-accent/70" />
            {f}
          </span>
        ))}
      </Reveal>

      <div className="mx-auto max-w-[1100px]">
        {/* Browser Mockup */}
        <div className="group relative w-full overflow-hidden rounded-2xl border border-black/10 bg-white shadow-2xl transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.2)] hover:border-black/15">

          {/* Subtle gradient glow ring on hover */}
          <div
            className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.12) 0%, rgba(16,185,129,0.08) 100%)" }}
          />

          {/* Browser Chrome */}
          <div className="relative flex h-11 w-full items-center gap-3 border-b border-black/6 bg-[#f1f1f2] px-4">
            {/* Traffic lights */}
            <div className="flex shrink-0 items-center gap-1.5">
              <span className="size-3 rounded-full bg-[#ff5f56]/90 transition-transform group-hover:scale-105" />
              <span className="size-3 rounded-full bg-[#ffbd2e]/90 transition-transform group-hover:scale-105" />
              <span className="size-3 rounded-full bg-[#27c93f]/90 transition-transform group-hover:scale-105" />
            </div>

            {/* Active tab pill */}
            <div className="flex h-7 items-center gap-2 rounded-md bg-white px-3 shadow-xs border border-black/6 text-[12px] font-medium text-black/70 shrink-0">
              <div className="size-3.5 rounded-[3px] bg-black flex items-center justify-center shrink-0">
                <svg width="7" height="7" viewBox="0 0 10 10" fill="none">
                  <path d="M2 5h6M5 2l3 3-3 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              Appearance · Links
            </div>

            {/* Address bar */}
            <div className="flex h-7 w-full max-w-[380px] mx-auto items-center justify-center gap-1.5 rounded-md border border-black/8 bg-white px-3 shadow-xs">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="shrink-0 text-black/35">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <span className="truncate text-[11.5px] font-medium text-black/55">
                links.co/dashboard/appearance
              </span>
            </div>

            {/* Live badge */}
            <button
              type="button"
              onClick={togglePlay}
              className="ml-auto flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1 text-[11px] font-medium text-black/55 hover:bg-black/6 transition-colors cursor-pointer"
              aria-label={isPlaying ? "Pause demo" : "Play demo"}
            >
              <span className="relative flex size-2">
                <span className={`absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 ${isPlaying ? "animate-ping" : ""}`} />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              <span className="hidden sm:inline">{isPlaying ? "Live" : "Paused"}</span>
            </button>
          </div>

          {/* Video — exact 8:5 ratio matches 1280×800 recording */}
          <div
            className="relative w-full overflow-hidden bg-[#e5e5e5] cursor-pointer"
            style={{ aspectRatio: "8/5" }}
            onClick={togglePlay}
          >
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              poster="/editor-demo-poster.jpg"
              className="h-full w-full object-cover object-top"
            >
              <source src="/editor-demo.mp4" type="video/mp4" />
              <source src="/editor-demo.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>

            {/* Play overlay */}
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/25 backdrop-blur-[3px] transition-all">
                <div className="flex size-16 items-center justify-center rounded-full bg-white/95 shadow-2xl transition-transform duration-200 hover:scale-110">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" className="ml-1.5 text-black">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
              </div>
            )}

            {/* Progress bar */}
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-black/10">
              <div
                className="h-full bg-accent/80 transition-[width] duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Caption */}
        <p className="mt-4 text-center text-[12px] text-black/35 font-medium tracking-wide">
          Real recording of the Links dashboard · Click to pause
        </p>
      </div>
    </section>
  );
}

