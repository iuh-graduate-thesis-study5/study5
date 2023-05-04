import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';
// assets
import { EditOutlined, ProfileOutlined, LogoutOutlined, UserOutlined, WalletOutlined, HomeOutlined } from '@ant-design/icons';
import * as actions from 'actions/account.action';
import { useDispatch } from 'react-redux';
// ==============================|| HEADER PROFILE - PROFILE TAB ||============================== //

const ProfileTab = ({ handleLogout }) => {
    const theme = useTheme();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [selectedIndex, setSelectedIndex] = useState(0);
    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };
    const Logout = () => {
        dispatch(actions.Logout());
        navigate('/login');
    };
    const handleChangHome = () => {
        navigate('/home');
    };
    return (
        <List component="nav" sx={{ p: 0, '& .MuiListItemIcon-root': { minWidth: 32, color: theme.palette.grey[500] } }}>
            <ListItemButton selected={selectedIndex === 1} onClick={(event) => handleChangHome(event, 1)}>
                <ListItemIcon>
                    <HomeOutlined />
                </ListItemIcon>
                <ListItemText primary="Trang chủ" />
            </ListItemButton>
            <ListItemButton selected={selectedIndex === 1} onClick={(event) => handleListItemClick(event, 1)}>
                <ListItemIcon>
                    <UserOutlined />
                </ListItemIcon>
                <ListItemText primary="Thông tin cá nhân" />
            </ListItemButton>
            <ListItemButton selected={selectedIndex === 2} onClick={() => Logout()}>
                <ListItemIcon>
                    <LogoutOutlined />
                </ListItemIcon>
                <ListItemText primary="Đăng xuất" />
            </ListItemButton>
        </List>
    );
};

ProfileTab.propTypes = {
    handleLogout: PropTypes.func
};

export default ProfileTab;
