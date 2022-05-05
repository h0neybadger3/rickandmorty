import { useContext } from 'react';
import favContext from '../../contexts/context';
import { Title, Info } from './FavoriteView.styled';
import CharacterItems from 'components/CharacterItems';

export default function FavoriteView() {
  const { favoriteCharacter } = useContext(favContext);
  return (
    <>
      <Title>Favorite characters</Title>
      {favoriteCharacter.length > 0 ? (
        <CharacterItems characters={favoriteCharacter} />
      ) : (
        <Info>You don't have a favorite character</Info>
      )}
    </>
  );
}
