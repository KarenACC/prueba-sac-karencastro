
import { useEffect, useState } from 'react';
import { useParams  } from 'react-router-dom';
import { Character } from '../interfaces/RickMorty.interface';

export const CharacterDetail = () => {
  const { id } = useParams();



  const [character, setCharacter] = useState<Character | null>(null);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    const fetchCharacter = async () => {
      const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
      const data = await res.json();
      setCharacter(data);
      setLoading(false);
    };

    fetchCharacter();
  }, [id]);

  if (loading) return <p className='loading'>Cargando...</p>;
  if (!character) return <p className='error'>Personaje no encontrado.</p>;

  return (
    <div className='character-detail'>
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} />
      <p> <strong>Género:</strong> {character.gender}</p>
      <p><strong>Especie:</strong>  {character.species}</p>
      <p><strong>Estado:</strong>  {character.status}</p>
      <p><strong>Ubicación:</strong>  {character.location.name}</p>

    </div>
  );
};
