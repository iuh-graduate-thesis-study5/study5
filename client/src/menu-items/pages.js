// assets
import {
    LoginOutlined,
    ProfileOutlined,
    TeamOutlined,
    UserOutlined,
    ReconciliationOutlined,
    QuestionCircleOutlined,
    UserSwitchOutlined
} from '@ant-design/icons';
import GroupIcon from '@mui/icons-material/Group';
import PersonIcon from '@mui/icons-material/Person';
import BallotIcon from '@mui/icons-material/Ballot';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import QuizIcon from '@mui/icons-material/Quiz';
import { useEffect } from 'react';

// icons
const icons = {
    LoginOutlined,
    ProfileOutlined,
    GroupIcon,
    PersonIcon,
    BallotIcon,
    MenuBookIcon,
    AccountTreeIcon,
    QuizIcon,
    TeamOutlined,
    UserOutlined,
    ReconciliationOutlined,
    QuestionCircleOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
    id: 'manage',
    title: 'Quản lý',
    type: 'group',
    children: [
        {
            id: 'quanlytaikhoan',
            title: 'Tài khoản',
            type: 'item',
            url: '/account',
            icon: icons.UserOutlined,
            target: false
        },
        {
            id: 'quanlynguoidung',
            title: 'Người dùng',
            type: 'item',
            url: '/user',
            icon: icons.TeamOutlined,
            target: false
        },
        {
            id: 'dethi',
            title: 'Đề thi',
            type: 'item',
            url: '/exam',
            icon: icons.ReconciliationOutlined,
            target: false
        },
        {
            id: 'cauhoi',
            title: 'Câu hỏi',
            type: 'item',
            url: '/question',
            icon: icons.QuestionCircleOutlined,
            target: false
        }
    ]
};

export default pages;
