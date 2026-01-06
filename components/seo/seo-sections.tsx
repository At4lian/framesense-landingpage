import type { SeoSection } from "@/lib/seo-pages";

function splitParagraphs(body: string) {
  return body.split("\n\n").filter(Boolean);
}

export default function SeoSections({ sections }: { sections: SeoSection[] }) {
  return (
    <>
      {sections.map((section) => (
        <section key={section.title} className="space-y-3">
          <h2 className="text-2xl font-semibold text-white">{section.title}</h2>
          {splitParagraphs(section.body).map((paragraph) => (
            <p key={paragraph} className="text-base text-zinc-300">
              {paragraph}
            </p>
          ))}
          {section.bullets ? (
            <ul className="mt-3 space-y-2 text-sm text-zinc-200">
              {section.bullets.map((bullet) => (
                <li key={bullet.text} className="flex gap-3">
                  <span
                    className="mt-2 inline-flex size-1.5 shrink-0 rounded-full bg-indigo-300"
                    aria-hidden="true"
                  />
                  {bullet.href ? (
                    <a
                      href={bullet.href}
                      className="text-zinc-200 hover:text-white hover:underline underline-offset-4"
                    >
                      {bullet.text}
                    </a>
                  ) : (
                    <span>{bullet.text}</span>
                  )}
                </li>
              ))}
            </ul>
          ) : null}
        </section>
      ))}
    </>
  );
}
