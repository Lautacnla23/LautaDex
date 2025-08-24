import Image from "next/image";
import NavBar from "@/app/components/NavBar";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata = {
  title: "Tu marca",
  description: "Landing con nav de vidrio",
};

export default function RootPokedex({ children }: { children: React.ReactNode }) {
  return (
      <div className={`${poppins.className} h-full text-white`}>
        <div className="fixed inset-0 -z-10">
          <Image src="/bosque.jpg" alt="Fondo" fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <NavBar />
        <main className="min-h-screen pt-16 md:pt-20">
          {children}
        </main>

        <footer className="p-6 text-center text-white/70 text-sm">
          © {new Date().getFullYear()} LautaAp. Todos los derechos reservados.
        </footer>
      </div>
  );
}