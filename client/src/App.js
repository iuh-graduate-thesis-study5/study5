// project import
import Routes from 'routes';
import ThemeCustomization from 'themes';
import ScrollTop from 'components/ScrollTop';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from './actions/account.action';
import { useEffect } from 'react';

// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //

const App = () => {
    const customization = useSelector((state) => state.customization);
    return (
        <ThemeCustomization>
            <ScrollTop>
                <Routes />
            </ScrollTop>
        </ThemeCustomization>
    );
};

export default App;
