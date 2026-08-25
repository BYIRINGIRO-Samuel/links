"use client";

import { FormEvent, useState } from "react";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "joined">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim()) return;
    setStatus("joined");
  }

  if (status === "joined") {
    return (
      <p className="animate-fade-up text-center text-[15px] text-foreground">
        You&apos;re on the list. We&apos;ll be in touch soon.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex w-full max-w-[420px] items-center rounded-full bg-surface p-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.06)]"
    >
      <label htmlFor="waitlist-email" className="sr-only">
        Email address
      </label>
      <input
        id="waitlist-email"
        type="email"
        required
        autoComplete="email"
        placeholder="Your Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        className="min-w-0 flex-1 bg-transparent px-4 py-2.5 text-[15px] text-foreground outline-none placeholder:text-muted-soft"
      />
      <button
        type="submit"
        className="shrink-0 rounded-full bg-accent px-5 py-2.5 text-[14px] font-semibold text-foreground shadow-[0_14px_32px_rgba(34,197,94,0.35)] transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(34,197,94,0.4)] active:translate-y-0"
      >
        Join Waitlist
      </button>
    </form>
  );
}
