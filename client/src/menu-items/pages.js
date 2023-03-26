// assets
import { LoginOutlined, ProfileOutlined } from '@ant-design/icons';
import GroupIcon from '@mui/icons-material/Group';
import PersonIcon from '@mui/icons-material/Person';
import BallotIcon from '@mui/icons-material/Ballot';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import QuizIcon from '@mui/icons-material/Quiz';

// icons
const icons = {
    LoginOutlined,
    ProfileOutlined,
    GroupIcon,
    PersonIcon,
    BallotIcon,
    MenuBookIcon,
    AccountTreeIcon,
    QuizIcon
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
    id: 'authentication',
    title: 'Quản lý',
    type: 'group',
    children: [
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
        },
        {
            id: 'dethi',
            title: 'Đề thi',
            type: 'item',
            url: '/user',
            icon: icons.BallotIcon,
            target: false
        },
        {
            id: 'loaicauhoi',
            title: 'Loại phần thi',
            type: 'item',
            url: '/user',
            icon: icons.MenuBookIcon,
            target: false
        },
        {
            id: 'phanthi',
            title: 'Phần thi',
            type: 'item',
            url: '/user',
            icon: icons.AccountTreeIcon,
            target: false
        },
        {
            id: 'cauhoi',
            title: 'Câu hỏi',
            type: 'item',
            url: '/user',
            icon: icons.QuizIcon,
            target: false
        }
    ]
};

export default pages;
