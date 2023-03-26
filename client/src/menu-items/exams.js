// assets
import { LoginOutlined, ProfileOutlined } from '@ant-design/icons';
import GroupIcon from '@mui/icons-material/Group';
import PersonIcon from '@mui/icons-material/Person';
import BallotIcon from '@mui/icons-material/Ballot';

// icons
const icons = {
    LoginOutlined,
    ProfileOutlined,
    GroupIcon,
    PersonIcon,
    BallotIcon
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const exam = {
    id: 'exam',
    title: 'Đề thi',
    type: 'group',
    children: [
        {
            id: 'dethi',
            title: 'Đề thi',
            type: 'item',
            url: '/user',
            icon: icons.BallotIcon,
            target: false,
            breadcrumbs: true
        }
    ]
};

export default exam;
