import { SignIn, Protected, Episodes, Characters, Error } from '../components';

const routesConfig = [
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
