import React from 'react';
import {
  SignIn,
  Episodes,
  EpisodeDetails,
  Characters,
  CharProfile,
  Starship,
  Error
} from '../components';
import { Redirect } from 'react-router-dom';

const routesConfig = [
  {
    path: '/',
    exact: true,
    component: () => <Redirect to="/episodes" />
  },
  {
    path: '/signin',
    exact: true,
    component: SignIn
  },
  {
    path: '/episodes',
    exact: true,
    component: Episodes
  },
  {
    path: '/episodes/:episodeId',
    exact: true,
    component: EpisodeDetails
  },
  {
    path: '/characters',
    exact: true,
    component: Characters
  },
  {
    path: '/characters/:characterId',
    exact: true,
    component: CharProfile
  },
  {
    path: '/starships/:starshipId',
    exact: true,
    component: Starship
  },
  {
    path: '*',
    component: Error
  }
];

export default routesConfig;
