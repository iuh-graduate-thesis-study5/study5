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
import * as actions from 'actions/result.action';
import ExamTable from 'pages/exam-manage/ExamTable';
import ListAnswer from './ListAnswer';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Paper from '@mui/material/Paper';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import CloseIcon from '@mui/icons-material/Close';
import 'css/question.css';
export default function ReSultExam() {
    const { id } = useParams();
    const result = useSelector((state) => state.result.result);
    const dispatch = useDispatch();
    useEffect(() => {
        if (id) {
            dispatch(actions.getResult(id));
        }
    }, [id]);
    return (
        <div>
            <div style={{ textAlign: 'left' }}>
                <h4>{result?.dethithisinh?.dethi?.tieude}</h4>
            </div>
            <Grid container spacing={2}>
                <Grid item xs={4.2}>
                    <CardExam
                        header={'Thông tin kết quả thi'}
                        user={result?.dethithisinh?.taikhoan?.nguoidung?.tennguoidung}
                        point={result?.tongdiem}
                        percent={((result?.socaudung * 100) / 51).toFixed(2)}
                    />
                </Grid>
                <Grid item xs={2.6}>
                    <CardPoint
                        header={'Trả lời đúng'}
                        color={'green'}
                        number={result?.socaudung}
                        icon={<TaskAltIcon color={'success'} />}
                    />
                </Grid>
                <Grid item xs={2.6}>
                    <CardPoint header={'Trả lời sai'} color={'red'} number={result?.socausai} icon={<HighlightOffIcon color={'error'} />} />
                </Grid>{' '}
                <Grid item xs={2.6}>
                    <CardPoint header={'Bỏ qua'} color={'text'} number={result?.socauboqua} icon={<ErrorOutlineIcon color={'text'} />} />
                </Grid>
            </Grid>
            <Paper elevation={1} sx={{ mt: 5, p: 2 }}>
                <h3>ĐÁP ÁN</h3>
                <Alert severity="success">
                    <AlertTitle style={{ marginBlockStart: 0, marginBlockEnd: 0 }}>Tips</AlertTitle>
                    <p style={{ marginBlockStart: 0, marginBlockEnd: 0 }}>
                        Khi xem chi tiết đáp án, bạn có thể kiểm tra kết quả có đúng không. bạn có thể xem sửa câu hỏi hoặc bổ sung trong
                        tương lai
                    </p>
                </Alert>
                <Grid container spacing={2}>
                    <ListAnswer result={result} />
                </Grid>
            </Paper>
        </div>
    );
}
