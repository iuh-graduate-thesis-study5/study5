import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo/logo.png';
import { ProfileOutlined, LogoutOutlined, ReconciliationOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import * as actions from 'actions/account.action';
import { useNavigate } from 'react-router-dom';
const pages = [
    { text: 'Trang chủ', link: '/home' },
    { text: 'Thư viện đề thi', link: '/home/exams-library' },
    { text: 'Bài thi của tôi', link: '/home/my-result' }
];

function ResponsiveAppBar() {
    const navigate = useNavigate();
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const dispatch = useDispatch();
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const logOut = () => {
        dispatch(actions.Logout());
    };

    if (localStorage.getItem('user_authenticated') == 'undefined') {
        navigate('/login');
    }
    const settings = [
        { text: 'Thông tin cá nhân', icon: <ProfileOutlined />, link: '/home/user-detail', onClick: null },
        { text: 'Trang quản lý', icon: <ReconciliationOutlined />, link: '/', onClick: null },
        { text: 'Đăng xuất', icon: <LogoutOutlined />, link: '/login', onClick: logOut }
    ];
    const account = useSelector((state) => state.account.account);
    const user_id = useSelector((state) => state.account.userAuth);

    useEffect(() => {
        if (user_id) {
            dispatch(actions.getAccount(user_id));
        }
    }, [user_id]);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    console.log(account);
    return (
        <AppBar position="sticky" style={{ backgroundColor: 'white', margin: 0 }}>
            <Container maxWidth="xl" style={{ backgroundColor: 'white', margin: 0 }}>
                <Toolbar disableGutters>
                    <Link to={'/home'} style={{ textDecoration: 'none', color: 'black' }}>
                        <img style={{ width: '6rem' }} src={logo} alt="logo" />
                    </Link>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page, i) => (
                            <Link key={i} to={page.link} style={{ textDecoration: 'none', color: 'black' }}>
                                <Button
                                    key={i}
                                    onClick={handleCloseNavMenu}
                                    sx={{
                                        my: 2,
                                        color: 'black',
                                        fontWeight: 'bold',
                                        display: 'block',
                                        pt: 0,
                                        pb: 0,
                                        pr: 2,
                                        pl: 2
                                    }}
                                >
                                    {page.text}
                                </Button>
                            </Link>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <span style={{ marginRight: 10, fontWeight: 'bold', marginLeft: 10, color: 'black' }}>
                            Xin chào! {account?.nguoidung?.tennguoidung}{' '}
                        </span>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt={account?.nguoidung?.tennguoidung} src={account?.avatar} />
                            </IconButton>
                        </Tooltip>

                        <Menu
                            disableScrollLock={true}
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right'
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right'
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <React.Fragment>
                                    {setting.link === '/' && account?.quyen == 'STUDENT' ? (
                                        <></>
                                    ) : (
                                        <Link
                                            key={setting.link}
                                            to={setting.link}
                                            onClick={setting.onClick}
                                            style={{ textDecoration: 'none', color: 'black' }}
                                        >
                                            <MenuItem onClick={handleCloseUserMenu}>
                                                {setting.icon} &nbsp;&nbsp;
                                                <Typography style={{ color: 'black' }} textAlign="center">
                                                    {setting.text}
                                                </Typography>
                                            </MenuItem>
                                        </Link>
                                    )}
                                </React.Fragment>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;
