import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Ags3Console } from "@/components/ags3-console";
import { CtaBand } from "@/components/home/cta-band";
import { PageHero } from "@/components/home/page-hero";
import { Button } from "@/components/ui/button";
import { layers, metrics, services } from "@/lib/site";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <main>
      <PageHero />

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-6xl grid-cols-2 sm:grid-cols-4">
          {metrics.map((m, i) => (
            <div
              key={m.label}
              className={
                i < metrics.length - 1 ? "border-r border-border" : undefined
              }
            >
              <div className="px-5 py-8 sm:px-8">
                <p className="font-display text-3xl tracking-[var(--tracking-display)] text-foreground sm:text-4xl">
                  {m.value}
                </p>
                <p className="mt-2 text-sm text-foreground">{m.label}</p>
                <p className="mt-1 text-xs text-muted-foreground">{m.hint}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-b border-border py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="font-mono text-xs uppercase tracking-[var(--tracking-label)] text-accent">
                01 · Product
              </p>
              <h2 className="mt-3 font-display text-4xl tracking-[var(--tracking-display)] sm:text-5xl">
                AGS3 is live on the floor, not in a slide.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
                Kaliyugaa AGS3 is an AI-automated BPO system. It takes the
                queue, runs specialist agents across voice and non-voice, and
                steers quality from the feedback those contacts already
                contain.
              </p>
            </div>
            <Button asChild variant="outline">
              <Link to="/ags3">
                Product overview
                <ArrowRight />
              </Link>
            </Button>
          </div>
          <div className="mt-12">
            <Ags3Console />
          </div>
        </div>
      </section>

      <section className="border-b border-border py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="font-mono text-xs uppercase tracking-[var(--tracking-label)] text-accent">
            02 · Operations
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl tracking-[var(--tracking-display)] sm:text-5xl">
            Six lines. One agentic loop.
          </h2>
          <div className="mt-12 divide-y divide-border border-y border-border">
            {services.map((s) => (
              <Link
                key={s.id}
                to="/services"
                hash={s.id}
                className="group grid gap-3 py-6 transition-colors duration-150 hover:bg-card md:grid-cols-12 md:items-baseline md:gap-8"
              >
                <p className="font-mono text-xs tabular-nums text-subtle md:col-span-1">
                  {s.number}
                </p>
                <h3 className="font-display text-2xl tracking-[var(--tracking-display)] text-foreground md:col-span-4">
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground md:col-span-6">
                  {s.lede}
                </p>
                <p className="hidden items-center justify-end text-muted-foreground transition-colors duration-150 group-hover:text-accent md:col-span-1 md:flex">
                  <ArrowRight className="size-4" />
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="font-mono text-xs uppercase tracking-[var(--tracking-label)] text-accent">
            03 · Method
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl tracking-[var(--tracking-display)] sm:text-5xl">
            Sense. Act. Steer.
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {layers.map((layer) => (
              <article
                key={layer.number}
                className="rounded-2xl bg-card p-2 shadow-[var(--shadow-border)]"
              >
                <div className="rounded-xl bg-background px-5 py-6">
                  <p className="font-mono text-xs text-subtle">
                    {layer.number} · {layer.name}
                  </p>
                  <h3 className="mt-4 font-display text-2xl tracking-[var(--tracking-display)]">
                    {layer.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {layer.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="grid lg:grid-cols-2">
          <img
            src="/images/voice.jpg"
            alt="Operations specialist on a live voice channel at dusk."
            className="media h-72 w-full object-cover sm:h-96 lg:h-full"
            width={1728}
            height={1152}
          />
          <div className="flex flex-col justify-center px-5 py-14 sm:px-12">
            <p className="font-mono text-xs uppercase tracking-[var(--tracking-label)] text-accent">
              Voice and non-voice
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-[var(--tracking-display)] sm:text-5xl">
              One memory across every channel.
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
              A caller who chatted this morning is not a stranger at 9pm. AGS3
              keeps care, tech, and back-office on the same record — then uses
              that record to brief the next agent, human or not.
            </p>
            <div className="mt-8">
              <Button asChild variant="outline">
                <Link to="/services">
                  See the service lines
                  <ArrowRight />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
