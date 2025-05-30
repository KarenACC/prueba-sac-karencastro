
interface SearchCharacterProps {
  value:string,
  onSearch: (name: string) => void;
}

export const SearchCharacter = ({ onSearch, value }: SearchCharacterProps) => {

  return (
          
        <input
          type="text"
          placeholder="Buscar personaje por nombre"
          value={value}
          onChange={(e)=> onSearch(e.target.value.trim())}
          className='search-input'
        />
  
  );
};
