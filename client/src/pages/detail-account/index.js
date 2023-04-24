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
import IconButton from '@mui/material/IconButton';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import 'css/upload.css';
import image from 'assets/user/icon-man.png';
import Paper from '@mui/material/Paper';
import * as actions from 'actions/account.action';
import EditIcon from '@mui/icons-material/Edit';
export default function DetailAccount() {
    const account = useSelector((state) => state.account.account);
    const userAuth = useSelector((state) => state.account.userAuth);
    const dispatch = useDispatch();
    const [readonly, setReadOnly] = useState(true);
    const handleChangeEdit = () => {
        setReadOnly(!readonly);
    };
    useEffect(() => {
        if (userAuth) {
            dispatch(actions.getAccount(userAuth));
        }
    }, [userAuth]);
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
                <Grid item xs={12} style={{ textAlign: 'right' }}>
                    <IconButton color="primary" onClick={handleChangeEdit}>
                        <EditIcon />
                    </IconButton>
                </Grid>
                <Grid item xs={6}>
                    <b>Tài khoản</b>
                    <TextField
                        InputProps={{
                            readOnly: true
                        }}
                        fullWidth
                        id="outlined-basic"
                        variant="outlined"
                        value={account?.tentaikhoan}
                    />
                </Grid>
                <Grid item xs={6}>
                    <b>Tên người dùng</b>
                    <TextField
                        InputProps={{
                            readOnly: readonly
                        }}
                        fullWidth
                        id="outlined-basic"
                        variant="outlined"
                        value={account?.nguoidung?.tennguoidung}
                    />
                </Grid>
                <Grid item xs={6}>
                    <b>Số điện thoại</b>
                    <TextField
                        InputProps={{
                            readOnly: readonly
                        }}
                        fullWidth
                        id="outlined-basic"
                        variant="outlined"
                        value={account?.nguoidung?.sodienthoai}
                    />
                </Grid>
                <Grid item xs={6}>
                    <b>Giới tính</b>
                    <TextField
                        InputProps={{
                            readOnly: readonly
                        }}
                        fullWidth
                        id="outlined-basic"
                        variant="outlined"
                        value={account?.nguoidung?.gioitinh}
                    />
                </Grid>
                <Grid item xs={12}>
                    <b>Địa chỉ</b>
                    <TextField
                        InputProps={{
                            readOnly: readonly
                        }}
                        fullWidth
                        id="outlined-basic"
                        variant="outlined"
                        value={account?.nguoidung?.diachi}
                    />
                </Grid>
                {!readonly ? (
                    <Grid item xs={12}>
                        <Button fullWidth variant="contained" component="label">
                            Upload
                        </Button>
                    </Grid>
                ) : (
                    <></>
                )}
            </Grid>
        </Paper>
    );
}
