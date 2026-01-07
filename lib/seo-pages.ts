export type SeoBullet = { text: string; href?: string };
export type SeoSection = { title: string; body: string; bullets?: SeoBullet[] };
export type SeoCta = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
};
export type SeoLink = { label: string; href: string };
export type SeoPageContent = {
  title: string;
  description: string;
  eyebrow?: string;
  intro: string;
  sections: SeoSection[];
  ctas?: SeoCta[];
  relatedLinks?: SeoLink[];
};

const defaultCtas: SeoCta[] = [
  { label: "Join the waitlist", href: "/#waitlist", variant: "primary" },
  { label: "Explore features", href: "/features", variant: "secondary" },
];

const defaultRelatedLinks: SeoLink[] = [
  { label: "Features overview", href: "/features" },
  { label: "How it works", href: "/how-it-works" },
  { label: "QC presets", href: "/docs/qc-presets" },
];

export const problemPages = {
  "black-frame-detection": {
    title: "Black Frame Detection for Video QC",
    description:
      "Automated black frame detection for video exports. Find unintended black frames with timecodes and clear PASS/FAIL reporting.",
    eyebrow: "Problem page",
    intro:
      "Catch black frames and flash frames that slip in after export. FrameSense runs automated video QC and surfaces exact timecodes before you deliver.",
    sections: [
      {
        title: "Why black frames happen after export",
        body:
          "Black frames can appear from timeline gaps, missing media, bad renders, or broken transitions. They are easy to miss during fast manual checks.",
      },
      {
        title: "FrameSense black frame detection",
        body:
          "FrameSense scans every frame and flags black frames beyond your threshold, then summarizes the result with a clear PASS/FAIL report.",
        bullets: [
          { text: "Frame-accurate timecodes for every incident" },
          { text: "Thresholds for duration and luminance" },
          { text: "Shareable QC report for clients and producers" },
        ],
      },
      {
        title: "Related QC checks",
        body:
          "Bundle black frame detection with other export checks to reduce re-exports.",
        bullets: [
          { text: "Freeze frame detection", href: "/freeze-frame-detection" },
          { text: "Silence detection", href: "/silence-detection" },
          { text: "LUFS loudness checker", href: "/loudness-checker-lufs" },
          { text: "Video spec check", href: "/video-spec-check" },
        ],
      },
    ],
    ctas: defaultCtas,
    relatedLinks: defaultRelatedLinks,
  },
  "freeze-frame-detection": {
    title: "Freeze Frame Detection for Video QC",
    description:
      "Detect freeze frames and stuck media in exports. Automated QC with timecodes and clear PASS/FAIL reports.",
    eyebrow: "Problem page",
    intro:
      "Find freeze frames caused by render glitches, missing frames, or dropped media. FrameSense pinpoints every stuck frame with timecodes.",
    sections: [
      {
        title: "Why freeze frames slip through",
        body:
          "Freeze frames can hide inside long exports and are easy to miss when deadlines are tight. Clients notice them immediately.",
      },
      {
        title: "Frame-accurate freeze detection",
        body:
          "FrameSense detects stuck frames, repeated frames, and abnormal holds, then flags each incident in a clean report.",
        bullets: [
          { text: "Timecoded incidents for fast fixes" },
          { text: "Severity flags to prioritize corrections" },
          { text: "Shareable PASS/FAIL summary" },
        ],
      },
      {
        title: "Related QC checks",
        body: "Pair freeze detection with other automated checks.",
        bullets: [
          { text: "Black frame detection", href: "/black-frame-detection" },
          { text: "Silence detection", href: "/silence-detection" },
          { text: "LUFS loudness checker", href: "/loudness-checker-lufs" },
          { text: "Video spec check", href: "/video-spec-check" },
        ],
      },
    ],
    ctas: defaultCtas,
    relatedLinks: defaultRelatedLinks,
  },
  "silence-detection": {
    title: "Silence Detection in Video Exports",
    description:
      "Detect unexpected silence and audio dropouts in final exports with automated QC and timecodes.",
    eyebrow: "Problem page",
    intro:
      "Silence segments ruin deliveries. FrameSense flags silent or near-silent audio ranges before you send the file.",
    sections: [
      {
        title: "Common causes of silence",
        body:
          "Muted tracks, missing renders, or export glitches often create unexpected silence. These are hard to catch without automated checks.",
      },
      {
        title: "Audio sanity checks",
        body:
          "FrameSense scans audio for silence segments and dropouts, then reports timecodes for fast fixes.",
        bullets: [
          { text: "Detects silence across channels" },
          { text: "Highlights duration and exact timecodes" },
          { text: "Report-friendly PASS/FAIL summary" },
        ],
      },
      {
        title: "Related QC checks",
        body: "Combine silence detection with other audio checks.",
        bullets: [
          { text: "LUFS loudness checker", href: "/loudness-checker-lufs" },
          { text: "Video spec check", href: "/video-spec-check" },
          { text: "Black frame detection", href: "/black-frame-detection" },
        ],
      },
    ],
    ctas: defaultCtas,
    relatedLinks: defaultRelatedLinks,
  },
  "loudness-checker-lufs": {
    title: "LUFS Loudness Checker for Video QC",
    description:
      "Check LUFS loudness targets and peaks against delivery specs with automated video QC and timecodes.",
    eyebrow: "Problem page",
    intro:
      "Hit loudness targets like LUFS and EBU R128 without manual meter checks. FrameSense flags loudness spikes and outliers.",
    sections: [
      {
        title: "Why loudness compliance matters",
        body:
          "Mismatched loudness can trigger re-exports, platform rejection, or client revisions. Automated checks keep levels consistent.",
      },
      {
        title: "What FrameSense measures",
        body:
          "FrameSense evaluates loudness ranges and peak behavior, then points to the exact moments that need attention.",
        bullets: [
          { text: "LUFS-based loudness checks" },
          { text: "Peak and spike detection" },
          { text: "Timecoded report for audio fixes" },
        ],
      },
      {
        title: "Related QC checks",
        body: "Pair loudness checks with other export QA.",
        bullets: [
          { text: "Silence detection", href: "/silence-detection" },
          { text: "Video spec check", href: "/video-spec-check" },
          { text: "Freeze frame detection", href: "/freeze-frame-detection" },
        ],
      },
    ],
    ctas: defaultCtas,
    relatedLinks: defaultRelatedLinks,
  },
  "video-spec-check": {
    title: "Video Spec Check for Delivery Compliance",
    description:
      "Automated QC to verify resolution, frame rate, codec, and container against delivery specs.",
    eyebrow: "Problem page",
    intro:
      "Detect spec mismatches like 25fps vs 30fps, wrong resolution, or incorrect codec before delivery.",
    sections: [
      {
        title: "Spec mismatches are common",
        body:
          "Each client or platform has delivery requirements. A single mismatch can trigger rejection or re-export.",
      },
      {
        title: "FrameSense spec checks",
        body:
          "FrameSense verifies resolution, frame rate, aspect ratio, codec, and container against preset targets.",
        bullets: [
          { text: "Preset-based spec validation" },
          { text: "Mismatch highlights with timecodes" },
          { text: "PASS/FAIL report for sign-off" },
        ],
      },
      {
        title: "Presets and docs",
        body: "Use presets to standardize delivery specs across teams.",
        bullets: [
          { text: "QC preset library", href: "/docs/qc-presets" },
          { text: "TV 1080p25 preset", href: "/docs/qc-presets/tv-1080p25" },
          { text: "Social 1080x1920 preset", href: "/docs/qc-presets/social-1080x1920" },
        ],
      },
    ],
    ctas: defaultCtas,
    relatedLinks: defaultRelatedLinks,
  },
} satisfies Record<string, SeoPageContent>;

