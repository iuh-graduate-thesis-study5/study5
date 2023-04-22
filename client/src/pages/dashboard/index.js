import { useState } from 'react';

// material-ui
import {
    Avatar,
    AvatarGroup,
    Box,
    Button,
    Grid,
    List,
    ListItemAvatar,
    ListItemButton,
    ListItemSecondaryAction,
    ListItemText,
    MenuItem,
    Stack,
    TextField,
    Typography
} from '@mui/material';

// project import
import OrdersTable from './OrdersTable';
import IncomeAreaChart from './IncomeAreaChart';
import MonthlyBarChart from './MonthlyBarChart';
import ReportAreaChart from './ReportAreaChart';
import SalesColumnChart from './SalesColumnChart';
import MainCard from 'components/MainCard';
import AnalyticEcommerce from 'components/cards/statistics/AnalyticEcommerce';

// assets
import { GiftOutlined, MessageOutlined, SettingOutlined } from '@ant-design/icons';
import avatar1 from 'assets/images/users/avatar-1.png';
import avatar2 from 'assets/images/users/avatar-2.png';
import avatar3 from 'assets/images/users/avatar-3.png';
import avatar4 from 'assets/images/users/avatar-4.png';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from 'actions/exam.action';
import * as actions_q from 'actions/groupquestion.action';
import * as actions_acc from 'actions/account.action';
import AccountTable from 'pages/account/AccountManager';

// avatar style
const avatarSX = {
    width: 36,
    height: 36,
    fontSize: '1rem'
};

// action style
const actionSX = {
    mt: 0.75,
    ml: 1,
    top: 'auto',
    right: 'auto',
    alignSelf: 'flex-start',
    transform: 'none'
};

// sales report status
const status = [
    {
        value: 'today',
        label: 'Today'
    },
    {
        value: 'month',
        label: 'This Month'
    },
    {
        value: 'year',
        label: 'This Year'
    }
];

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const DashboardDefault = () => {
    const [value, setValue] = useState('today');
    const [slot, setSlot] = useState('week');
    const dispatch = useDispatch();
    const exams = useSelector((state) => state.exam.listExam);
    const question = useSelector((state) => state.gquestion.listGroupQuestion);
    const account = useSelector((state) => state.account.listAccount);

    const [listExam, setListExam] = useState([]);
    const [allExam, setAllExam] = useState([]);
    const [listTestExam, setListTestExam] = useState([]);
    useEffect(() => {
        dispatch(actions.getAllExam());
        dispatch(actions_q.getAllGroupQuestion());
        dispatch(actions_acc.test());
    }, []);
    useEffect(() => {
        if (exams) {
            setAllExam(exams);
            setListExam(exams.filter((item) => item.loaidethi === 0));
            setListTestExam(exams.filter((item) => item.loaidethi === 1));
        }
    }, [exams]);
    return (
        <>
            <Grid container rowSpacing={4.5} columnSpacing={2.75}>
                {/* row 1 */}
                <Grid item xs={12} sx={{ mb: -2.25 }}>
                    <Typography variant="h5">Dashboard</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <AnalyticEcommerce title="Tổng số đề thi" count={listExam.length + ' Đề thi'} />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <AnalyticEcommerce title="Tổng số câu hỏi" count={question?.length + ' Câu hỏi'} />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <AnalyticEcommerce title="Tổng số tài khoản" count={account?.length + ' Tài khoản'} />
                </Grid>

                <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />

                {/* row 2 */}
                <Grid item xs={12} md={7} lg={8}>
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                            <Typography variant="h5">Các tài khoản mới</Typography>
                        </Grid>
                    </Grid>
                    <MainCard content={false} sx={{ mt: 1.5 }}>
                        <Box sx={{ pt: 1, pr: 2 }}>
                            <AccountTable isAction={true} />
                        </Box>
                    </MainCard>
                </Grid>
                <Grid item xs={12} md={5} lg={4}>
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                            <Typography variant="h5">Biểu đồ</Typography>
                        </Grid>
                        <Grid item />
                    </Grid>
                    <MainCard sx={{ mt: 2 }} content={false} style={{ height: '90%' }}>
                        <Box sx={{ p: 3, pb: 0 }}>
                            <Stack spacing={2}>
                                <Typography variant="h6" color="textSecondary"></Typography>
                            </Stack>
                        </Box>
                        <MonthlyBarChart account={account} />
                    </MainCard>
                </Grid>
                <Grid></Grid>
            </Grid>
        </>
    );
};

export default DashboardDefault;
