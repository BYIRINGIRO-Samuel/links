"use client";

import { FormEvent, useState } from "react";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "joined" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim()) return;
    
    setStatus("loading");
    setErrorMessage("");

    try {
      const baseUrl = process.env.NEXT_PUBLIC_API_URL || "https://liinks-waitlist-1-production.up.railway.app";
      // We append /waitlist or use root based on common patterns.
      const response = await fetch(`${baseUrl}/api/waitlist`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Failed to join the waitlist");
      }

      setStatus("joined");
    } catch (error) {
      console.error("Waitlist error:", error);
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  }

  if (status === "joined") {
    return (
      <p className="animate-fade-up text-center text-[15px] text-foreground">
        You&apos;re on the list. We&apos;ll be in touch soon.
      </p>
    );
  }

  return (
    <div className="mx-auto w-full max-w-[420px]">
      <form
        onSubmit={handleSubmit}
        className="flex w-full items-center rounded-full bg-surface p-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.06)]"
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
          disabled={status === "loading"}
          onChange={(event) => setEmail(event.target.value)}
          className="min-w-0 flex-1 bg-transparent px-4 py-2.5 text-[15px] text-foreground outline-none placeholder:text-muted-soft disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="shrink-0 rounded-full bg-accent px-5 py-2.5 text-[14px] font-semibold text-foreground shadow-[0_14px_32px_rgba(34,197,94,0.35)] transition-[transform,box-shadow,opacity] duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(34,197,94,0.4)] active:translate-y-0 disabled:opacity-70 disabled:hover:translate-y-0"
        >
          {status === "loading" ? "Joining..." : "Join Waitlist"}
        </button>
      </form>
      {status === "error" && (
        <p className="mt-3 text-center text-[14px] text-red-500 animate-fade-up">
          {errorMessage}
        </p>
      )}
    </div>
  );
}
