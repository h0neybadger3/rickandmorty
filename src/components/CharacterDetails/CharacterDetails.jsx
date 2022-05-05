import { useState, useEffect, useContext } from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { toast } from 'react-toastify';
import Favorite from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import favContext from '../../contexts/context';
import {
  Wrapper,
  Ul,
  ListItem,
  Name,
  Descr,
  EpisodesLink,
  EpisodesWrapper,
  FavWrapper,
} from './CharacterDetails.styled';

const notify = notification =>
  toast.info(notification, {
    position: 'top-right',
    theme: 'colored',
    autoClose: 2000,
  });

export default function CharacterDetails({ character }) {
  const {
    id,
    image,
    name,
    species,
    gender,
    status,
    created,
    location: { name: locationName },
  } = character;
  const [fav, setFav] = useState(false);
  const { favoriteCharacter, setFavoriteCharacter } = useContext(favContext);

  useEffect(() => {
    if (favoriteCharacter.length === 0) {
      return;
    }
    if (favoriteCharacter.find(item => item.id === id)) {
      setFav(true);
    }
  }, []);

  const addFavHandler = () => {
    setFav(!fav);
    const favCharacter = {
      id,
      image,
      name,
      species,
      gender,
      status,
      created,
    };
    setFavoriteCharacter(currentFavCharacters => [
      ...currentFavCharacters,
      favCharacter,
    ]);

    notify('Add to favorite!');
  };

  const deleteFavHandler = () => {
    setFav(!fav);

    setFavoriteCharacter(currentFavCharacters =>
      currentFavCharacters.filter(item => item.id !== id)
    );

    notify('Delete from favorite!');
  };

  return (
    <>
      <Wrapper>
        <img src={image} alt={name} />
        <Ul>
          <ListItem>
            <Name>{name}</Name>
          </ListItem>
          <ListItem>
            <Descr>Species: {species}</Descr>
          </ListItem>
          <ListItem>
            <Descr>Gender: {gender}</Descr>
          </ListItem>
          <ListItem>
            <Descr>Location: {locationName}</Descr>
          </ListItem>
          <ListItem>
            <Descr>Status: {status}</Descr>
          </ListItem>
          <ListItem>
            <Descr>Created: {created}</Descr>
          </ListItem>
        </Ul>
        <FavWrapper>
          {fav && (
            <IconButton
              onClick={() => {
                deleteFavHandler();
              }}
              aria-label="delete"
              color="primary"
            >
              <FavoriteBorderIcon></FavoriteBorderIcon>
            </IconButton>
          )}
          {!fav && (
            <IconButton
              onClick={() => {
                addFavHandler();
              }}
              aria-label="delete"
              color="primary"
            >
              <Favorite></Favorite>
            </IconButton>
          )}
        </FavWrapper>
      </Wrapper>

      <EpisodesWrapper>
        <EpisodesLink to="episodes">Episodes</EpisodesLink>
      </EpisodesWrapper>
    </>
  );
}
