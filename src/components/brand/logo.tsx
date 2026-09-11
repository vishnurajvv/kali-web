import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      aria-hidden="true"
      className={cn("size-7", className)}
    >
      <circle cx="18" cy="7.5" r="2.35" fill="currentColor" />
      <circle cx="7.5" cy="27" r="2.35" fill="currentColor" />
      <circle cx="28.5" cy="27" r="2.35" fill="currentColor" />
      <path
        d="M18 7.5 7.5 27h21L18 7.5Z"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Logo({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <Link
      to="/"
      className={cn(
        "inline-flex items-center gap-2.5 text-foreground transition-opacity duration-150 hover:opacity-80",
        className,
      )}
      aria-label="Kaliyugaa home"
    >
      <Mark />
      <span className="font-sans text-sm font-semibold tracking-tight">
        Kaliyugaa
      </span>
      {compact ? null : (
        <span className="hidden font-mono text-xs font-medium uppercase tracking-[var(--tracking-label)] text-muted-foreground sm:inline">
          AGS3
        </span>
      )}
    </Link>
  );
}
