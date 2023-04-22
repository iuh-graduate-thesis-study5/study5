// assets
import { DashboardOutlined, UserSwitchOutlined } from '@ant-design/icons';

// icons
const icons = {
    DashboardOutlined,
    UserSwitchOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
    id: 'group-dashboard',
    title: '',
    type: 'group',
    children: [
        {
            id: 'dashboard',
            title: 'Dashboard',
            type: 'item',
            url: '/dashboard/default',
            icon: icons.DashboardOutlined,
            breadcrumbs: false
        },
        {
            id: 'user-detail',
            title: 'Thông tin cá nhân',
            type: 'item',
            url: '/user-detail',
            icon: icons.UserSwitchOutlined,
            breadcrumbs: false
        }
    ]
};

export default dashboard;
