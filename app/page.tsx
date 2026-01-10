// app/page.tsx
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/landing/header";
import { Reveal } from "@/components/landing/reveal";
import { WaitlistForm } from "@/components/landing/waitlist-form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

type IconProps = React.SVGProps<SVGSVGElement> & { title?: string };

function IconBolt(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M13 2 4 14h7l-1 8 10-14h-7l0-6Z"
        className="stroke-current"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconShield(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 2 20 6v6c0 5-3.4 9.4-8 10-4.6-.6-8-5-8-10V6l8-4Z"
        className="stroke-current"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M9 12l2 2 4-5"
        className="stroke-current"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconWave(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M3 12c2.2 0 2.2-6 4.4-6s2.2 12 4.4 12 2.2-12 4.4-12S18.4 18 20.6 18 22 12 22 12"
        className="stroke-current"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconScan(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7 3H5a2 2 0 0 0-2 2v2M17 3h2a2 2 0 0 1 2 2v2M7 21H5a2 2 0 0 1-2-2v-2M17 21h2a2 2 0 0 0 2-2v-2"
        className="stroke-current"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M8 12h8"
        className="stroke-current"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M12 8v8"
        className="stroke-current"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.7"
      />
    </svg>
  );
}

function IconClock(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 22a10 10 0 1 0-10-10 10 10 0 0 0 10 10Z"
        className="stroke-current"
        strokeWidth="1.5"
      />
      <path
        d="M12 6v6l4 2"
        className="stroke-current"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconReport(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7 3h8l2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"
        className="stroke-current"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M9 11h6M9 15h6M9 19h4"
        className="stroke-current"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M15 3v3h3"
        className="stroke-current"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card className="group relative overflow-hidden border-white/10 bg-white/5 backdrop-blur-sm transition hover:border-white/20 hover:bg-white/[0.07]">
      <CardHeader className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="inline-flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/90 transition group-hover:border-white/20 group-hover:bg-white/10">
            <div className="size-5">{icon}</div>
          </div>
          <CardTitle className="text-base font-semibold text-white">
            {title}
          </CardTitle>
        </div>
        <CardDescription className="text-sm leading-relaxed text-zinc-300">
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}

function UseCaseCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="group block h-full rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-white/20 hover:bg-white/[0.07]"
    >
      <h3 className="text-base font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-zinc-300">{description}</p>
      <span className="mt-4 inline-flex text-sm text-indigo-300 group-hover:text-indigo-200">
        View use case
      </span>
    </a>
  );
}

const useCases = [
  {
    title: "Freelancers",
    description: "Automated QC for solo editors shipping client deliverables.",
    href: "/use-cases/freelancers",
  },
  {
    title: "Post-production teams",
    description: "Standardized QC across editors, versions, and client specs.",
    href: "/use-cases/post-production",
  },
  {
    title: "Video production",
    description: "Catch export issues before clients spot them.",
    href: "/use-cases/video-production",
  },
  {
    title: "Agencies & brand teams",
    description: "QC for campaign variants, client specs, and multi-platform delivery.",
    href: "/use-cases/agencies",
  },
  {
    title: "Social content",
    description: "Fast QC for short-form and vertical deliverables.",
    href: "/use-cases/social-content",
  },
  {
    title: "TV delivery",
    description: "Preset-driven QC for broadcast specs and loudness targets.",
    href: "/use-cases/tv-delivery",
  },
] as const;

const faqItems = [
  {
    question: "What does FrameSense check in a video export?",
    answer:
      "Black frames, freeze frames, silence, loudness spikes, and delivery spec mismatches with timecodes.",
  },
  {
    question: "Who is FrameSense built for?",
    answer:
      "Editors, filmmakers, freelancers, post-production teams, and small studios.",
  },
  {
    question: "How fast are QC checks?",
    answer:
      "Most exports finish in minutes, depending on file length and format.",
  },
  {
    question: "Does FrameSense support LUFS loudness targets?",
    answer: "Yes. It checks loudness targets such as LUFS and flags spikes.",
  },
  {
    question: "Can I use presets for client delivery specs?",
    answer:
      "Yes. Choose a preset or customize thresholds, and FrameSense flags mismatches.",
  },
  {
    question: "What do I get after a scan?",
    answer: "A clear PASS/FAIL report with timecodes you can share.",
  },
] as const;

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

function Step({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="relative pl-12">
      <div className="absolute left-0 top-0 flex size-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-sm font-semibold text-white">
        {number}
      </div>
      <div className="space-y-1">
        <h3 className="text-base font-semibold text-white">{title}</h3>
        <p className="text-sm leading-relaxed text-zinc-300">{description}</p>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      {/* Subtle background */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[980px] -translate-x-1/2 rounded-full bg-indigo-500/15 blur-3xl" />
        <div className="absolute -bottom-40 left-1/3 h-[520px] w-[980px] -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.07)_1px,transparent_0)] bg-[size:24px_24px] opacity-30" />
      </div>

      <a
        href="#content"
        className={cx(
          "sr-only focus:not-sr-only",
          "fixed left-4 top-4 z-[60] rounded-md bg-white px-3 py-2 text-sm font-medium text-zinc-900",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
        )}
      >
        Skip to content
      </a>
      <Header />

      <main id="content">
        {/* Hero */}
        <section className="relative">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 pt-14 pb-12 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:pt-20">
            <Reveal className="relative">
              <Badge className="border-white/10 bg-white/5 text-zinc-200">
                AI video quality control
              </Badge>

              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                AI-powered, frame-accurate video QC{" "}
                <span className="bg-gradient-to-r from-indigo-300 to-fuchsia-200 bg-clip-text text-transparent">
                  for final exports.
                </span>
              </h1>

              <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-300 sm:text-lg">
                FrameSense is an AI video checker and AI video control platform for editors,
                freelancers, and post-production teams. Scan exports for black frames,
                freezes, silence, loudness spikes, and spec mismatches, then get a clear
                PASS/FAIL report with timecodes in minutes.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  asChild
                  className={cx(
                    "h-11 px-6 bg-indigo-500 text-white hover:bg-indigo-400",
                    "focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
                  )}
                >
                  <a href="#waitlist">Join the waiting list</a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className={cx(
                    "h-11 px-6 border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white",
                    "focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
                  )}
                >
                  <a href="#how-it-works">See how it works</a>
                </Button>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-zinc-300">
                <span className="inline-flex items-center gap-2">
                  <span className="inline-flex size-5 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-200">
                    ✓
                  </span>
                  Frame-level checks
                </span>
                <span className="hidden text-zinc-500 sm:inline">•</span>
                <span className="inline-flex items-center gap-2">
                  <span className="inline-flex size-5 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-200">
                    ✓
                  </span>
                  Clear PASS / FAIL outcome
                </span>
                <span className="hidden text-zinc-500 sm:inline">•</span>
                <span className="inline-flex items-center gap-2">
                  <span className="inline-flex size-5 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-200">
                    ✓
                  </span>
                  Built for modern teams
                </span>
              </div>
            </Reveal>

            {/* Visual */}
            <Reveal className="relative" delayMs={120}>
              <div className="relative mx-auto w-full max-w-xl">
                <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-indigo-500/20 via-fuchsia-500/10 to-transparent blur-2xl" />
                <div className="relative rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-2">
                      <div className="size-2 rounded-full bg-emerald-400/80" aria-hidden="true" />
                      <p className="text-xs font-medium text-zinc-200">
                        QC Report — FrameSense
                      </p>
                    </div>
                    <Badge className="border-white/10 bg-white/5 text-zinc-200">
                      PASS
                    </Badge>
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-3">
                    <MiniStat label="Black frames" value="0" />
                    <MiniStat label="Freezes" value="0" />
                    <MiniStat label="Silence" value="1" />
                  </div>

                  <div className="mt-4 rounded-2xl border border-white/10 bg-zinc-950/50 p-4">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-medium text-zinc-200">
                        Timeline highlights
                      </p>
                      <p className="text-xs text-zinc-400">00:00 → 00:30</p>
                    </div>
                    <div className="mt-3 space-y-2">
                       <MiniIssue
                        severity="Critical"
                        time="00:18.07"
                        text="On-screen text grammar issue: &quot;Your welcome&quot; -&gt; &quot;You&apos;re welcome&quot;"
                      />
                      <MiniIssue severity="Warning" time="00:12.48" text="Silence segment detected (2.1s)" />
                      <MiniIssue severity="Info" time="00:00.00" text="Format: 1920×1080, 25fps, H.264/AAC" />
                    </div>

                    <div className="mt-4">
                      <div className="h-2 w-full overflow-hidden rounded-full bg-white/5">
                        <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-indigo-400/80 to-fuchsia-300/70" />
                      </div>
                      <p className="mt-2 text-xs text-zinc-400">
                        Analysis completes in minutes, not hours.
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <GhostChip icon={<IconScan className="size-4" />} text="Review player" />
                    <GhostChip icon={<IconWave className="size-4" />} text="Waveform + vectorscope" />
                    <GhostChip icon={<IconReport className="size-4" />} text="AI text grammar check" />
                    <GhostChip icon={<IconReport className="size-4" />} text="Shareable report" />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Social proof */}
        <section className="border-y border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
            <Reveal>
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-zinc-200">Trusted by teams shipping video every week</p>
                  <p className="text-sm text-zinc-400">
                    Early users report fewer revisions, fewer late-night “just one more export” checks, and faster sign-off.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  <StatPill value="99.9%" label="Export confidence" />
                  <StatPill value="3×" label="Faster QC" />
                  <StatPill value="12k+" label="Frames scanned" />
                  <StatPill value="<5 min" label="Avg. report time" />
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                {["Studio North", "BrightCut", "IndieWorks", "Pulse Media", "EditLab", "Kinetic"].map((name) => (
                  <div
                    key={name}
                    className="flex h-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xs font-semibold tracking-wide text-zinc-200"
                    aria-label={`Placeholder logo: ${name}`}
                    title={name}
                  >
                    {name}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="scroll-mt-24">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <Reveal>
              <div className="flex flex-col gap-3">
                <Badge className="w-fit border-white/10 bg-white/5 text-zinc-200">Features</Badge>
                <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Everything you need for confident delivery
                </h2>
                <p className="max-w-2xl text-base text-zinc-300">
                  FrameSense focuses on the issues that actually slip into final exports—then makes them impossible to ignore.
                </p>
              </div>
            </Reveal>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Reveal delayMs={60}>
                <FeatureCard
                  icon={<IconScan className="size-5" />}
                  title="Frame-accurate detection"
                  description="Find black frames, freezes, and abrupt dropouts with timestamped precision."
                />
              </Reveal>
              <Reveal delayMs={120}>
                <FeatureCard
                  icon={<IconWave className="size-5" />}
                  title="Audio sanity checks"
                  description="Detect silence, clipping risk, and loudness outliers before they become complaints."
                />
              </Reveal>
              <Reveal delayMs={180}>
                <FeatureCard
                  icon={<IconShield className="size-5" />}
                  title="Spec compliance"
                  description="Verify resolution, frame rate, and container basics against your chosen preset."
                />
              </Reveal>
              <Reveal delayMs={240}>
                <FeatureCard
                  icon={<IconReport className="size-5" />}
                  title="Human-friendly reports"
                  description="A clean PASS/FAIL summary plus actionable issues you can share with stakeholders."
                />
              </Reveal>
              <Reveal delayMs={300}>
                <FeatureCard
                  icon={<IconClock className="size-5" />}
                  title="Fast feedback loop"
                  description="Run checks right after export—no manual timeline scrubbing, no guesswork."
                />
              </Reveal>
              <Reveal delayMs={360}>
                <FeatureCard
                  icon={<IconBolt className="size-5" />}
                  title="Built for teams"
                  description="Repeatable presets, consistent outcomes, and an audit trail you can rely on."
                />
              </Reveal>
            </div>
          </div>
        </section>

        {/* Advanced controls */}
        <section className="scroll-mt-24 border-y border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <Reveal>
              <div className="flex flex-col gap-3">
                <Badge className="w-fit border-white/10 bg-white/5 text-zinc-200">
                  Advanced controls
                </Badge>
                <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Advanced AI video control for high-stakes delivery
                </h2>
                <p className="max-w-2xl text-base text-zinc-300">
                  Beyond core QC, FrameSense adds AI controls that reduce re-exports,
                  protect revenue, and keep teams shipping on time.
                </p>
              </div>
            </Reveal>

            <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-2">
              <Reveal delayMs={60}>
                <ControlCard
                  title="Video control quality"
                  description="Broadcast-safe and artifact checks for the image itself."
                  items={[
                    "Legal range and gamut control (broadcast-safe luma/chroma)",
                    "Interlacing and combing detection",
                    "Letterbox and pillarbox detection",
                    "Blur and out-of-focus detection",
                    "Blockiness and compression artifacts",
                    "Dead or stuck pixel + PSE flash safety checks",
                  ]}
                />
              </Reveal>
              <Reveal delayMs={120}>
                <ControlCard
                  title="Audio control quality"
                  description="Deeper audio QA to prevent rejections and revisions."
                  items={[
                    "Loudness detail: momentary, short-term, integrated, LRA, true peak",
                    "Phase correlation and mono compatibility checks",
                    "Pops, clicks, DC offset, and noise floor flags",
                    "Channel layout validation (L/R/C/LFE/dual mono)",
                  ]}
                />
              </Reveal>
              <Reveal delayMs={180}>
                <ControlCard
                  title="File integrity controls"
                  description="Validate container, codec, and delivery timing."
                  items={[
                    "GOP and codec compliance (keyframe interval, profile, level)",
                    "VFR/CFR control with timestamp discontinuities",
                    "Dropped frame detection",
                    "A/V sync drift detection",
                    "HDR10/Dolby Vision metadata checks (MaxCLL/MaxFALL)",
                  ]}
                />
              </Reveal>
              <Reveal delayMs={240}>
                <ControlCard
                  title="Pro/Agency AI upgrades"
                  description="High-end controls for teams shipping at scale."
                  items={[
                    "Version comparison diff with SSIM/PSNR/VMAF over time",
                    "NLE marker export for Premiere/Resolve",
                    "Custom QC presets with pass/fail rules",
                    "Frame grab thumbnails for every issue",
                    "AI on-screen text OCR + grammar check",
                  ]}
                />
              </Reveal>
            </div>

            <Reveal delayMs={300}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  asChild
                  className={cx(
                    "h-11 px-6 bg-indigo-500 text-white hover:bg-indigo-400",
                    "focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
                  )}
                >
                  <a href="#waitlist">Get early access to advanced controls</a>
                </Button>
                <p className="text-xs text-zinc-400">
                  Pro/Agency controls are available in early access.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Use cases */}
        <section
          id="use-cases"
          className="scroll-mt-24 border-y border-white/10 bg-white/[0.02]"
        >
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <Reveal>
              <div className="flex flex-col gap-3">
                <Badge className="w-fit border-white/10 bg-white/5 text-zinc-200">
                  Use cases
                </Badge>
                <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Built for freelancers, post-production, and small studios
                </h2>
                <p className="max-w-2xl text-base text-zinc-300">
                  Automated video QC that fits editors and filmmakers shipping final exports
                  every week.
                </p>
                <p className="text-sm text-zinc-400">
                  Works great for: Premiere Pro and DaVinci Resolve workflows.
                </p>
              </div>
            </Reveal>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {useCases.map((useCase, index) => (
                <Reveal key={useCase.href} delayMs={index * 80}>
                  <UseCaseCard {...useCase} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="scroll-mt-24 border-y border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <Reveal>
              <div className="flex flex-col gap-3">
                <Badge className="w-fit border-white/10 bg-white/5 text-zinc-200">How it works</Badge>
                <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  From export to report in three steps
                </h2>
                <p className="max-w-2xl text-base text-zinc-300">
                  A simple workflow your editors will actually use—because it saves time every single delivery.
                </p>
              </div>
            </Reveal>

            <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
              <Reveal delayMs={80}>
                <div className="space-y-6">
                  <Step
                    number="1"
                    title="Upload your final export"
                    description="Drop in your deliverable file and choose a preset (TV, social, client spec)."
                  />
                  <div className="ml-4 h-px bg-white/10 lg:ml-12" aria-hidden="true" />
                  <Step
                    number="2"
                    title="FrameSense runs automated QC"
                    description="We scan frames and audio for the failure modes that humans miss under deadline pressure."
                  />
                  <div className="ml-4 h-px bg-white/10 lg:ml-12" aria-hidden="true" />
                  <Step
                    number="3"
                    title="Get a clear PASS/FAIL report"
                    description="Review issues with timecodes, severity, and suggested next actions—then ship with confidence."
                  />
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-zinc-300">
                    Need delivery presets?{" "}
                    <Link
                      href="/docs/qc-presets"
                      className="text-indigo-300 hover:text-indigo-200 hover:underline underline-offset-4"
                    >
                      Browse QC presets
                    </Link>
                    .
                  </div>
                </div>
              </Reveal>

              <Reveal delayMs={140}>
                <Card className="border-white/10 bg-white/5 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white">What gets flagged?</CardTitle>
                    <CardDescription className="text-zinc-300">
                      The most common “how did that get in there?” problems.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm text-zinc-200">
                      <Bullet>
                        <Link
                          href="/black-frame-detection"
                          className="text-zinc-200 hover:text-white hover:underline underline-offset-4"
                        >
                          Black frames & unintended fades
                        </Link>
                      </Bullet>
                      <Bullet>
                        <Link
                          href="/freeze-frame-detection"
                          className="text-zinc-200 hover:text-white hover:underline underline-offset-4"
                        >
                          Freeze frames / stuck media
                        </Link>
                      </Bullet>
                      <Bullet>
                        <Link
                          href="/silence-detection"
                          className="text-zinc-200 hover:text-white hover:underline underline-offset-4"
                        >
                          Silence segments & audio dropouts
                        </Link>
                      </Bullet>
                      <Bullet>
                        <Link
                          href="/loudness-checker-lufs"
                          className="text-zinc-200 hover:text-white hover:underline underline-offset-4"
                        >
                          Loudness targets & peak checks
                        </Link>
                      </Bullet>
                      <Bullet>
                        <Link
                          href="/video-spec-check"
                          className="text-zinc-200 hover:text-white hover:underline underline-offset-4"
                        >
                          Resolution / frame rate mismatches
                        </Link>
                      </Bullet>
                    </ul>
                  </CardContent>
                  <CardFooter className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs text-zinc-400">
                      Designed for speed and clarity—no broadcast-engineer jargon.
                    </p>
                    <Button
                      asChild
                      variant="outline"
                      className="border-white/15 bg-white/5 text-white hover:bg-white/10"
                    >
                      <a href="#waitlist">Join the waiting list</a>
                    </Button>
                  </CardFooter>
                </Card>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="scroll-mt-24">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <Reveal>
              <div className="flex flex-col gap-3">
                <Badge className="w-fit border-white/10 bg-white/5 text-zinc-200">Pricing</Badge>
                <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Simple plans that scale with your output
                </h2>
                <p className="max-w-2xl text-base text-zinc-300">
                  Start small, upgrade when your pipeline demands it. Early access includes an extended trial.
                </p>
              </div>
            </Reveal>

            <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-3">
              <Reveal delayMs={60}>
                <PlanCard
                  name="Starter"
                  price="$29"
                  blurb="For freelancers and small creators."
                  features={[
                    "Basic QC presets",
                    "Single concurrent job",
                    "Shareable web report",
                    "Email notifications",
                  ]}
                  cta="Join waitlist"
                  href="#waitlist"
                />
              </Reveal>

              <Reveal delayMs={120}>
                <PlanCard
                  featured
                  name="Pro"
                  price="$79"
                  blurb="For teams shipping weekly."
                  features={[
                    "Advanced checks & thresholds",
                    "Up to 4 concurrent jobs",
                    "PDF export (coming soon)",
                    "Priority queue",
                  ]}
                  cta="Get early access"
                  href="#waitlist"
                />
              </Reveal>

              <Reveal delayMs={180}>
                <PlanCard
                  name="Studio"
                  price="Let’s talk"
                  blurb="For high-volume production."
                  features={[
                    "Custom presets per client",
                    "Higher concurrency",
                    "Webhook / API access",
                    "Dedicated support",
                  ]}
                  cta="Contact"
                  href="#waitlist"
                />
              </Reveal>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-24 border-t border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <Reveal>
              <div className="flex flex-col gap-3">
                <Badge className="w-fit border-white/10 bg-white/5 text-zinc-200">FAQ</Badge>
                <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Questions editors ask before delivery
                </h2>
                <p className="max-w-2xl text-base text-zinc-300">
                  Short answers to the most common automated video QC questions.
                </p>
              </div>
            </Reveal>

            <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
              {faqItems.map((item, index) => (
                <Reveal key={item.question} delayMs={index * 80} className="h-full">
                  <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-5">
                    <h3 className="text-base font-semibold text-white">{item.question}</h3>
                    <p className="mt-2 text-sm text-zinc-300">{item.answer}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
          />
        </section>

        {/* Waitlist */}
        <section id="waitlist" className="scroll-mt-24 border-t border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
              <Reveal>
                <Badge className="w-fit border-white/10 bg-white/5 text-zinc-200">Waiting list</Badge>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Be first to ship with confidence
                </h2>
                <p className="mt-3 max-w-xl text-base text-zinc-300">
                  Join the waiting list for early access, onboarding help, and launch pricing.
                </p>

                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  <MiniBenefit title="Fast setup" desc="Start in minutes with presets." />
                  <MiniBenefit title="Clear outcomes" desc="PASS/FAIL you can share." />
                  <MiniBenefit title="Built for speed" desc="Designed for deadlines." />
                </div>
              </Reveal>

              <Reveal delayMs={120}>
                <Card className="border-white/10 bg-white/5 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white">Get early access</CardTitle>
                    <CardDescription className="text-zinc-300">
                      We’ll email you when your spot opens.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <WaitlistForm />
                  </CardContent>
                </Card>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-zinc-950/70">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-5">
            <div className="md:col-span-2">
              <div className="flex items-center">
                <Image
                  src="/FrameSense_Logo_PNG_ForBlackBGR.png"
                  alt="FrameSense logo"
                  width={190}
                  height={42}
                  className="h-10 w-auto object-contain"
                />
              </div>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-zinc-400">
                Automated, frame-accurate quality checks for video exports—so you can deliver faster, with fewer surprises.
              </p>
            </div>

            <FooterCol
              title="Product"
              links={[
                { label: "Features", href: "/#features" },
                { label: "Use cases", href: "/#use-cases" },
                { label: "How it works", href: "/#how-it-works" },
                { label: "Pricing", href: "/#pricing" },
                { label: "FAQ", href: "/#faq" },
              ]}
            />
            <FooterCol
              title="Resources"
              links={[
                { label: "Docs", href: "/docs" },
                { label: "QC presets", href: "/docs/qc-presets" },
                { label: "Black frame detection", href: "/black-frame-detection" },
                { label: "Loudness checker", href: "/loudness-checker-lufs" },
                { label: "Video spec check", href: "/video-spec-check" },
              ]}
            />
            <FooterCol
              title="Company"
              links={[
                { label: "About", href: "/about" },
                { label: "Careers", href: "/careers" },
                { label: "Contact", href: "/contact" },
              ]}
            />
          </div>

          <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} FrameSense. All rights reserved.</p>
            <div className="flex gap-4">
              <Link
                href="/privacy"
                className="hover:text-zinc-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 rounded"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="hover:text-zinc-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 rounded"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ---------- Small UI helpers (same file) ---------- */

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
      <p className="text-[11px] font-medium text-zinc-400">{label}</p>
      <p className="mt-1 text-lg font-semibold tracking-tight text-white">{value}</p>
    </div>
  );
}

function MiniIssue({
  severity,
  time,
  text,
}: {
  severity: "Warning" | "Info" | "Critical";
  time: string;
  text: string;
}) {
  const tone =
    severity === "Warning"
      ? "border-amber-400/20 bg-amber-500/10 text-amber-100"
      : severity === "Critical"
        ? "border-rose-400/30 bg-rose-500/10 text-rose-100"
        : "border-white/10 bg-white/5 text-zinc-200";

  return (
    <div className={cx("flex items-start justify-between gap-3 rounded-xl border px-3 py-2", tone)}>
      <div className="min-w-0">
        <p className="text-xs font-semibold">{severity}</p>
        <p className="mt-0.5 text-xs text-current/90">{text}</p>
      </div>
      <p className="shrink-0 text-xs text-current/80">{time}</p>
    </div>
  );
}

function GhostChip({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-zinc-200">
      <span className="text-zinc-200" aria-hidden="true">
        {icon}
      </span>
      <span className="truncate">{text}</span>
    </div>
  );
}

function StatPill({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-center">
      <p className="text-sm font-semibold text-white">{value}</p>
      <p className="mt-0.5 text-xs text-zinc-400">{label}</p>
    </div>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span className="mt-2 inline-flex size-1.5 shrink-0 rounded-full bg-indigo-300" aria-hidden="true" />
      <span>{children}</span>
    </li>
  );
}

function ControlCard({
  title,
  description,
  items,
}: {
  title: string;
  description: string;
  items: string[];
}) {
  return (
    <Card className="h-full border-white/10 bg-white/5 backdrop-blur-sm">
      <CardHeader className="space-y-2">
        <CardTitle className="text-white">{title}</CardTitle>
        <CardDescription className="text-zinc-300">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-sm text-zinc-200">
          {items.map((item) => (
            <Bullet key={item}>{item}</Bullet>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

function PlanCard({
  name,
  price,
  blurb,
  features,
  cta,
  href,
  featured,
}: {
  name: string;
  price: string;
  blurb: string;
  features: string[];
  cta: string;
  href: string;
  featured?: boolean;
}) {
  return (
    <Card
      className={cx(
        "relative overflow-hidden border-white/10 bg-white/5 backdrop-blur-sm",
        featured && "border-indigo-400/30 bg-gradient-to-b from-indigo-500/10 to-white/5"
      )}
    >
      {featured ? (
        <div className="absolute right-4 top-4">
          <Badge className="bg-indigo-500 text-white hover:bg-indigo-500">Most popular</Badge>
        </div>
      ) : null}

      <CardHeader className="space-y-2">
        <CardTitle className="text-white">{name}</CardTitle>
        <CardDescription className="text-zinc-300">{blurb}</CardDescription>
        <div className="pt-2">
          <p className="text-3xl font-semibold tracking-tight text-white">{price}</p>
          <p className="mt-1 text-xs text-zinc-400">per month (estimated)</p>
        </div>
      </CardHeader>

      <CardContent>
        <ul className="space-y-3 text-sm text-zinc-200">
          {features.map((f) => (
            <li key={f} className="flex gap-3">
              <span className="mt-0.5 inline-flex size-5 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-200">
                ✓
              </span>
              <span className="leading-relaxed">{f}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter>
        <Button
          asChild
          className={cx(
            "w-full h-11",
            featured
              ? "bg-indigo-500 text-white hover:bg-indigo-400"
              : "bg-white/10 text-white hover:bg-white/15",
            "focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
          )}
        >
          <a href={href}>{cta}</a>
        </Button>
      </CardFooter>
    </Card>
  );
}

function MiniBenefit({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
      <p className="text-sm font-semibold text-white">{title}</p>
      <p className="mt-1 text-xs text-zinc-400">{desc}</p>
    </div>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: Array<{ label: string; href: string }>;
}) {
  return (
    <div>
      <p className="text-sm font-semibold text-white">{title}</p>
      <ul className="mt-3 space-y-2 text-sm">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className="text-zinc-400 hover:text-zinc-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 rounded"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
