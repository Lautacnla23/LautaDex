type PokeListItem = {name: string; url: string};
type PokeListResponse = { results: PokeListItem[]};

type PokemonMini = {id: number; name: string; types: string[]; sprite: string | null;};

export async function obtenerPokemons(limit = 30, offset = 0): Promise<PokeListResponse>{
    const res = await fetch (`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`, { next: { revalidate: 60 } });

    if(!res.ok) throw new Error(`PokeAPI ${res.status}`);
    return res.json();
}

export async function detallePokemon(url: string): Promise<PokemonMini>{
    const res = await fetch (url, {next: { revalidate: 60}});
    if(!res.ok) throw new Error(`PokeAPI ${res.status}`);

    const data = await res.json();

    const sprite = 
        data?.sprites?.front_default ?? // pixel sprite clásico
        data?.sprites?.other?.['official-artwork']?.front_default ?? // artwork HD
        data?.sprites?.other?.home?.front_default ?? // otro fallback
        null;
    
    const types: string[] = (data?.types ?? []).map((t: any) => t.type?.name);

    return {
        id: data.id,
        name: data.name,
        types,
        sprite
    }

}

export async function obtenerPokemonDetalle(limit = 30, offset = 0): Promise<PokemonMini[]> {
    const lista = await obtenerPokemons(limit, offset);
    const detalles = await Promise.all(
        (lista.results ?? []).map(item => detallePokemon(item.url)));
    return detalles;
}