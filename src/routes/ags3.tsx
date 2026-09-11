import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Ags3Console } from "@/components/ags3-console";
import { CtaBand } from "@/components/home/cta-band";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { faqs, layers } from "@/lib/site";

export const Route = createFileRoute("/ags3")({
  component: Ags3Page,
  head: () => ({
    meta: [
      { title: "AGS3 · Kaliyugaa" },
      {
        name: "description",
        content:
          "Kaliyugaa AGS3 is an AI-automated BPO system: specialist agents, supervised exceptions, and market analysis from live feedback.",
      },
    ],
  }),
});

const CAPABILITIES = [
  {
    title: "Voice agents",
    body: "Live conversation with barge-in, verification, and a spoken brief on transfer. Not an IVR tree with a neural voice.",
  },
  {
    title: "Non-voice queues",
    body: "Chat, email, social, and tickets share the same customer memory and the same policy envelope as voice.",
  },
  {
    title: "Tech & IT actions",
    body: "Approved runbooks — resets, access, device, SaaS — executed with an audit trail your ITSM already understands.",
  },
  {
    title: "BPO back office",
    body: "KYC, billing exceptions, claims, and catalog work as exception-first queues instead of linear headcount.",
  },
  {
    title: "Quality supervision",
    body: "Every contact is scored against policy in flight. Sampling is a report, not the control system.",
  },
  {
    title: "Feedback intelligence",
    body: "Themes, severity, and product surfaces land in a daily brief. The same loop that runs the floor recommends how to change it.",
  },
] as const;

function Ags3Page() {
  return (
    <main>
      <section className="relative isolate overflow-hidden border-b border-border">
        <img
          src="/images/ags3.jpg"
          alt="Dark glass planes in a data hall, standing in for the AGS3 mesh."
          className="media absolute inset-0 size-full object-cover opacity-50"
          width={1792}
          height={1008}
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <p className="font-mono text-xs uppercase tracking-[var(--tracking-label)] text-accent">
            First product
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl tracking-[var(--tracking-display)] sm:text-6xl md:text-7xl">
            AGS3 — the AI-automated BPO system.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Specialist agents handle the work. Humans take the exceptions.
            Feedback from every contact steers routing, staffing, and the next
            playbook. That loop is the product.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link to="/contact">
                Request a briefing
                <ArrowRight />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/services">Service lines</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-b border-border py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="font-mono text-xs uppercase tracking-[var(--tracking-label)] text-accent">
            Floor
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl tracking-[var(--tracking-display)] sm:text-5xl">
            What operations leadership actually watches.
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Queue, specialist load, CSAT, FCR, and the themes coming off the
            contacts — one surface. The numbers below move because the demo is
            wired to a live loop, the same way a floor is.
          </p>
          <div className="mt-12">
            <Ags3Console />
          </div>
        </div>
      </section>

      <section className="border-b border-border py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="font-mono text-xs uppercase tracking-[var(--tracking-label)] text-accent">
            Architecture
          </p>
          <h2 className="mt-3 font-display text-4xl tracking-[var(--tracking-display)] sm:text-5xl">
            Three layers. Generation 3.
          </h2>
          <ol className="mt-12 divide-y divide-border border-y border-border">
            {layers.map((layer) => (
              <li
                key={layer.number}
                className="grid gap-3 py-8 md:grid-cols-12 md:items-start"
              >
                <p className="font-mono text-xs text-subtle md:col-span-2">
                  {layer.number} · {layer.name}
                </p>
                <h3 className="font-display text-2xl tracking-[var(--tracking-display)] md:col-span-4">
                  {layer.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground md:col-span-6">
                  {layer.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-border py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="font-mono text-xs uppercase tracking-[var(--tracking-label)] text-accent">
            Capabilities
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl tracking-[var(--tracking-display)] sm:text-5xl">
            Built for the work, not a chat window.
          </h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map((c) => (
              <article
                key={c.title}
                className="rounded-2xl bg-card p-2 shadow-[var(--shadow-border)]"
              >
                <div className="rounded-xl bg-background px-5 py-6">
                  <h3 className="font-medium text-foreground">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {c.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="font-mono text-xs uppercase tracking-[var(--tracking-label)] text-accent">
                Questions
              </p>
              <h2 className="mt-3 font-display text-4xl tracking-[var(--tracking-display)]">
                Direct answers.
              </h2>
            </div>
            <div className="lg:col-span-8">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((item, i) => (
                  <AccordionItem key={item.q} value={`q-${i}`}>
                    <AccordionTrigger>{item.q}</AccordionTrigger>
                    <AccordionContent>{item.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
