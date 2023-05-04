import { useRoutes } from 'react-router-dom';
import { useState, useEffect } from 'react';

// project import
import LoginRoutes from './LoginRoutes';
import MainRoutes from './MainRoutes';
import ManageRoutes from './ManageRoutes';
import HomeRoutes from './HomeRoute';
import NotFoundRoute from './NotFound';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from 'actions/account.action';
// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    const dispatch = useDispatch();
    const [listRoute, setListRoute] = useState([MainRoutes, LoginRoutes, ManageRoutes, HomeRoutes, NotFoundRoute]);
    const account = useSelector((state) => state.account.account);
    const user_id = useSelector((state) => state.account.userAuth);

    useEffect(() => {
        if (user_id) {
            dispatch(actions.getAccount(user_id));
        }
    }, [user_id]);
    useEffect(() => {
        if (account && account.quyen === 'STUDENT') {
            setListRoute([LoginRoutes, HomeRoutes, NotFoundRoute]);
        }
    }, [account]);
    return useRoutes(listRoute);
}
