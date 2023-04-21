import UserScheduler from './UserSchedule';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
export default function index() {
    return (
        <>
            <div className="light-gradient-bg">
                <div className="calendar">
                    <CalendarMonthIcon style={{ fontSize: 40 }} />
                    &nbsp;
                    <h2>LỊCH THI</h2>
                </div>
                <div>
                    <Chip label="Lịch thi của tôi" color="primary" />
                </div>
            </div>

            <UserScheduler />
        </>
    );
}
