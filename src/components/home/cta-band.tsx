import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaBand() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-16 sm:px-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <p className="font-mono text-xs uppercase tracking-[var(--tracking-label)] text-accent">
            Briefing
          </p>
          <h2 className="mt-3 font-display text-4xl tracking-[var(--tracking-display)] text-foreground sm:text-5xl">
            Put AGS3 on your floor.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            We start with one queue — care, tech, or back-office — and expand
            once the numbers hold. No theatre. A working mesh, with the audit
            trail your operations lead will actually read.
          </p>
        </div>
        <Button asChild size="lg">
          <Link to="/contact">
            Request a briefing
            <ArrowRight />
          </Link>
        </Button>
      </div>
    </section>
  );
}
