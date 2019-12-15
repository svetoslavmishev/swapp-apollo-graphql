import React, { useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';

import { Header, CharCard } from '../index';
import Loading from '../shared/Loading/Loading';
import { MORE_CHARACTERS } from '../../queries/queries';
import { ThemeContext } from '../../themeContext';
import styles from './CharactersStyles';

const Characters = () => {
  const { currentTheme } = useContext(ThemeContext);
  const classes = styles({ currentTheme });
  const { data, loading, error, fetchMore } = useQuery(MORE_CHARACTERS);
  const history = useHistory();

  const loadMore = () => {
    fetchMore({
      variables: {
        cursor: data.allPeople.pageInfo.endCursor
      },
      updateQuery: (previousResult, { fetchMoreResult: { allPeople } }) => {
        const newEdges = allPeople.edges;
        const pageInfo = allPeople.pageInfo;

        return newEdges.length
          ? {
              allPeople: {
                __typename: previousResult.allPeople.__typename,
                edges: [...previousResult.allPeople.edges, ...newEdges],
                pageInfo
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
      <div className={classes.root}>
        <div className="flex flex-wrap justify-around p-4">
          {data &&
            data.allPeople.edges.map(char => {
              return (
                <CharCard
                  key={char.node.id}
                  chars={char.node}
                  onClick={() => history.push(`/characters/${char.node.id}`)}
                />
              );
            })}
        </div>
        <div className="flex justify-center">
          <Button
            className={classes.button}
            variant="contained"
            onClick={loadMore}
          >
            Load more
          </Button>
        </div>
      </div>
    </>
  );
};

export default Characters;
