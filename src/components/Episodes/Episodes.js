import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Header, EpisodeCard } from '../index';
import { ALL_EPISODES } from '../../queries/queries';

const Episodes = () => {
  const { data, loading, error } = useQuery(ALL_EPISODES, {
    variables: { first: 20 }
  });

  return (
    <div>
      <Header />
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-between',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}
      >
        {data &&
          data.allEpisodes.edges.map(episode => (
            <EpisodeCard key={episode.node.id} episode={episode.node} />
          ))}
      </div>
    </div>
  );
};

export default Episodes;
