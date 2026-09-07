"use client";

import { useEffect } from "react";
import { motion, useAnimate } from "framer-motion";
import { Reveal, fadeUp } from "./motion";

export function EditorDemo() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    let isSubscribed = true;

    const sequence = async () => {
      if (!isSubscribed) return;
      
      // Wait a bit before starting
      await new Promise((r) => setTimeout(r, 1000));

      while (isSubscribed) {
        // Initial state reset
        await Promise.all([
          animate("#cursor", { x: 300, y: 400, opacity: 0 }, { duration: 0 }),
          animate("#block-1", { y: 0 }, { duration: 0 }),
          animate("#block-2", { y: 0 }, { duration: 0 }),
          animate("#block-3", { y: 0 }, { duration: 0 }),
          animate("#phone-block-1", { y: 0 }, { duration: 0 }),
          animate("#phone-block-2", { y: 0 }, { duration: 0 }),
          animate("#phone-block-3", { y: 0 }, { duration: 0 }),
          animate("#phone-bg", { backgroundColor: "#18181b" }, { duration: 0 }), // zinc-900
          animate("#swatch-green", { scale: 1, borderColor: "transparent" }, { duration: 0 }),
        ]);

        await animate("#cursor", { opacity: 1 }, { duration: 0.4 });

        // 1. Move to block 3 in left sidebar
        await animate("#cursor", { x: 120, y: 190 }, { duration: 1, ease: "easeInOut" });
        await animate("#cursor", { scale: 0.8 }, { duration: 0.15 });

        // Drag up
        animate("#cursor", { y: 70 }, { duration: 0.8, ease: "easeInOut" });
        animate("#block-3", { y: -120, scale: 1.02, zIndex: 10, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }, { duration: 0.8, ease: "easeInOut" });
        animate("#block-1", { y: 60 }, { duration: 0.8, ease: "easeInOut" });
        await animate("#block-2", { y: 60 }, { duration: 0.8, ease: "easeInOut" });
        
        await animate("#cursor", { scale: 1 }, { duration: 0.15 });
        await animate("#block-3", { scale: 1, zIndex: 1, boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }, { duration: 0.1 });

        // 2. Phone syncs up almost instantly after drop
        animate("#phone-block-3", { y: -96, scale: 1.05, zIndex: 10 }, { duration: 0.5, ease: "backOut" });
        animate("#phone-block-1", { y: 48 }, { duration: 0.5, ease: "backOut" });
        await animate("#phone-block-2", { y: 48 }, { duration: 0.5, ease: "backOut" });
        await animate("#phone-block-3", { scale: 1, zIndex: 1 }, { duration: 0.1 });

        // 3. Move to right sidebar to pick a color
        // Assuming right sidebar is around x: 740, y: 140 relative to scope container
        await animate("#cursor", { x: 740, y: 140 }, { duration: 1.2, ease: "easeInOut" });
        await animate("#cursor", { scale: 0.8 }, { duration: 0.15 });
        
        // 4. Click swatch & change phone bg
        animate("#swatch-green", { scale: 0.9, borderColor: "#ffffff" }, { duration: 0.1 });
        await animate("#phone-bg", { backgroundColor: "#22c55e" }, { duration: 0.4 }); // green-500
        
        await animate("#cursor", { scale: 1 }, { duration: 0.15 });

        // Hold for the user to see the result
        await new Promise((r) => setTimeout(r, 2500));

        // Fade cursor out and loop
        await animate("#cursor", { opacity: 0 }, { duration: 0.4 });
        await new Promise((r) => setTimeout(r, 500));
      }
    };

    sequence();

    return () => {
      isSubscribed = false;
    };
  }, [animate]);

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

      <div className="mx-auto max-w-[960px]">
        {/* Editor Mockup Window */}
        <div ref={scope} className="relative flex h-[540px] w-full overflow-hidden rounded-2xl border border-black/10 bg-white shadow-2xl">
          
          {/* LEFT SIDEBAR: Links */}
          <div className="hidden sm:flex w-[260px] flex-col border-r border-black/5 bg-[#fafafa] p-5">
            <h3 className="mb-5 text-[13px] font-semibold text-black/40 uppercase tracking-wider">Your Links</h3>
            <div className="relative flex flex-col gap-3">
              {/* Block 1 */}
              <motion.div id="block-1" className="flex items-center gap-3 rounded-lg border border-black/5 bg-white p-3 shadow-sm">
                <div className="flex size-8 shrink-0 items-center justify-center rounded bg-blue-100">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <span className="text-[13px] font-semibold text-black/80 leading-tight">My Portfolio</span>
                  <span className="text-[11px] text-black/40 leading-tight mt-0.5">dribbble.com/maya</span>
                </div>
              </motion.div>
              
              {/* Block 2 */}
              <motion.div id="block-2" className="flex items-center gap-3 rounded-lg border border-black/5 bg-white p-3 shadow-sm">
                <div className="flex size-8 shrink-0 items-center justify-center rounded bg-rose-100">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#e11d48" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/></svg>
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <span className="text-[13px] font-semibold text-black/80 leading-tight">Latest Vlog</span>
                  <span className="text-[11px] text-black/40 leading-tight mt-0.5">youtube.com</span>
                </div>
              </motion.div>

              {/* Block 3 (The one that gets dragged) */}
              <motion.div id="block-3" className="relative z-10 flex items-center gap-3 rounded-lg border border-black/5 bg-white p-3 shadow-sm">
                <div className="flex size-8 shrink-0 items-center justify-center rounded bg-accent/20">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <span className="text-[13px] font-semibold text-black/90 leading-tight">Spring Sale</span>
                  <span className="text-[11px] text-black/50 leading-tight mt-0.5">Shop now!</span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* CENTER: Phone Mockup */}
          <div className="flex flex-1 items-center justify-center bg-[#f0f0f0] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
            <motion.div id="phone-bg" className="relative flex h-[480px] w-[240px] flex-col items-center overflow-hidden rounded-[32px] border-[6px] border-black bg-zinc-900 p-4 shadow-xl">
              {/* Phone Notch */}
              <div className="absolute top-0 h-4 w-24 rounded-b-xl bg-black" />
              
              {/* Profile Header */}
              <div className="mt-8 flex flex-col items-center">
                <div className="flex size-16 items-center justify-center rounded-full bg-white/10 text-xl font-bold text-white/50">M</div>
                <h4 className="mt-2 text-[14px] font-semibold text-white/90">Maya Rivera</h4>
                <p className="text-[10px] text-white/60">@maya.creates</p>
              </div>

              {/* Phone Links */}
              <div className="relative mt-6 flex w-full flex-col gap-2">
                <motion.div id="phone-block-1" className="flex h-[40px] w-full items-center justify-center rounded-[10px] bg-white/10 backdrop-blur-sm">
                  <span className="text-[12px] font-medium text-white/90">My Portfolio</span>
                </motion.div>
                <motion.div id="phone-block-2" className="flex h-[40px] w-full items-center justify-center rounded-[10px] bg-white/10 backdrop-blur-sm">
                  <span className="text-[12px] font-medium text-white/90">Latest Vlog</span>
                </motion.div>
                <motion.div id="phone-block-3" className="relative flex h-[40px] w-full items-center justify-center rounded-[10px] bg-white text-black shadow-lg">
                  <span className="text-[12px] font-semibold text-black">Spring Sale</span>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDEBAR: Theme */}
          <div className="hidden md:flex w-[240px] flex-col border-l border-black/5 bg-[#fafafa] p-5">
            <h3 className="mb-5 text-[13px] font-semibold text-black/40 uppercase tracking-wider">Theme</h3>
            
            <div className="mb-6">
              <p className="mb-3 text-[12px] font-medium text-black/60">Background Color</p>
              <div className="flex gap-2">
                <div className="size-8 cursor-pointer rounded-full border-2 border-transparent bg-zinc-900 shadow-sm hover:border-black/20" />
                <div className="size-8 cursor-pointer rounded-full border-2 border-transparent bg-rose-500 shadow-sm hover:border-black/20" />
                <motion.div id="swatch-green" className="size-8 cursor-pointer rounded-full border-2 border-transparent bg-green-500 shadow-sm hover:border-black/20" />
                <div className="size-8 cursor-pointer rounded-full border-2 border-transparent bg-blue-500 shadow-sm hover:border-black/20" />
              </div>
            </div>

            <div>
              <p className="mb-3 text-[12px] font-medium text-black/60">Button Style</p>
              <div className="flex flex-col gap-2">
                <div className="h-8 w-full rounded-full border border-black/20 bg-white" />
                <div className="h-8 w-full rounded-md border border-black/20 bg-white" />
                <div className="h-8 w-full border-b-2 border-black/20 bg-transparent" />
              </div>
            </div>
          </div>

          {/* The Fake Cursor */}
          <motion.div
            id="cursor"
            className="pointer-events-none absolute left-0 top-0 z-50 drop-shadow-md hidden sm:block"
            initial={{ opacity: 0, x: 300, y: 400 }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 4l7.07 17 2.51-7.39L21 11.07z" fill="white" stroke="black" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
