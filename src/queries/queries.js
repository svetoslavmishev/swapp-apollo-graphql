import gql from 'graphql-tag';

export const AUTH = gql`
  query AuthQuery {
    isAuthenticated @client
  }
`;

export const SIGN_IN = gql`
  mutation SignInQuery($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      token
    }
  }
`;

export const ALL_EPISODES = gql`
  query AllEpisodesQuery($first: Int!) {
    allEpisodes(first: $first) {
      edges {
        node {
          id
          image
          title
          openingCrawl
        }
      }
    }
  }
`;

export const GET_EPISODE = gql`
  query EpisodeQuery($id: ID!) {
    episode(id: $id) {
      title
      episodeId
      openingCrawl
      image
      director
      releaseDate
      people {
        totalCount
        pageInfo {
          hasNextPage
          endCursor
        }
        edges {
          node {
            id
            name
            image
          }
        }
      }
    }
  }
`;

export const MORE_CHARACTERS = gql`
  query CharactersQuery($cursor: String) {
    allPeople(first: 10, after: $cursor) {
      totalCount
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          id
          name
          birthYear
          height
          mass
          image
        }
      }
    }
  }
`;

export const GET_PROFILE = gql`
  query PersonQuery($id: ID!) {
    person(id: $id) {
      id
      name
      height
      mass
      image
      homeworld {
        name
      }
      species {
        name
      }
      starships {
        edges {
          node {
            id
            name
            image
          }
        }
      }
    }
  }
`;

export const GET_STARSHIP = gql`
  query STARSHIP($id: ID!) {
    starship(id: $id) {
      id
      name
      model
      image
      starshipClass
      cost
      maxAtmosphericSpeed
      hyperdriveRating
      crew
    }
  }
`;
