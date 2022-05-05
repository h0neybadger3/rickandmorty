import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as api from '../../service/rickandmorty-api';
import CharacterSearch from 'components/CharacterSearch';
import CharacterItems from 'components/CharacterItems';
import PaginationBase from 'components/PaginationBase';

export default function SearchPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [сharacters, setCharacter] = useState(null);
  const [currentPage, setCurrentPage] = useState(
    parseInt(location.search?.split('=')[1] || 1)
  );
  const [totalPages, setTotalPages] = useState(1);

  const handleSearchQuery = searchQuery => {
    navigate({
      ...location,
      search: `page=${currentPage}&name=${searchQuery}`,
    });
  };

  const searchParams = new URLSearchParams(location.search).get('name');

  useEffect(() => {
    if (location.search === '') {
      return;
    }

    api.getByName(searchParams, currentPage).then(({ results, info }) => {
      setCharacter(results);
      setTotalPages(info.pages);
    });
  }, [currentPage, location.search, searchParams]);

  return (
    <>
      <CharacterSearch
        query={query}
        onSubmit={handleSearchQuery}
        handleSearchChange={e => setQuery(e.target.value.toLowerCase())}
      />
      {сharacters && <CharacterItems characters={сharacters} />}
      {сharacters && (
        <PaginationBase
          totalPages={totalPages}
          currentPage={currentPage}
          paginate={setCurrentPage}
          query={searchParams}
        />
      )}
    </>
  );
}
