"use client";

import * as React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Features", id: "features" },
  { label: "Use cases", id: "use-cases" },
  { label: "How it works", id: "how-it-works" },
  { label: "Pricing", id: "pricing" },
  { label: "FAQ", id: "faq" },
] as const;

export function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/70 backdrop-blur supports-[backdrop-filter]:bg-zinc-950/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Image
            src="/FrameSense_Logo_PNG_ForBlackBGR.png"
            alt="FrameSense logo"
            width={182}
            height={40}
            className="h-10 w-auto object-contain"
            priority
          />
        </div>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                "text-sm text-zinc-300 hover:text-white",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 rounded"
              )}
            >
              {item.label}
            </a>
          ))}
          <Button
            type="button"
            variant="ghost"
            onClick={() => {
              // placeholder
              // eslint-disable-next-line no-console
              console.log("Login clicked");
            }}
            className="text-zinc-200 hover:bg-white/5 hover:text-white"
          >
            Login
          </Button>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <Button
            type="button"
            variant="ghost"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            className="text-zinc-200 hover:bg-white/5 hover:text-white"
          >
            <span className="sr-only">Toggle navigation</span>
            <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden="true">
              <path
                d="M4 7h16M4 12h16M4 17h16"
                className="stroke-current"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </Button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "md:hidden overflow-hidden border-t border-white/10 bg-zinc-950/80 backdrop-blur",
          mobileOpen ? "max-h-80" : "max-h-0"
        )}
      >
        <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "w-full rounded-md px-3 py-2 text-left text-sm text-zinc-200 hover:bg-white/5 hover:text-white",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
                )}
              >
                {item.label}
              </a>
            ))}
            <Button
              type="button"
              variant="ghost"
              onClick={() => {
                setMobileOpen(false);
                // placeholder
                // eslint-disable-next-line no-console
                console.log("Login clicked");
              }}
              className="justify-start text-zinc-200 hover:bg-white/5 hover:text-white"
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
