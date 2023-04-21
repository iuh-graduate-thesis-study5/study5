import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CardExam from './CardExam';
import CardPoint from './CardPoint';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import * as actions from 'actions/exam.action';
import ExamTable from 'pages/exam-manage/ExamTable';
import PieChartExam from './PieChart';
export default function DoExam() {
    const { id } = useParams();
    const exam = useSelector((state) => state.exam.examById);
    const dispatch = useDispatch();
    useEffect(() => {
        if (id) {
            dispatch(actions.getExamById(id));
        }
    }, []);
    return (
        <div>
            <div style={{ textAlign: 'left' }}>
                <h4>ETS TOEIC 2022 Test 2</h4>
            </div>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <CardExam header={'Thông tin bài thi'} />
                </Grid>
                <Grid item xs={6}>
                    <CardPoint header={'Sơ lược điểm'} />
                </Grid>
                <Grid item xs={12} style={{ textAlign: 'right' }}>
                    <Button variant="contained" startIcon={<FileDownloadIcon />}>
                        XUẤT KẾT QUẢ
                    </Button>
                </Grid>
                <Grid item xs={8}>
                    <ExamTable />
                </Grid>
                <Grid item xs={4}>
                    <PieChartExam />
                </Grid>
            </Grid>
        </div>
    );
}
