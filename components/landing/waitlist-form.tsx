"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function WaitlistForm() {
  const [email, setEmail] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [message, setMessage] = React.useState<string>("");

  const emailId = React.useId();
  const helpId = React.useId();
  const msgId = React.useId();
  const companyId = React.useId();

  const isValidEmail = React.useMemo(() => {
    const v = email.trim();
    if (!v) return false;
    // Simple, pragmatic email check (easy to replace with Zod later)
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  }, [email]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessage("");

    if (!isValidEmail) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    try {
      setStatus("loading");

      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, company: company.trim() }),
      });
      const payload = (await response.json().catch(() => null)) as
        | { error?: string; message?: string }
        | null;

      if (!response.ok) {
        throw new Error(payload?.error ?? "Something went wrong.");
      }

      setStatus("success");
      setMessage(payload?.message ?? "You're in! We'll email you when early access opens.");
      setEmail("");
      setCompany("");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error ? error.message : "Something went wrong. Please try again."
      );
    }
  }

  return (
    <form onSubmit={onSubmit} className="w-full" aria-describedby={helpId}>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
        <div className="w-full">
          <label htmlFor={emailId} className="sr-only">
            Email address
          </label>
          <Input
            id={emailId}
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="you@company.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status !== "idle") {
                setStatus("idle");
                setMessage("");
              }
            }}
            aria-invalid={status === "error"}
            aria-describedby={cn(helpId, message ? msgId : "")}
            disabled={status === "loading"}
            className={cn(
              "h-11 bg-white/5 text-white placeholder:text-zinc-400",
              "border-white/10 focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950",
              status === "error" && "border-rose-400/60 focus-visible:ring-rose-400"
            )}
          />
        </div>

        <Button
          type="submit"
          disabled={status === "loading"}
          className={cn(
            "h-11 px-5",
            "bg-indigo-500 text-white hover:bg-indigo-400",
            "focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
          )}
        >
          {status === "loading" ? "Sending..." : "Get early access"}
        </Button>
      </div>

      <div
        className="absolute left-[-9999px] top-auto h-0 w-0 overflow-hidden"
        aria-hidden="true"
      >
        <label htmlFor={companyId}>Company</label>
        <input
          id={companyId}
          name="company"
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          autoComplete="off"
          tabIndex={-1}
        />
      </div>

      <p id={helpId} className="mt-2 text-xs text-zinc-400">
        No spam. Unsubscribe anytime.
      </p>

      <div
        className="mt-3 min-h-[1.25rem] text-sm"
        aria-live="polite"
        aria-atomic="true"
      >
        {message ? (
          <p
            id={msgId}
            className={cn(
              "inline-flex items-center gap-2 rounded-md px-2 py-1",
              status === "success" && "bg-emerald-500/10 text-emerald-200",
              status === "error" && "bg-rose-500/10 text-rose-200"
            )}
          >
            <span
              className={cn(
                "inline-block size-1.5 rounded-full",
                status === "success" && "bg-emerald-300",
                status === "error" && "bg-rose-300"
              )}
              aria-hidden="true"
            />
            {message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
