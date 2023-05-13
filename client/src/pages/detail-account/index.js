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
import useForm from 'services/useForm';
import React from 'react';
import image from 'assets/user/icon-man.png';
import Paper from '@mui/material/Paper';
import * as actions from 'actions/account.action';
import EditIcon from '@mui/icons-material/Edit';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
import * as upload_action from 'actions/upload.action';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const initialFieldValues = {
    tennguoidung: '',
    sodienthoai: '',
    diachi: '',
    gioitinh: 'Nam'
};
export default function DetailAccount() {
    const account = useSelector((state) => state.account.account);
    const userAuth = useSelector((state) => state.account.userAuth);
    const dispatch = useDispatch();
    const [readonly, setReadOnly] = useState(true);
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    const validate = (fieldValues = values) => {
        let temp = { ...errors };
        if ('tennguoidung' in fieldValues) {
            temp.tennguoidung = fieldValues.tennguoidung ? '' : 'Số người không được để trống';
        }
        if ('email' in fieldValues) {
            temp.email = fieldValues.email ? '' : 'Email không được để trống';
        }
        setErrors({
            ...temp
        });

        if (fieldValues == values) return Object.values(temp).every((x) => x == '');
    };
    const { values, setValues, errors, setErrors, handleInputChange, resetForm } = useForm(initialFieldValues, validate, 0);

    const handleSubmit = () => {
        if (validate()) {
            dispatch(actions.updateAccountInfo(values, account?.id, account?.nguoidung?.id));
            handleClick();
            setReadOnly(true);
        }
    };
    useEffect(() => {
        if (account) {
            let value = {
                tennguoidung: account.nguoidung.tennguoidung,
                sodienthoai: account.nguoidung.sodienthoai,
                gioitinh: account.nguoidung.gioitinh,
                diachi: account.nguoidung.diachi
            };
            setValues(value);
        }
    }, [account]);
    const handleChangeEdit = () => {
        setReadOnly(!readonly);
    };
    useEffect(() => {
        if (userAuth) {
            dispatch(actions.getAccount(userAuth));
        }
    }, [userAuth]);
    const handleChangeAvatar = (event) => {
        const formData = new FormData();
        formData.append('filename', event.target.files[0]);
        upload_action.upload(formData).then((res) => {
            dispatch(actions.updateAccountInfo({ avatar: res.data.downloadURL }, account?.id, account?.nguoidung?.id));
            handleClick();
        });
    };
    return (
        <Paper elevation={1} sx={{ p: 5 }}>
            <div style={{ textAlign: 'center' }}>
                <h3>THÔNG TIN CÁ NHÂN</h3>
                <div className="avatar-wrapper">
                    <img className="profile-pic" src={account?.avatar ? account?.avatar : image} alt="pic" />
                    <div className="upload-button">
                        <FileUploadIcon className="fa-arrow-circle-up" style={{ width: '100%', height: '100%' }} />
                    </div>
                    <input
                        style={{ position: 'absolute', right: 0, top: -20, height: 170 }}
                        className="file-upload"
                        type="file"
                        accept="image/*"
                        onChange={handleChangeAvatar}
                    />
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
                        id="tennguoidung"
                        variant="outlined"
                        helperText=" "
                        name="tennguoidung"
                        type="text"
                        autoComplete="off"
                        InputProps={{ inputProps: { min: 0, max: 20, readOnly: readonly } }}
                        fullWidth
                        value={values.tennguoidung || ''}
                        onChange={handleInputChange}
                        {...(errors.tennguoidung && { error: true, helperText: errors.tennguoidung })}
                    />
                </Grid>
                <Grid item xs={6}>
                    <b>Số điện thoại</b>
                    <TextField
                        id="sodienthoai"
                        variant="outlined"
                        helperText=" "
                        name="sodienthoai"
                        type="text"
                        autoComplete="off"
                        InputProps={{ inputProps: { min: 0, max: 20, readOnly: readonly } }}
                        fullWidth
                        value={values.sodienthoai || ''}
                        onChange={handleInputChange}
                        {...(errors.sodienthoai && { error: true, helperText: errors.sodienthoai })}
                    />
                </Grid>
                <Grid item xs={6}>
                    <b>Giới tính</b>
                    <Select
                        id="gioitinh"
                        name="gioitinh"
                        fullWidth
                        labelId="demo-simple-select-label"
                        value={values.gioitinh || ''}
                        onChange={handleInputChange}
                    >
                        <MenuItem value={'Nam'}>Nam</MenuItem>
                        <MenuItem value={'Nữ'}>Nữ</MenuItem>
                    </Select>
                </Grid>
                <Grid item xs={12}>
                    <b>Địa chỉ</b>
                    <TextField
                        id="diachi"
                        variant="outlined"
                        helperText=" "
                        name="diachi"
                        type="text"
                        autoComplete="off"
                        InputProps={{ inputProps: { min: 0, max: 20, readOnly: readonly } }}
                        fullWidth
                        value={values.diachi || ''}
                        onChange={handleInputChange}
                        {...(errors.diachi && { error: true, helperText: errors.diachi })}
                    />
                </Grid>
                {!readonly ? (
                    <Grid item xs={12}>
                        <Button fullWidth variant="contained" component="label" onClick={handleSubmit}>
                            Upload
                        </Button>
                    </Grid>
                ) : (
                    <></>
                )}
            </Grid>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Cập nhật thông tin thành công !
                </Alert>
            </Snackbar>
        </Paper>
    );
}
