import { useRoutes } from 'react-router-dom';
import { useState, useEffect } from 'react';

// project import
import LoginRoutes from './LoginRoutes';
import MainRoutes from './MainRoutes';
import ManageRoutes from './ManageRoutes';
import HomeRoutes from './HomeRoute';
import NotFoundRoute from './NotFound';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    let listRoute = [MainRoutes, LoginRoutes, ManageRoutes, HomeRoutes, NotFoundRoute];
    if (localStorage.getItem('authenticate')) {
        let a = JSON.parse(localStorage.getItem('authenticate'));
        if (a.role === 'STUDENT') {
            listRoute = [LoginRoutes, HomeRoutes, NotFoundRoute];
        }
    }
    return useRoutes(listRoute);
}
