import FacebookLogin from 'react-facebook-login';
import { useContext } from 'react';
import favContext from '../../contexts/context';
import { Wrapper, Img, Name, WrapperName } from './Facebook.styled';
import { Button } from '@mui/material';

export default function Facebook() {
  const {
    isLoggedIn,
    setIsLoggedIn,
    setName,
    setPicture,
    picture,
    name,
    setId,
  } = useContext(favContext);

  const responseFacebook = ({ name, picture, id }) => {
    setIsLoggedIn(true);
    setName(name);
    setPicture(picture.data.url);
    setId(id);
  };

  const logOutHandle = () => {
    setIsLoggedIn(false);
    setName('');
    setPicture('');
    setId('');
  };

  return (
    <div>
      {isLoggedIn ? (
        <Wrapper>
          <Img src={picture} alt={name} />
          <WrapperName>
            <Name>Welcome, {name}</Name>
            <Button size="small" onClick={logOutHandle}>
              Log out
            </Button>
          </WrapperName>
        </Wrapper>
      ) : (
        <FacebookLogin
          appId="543203374163795"
          autoLoad={true}
          fields="name,email,picture"
          callback={responseFacebook}
          size={'small'}
        />
      )}
    </div>
  );
}