export const useCasePages = {
  freelancers: {
    title: "Video QC for Freelance Editors",
    description:
      "Automated video QC for freelancers to catch black frames, freezes, silence, loudness spikes, and spec mismatches before delivery.",
    eyebrow: "Use case",
    intro:
      "FrameSense helps freelance editors deliver clean exports quickly with automated checks and clear PASS/FAIL reports.",
    sections: [
      {
        title: "Common freelancer risks",
        body:
          "Short timelines and multiple revisions make it easy to miss a broken frame, silence segment, or incorrect spec.",
        bullets: [
          { text: "Black frames after export" },
          { text: "Frozen frames in long timelines" },
          { text: "Unexpected silence or loudness spikes" },
        ],
      },
      {
        title: "How FrameSense helps",
        body:
          "Upload the final export, run automated QC, and share a timecoded report with clients or producers.",
        bullets: [
          { text: "Clear PASS/FAIL summary in minutes" },
          { text: "Timecodes for fast fixes" },
          { text: "Repeatable presets for every client" },
        ],
      },
      {
        title: "Recommended checks",
        body: "Start with the highest risk export issues.",
        bullets: [
          { text: "Black frame detection", href: "/black-frame-detection" },
          { text: "Freeze frame detection", href: "/freeze-frame-detection" },
          { text: "Silence detection", href: "/silence-detection" },
          { text: "LUFS loudness checker", href: "/loudness-checker-lufs" },
          { text: "Video spec check", href: "/video-spec-check" },
        ],
      },
    ],
    ctas: defaultCtas,
  },
  "post-production": {
    title: "Video QC for Post-production Teams",
    description:
      "Standardize automated QC for post-production teams with presets, timecoded reports, and fast export checks.",
    eyebrow: "Use case",
    intro:
      "Keep post-production deliveries consistent across editors, versions, and clients with automated video QC.",
    sections: [
      {
        title: "Standardize quality across versions",
        body:
          "Multiple cuts and client notes create more opportunities for mistakes. Automated checks keep each version consistent.",
      },
      {
        title: "Presets and reporting for teams",
        body:
          "FrameSense uses presets to align every editor with the same delivery spec and report format.",
        bullets: [
          { text: "Preset-based QC across projects" },
          { text: "Timecoded issues for fast fixes" },
          { text: "Shareable reports for producers" },
        ],
      },
      {
        title: "Recommended checks",
        body: "Cover the most common post-production failures.",
        bullets: [
          { text: "Black frame detection", href: "/black-frame-detection" },
          { text: "Freeze frame detection", href: "/freeze-frame-detection" },
          { text: "Silence detection", href: "/silence-detection" },
          { text: "LUFS loudness checker", href: "/loudness-checker-lufs" },
          { text: "Video spec check", href: "/video-spec-check" },
        ],
      },
    ],
    ctas: defaultCtas,
  },
  "video-production": {
    title: "Video QC for Video Production Companies",
    description:
      "Automated video QC for production companies delivering multiple cuts and client specs.",
    eyebrow: "Use case",
    intro:
      "Ship client-ready exports without last-minute surprises, even when you are delivering multiple formats.",
    sections: [
      {
        title: "Reduce re-exports and client revisions",
        body:
          "Automated QC catches export failures that lead to re-exports and lost time.",
      },
      {
        title: "Handle multiple deliverables",
        body:
          "Use presets for each client spec, from broadcast to social deliverables.",
        bullets: [
          { text: "Spec checks for each delivery target" },
          { text: "Audio QC for loudness and silence" },
          { text: "Reports you can share with clients" },
        ],
      },
      {
        title: "Recommended checks",
        body: "Focus on the most expensive mistakes first.",
        bullets: [
          { text: "Video spec check", href: "/video-spec-check" },
          { text: "Black frame detection", href: "/black-frame-detection" },
          { text: "Freeze frame detection", href: "/freeze-frame-detection" },
          { text: "LUFS loudness checker", href: "/loudness-checker-lufs" },
        ],
      },
    ],
    ctas: defaultCtas,
  },
  "social-content": {
    title: "Video QC for Social Content",
    description:
      "Automated QC for social and short-form deliverables, catching spec mismatches, silence, and loudness issues.",
    eyebrow: "Use case",
    intro:
      "Keep short-form exports compliant and fast with automated video QC built for high volume.",
    sections: [
      {
        title: "Short-form delivery risks",
        body:
          "Aspect ratio mistakes, missing audio, and loudness spikes are common when shipping fast social deliverables.",
      },
      {
        title: "Fast QC for high volume",
        body:
          "FrameSense runs quick checks and generates a simple PASS/FAIL report so you can move to the next cut.",
        bullets: [
          { text: "Preset checks for vertical exports" },
          { text: "Timecoded silence and loudness issues" },
          { text: "Spec mismatch alerts before upload" },
        ],
      },
      {
        title: "Recommended checks",
        body: "Pair social presets with core QC checks.",
        bullets: [
          {
            text: "Social 1080x1920 preset",
            href: "/docs/qc-presets/social-1080x1920",
          },
          { text: "Silence detection", href: "/silence-detection" },
          { text: "LUFS loudness checker", href: "/loudness-checker-lufs" },
          { text: "Video spec check", href: "/video-spec-check" },
        ],
      },
    ],
    ctas: defaultCtas,
  },
  "tv-delivery": {
    title: "QC for TV Delivery and Broadcast Specs",
    description:
      "Automated QC for TV delivery with frame-accurate checks and loudness compliance monitoring.",
    eyebrow: "Use case",
    intro:
      "Meet TV delivery specs with automated checks, presets, and timecoded QC reporting.",
    sections: [
      {
        title: "Broadcast delivery pitfalls",
        body:
          "Small spec mismatches or loudness errors can delay approvals. Automated QC helps catch them early.",
      },
      {
        title: "Presets and compliance checks",
        body:
          "FrameSense validates frame rate, resolution, and audio levels against broadcast presets.",
        bullets: [
          { text: "Preset-driven spec checks" },
          { text: "LUFS and peak monitoring" },
          { text: "Report-ready documentation" },
        ],
      },
      {
        title: "Recommended presets",
        body: "Start with a common TV delivery target.",
        bullets: [
          {
            text: "TV 1080p25 preset",
            href: "/docs/qc-presets/tv-1080p25",
          },
          { text: "Video spec check", href: "/video-spec-check" },
          { text: "LUFS loudness checker", href: "/loudness-checker-lufs" },
        ],
      },
    ],
    ctas: defaultCtas,
  },
} satisfies Record<string, SeoPageContent>;

