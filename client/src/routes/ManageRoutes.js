import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MinimalLayout from 'layout/MinimalLayout';
import MainLayout from 'layout/MainLayout';

// render - login
const UserManager = Loadable(lazy(() => import('pages/user/UserManager')));
const AccountManager = Loadable(lazy(() => import('pages/account')));

// ==============================|| AUTH ROUTING ||============================== //

const ManageRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: 'account',
            element: <AccountManager />
        },
        {
            path: 'user',
            element: <UserManager />
        }
    ]
};

export default ManageRoutes;
