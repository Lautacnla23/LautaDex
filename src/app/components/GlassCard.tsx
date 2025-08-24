// components/GlassCard.tsx
import Image from "next/image";
import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";

export type GlassCardProps = {
  title: string;                 // p.ej. nombre del Pokémon
  number?: number | string;      // p.ej. id
  imageSrc?: string | null;      // puede ser null si no hay sprite
  tags?: string[];               // p.ej. ["grass","poison"]
  href?: string;                 // opcional: convierte la card en link
  className?: string;
} & ComponentPropsWithoutRef<"article">;

export default function GlassCard({
  title,
  number,
  imageSrc,
  tags = [],
  href,
  className = "",
  ...rest
}: GlassCardProps) {
  const padded = number !== undefined ? String(number).padStart(3, "0") : undefined;

  const CardBody = (
    <article
      className={
        "group relative overflow-hidden rounded-3xl " +
        // vidrio/frosted
        "bg-white/8 backdrop-blur-md backdrop-saturate-150 " +
        "border border-white/25 ring-1 ring-white/10 " +
        // sombra y hover
        "shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-all " +
        "hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(0,0,0,0.35)] " +
        className
      }
      {...rest}
    >
      {/* brillo sutil */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-white/60 to-transparent opacity-[0.18]"
      />
      {/* arista interior */}
      <span aria-hidden className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/40" />

      {/* zona imagen */}
      <div className="relative m-3 rounded-2xl overflow-hidden aspect-[4/3] flex items-center justify-center bg-white/5">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain"
            priority={false}
          />
        ) : (
          <div className="w-full h-full grid place-items-center text-sm text-white/70">
            Sin imagen
          </div>
        )}
      </div>

      {/* contenido */}
      <div className="relative z-10 px-5 pb-5">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg md:text-xl font-semibold leading-tight text-white/95 capitalize line-clamp-1">
            {title}
          </h3>
          {padded && (
            <span className="text-xs md:text-sm font-semibold text-white/80">#{padded}</span>
          )}
        </div>

        {tags.length > 0 && (
          <div className="flex items-center gap-2 flex-wrap">
            {tags.map((t) => (
              <TypePill key={t} label={t} />
            ))}
          </div>
        )}
      </div>

      {/* shine on hover */}
      <div className="pointer-events-none absolute -top-1/3 -left-1/3 h-2/3 w-2/3 rounded-full bg-white/20 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </article>
  );

  return href ? (
    <Link
      href={href}
      className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded-3xl"
    >
      {CardBody}
    </Link>
  ) : (
    CardBody
  );
}

function TypePill({ label }: { label: string }) {
  return (
    <span
      className={
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium " +
        "border border-white/30 ring-1 ring-white/10 bg-white/10 backdrop-blur-sm " +
        "text-white/90 capitalize"
      }
    >
      {label}
    </span>
  );
}
