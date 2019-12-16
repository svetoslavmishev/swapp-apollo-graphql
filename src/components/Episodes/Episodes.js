import React, { useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';

import { Header, EpisodeCard, Loading } from '../index';
import { ALL_EPISODES } from '../../queries/queries';
import { ThemeContext } from '../../themeContext';
import styles from './EpisodesStyles';

const Episodes = () => {
  const { currentTheme } = useContext(ThemeContext);
  const classes = styles({ currentTheme });

  const { data, loading, error } = useQuery(ALL_EPISODES, {
    variables: { first: 20 }
  });

  if (loading) return <Loading />;
  if (error) return null;

  return (
    <div>
      <Header />
      <div className={classes.root}>
        {data &&
          data.allEpisodes.edges.map(episode => (
            <EpisodeCard key={episode.node.id} episode={episode.node} />
          ))}
      </div>
    </div>
  );
};

export default Episodes;
