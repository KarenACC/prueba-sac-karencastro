
import { RickMortyResponse } from '../interfaces/RickMorty.interface';

interface GetCharactersOptions {
  page?: number;
  name?: string;
}

export async function getCharacters(options: GetCharactersOptions = {}): Promise<RickMortyResponse> {
  const { page = 1, name } = options;

  const params = new URLSearchParams();
  params.append('page', page.toString());
  if (name) params.append('name', name);

  const res = await fetch(`https://rickandmortyapi.com/api/character?${params.toString()}`);
  if (!res.ok) {
      if (res.status === 404) throw new Error('404');
      throw new Error('Error al obtener personajes');
  }
  return await res.json();
}
