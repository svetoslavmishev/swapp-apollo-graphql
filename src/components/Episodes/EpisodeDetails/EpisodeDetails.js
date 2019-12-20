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

import { Header, CharCard, Loading } from '../../index';
import { GET_EPISODE } from '../../../queries/queries';
import { ThemeContext } from '../../../themeContext';
import styles from './EpisodeDetailsStyles';

const EpisodeDetails = () => {
  const { episodeId } = useParams();
  const { currentTheme } = useContext(ThemeContext);
  const classes = styles({ currentTheme });
  const history = useHistory();
  const { data, loading, error, fetchMore } = useQuery(GET_EPISODE, {
    variables: { id: episodeId }
  });
  const hasNextPage = data && data.episode.people.pageInfo.hasNextPage;

  const loadMore = () => {
    fetchMore({
      variables: { cursor: data.episode.people.pageInfo.endCursor },
      updateQuery: (previousResult, { fetchMoreResult: { episode } }) => {
        const newEdges = episode.people.edges;
        const pageInfo = episode.people.pageInfo;

        return newEdges.length
          ? {
              episode: {
                ...episode,
                people: {
                  __typename: previousResult.episode.people.__typename,
                  edges: [...previousResult.episode.people.edges, ...newEdges],
                  pageInfo
                }
              }
            }
          : previousResult;
      }
    });
  };

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
              <Typography className={classes.descriptionDetails}>
                <span>Director: </span>
                <span>{data.episode.director}</span>
              </Typography>
              <Typography className={classes.descriptionDetails}>
                <span>Release date:</span>
                <span>{data.episode.releaseDate}</span>
              </Typography>
            </CardContent>
          </div>
        </Card>
        <CardContent className={classes.characters}>
          {data &&
            data.episode.people.edges.map(char => {
              return (
                // TODO: add to share component
                <CharCard
                  key={char.node.id}
                  chars={char.node}
                  onClick={() => history.push(`/characters/${char.node.id}`)}
                />
              );
            })}
        </CardContent>
        {/* TOODO: Load more characters on button click */}
        {hasNextPage && (
          <div className="flex justify-center">
            <Button
              className={classes.button}
              variant="contained"
              onClick={loadMore}
            >
              Load more
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default EpisodeDetails;
