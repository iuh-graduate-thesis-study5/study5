import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import TextField from '@mui/material/TextField';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import 'css/upload.css';
import image from 'assets/user/icon-man.png';
import Paper from '@mui/material/Paper';
export default function DetailAccount() {
    const { id } = useParams();
    const exam = useSelector((state) => state.exam.examById);
    const dispatch = useDispatch();
    useEffect(() => {
        if (id) {
            dispatch(actions.getExamById(id));
        }
    }, []);
    return (
        <Paper elevation={1} sx={{ p: 5, height: 630 }}>
            <div style={{ textAlign: 'center' }}>
                <h3>THÔNG TIN CÁ NHÂN</h3>
                <div className="avatar-wrapper">
                    <img className="profile-pic" src={image} alt="pic" />
                    <div className="upload-button">
                        <FileUploadIcon className="fa-arrow-circle-up" style={{ width: '100%', height: '100%' }} />
                    </div>
                    <input className="file-upload" type="file" accept="image/*" />
                </div>
            </div>
            <Grid container spacing={2} sx={{ pl: 30, pr: 30 }}>
                <Grid item xs={6}>
                    <b>Tài khoản</b>
                    <TextField fullWidth id="outlined-basic" variant="outlined" />
                </Grid>
                <Grid item xs={6}>
                    <b>Tên người dùng</b>
                    <TextField fullWidth id="outlined-basic" variant="outlined" />
                </Grid>
                <Grid item xs={6}>
                    <b>Số điện thoại</b>
                    <TextField fullWidth id="outlined-basic" variant="outlined" />
                </Grid>
                <Grid item xs={6}>
                    <b>Giới tính</b>
                    <TextField fullWidth id="outlined-basic" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                    <b>Địa chỉ</b>
                    <TextField fullWidth id="outlined-basic" variant="outlined" />
                </Grid>
            </Grid>
        </Paper>
    );
}
