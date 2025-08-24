import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Contenedor de la barra */}
        <nav className="relative mt-3 h-16 md:h-20 rounded-2xl
                        border border-white/30 ring-1 ring-white/10
                        bg-white/10 backdrop-blur-md backdrop-saturate-150
                        shadow-[0_8px_24px_rgba(0,0,0,0.25)]
                        flex items-center gap-4 px-4 sm:px-6">
          {/* Highlights para efecto vidrio sin pseudo-elementos */}
          <span aria-hidden className="pointer-events-none absolute inset-0 rounded-2xl 
                                     bg-gradient-to-b from-white/60 to-transparent
                                     opacity-[0.18] transition-opacity" />
          <span aria-hidden className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/40" />

          {/* Izquierda: Logo + marca */}
          <div className="relative z-10 flex items-center gap-3">
            {/* Colocá tu logo en /public/logo.svg */}
            <Image src="/Logo.png" alt="Logo" width={32} height={32} className="h-8 w-8" />
            <span className="hidden sm:inline font-semibold">LautaDex</span>
          </div>

          {/* Centro: links (opcionales) */}
          <div className="relative z-10 ml-auto hidden md:flex items-center gap-6 text-sm">
            <Link href="/" className="hover:underline underline-offset-4">Inicio</Link>
            <Link href="/pokedex/pokemons" className="hover:underline underline-offset-4">Pokemons</Link>
            <Link href="/pokedex/contacto" className="hover:underline underline-offset-4">Contacto</Link>
          </div>

          {/* Derecha: CTA vidrio compacto */}
          
        </nav>
      </div>
    </header>
  );
}