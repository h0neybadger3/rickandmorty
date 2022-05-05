import { useState, useEffect } from 'react';
import * as api from '../../service/rickandmorty-api';
import EpisodesList from 'components/EpisodesList';

export default function EpisodesView({ character }) {
  const { episode } = character;
  const numberofEpisodes = getNumberOfEpisodes(episode);

  const [episodes, setEpisodes] = useState(null);

  useEffect(() => {
    api.getEpisodes(numberofEpisodes).then(episodes => {
      setEpisodes(episodes);
    });
  }, []);
  return <>{episodes && <EpisodesList episodes={episodes} />}</>;
}

function getNumberOfEpisodes(episodes) {
  return episodes.map(episode => Number(/\d+/.exec(episode)));
}
