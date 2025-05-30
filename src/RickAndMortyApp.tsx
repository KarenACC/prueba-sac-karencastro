
import { useState } from 'react';

import { SearchCharacter } from './components/SearchCharacter';
import { CharactersList } from './components/CharactersList';
import { useRickAndMortyCharacters } from './hooks/useCharacters';
import { Pagination } from './components/Pagination';

export const RickAndMortyApp = () => {
  const [searchName, setSearchName] = useState('');
  const {
    visibleCharacters,
    loading,
    error,
    onNext,
    onPrev,
    showNext,
    showPrev,
  } = useRickAndMortyCharacters(searchName);

    const shouldShowPagination = visibleCharacters.length === 10 || showPrev;

  return (
    <>
    <div  className="app-container">

      <SearchCharacter value={searchName} onSearch={setSearchName} />
      {loading && <p className='loading'>Cargando personajes...</p>}
      {error && <p className='error'>{error}</p>}
      {!loading && !error &&(
        <>
        <CharactersList
          characters={visibleCharacters}/>
          {shouldShowPagination && (
            <Pagination
              onNext={onNext}
              onPrev={onPrev}
              showNext={!!showNext}
              showPrev={showPrev}
            />
          )}
        </>
      )}
    </div>

      { visibleCharacters.length <10 &&
        <>
          <button className="button" onClick={() => setSearchName('')}>
            Volver al inicio
          </button>
        </>
      }
    </>
  );
};
