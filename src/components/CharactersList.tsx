
import { Character } from '../interfaces/RickMorty.interface';
import { CharacterCard } from './CharacterCard';

interface CharactersListProps {
  characters: Character[];

}

export const CharactersList = ({
  characters
}: CharactersListProps) => {
  return (
    <>
      {characters.length > 0  ? (
        <>
        <div className='character-list'>
          {characters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
        </>
      ) : (
          <p className='error'>No se encontraron personajes</p>
      )}
    </>
  );
};


