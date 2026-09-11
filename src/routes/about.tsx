import { createFileRoute } from "@tanstack/react-router";
import { CtaBand } from "@/components/home/cta-band";
import { principles } from "@/lib/site";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About · Kaliyugaa" },
      {
        name: "description",
        content:
          "Kaliyugaa is an operations company. We build agentic systems that run BPO, customer care, and tech support — then improve them from live feedback.",
      },
    ],
  }),
});

function AboutPage() {
  return (
    <main>
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <p className="font-mono text-xs uppercase tracking-[var(--tracking-label)] text-accent">
            Company
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl tracking-[var(--tracking-display)] sm:text-6xl">
            Named for the age we actually operate in.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Legacy BPO is labour arbitrage with a headset. Kaliyugaa builds
            the system that takes the volume, keeps people on the exceptions,
            and treats every contact as a sample of the market.
          </p>
        </div>
      </section>

      <section className="border-b border-border">
        <img
          src="/images/campus.jpg"
          alt="Courtyard of a contemporary campus in Bengaluru at blue hour."
          className="media h-72 w-full object-cover sm:h-96 lg:h-full lg:max-h-[32rem]"
          width={1792}
          height={1008}
        />
      </section>

      <section className="border-b border-border py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-mono text-xs uppercase tracking-[var(--tracking-label)] text-accent">
              Stance
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-[var(--tracking-display)] sm:text-4xl">
              An operations company, not a chatbot studio.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground lg:col-span-7">
            <p>
              We started in Bengaluru because that is where the world already
              runs its customer operations — and where those operations are
              under the most pressure to do more than add seats.
            </p>
            <p>
              AGS3 is our first product: an AI-automated BPO system. It
              connects to the telephony, CRM, and ticketing you already have,
              then deploys a mesh of specialist agents for care, tech, voice,
              and non-voice. A steering layer reads quality and feedback and
              writes back into routing and playbooks.
            </p>
            <p>
              We will not sell you a demo that cannot sit on a night shift.
              If a queue cannot be audited, it is not in production.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-border py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="font-mono text-xs uppercase tracking-[var(--tracking-label)] text-accent">
            Principles
          </p>
          <h2 className="mt-3 font-display text-4xl tracking-[var(--tracking-display)]">
            How the work is split.
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {principles.map((p, i) => (
              <article
                key={p.title}
                className="rounded-2xl bg-card p-2 shadow-[var(--shadow-border)]"
              >
                <div className="rounded-xl bg-background px-5 py-6">
                  <p className="font-mono text-xs text-subtle">
                    0{i + 1}
                  </p>
                  <h3 className="mt-3 font-display text-2xl tracking-[var(--tracking-display)]">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {p.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
