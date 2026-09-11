import { Link } from "@tanstack/react-router";
import { Mark } from "@/components/brand/logo";
import { company, nav, services } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-12">
        <div className="md:col-span-5">
          <Link
            to="/"
            className="inline-flex items-center gap-2.5 text-foreground"
          >
            <Mark />
            <span className="font-semibold tracking-tight">{company.name}</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Agentic operations for customer care, BPO, tech support, voice and
            non-voice — steered by the feedback the floor already produces.
          </p>
          <p className="mt-6 font-mono text-xs uppercase tracking-[var(--tracking-label)] text-subtle">
            {company.city}, {company.region}
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="font-mono text-xs uppercase tracking-[var(--tracking-label)] text-subtle">
            Company
          </p>
          <ul className="mt-4 space-y-2">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-sm text-muted-foreground transition-colors duration-150 hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="font-mono text-xs uppercase tracking-[var(--tracking-label)] text-subtle">
            Operations
          </p>
          <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {services.map((s) => (
              <li key={s.id}>
                <Link
                  to="/services"
                  hash={s.id}
                  className="text-sm text-muted-foreground transition-colors duration-150 hover:text-foreground"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-subtle sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <p>First product · {company.productLong}</p>
        </div>
      </div>
    </footer>
  );
}
