import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RickAndMortyApp } from '../RickAndMortyApp';
import { CharacterDetail } from '../components/CharacterDetail';
// import { RickAndMortyApp } from './RickAndMortyApp';
// import { CharacterDetail } from './components/CharacterDetail';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RickAndMortyApp />} />
        <Route path="/character/:id" element={<CharacterDetail />} />
      </Routes>
    </BrowserRouter>
  );
};
