// material-ui
import { Box, Typography } from '@mui/material';

// project import
import NavGroup from './NavGroup';
import menuItem from 'menu-items';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import * as actions from 'actions/account.action';
// ==============================|| DRAWER CONTENT - NAVIGATION ||============================== //
const Navigation = () => {
    const dispatch = useDispatch();
    const [menu, setMenu] = useState([]);
    const account = useSelector((state) => state.account.account);
    const user_id = useSelector((state) => state.account.userAuth);
    const listM = menuItem;
    useEffect(() => {
        if (user_id) {
            dispatch(actions.getAccount(user_id));
        }
    }, [user_id]);
    useEffect(() => {
        if (account && account.quyen === 'TEACHER') {
            const listNav = [];
            listNav.push(listM.items[0]);
            const listItem = listM.items[1];

            const listB = [];
            listM.items[1].children.forEach((e) => {
                if (e.url !== '/account' && e.url !== '/user') {
                    listB.push(e);
                }
            });
            listItem.children = listB;
            listNav.push(listItem);
            setMenu(listNav);
        }
        if (account && account.quyen === 'ADMIN') {
            setMenu(menuItem.items);
        }
    }, [account]);

    const navGroups = menu.map((item) => {
        switch (item.type) {
            case 'group':
                return <NavGroup key={item.id} item={item} />;
            default:
                return (
                    <Typography key={item.id} variant="h6" color="error" align="center">
                        Fix - Navigation Group
                    </Typography>
                );
        }
    });

    return <Box sx={{ pt: 2 }}>{navGroups}</Box>;
};

export default Navigation;
