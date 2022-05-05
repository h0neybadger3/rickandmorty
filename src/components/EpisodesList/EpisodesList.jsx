import { useParams, useLocation } from 'react-router-dom';
import { Ul, ListItem, Title, Text, HideEpisodes } from './EpisodesList.styled';

export default function EpisodesList({ episodes }) {
  const { characterId } = useParams();
  const location = useLocation();

  return (
    <>
      <HideEpisodes
        to={{
          pathname: `/character/${characterId}`,
          state: { from: location },
        }}
      >
        Hide episodes
      </HideEpisodes>
      <Ul>
        {episodes.length > 1 ? (
          episodes.map(({ id, name, air_date, episode }) => (
            <ListItem key={id}>
              <Title>{name}</Title>
              <Text>Episode: {episode}</Text>
              <Text>Air date: {air_date}</Text>
            </ListItem>
          ))
        ) : (
          <ListItem>
            <Title>{episodes.name}</Title>
            <Text>Episode: {episodes.episode}</Text>
            <Text>Air date: {episodes.air_date}</Text>
          </ListItem>
        )}
        {}
      </Ul>
    </>
  );
}
