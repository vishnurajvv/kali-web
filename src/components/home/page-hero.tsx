import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { capabilities, company } from "@/lib/site";

export function PageHero() {
  return (
    <section className="relative isolate min-h-[calc(100svh-4rem)] overflow-hidden">
      <img
        src="/images/hero.jpg"
        alt="A dim operations floor at night, rows of workstations receding under cool light."
        className="media absolute inset-0 size-full object-cover"
        width={1792}
        height={1008}
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/20"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex min-h-[calc(100svh-4rem)] max-w-6xl flex-col justify-end px-5 pb-10 pt-24 sm:px-8 sm:pb-14">
        <p className="rise-in font-mono text-xs uppercase tracking-[var(--tracking-label)] text-accent">
          {company.city} · {company.productLong}
        </p>
        <h1 className="rise-in rise-in-1 mt-5 max-w-3xl font-display text-5xl leading-[1.05] tracking-[var(--tracking-display)] text-foreground sm:text-6xl md:text-7xl">
          The operating system
          <br className="hidden sm:block" /> for modern BPO.
        </h1>
        <p className="rise-in rise-in-2 mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {company.lede}
        </p>
        <div className="rise-in rise-in-3 mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link to="/ags3">
              Explore AGS3
              <ArrowRight />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/contact">Talk to operations</Link>
          </Button>
        </div>
      </div>

      <div className="relative border-t border-border bg-background/80">
        <div className="overflow-hidden py-4">
          <div className="marquee-track flex w-max gap-10 px-5">
            {[...capabilities, ...capabilities].map((item, i) => (
              <span
                key={`${item}-${i}`}
                className="font-mono text-xs uppercase tracking-[var(--tracking-label)] text-muted-foreground"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
