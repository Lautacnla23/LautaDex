import GlassCard from "@/app/components/GlassCard";
import { obtenerPokemonDetalle } from "@/app/lib/data"; // tu helper

export const revalidate = 60;

export default async function Page() {
  const pokemons = await obtenerPokemonDetalle(24, 0);
  return (
    <main className="min-h-screen p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
      {pokemons.map((p) => (
        <GlassCard
          key={p.id}
          title={p.name}
          number={p.id}
          imageSrc={p.sprite}
          tags={p.types}
          href={`/pokemon/${p.id}`}
        />
      ))}
    </main>
  );
}
