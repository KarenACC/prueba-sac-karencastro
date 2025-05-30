import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';
import { SearchCharacter } from '../components/SearchCharacter';

describe('SearchCharacter component', () => {
  it('debería renderizar el input con el valor inicial', () => {
    render(<SearchCharacter value="Rick" onSearch={() => {}} />);
    const input = screen.getByPlaceholderText('Buscar personaje por nombre') as HTMLInputElement;
    expect(input).toBeInTheDocument();
    expect(input.value).toBe('Rick');
  });

  it('debería llamar a onSearch cuando se escribe en el input', () => {
    const onSearchMock = vi.fn();
    render(<SearchCharacter value="" onSearch={onSearchMock} />);
    
    const input = screen.getByPlaceholderText('Buscar personaje por nombre');
    fireEvent.change(input, { target: { value: 'Morty' } });

    expect(onSearchMock).toHaveBeenCalledWith('Morty');
  });
});
