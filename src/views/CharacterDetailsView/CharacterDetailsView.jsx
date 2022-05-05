import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import * as api from '../../service/rickandmorty-api';
import CharacterDetails from 'components/CharacterDetails';
import EpisodesView from 'views/EpisodesView';

export default function CharacterDetailsView({
  favoriteCharacter,
  setFavoriteCharacter,
}) {
  const { characterId } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    api.characterById(characterId).then(character => {
      setCharacter(character);
    });
  }, [characterId]);

  return (
    <>
      {character && (
        <CharacterDetails
          character={character}
          favoriteCharacter={favoriteCharacter}
          setFavoriteCharacter={setFavoriteCharacter}
        />
      )}
      <Routes>
        <Route
          path="episodes"
          element={character && <EpisodesView character={character} />}
        />
      </Routes>
    </>
  );
}
