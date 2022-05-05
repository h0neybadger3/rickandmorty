import { toast } from 'react-toastify';
import {
  Search,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './CharacterSearch.styled';

export default function CharacterSearch({
  query,
  handleSearchChange,
  onSubmit,
}) {
  const handleSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
      toast.error('There is nothing to search!', {
        autoClose: 3000,
        theme: 'colored',
      });
      return;
    }
    onSubmit(query);
  };

  return (
    <Search onSubmit={handleSubmit}>
      <SearchForm>
        <SearchFormButton type="submit"></SearchFormButton>

        <SearchFormInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search"
          value={query}
          onChange={handleSearchChange}
        />
      </SearchForm>
    </Search>
  );
}
