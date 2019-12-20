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
  query EpisodeQuery($id: ID!, $cursor: String) {
    episode(id: $id) {
      title
      episodeId
      openingCrawl
      image
      director
      releaseDate
      people(first: 5, after: $cursor) {
        totalCount
        pageInfo {
          hasNextPage
          endCursor
        }
        # TODO: Export as fragment
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
        # TODO: Export as fragment
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
      maxMLPerHour
      crew
    }
  }
`;

export const GET_STARSHIPS_BY_CLASS = gql`
  query AllStarships($starshipClass: String!) {
    allStarships(first: 100, filter: { starshipClass: $starshipClass }) {
      edges {
        node {
          id
          cost
          maxAtmosphericSpeed
          hyperdriveRating
          maxMLPerHour
          crew
        }
      }
    }
  }
`;
