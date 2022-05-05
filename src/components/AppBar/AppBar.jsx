import { useContext } from 'react';
import Navigation from 'components/Navigation';
import { Header } from './AppBar.styled';
import Facebook from 'components/Facebook/Facebook';
import favContext from '../../contexts/context';

export default function Appbar() {
  const { isLoggedIn, setIsLoggedIn, setName, setPicture } =
    useContext(favContext);

  return (
    <Header>
      <Navigation />
      <Facebook />
    </Header>
  );
}
