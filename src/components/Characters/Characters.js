import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Button } from '@material-ui/core';
import { Header, CharCard } from '../index';
import { MORE_CHARACTERS } from '../../queries/queries';

const Characters = () => {
  const { data, loading, error, fetchMore } = useQuery(MORE_CHARACTERS);

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

  if (loading) return <div>Loading...</div>;
  if (error) return null;

  return (
    <div>
      <Header />
      <div>
        {data &&
          data.allPeople.edges.map(char => {
            return <CharCard key={char.node.id} chars={char.node} />;
          })}
      </div>
      <Button variant="contained" onClick={loadMore}>
        Load more
      </Button>
    </div>
  );
};

export default Characters;
