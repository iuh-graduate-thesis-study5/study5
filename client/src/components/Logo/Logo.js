// material-ui
import { useTheme } from '@mui/material/styles';

import logo from '../../assets/logo/logo.png';
/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
    const theme = useTheme();

    return (
        /**
         * if you want to use image instead of svg uncomment following, and comment out <svg> element.
         *
         * <img src={logo} alt="Mantis" width="100" />
         *
         */
        <>
            <div>
                <img style={{ width: '8rem', marginTop: '1rem' }} src={logo} alt="logo" />
            </div>
        </>
    );
};

export default Logo;
