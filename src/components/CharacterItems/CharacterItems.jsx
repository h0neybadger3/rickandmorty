import { useLocation } from 'react-router-dom';
import {
  Ul,
  ListItem,
  CharacterLink,
  Img,
  TextWrapper,
  Name,
  Status,
} from './CharacterItems.styled';

export default function CharacterItems({ characters }) {
  const location = useLocation();
  return (
    <Ul>
      {characters.map(({ id, name, image, status }) => (
        <ListItem key={id}>
          <CharacterLink
            to={{
              pathname: `/character/${id}`,
              state: { from: location },
            }}
          >
            <Img src={image} alt={name} />
            <TextWrapper>
              <Name>{name}</Name>
              <Status status={status}>Status: {status}</Status>
            </TextWrapper>
          </CharacterLink>
        </ListItem>
      ))}
    </Ul>
  );
}
