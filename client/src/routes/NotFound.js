import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MinimalLayout from 'layout/MinimalLayout';
import MainLayout from 'layout/MainLayout';

// render - login
const NotFound = Loadable(lazy(() => import('pages/notfound')));

// ==============================|| AUTH ROUTING ||============================== //

const NotFoundRoute = {
    path: '/*',
    element: <NotFound />
};

export default NotFoundRoute;
