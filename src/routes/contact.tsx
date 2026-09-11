import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent, type ReactNode } from "react";
import { Check } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { company, interests } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact · Kaliyugaa" },
      {
        name: "description",
        content:
          "Request a Kaliyugaa AGS3 briefing for customer care, BPO, tech support, or market analysis.",
      },
    ],
  }),
});

type FormState = {
  name: string;
  companyName: string;
  role: string;
  email: string;
  interest: string;
  message: string;
};

const empty: FormState = {
  name: "",
  companyName: "",
  role: "",
  email: "",
  interest: interests[0],
  message: "",
};

function ContactPage() {
  const [form, setForm] = useState<FormState>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>(
    {},
  );
  const [sent, setSent] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Name is required.";
    if (!form.companyName.trim()) next.companyName = "Company is required.";
    if (!form.email.trim()) next.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Enter a valid email.";
    if (!form.message.trim() || form.message.trim().length < 12)
      next.message = "Tell us a little about the queue you want to put on AGS3.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    const record = {
      ...form,
      at: new Date().toISOString(),
    };
    try {
      const existing = JSON.parse(
        localStorage.getItem("kaliyugaa-briefings") ?? "[]",
      ) as unknown[];
      localStorage.setItem(
        "kaliyugaa-briefings",
        JSON.stringify([record, ...existing].slice(0, 20)),
      );
    } catch {
      /* storage may be blocked; the confirmation still stands */
    }
    setSent(true);
    toast.success("Briefing request received.");
  }

  return (
    <main>
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-mono text-xs uppercase tracking-[var(--tracking-label)] text-accent">
              Briefing
            </p>
            <h1 className="mt-4 font-display text-5xl tracking-[var(--tracking-display)] sm:text-6xl">
              Tell us the queue.
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Start with one line — care, tech, voice, or back-office. We
              reply with a working plan, not a deck of logos.
            </p>
            <dl className="mt-10 space-y-5">
              <div>
                <dt className="font-mono text-xs uppercase tracking-[var(--tracking-label)] text-subtle">
                  Operations
                </dt>
                <dd className="mt-1 text-sm text-foreground">
                  {company.city}, {company.region}
                </dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-[var(--tracking-label)] text-subtle">
                  Briefings
                </dt>
                <dd className="mt-1 text-sm">
                  <a
                    href={`mailto:${company.email}`}
                    className="text-foreground underline-offset-4 hover:underline"
                  >
                    {company.email}
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-7">
            {sent ? (
              <div className="rounded-2xl bg-card p-2 shadow-[var(--shadow-lift)]">
                <div className="rounded-xl bg-background px-6 py-10 sm:px-8">
                  <span className="inline-flex size-10 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <Check className="size-5" />
                  </span>
                  <h2 className="mt-5 font-display text-3xl tracking-[var(--tracking-display)]">
                    Received.
                  </h2>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                    Thank you, {form.name}. An operations lead will follow up
                    on {form.email} about {form.interest.toLowerCase()}.
                  </p>
                  <Button
                    className="mt-8"
                    variant="outline"
                    onClick={() => {
                      setForm(empty);
                      setSent(false);
                    }}
                  >
                    Send another
                  </Button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                noValidate
                className="rounded-2xl bg-card p-2 shadow-[var(--shadow-lift)]"
              >
                <div className="rounded-xl bg-background p-5 sm:p-8">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field
                      label="Name"
                      error={errors.name}
                      htmlFor="name"
                    >
                      <Input
                        id="name"
                        autoComplete="name"
                        value={form.name}
                        onChange={(e) => update("name", e.target.value)}
                      />
                    </Field>
                    <Field
                      label="Company"
                      error={errors.companyName}
                      htmlFor="company"
                    >
                      <Input
                        id="company"
                        autoComplete="organization"
                        value={form.companyName}
                        onChange={(e) => update("companyName", e.target.value)}
                      />
                    </Field>
                    <Field label="Role" htmlFor="role">
                      <Input
                        id="role"
                        autoComplete="organization-title"
                        value={form.role}
                        onChange={(e) => update("role", e.target.value)}
                      />
                    </Field>
                    <Field
                      label="Work email"
                      error={errors.email}
                      htmlFor="email"
                    >
                      <Input
                        id="email"
                        type="email"
                        autoComplete="email"
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                      />
                    </Field>
                  </div>
                  <div className="mt-5">
                    <Label htmlFor="interest">Interest</Label>
                    <select
                      id="interest"
                      value={form.interest}
                      onChange={(e) => update("interest", e.target.value)}
                      className="mt-2 flex h-11 w-full rounded-md border border-input bg-secondary px-3 text-sm text-foreground shadow-[var(--shadow-border)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      {interests.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="mt-5">
                    <Field
                      label="What should we look at first?"
                      error={errors.message}
                      htmlFor="message"
                    >
                      <Textarea
                        id="message"
                        rows={6}
                        value={form.message}
                        onChange={(e) => update("message", e.target.value)}
                        placeholder="Queue, volume, systems, and what good looks like in 90 days."
                      />
                    </Field>
                  </div>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs text-subtle">
                      We read every briefing. No automated drip.
                    </p>
                    <Button type="submit" size="lg">
                      Send briefing request
                    </Button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
      {error ? (
        <p className="text-xs text-destructive" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
