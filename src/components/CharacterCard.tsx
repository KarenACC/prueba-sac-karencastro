import React from 'react';
import { Character } from '../interfaces/RickMorty.interface';
import { useNavigate } from 'react-router-dom';


interface CharacterCardProps {
  character: Character;
}

export const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
    const navigate = useNavigate();

    const handleClick = () => {
    navigate(`/character/${character.id}`);
  };

  return (
    <div 
        className='character-card'
        onClick={handleClick}>
      <h3>{character.name}</h3>
      <img src={character.image} alt={character.name}/>
      <p>Especie: {character.species}</p>
      <p>Estado: {character.status}</p>
    </div>
  );
};

