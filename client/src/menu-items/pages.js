// assets
import { LoginOutlined, ProfileOutlined } from '@ant-design/icons';
import GroupIcon from '@mui/icons-material/Group';
import PersonIcon from '@mui/icons-material/Person';

// icons
const icons = {
    LoginOutlined,
    ProfileOutlined,
    GroupIcon,
    PersonIcon
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
    id: 'authentication',
    title: 'Quản lý',
    type: 'group',
    children: [
        // {
        //     id: 'login1',
        //     title: 'Login',
        //     type: 'item',
        //     url: '/login',
        //     icon: icons.LoginOutlined,
        //     target: true
        // },
        // {
        //     id: 'register1',
        //     title: 'Register',
        //     type: 'item',
        //     url: '/register',
        //     icon: icons.ProfileOutlined,
        //     target: true
        // },
        {
            id: 'quanlytaikhoan',
            title: 'Tài khoản',
            type: 'item',
            url: '/account',
            icon: icons.PersonIcon,
            target: false
        },
        {
            id: 'quanlynguoidung',
            title: 'Người dùng',
            type: 'item',
            url: '/user',
            icon: icons.GroupIcon,
            target: false
        }
    ]
};

export default pages;
