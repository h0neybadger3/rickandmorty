import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import * as api from '../../service/rickandmorty-api';
import CharacterItems from 'components/CharacterItems';
import { Title } from './AllCharactersView.styled';
import PaginationBase from 'components/PaginationBase';

export default function AllCharactersView() {
  const { search } = useLocation();
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(
    parseInt(search?.split('=')[1] || 1)
  );
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    api.getCharacters(currentPage).then(({ results, info }) => {
      setCharacters(results);
      setTotalPages(info.pages);
    });
  }, [currentPage]);

  return (
    <>
      <Title>All Characters</Title>
      <CharacterItems characters={characters} />
      {characters && (
        <PaginationBase
          totalPages={totalPages}
          currentPage={currentPage}
          paginate={setCurrentPage}
        />
      )}
    </>
  );
}
