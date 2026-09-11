import { useEffect, useState, type ReactNode } from "react";
import { Badge } from "@/components/ui/badge";

const AGENTS = [
  { id: "care-03", line: "care", channel: "voice", load: 91 },
  { id: "billing-07", line: "bpo", channel: "voice", load: 86 },
  { id: "tech-12", line: "it", channel: "chat", load: 78 },
  { id: "kyc-02", line: "bpo", channel: "email", load: 64 },
  { id: "retain-11", line: "care", channel: "chat", load: 88 },
  { id: "field-04", line: "it", channel: "ticket", load: 71 },
] as const;

const THEMES = [
  { label: "OTP delivery lag", delta: "+18%", action: "Playbook 14 pushed" },
  { label: "SIM-swap verification", delta: "+9%", action: "Extra KYC agent" },
  { label: "Plan-change confusion", delta: "−4%", action: "Script retracted" },
] as const;

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

export function Ags3Console() {
  const [queue, setQueue] = useState({
    voice: 12,
    chat: 19,
    email: 5,
    ticket: 2,
  });
  const [csat, setCsat] = useState(4.82);
  const [fcr, setFcr] = useState(91);
  const [clock, setClock] = useState("00:00:00");

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setClock(
        now.toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
          timeZone: "Asia/Kolkata",
        }),
      );
    };
    tick();
    const clockId = window.setInterval(tick, 1000);
    const qId = window.setInterval(() => {
      setQueue((q) => ({
        voice: clamp(q.voice + (Math.random() > 0.5 ? 1 : -1), 6, 22),
        chat: clamp(q.chat + (Math.random() > 0.5 ? 1 : -1), 8, 28),
        email: clamp(q.email + (Math.random() > 0.6 ? 1 : -1), 2, 12),
        ticket: clamp(q.ticket + (Math.random() > 0.7 ? 1 : -1), 1, 8),
      }));
      setCsat((v) => clamp(Number((v + (Math.random() - 0.5) * 0.04).toFixed(2)), 4.6, 4.95));
      setFcr((v) => clamp(v + (Math.random() > 0.5 ? 1 : -1), 86, 96));
    }, 2200);
    return () => {
      window.clearInterval(clockId);
      window.clearInterval(qId);
    };
  }, []);

  const waiting = queue.voice + queue.chat + queue.email + queue.ticket;

  return (
    <div className="overflow-hidden rounded-2xl bg-card p-2 shadow-[var(--shadow-lift)]">
      <div className="rounded-xl bg-background">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-3">
          <div className="flex items-center gap-3">
            <Badge variant="live">
              <span className="live-dot mr-1.5 inline-block size-1.5 rounded-full bg-accent" />
              Live floor
            </Badge>
            <p className="font-mono text-xs uppercase tracking-[var(--tracking-label)] text-subtle">
              AGS3 · floor 04
            </p>
          </div>
          <p className="font-mono text-xs tabular-nums text-muted-foreground">
            {clock} IST
          </p>
        </div>

        <div className="grid grid-cols-2 gap-px border-b border-border bg-border sm:grid-cols-4">
          <Stat label="In queue" value={String(waiting)} />
          <Stat label="Active agents" value="142" />
          <Stat label="CSAT" value={csat.toFixed(2)} />
          <Stat label="FCR" value={`${fcr}%`} />
        </div>

        <div className="grid gap-px bg-border lg:grid-cols-3">
          <Panel title="Queue">
            <Channel name="Voice" value={queue.voice} max={28} />
            <Channel name="Chat" value={queue.chat} max={28} />
            <Channel name="Email" value={queue.email} max={28} />
            <Channel name="Ticket" value={queue.ticket} max={28} />
          </Panel>
          <Panel title="Specialist agents">
            <ul className="space-y-2.5">
              {AGENTS.map((agent) => (
                <li
                  key={agent.id}
                  className="flex items-center justify-between gap-3 text-sm"
                >
                  <span className="flex min-w-0 items-center gap-2">
                    <span className="size-1.5 shrink-0 rounded-full bg-accent" />
                    <span className="truncate font-mono text-xs text-foreground">
                      {agent.id}
                    </span>
                  </span>
                  <span className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="hidden capitalize sm:inline">
                      {agent.channel}
                    </span>
                    <span className="tabular-nums">{agent.load}%</span>
                  </span>
                </li>
              ))}
            </ul>
          </Panel>
          <Panel title="Feedback intelligence">
            <ul className="space-y-3">
              {THEMES.map((theme) => (
                <li key={theme.label}>
                  <div className="flex items-baseline justify-between gap-3">
                    <p className="text-sm text-foreground">{theme.label}</p>
                    <p className="font-mono text-xs tabular-nums text-accent">
                      {theme.delta}
                    </p>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {theme.action}
                  </p>
                </li>
              ))}
            </ul>
          </Panel>
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-background px-4 py-4">
      <p className="font-mono text-xs uppercase tracking-[var(--tracking-label)] text-subtle">
        {label}
      </p>
      <p className="mt-1 font-display text-3xl tabular-nums tracking-[var(--tracking-display)] text-foreground">
        {value}
      </p>
    </div>
  );
}

function Panel({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="bg-background px-4 py-4">
      <p className="mb-4 font-mono text-[0.65rem] uppercase tracking-[var(--tracking-label)] text-subtle">
        {title}
      </p>
      {children}
    </div>
  );
}

function Channel({
  name,
  value,
  max,
}: {
  name: string;
  value: number;
  max: number;
}) {
  const pct = Math.round((value / max) * 100);
  return (
    <div className="mb-3 last:mb-0">
      <div className="mb-1.5 flex items-baseline justify-between text-sm">
        <span className="text-muted-foreground">{name}</span>
        <span className="font-mono text-xs tabular-nums text-foreground">
          {value}
        </span>
      </div>
      <div className="h-1 overflow-hidden rounded-full bg-elevated">
        <div
          className="h-full rounded-full bg-accent transition-[width] duration-500 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
