import { Protected, Error } from '../components';

const routesConfig = [
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
