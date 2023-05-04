// import UserScheduler from './UserSchedule';
// import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import ExamResult from './ExamResult';
import poster from 'assets/user/poster.png';
import LineChart from './LineChart';
export default function index() {
    return (
        <>
            <div className="light-gradient-bg">
                <div className="calendar">
                    <h2>KẾT QUẢ THI</h2>
                    <Alert severity="info">
                        <AlertTitle>Tips</AlertTitle>
                        Nơi đây chứa tất cả các đề thi mà trang web của chúng tôi cung cấp cho bạn. Nó sẽ giúp bạn ôn luyện để hoàn thành
                        các bài thi chính thức 1 cách xuất sắc — <strong>khám phá ngay!</strong>
                    </Alert>
                </div>
            </div>
            <h4>TẤT CẢ BÀI THI</h4>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <LineChart />
                </Grid>
                <Grid item xs={12}>
                    <ExamResult />
                </Grid>
                {/* <Grid item xs={4}>
                    <img src={poster} alt="ảnh" style={{ width: '100%' }} />
                </Grid> */}
            </Grid>
            {/* <UserScheduler /> */}
        </>
    );
}
