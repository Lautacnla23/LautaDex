import type { JSX } from "react";

type Props = { className?: string };

export default function SocialGlass({ className = "" }: Props) {
  return (
    <section
      className={[
        "relative overflow-hidden rounded-3xl",
        "bg-white/8 backdrop-blur-md backdrop-saturate-150",
        "border border-white/25 ring-1 ring-white/10",
        "shadow-[0_10px_30px_rgba(0,0,0,0.25)]",
        className
      ].join(" ")}
    >
      <span aria-hidden className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-white/50 to-transparent opacity-[0.15]" />
      <span aria-hidden className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/40" />

      <div className="relative z-10 p-6 md:p-8">
        <h2 className="text-xl md:text-2xl font-semibold text-white/95 mb-4">Mis redes</h2>

        {/* UNA SOLA COLUMNA */}
        <div className="flex flex-col gap-3">
          <SocialLink href="https://github.com/Lautacnla23"           label="GitHub"      icon={GitHubIcon} />
          <SocialLink href="https://x.com/LautaAponte"                label="X / Twitter" icon={TwitterIcon} />
          <SocialLink href="https://www.instagram.com/lautaro_aponte/" label="Instagram"   icon={InstagramIcon} />
        </div>
      </div>
    </section>
  );
}

function prettyUrl(href: string) {
  try {
    const u = new URL(href);
    return (u.host + u.pathname).replace(/\/$/, "");
  } catch {
    return href.replace(/^https?:\/\//, "");
  }
}

function SocialLink({
  href, label, icon: Icon,
}: {
  href: string; label: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} - ${href}`}
      className={[
        "group flex items-center gap-3 rounded-xl w-full",
        "px-4 py-3 text-sm font-medium",
        "border border-white/30 ring-1 ring-white/10",
        "bg-white/10 backdrop-blur-sm text-white/90",
        "hover:bg-white/15 transition"
      ].join(" ")}
    >
      <Icon className="h-5 w-5 opacity-90 group-hover:opacity-100 shrink-0" />
      <div className="min-w-0">
        <div className="leading-tight">{label}</div>
        <div className="text-xs text-white/80 break-all">{prettyUrl(href)}</div>
      </div>
    </a>
  );
}

/* ==== Íconos SVG usados ==== */
function GitHubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58l-.02-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.41-1.34-1.79-1.34-1.79-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.09.81 2.2l-.01 3.27c0 .32.22.7.83.58A12 12 0 0 0 12 .5z" />
    </svg>
  );
}
function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M20.95 7.17c.01.2.01.4.01.6 0 6.14-4.67 13.22-13.22 13.22A13.12 13.12 0 0 1 1 19.55c.32.04.64.06.97.06a9.28 9.28 0 0 0 5.76-1.98 4.64 4.64 0 0 1-4.33-3.22c.28.04.57.07.87.07.42 0 .84-.06 1.23-.16a4.62 4.62 0 0 1-3.72-4.53v-.06c.62.35 1.33.56 2.09.59A4.61 4.61 0 0 1 2.9 6.28c0-.85.23-1.64.64-2.32a13.14 13.14 0 0 0 9.54 4.84 4.61 4.61 0 0 1 7.86-4.2 9.22 9.22 0 0 0 2.92-1.12 4.63 4.63 0 0 1-2.03 2.55 9.2 9.2 0 0 0 2.65-.73 9.99 9.99 0 0 1-2.53 2.67z" />
    </svg>
  );
}
function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      {/* marco redondeado */}
      <rect x="3" y="3" width="18" height="18" rx="4" />
      {/* lente */}
      <circle cx="12" cy="12" r="4.5" />
      {/* flash */}
      <circle cx="17.5" cy="6.5" r="1.2" />
    </svg>
  );
}
