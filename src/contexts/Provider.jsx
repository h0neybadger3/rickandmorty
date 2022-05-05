import { useState, useEffect, useMemo } from 'react';
import favContext from './context';

export default function Provider({ children }) {
  const [favoriteCharacter, setFavoriteCharacter] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState('');
  const [picture, setPicture] = useState('');
  const [id, setId] = useState('');

  useEffect(() => {
    const isLoggedInStatus = JSON.parse(
      window.localStorage.getItem('isLoggedInStatus')
    );

    if (isLoggedInStatus) {
      setIsLoggedIn(isLoggedInStatus.isLoggedIn);
      setName(isLoggedInStatus.name);
      setPicture(isLoggedInStatus.picture);
      setId(isLoggedInStatus.id);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(
      'isLoggedInStatus',
      JSON.stringify({ isLoggedIn, name, picture, id })
    );
  }, [id, isLoggedIn, name, picture]);

  useEffect(() => {
    const currentFavoriteCharacter = JSON.parse(
      window.localStorage.getItem('favoriteCharacter')
    );

    if (currentFavoriteCharacter) {
      setFavoriteCharacter(currentFavoriteCharacter);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(
      'favoriteCharacter',
      JSON.stringify(favoriteCharacter)
    );
  }, [favoriteCharacter]);

  const providerValue = useMemo(() => {
    return {
      favoriteCharacter,
      isLoggedIn,
      name,
      picture,
      id,
      setFavoriteCharacter,
      setIsLoggedIn,
      setName,
      setPicture,
      setId,
    };
  }, [favoriteCharacter, id, isLoggedIn, name, picture]);

  return (
    <favContext.Provider value={providerValue}>{children}</favContext.Provider>
  );
}
