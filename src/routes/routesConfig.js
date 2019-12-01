import React from 'react';
import {
  SignIn,
  Protected,
  Episodes,
  EpisodeDetails,
  Characters,
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
    path: '/protected',
    component: Protected
  },
  {
    path: '*',
    component: Error
  }
];

export default routesConfig;
