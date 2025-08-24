import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";

// Fuente moderna optimizada por Next
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <main className={`${poppins.className} relative min-h-screen text-white`}> 
      {/* Fondo a pantalla completa con Next/Image */}
      <div className="absolute inset-0 -z-10">
        <div className="relative h-full w-full">
          <Image
            src="/pikachu-chill.jpg"
            alt="Fondo"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Contenido centrado */}
      <section className="grid min-h-screen place-items-center p-6">
        {/* Tarjeta con efecto vidrio/escarchado (glassmorphism) */}
        <div className="w-full max-w-2xl text-center rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.35)] p-8 sm:p-12">
          {/* Logo optimizado */}
          {/* ⚠️ Colocá tu logo en /public/logo.svg o cambia el src y las medidas */}
          <Image
            src="/pokemon-23.svg"
            alt="Logo de Tu Marca"
            width={140}
            height={40}
            className="mx-auto mb-6 h-16 w-auto"
            priority
          />

          {/* Párrafo */}
          <p className="text-lg sm:text-xl leading-relaxed text-white/90 font-medium">
            Bienvenido a la pokedex de Lautaro Aponte, esta mas vacia que su billetera.
          </p>

          {/* Botón a productos */}
          <Link
            href="/pokedex/pokemons"
            aria-label="Ir a productos"
            className="group relative mt-8 inline-flex items-center justify-center gap-2
                      rounded-2xl px-6 py-3
                      bg-white/5 backdrop-blur-md backdrop-saturate-150
                      border border-white/30 ring-1 ring-white/10
                      text-white font-semibold shadow-[0_8px_24px_rgba(0,0,0,0.25)]
                      transition hover:bg-white/10 active:translate-y-px
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60
                      before:pointer-events-none before:absolute before:inset-0 before:rounded-2xl
                      before:bg-gradient-to-b before:from-white/60 before:to-transparent
                      before:opacity-[0.20] hover:before:opacity-[0.28] before:transition-opacity
                      after:pointer-events-none after:absolute after:inset-0 after:rounded-2xl
                      after:ring-1 after:ring-inset after:ring-white/40"
          >
            <span className="relative z-10">Ver pokemons</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="relative z-10 h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5"
              aria-hidden
            >
              <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7 7a.75.75 0 010 1.06l-7 7a.75.75 0 11-1.06-1.06L18.94 12l-5.97-5.97a.75.75 0 010-1.06z" clipRule="evenodd" />
              <path fillRule="evenodd" d="M3 12a.75.75 0 01.75-.75h15.69a.75.75 0 010 1.5H3.75A.75.75 0 013 12z" clipRule="evenodd" />
            </svg>
          </Link>

        </div>
      </section>

      {/* Footer */}
      <footer className="p-6 text-center text-white/70 text-sm">
        © {year} LautaroAp. Todos los derechos reservados.
      </footer>
    </main>
  );
}
