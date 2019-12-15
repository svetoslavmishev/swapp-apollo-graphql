import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';
import {
  Button,
  Card,
  CardContent,
  Typography,
  CardMedia
} from '@material-ui/core';

import { Header, CharCard } from '../../index';
import Loading from '../../shared/Loading/Loading';
import { GET_EPISODE } from '../../../queries/queries';
import { ThemeContext } from '../../../themeContext';
import styles from './EpisodeDetailsStyles';

const EpisodeDetails = () => {
  const { episodeId } = useParams();
  const { currentTheme } = useContext(ThemeContext);
  const classes = styles({ currentTheme });
  const history = useHistory();
  const { data, loading, error } = useQuery(GET_EPISODE, {
    variables: { id: episodeId }
  });

  if (loading) return <Loading />;
  if (error) return null;

  return (
    <>
      <Header />
      <div className={classes.cardContainer}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.cover}
            image={data.episode.image}
            title={data.episode.title}
          />
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography classes={{ root: classes.episodeTitle }} variant="h5">
                {data.episode.title}
              </Typography>
            </CardContent>
          </div>
        </Card>
        <Card className={classes.card}>
          <div className={classes.details}>
            <CardContent>
              <Typography classes={{ root: classes.description }}>
                {data.episode.openingCrawl}
              </Typography>
              <Typography classes={{ root: classes.description }}>
                Director:{' '}
                <span className={classes.descriptionResult}>
                  {data.episode.director}
                </span>
              </Typography>
              <Typography classes={{ root: classes.description }}>
                Release date:
                <span className={classes.descriptionResult}>
                  {data.episode.releaseDate}
                </span>
              </Typography>
            </CardContent>
          </div>
        </Card>
        <CardContent className={classes.characters}>
          {data &&
            data.episode.people.edges.map(char => {
              return (
                <CharCard
                  key={char.node.id}
                  chars={char.node}
                  onClick={() => history.push(`/characters/${char.node.id}`)}
                />
              );
            })}
        </CardContent>
        <div className="flex justify-center">
          <Button
            className={classes.button}
            variant="contained"
            //onClick={loadMore}
          >
            Load more
          </Button>
        </div>
      </div>
    </>
  );
};

export default EpisodeDetails;
