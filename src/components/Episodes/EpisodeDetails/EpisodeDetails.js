import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import {
  makeStyles,
  useTheme,
  Button,
  Card,
  CardContent,
  Typography,
  CardMedia
} from '@material-ui/core';
import { Header, CharCard } from '../../index';
import { GET_EPISODE } from '../../../queries/queries';

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    margin: 10
  },
  details: {
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    flex: '1 0 auto'
  },
  cover: {
    width: 151
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  playIcon: {
    height: 38,
    width: 38
  }
}));

const EpisodeDetails = () => {
  const { episodeId } = useParams();
  const classes = useStyles();
  const theme = useTheme();

  const { data, loading, error } = useQuery(GET_EPISODE, {
    variables: { id: episodeId }
  });

  if (loading) return <div>Loading...</div>;
  if (error) return null;

  return (
    <div>
      <Header />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 50
        }}
      >
        <Card className={classes.card}>
          <CardMedia
            className={classes.cover}
            image={data.episode.image}
            title={data.episode.title}
          />
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h4" variant="h4">
                {data.episode.title}
              </Typography>
            </CardContent>
            <div className={classes.controls}></div>
          </div>
        </Card>
        <Card className={classes.card}>
          <div className={classes.details}>
            <CardContent>
              <Typography>{data.episode.openingCrawl}</Typography>
              <Typography>Director: {data.episode.director}</Typography>
              <Typography>Release date: {data.episode.releaseDate}</Typography>
            </CardContent>
          </div>
        </Card>
        <Card className={classes.card}>
          <div className={classes.details}>
            <CardContent
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between'
              }}
            >
              {data &&
                data.episode.people.edges.map(char => {
                  return <CharCard key={char.node.id} chars={char.node} />;
                })}
            </CardContent>
          </div>
        </Card>
      </div>
      <Button
        variant="contained"
        //onClick={loadMore}
      >
        Load more
      </Button>
    </div>
  );
};

export default EpisodeDetails;
