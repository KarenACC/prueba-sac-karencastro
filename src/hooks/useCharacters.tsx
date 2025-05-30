import { useState, useEffect } from 'react';
import { Character, RickMortyResponse } from '../interfaces/RickMorty.interface';
import { getCharacters } from '../helpers/getCharactersResquest';

export const useRickAndMortyCharacters = (searchName: string) => {
  const [page, setPage] = useState(1);
  const [subPage, setSubPage] = useState(1);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [info, setInfo] = useState<RickMortyResponse['info'] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
   setPage(1);
   setSubPage(1);
}, [searchName]);

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      setError(null);
      try {
        const data: RickMortyResponse = await getCharacters({ page, name: searchName });
        setCharacters(data.results);
        setInfo(data.info);
      } catch (err) {
        setError('No se encontraron personajes');
        setCharacters([]);
        setInfo(null);
      } finally {
        setLoading(false);
      }
    };
    fetchCharacters();
  }, [page, searchName]);

  const visibleCharacters = characters.slice((subPage - 1) * 10, subPage * 10);

  const onNext = () => {
    if (subPage === 1 && characters.length > 10) {
      setSubPage(2);
    } else if (info?.next) {
      setPage((prev) => prev + 1);
      setSubPage(1);
    }
  };

  const onPrev = () => {
  if (subPage > 1) {
    setSubPage((prev) => prev - 1);
  } else if (subPage === 1 && page > 1) {
    setPage((prev) => prev - 1);
    setSubPage(2);
  }
};

  
  const showPrev = page > 1 || subPage > 1;
  const showNext = (subPage === 1 && characters.length > 10) || (subPage === 2 && info?.next);


  return {
    visibleCharacters,
    loading,
    error,
    onNext,
    onPrev,
    showNext,
    showPrev,
    setPage,
  };
};
