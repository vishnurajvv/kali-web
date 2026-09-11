import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CtaBand } from "@/components/home/cta-band";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/site";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services · Kaliyugaa" },
      {
        name: "description",
        content:
          "Customer care, BPO, tech and IT support, voice, non-voice, and market analysis — run through Kaliyugaa AGS3.",
      },
    ],
  }),
});

const IMAGES: Record<string, { src: string; alt: string }> = {
  "customer-care": {
    src: "/images/voice.jpg",
    alt: "Specialist on a customer-care voice channel.",
  },
  bpo: {
    src: "/images/analysis.jpg",
    alt: "Back-office desk with case work in progress.",
  },
  "tech-it": {
    src: "/images/tech.jpg",
    alt: "Server corridor used for tech and IT operations.",
  },
  voice: {
    src: "/images/hero.jpg",
    alt: "Night operations floor running live voice.",
  },
  "non-voice": {
    src: "/images/ags3.jpg",
    alt: "Glass planes standing in for digital non-voice queues.",
  },
  "market-analysis": {
    src: "/images/analysis.jpg",
    alt: "Desk used for feedback and market analysis.",
  },
};

function ServicesPage() {
  return (
    <main>
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <p className="font-mono text-xs uppercase tracking-[var(--tracking-label)] text-accent">
            Operations
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl tracking-[var(--tracking-display)] sm:text-6xl">
            Advanced operations support, run as a system.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Kaliyugaa does not staff a floor and hope the numbers move. Each
            line below is executed by AGS3 — specialist agents, human
            exceptions, and a steering loop from live feedback.
          </p>
        </div>
      </section>

      {services.map((s, i) => {
        const image = IMAGES[s.id];
        const reverse = i % 2 === 1;
        return (
          <section
            key={s.id}
            id={s.id}
            className="scroll-mt-20 border-b border-border"
          >
            <div
              className={`grid lg:grid-cols-2 ${reverse ? "lg:[&>img]:order-2" : ""}`}
            >
              {image ? (
                <img
                  src={image.src}
                  alt={image.alt}
                  className="media h-64 w-full object-cover sm:h-80 lg:h-full"
                  width={1600}
                  height={1000}
                />
              ) : null}
              <div className="flex flex-col justify-center px-5 py-12 sm:px-12">
                <p className="font-mono text-xs text-subtle">{s.number}</p>
                <h2 className="mt-3 font-display text-4xl tracking-[var(--tracking-display)]">
                  {s.title}
                </h2>
                <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
                <ul className="mt-6 space-y-2">
                  {s.points.map((p) => (
                    <li
                      key={p}
                      className="flex gap-3 text-sm text-foreground"
                    >
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        );
      })}

      <section className="border-b border-border py-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p className="max-w-md text-muted-foreground">
            Agentic optimization is not a seventh brochure. It is how all six
            lines improve after the first week.
          </p>
          <Button asChild variant="outline">
            <Link to="/ags3">
              How AGS3 steers the floor
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