export const qcPresetPages = {
  "tv-1080p25": {
    title: "TV 1080p25 QC Preset",
    description:
      "QC preset for 1080p25 TV delivery with spec and loudness checks.",
    eyebrow: "QC preset",
    intro:
      "Use this preset for common 1080p25 broadcast deliveries and flag spec mismatches before submission.",
    sections: [
      {
        title: "Typical video specs",
        body: "Use these targets as a starting point.",
        bullets: [
          { text: "Resolution: 1920x1080 (16:9)" },
          { text: "Frame rate: 25 fps" },
          { text: "Container: MP4 (or client spec)" },
          { text: "Codec: H.264 (or client spec)" },
        ],
      },
      {
        title: "Typical audio specs",
        body: "Align with client loudness requirements.",
        bullets: [
          { text: "Sample rate: 48 kHz" },
          { text: "Stereo or approved channel layout" },
          { text: "Loudness: EBU R128 or client target" },
        ],
      },
      {
        title: "Recommended checks",
        body: "Pair the preset with core QC checks.",
        bullets: [
          { text: "Video spec check", href: "/video-spec-check" },
          { text: "LUFS loudness checker", href: "/loudness-checker-lufs" },
          { text: "Black frame detection", href: "/black-frame-detection" },
          { text: "Silence detection", href: "/silence-detection" },
        ],
      },
    ],
    ctas: [
      { label: "Join the waitlist", href: "/#waitlist", variant: "primary" },
      { label: "See all presets", href: "/docs/qc-presets", variant: "secondary" },
    ],
  },
  "social-1080x1920": {
    title: "Social 1080x1920 QC Preset",
    description:
      "QC preset for vertical 1080x1920 social deliverables with spec checks and audio QC.",
    eyebrow: "QC preset",
    intro:
      "Use this preset for vertical social exports and catch aspect ratio or audio issues before upload.",
    sections: [
      {
        title: "Typical video specs",
        body: "Match the most common social delivery targets.",
        bullets: [
          { text: "Resolution: 1080x1920 (9:16)" },
          { text: "Frame rate: 30 fps (or platform spec)" },
          { text: "Container: MP4" },
          { text: "Codec: H.264" },
        ],
      },
      {
        title: "Typical audio specs",
        body: "Keep audio consistent across short-form exports.",
        bullets: [
          { text: "Sample rate: 48 kHz" },
          { text: "Stereo mix or platform spec" },
          { text: "Consistent loudness target" },
        ],
      },
      {
        title: "Recommended checks",
        body: "Combine spec checks with audio QC.",
        bullets: [
          { text: "Video spec check", href: "/video-spec-check" },
          { text: "Silence detection", href: "/silence-detection" },
          { text: "LUFS loudness checker", href: "/loudness-checker-lufs" },
        ],
      },
    ],
    ctas: [
      { label: "Join the waitlist", href: "/#waitlist", variant: "primary" },
      { label: "See all presets", href: "/docs/qc-presets", variant: "secondary" },
    ],
  },
  "youtube-4k": {
    title: "YouTube 4K QC Preset",
    description:
      "QC preset for 4K YouTube exports with spec checks and automated QC.",
    eyebrow: "QC preset",
    intro:
      "Use this preset for 4K YouTube exports and verify resolution, frame rate, and audio targets.",
    sections: [
      {
        title: "Typical video specs",
        body: "Align with common 4K delivery guidance.",
        bullets: [
          { text: "Resolution: 3840x2160" },
          { text: "Frame rate: 24-60 fps" },
          { text: "Container: MP4" },
          { text: "Codec: H.264 or H.265" },
        ],
      },
      {
        title: "Typical audio specs",
        body: "Avoid audio issues that trigger re-exports.",
        bullets: [
          { text: "Sample rate: 48 kHz" },
          { text: "Stereo AAC audio" },
          { text: "Stable loudness target" },
        ],
      },
      {
        title: "Recommended checks",
        body: "Pair the preset with core QC checks.",
        bullets: [
          { text: "Black frame detection", href: "/black-frame-detection" },
          { text: "Freeze frame detection", href: "/freeze-frame-detection" },
          { text: "LUFS loudness checker", href: "/loudness-checker-lufs" },
        ],
      },
    ],
    ctas: [
      { label: "Join the waitlist", href: "/#waitlist", variant: "primary" },
      { label: "See all presets", href: "/docs/qc-presets", variant: "secondary" },
    ],
  },
} satisfies Record<string, SeoPageContent>;

export const marketingStaticRoutes = [
  "/",
  "/features",
  "/pricing",
  "/how-it-works",
  "/use-cases",
  "/about",
  "/careers",
  "/contact",
  "/privacy",
  "/terms",
];

export const problemRoutes = Object.keys(problemPages).map((slug) => `/${slug}`);
export const useCaseRoutes = Object.keys(useCasePages).map(
  (slug) => `/use-cases/${slug}`
);

export const marketingRoutes = [
  ...marketingStaticRoutes,
  ...problemRoutes,
  ...useCaseRoutes,
];

export const docsRoutes = [
  "/docs",
  "/docs/qc-presets",
  ...Object.keys(qcPresetPages).map((slug) => `/docs/qc-presets/${slug}`),
];
