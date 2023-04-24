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

const page_teacher = {
    id: 'authentication',
    title: 'Quản lý',
    type: 'group',
    children: [
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

export default page_teacher;
