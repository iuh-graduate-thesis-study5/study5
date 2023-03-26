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

const pages = ['Trang chủ', 'Ngân hàng đề thi'];
const settings = [
    { text: 'Thông tin cá nhân', icon: <ProfileOutlined />, link: '/user-detail' },
    { text: 'Trang quản lý', icon: <ReconciliationOutlined />, link: '/' },
    { text: 'Đăng xuất', icon: <LogoutOutlined />, link: '/login' }
];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

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

    return (
        <AppBar position="sticky" style={{ backgroundColor: 'white', margin: 0 }}>
            <Container maxWidth="xl" style={{ backgroundColor: 'white', margin: 0 }}>
                <Toolbar disableGutters>
                    <img style={{ width: '6rem' }} src={logo} alt="logo" />

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
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
                                {page}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
                                <Link key={setting.link} to={setting.link} style={{ textDecoration: 'none', color: 'black' }}>
                                    <MenuItem onClick={handleCloseUserMenu}>
                                        {setting.icon} &nbsp;&nbsp;
                                        <Typography style={{ color: 'black' }} textAlign="center">
                                            {setting.text}
                                        </Typography>
                                    </MenuItem>
                                </Link>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;
