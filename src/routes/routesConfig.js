import { SignIn, Protected, Error } from '../components';

const routesConfig = [
  {
    path: '/signin',
    exact: true,
    component: SignIn
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
