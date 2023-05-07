import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useForm from 'services/useForm';
import Formsy from 'formsy-react';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useDispatch } from 'react-redux';
import * as actionsAccount from 'actions/account.action';
import * as action from 'actions/user.action';
import * as actionUser from 'actions/user.action';
import { Link as RouterLink } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
// material-ui
import { IconButton, InputAdornment, OutlinedInput } from '@mui/material';
import { useSelector } from 'react-redux';
// assets
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import SuccessRegister from './SuccessRegister';

const initialFieldValues = {
    tennguoidung: '',
    email: '',
    sodienthoai: '',
    diachi: '',
    gioitinh: 'Nam',
    matkhau: ''
};
export default function AuthRegister() {
    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = React.useState(false);
    const users = useSelector((state) => state.user.listUser);

    React.useEffect(() => {
        dispatch(actionUser.getAllUser());
    }, []);

    const [listUser, setListUser] = React.useState([]);

    React.useEffect(() => {
        setListUser(users);
    }, [users]);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const [open, setOpen] = React.useState(false);
    const validate = (fieldValues = values) => {
        let temp = { ...errors };

        if ('tennguoidung' in fieldValues) {
            temp.tennguoidung = fieldValues.tennguoidung ? '' : 'Tên người dùng không được để trống';
        }
        if ('email' in fieldValues) {
            let err = 0;
            listUser.map((u) => {
                if (u.email.toLowerCase() === fieldValues.email.toLowerCase()) {
                    err = err + 1;
                }
            });
            if (err >= 1) {
                err < 1 ? (temp.email = '') : (temp.email = 'Email này đã được đăng kí');
            } else if (fieldValues.ten === '') {
                temp.email = fieldValues.email ? '' : 'Email không được để trống';
            } else if (fieldValues.ten !== '') {
                temp.email = fieldValues.email ? '' : 'Email không được để trống';
            }
        }
        if ('sodienthoai' in fieldValues) {
            temp.sodienthoai = fieldValues.sodienthoai ? '' : 'Số điện thoại không được để trống';
        }
        if ('matkhau' in fieldValues) {
            temp.matkhau = fieldValues.matkhau.length > 6 ? '' : 'Mật khẩu phải từ 6 kí tự';
        }
        setErrors({
            ...temp
        });

        if (fieldValues == values) return Object.values(temp).every((x) => x == '');
    };
    const { values, setValues, errors, setErrors, handleInputChange, resetForm } = useForm(initialFieldValues, validate, 0);
    const [isRegister, setIsRegister] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleSubmit = () => {
        if (validate()) {
            action.register(values).then((rs) => {
                const account = {
                    tentaikhoan: rs.data.email,
                    matkhau: values.matkhau,
                    quyen: 'STUDENT',
                    trangthai: 2,
                    id_nguoidung: rs.data.id
                };
                dispatch(actionsAccount.register(account));
                resetForm();
                setIsRegister(true);
            });
        }
    };
    return (
        <div style={{ margin: '1rem 0' }}>
            {isRegister ? (
                <SuccessRegister />
            ) : (
                <Formsy onSubmit={handleSubmit} style={{ margin: '1rem 0' }}>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <span>
                                Tên người dùng <span style={{ color: 'red' }}>*</span>
                            </span>
                            <TextField
                                id="tennguoidung"
                                variant="outlined"
                                name="tennguoidung"
                                type="text"
                                autoComplete="off"
                                InputProps={{ inputProps: { min: 0, max: 20 } }}
                                fullWidth
                                value={values.tennguoidung || ''}
                                onChange={handleInputChange}
                                {...(errors.tennguoidung && { error: true, helperText: errors.tennguoidung })}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <span>
                                Email <span style={{ color: 'red' }}>*</span>
                            </span>
                            <TextField
                                id="email"
                                variant="outlined"
                                name="email"
                                type="email"
                                autoComplete="off"
                                InputProps={{ inputProps: { min: 0, max: 20 } }}
                                fullWidth
                                value={values.email || ''}
                                onChange={handleInputChange}
                                {...(errors.email && { error: true, helperText: errors.email })}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <span>
                                Số điện thoại <span style={{ color: 'red' }}>*</span>
                            </span>
                            <TextField
                                id="sodienthoai"
                                variant="outlined"
                                name="sodienthoai"
                                type="text"
                                autoComplete="off"
                                InputProps={{ inputProps: { min: 0, max: 20 } }}
                                fullWidth
                                value={values.sodienthoai || ''}
                                onChange={handleInputChange}
                                {...(errors.sodienthoai && { error: true, helperText: errors.sodienthoai })}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <span>
                                Mật khẩu <span style={{ color: 'red' }}>*</span>
                            </span>
                            <TextField
                                fullWidth
                                type={showPassword ? 'text' : 'password'}
                                name="matkhau"
                                value={values.matkhau}
                                onChange={handleInputChange}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                                size="large"
                                            >
                                                {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                                {...(errors.matkhau && { error: true, helperText: errors.matkhau })}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <span>
                                Giới tính <span style={{ color: 'red' }}>*</span>
                            </span>
                            <Select
                                id="gioitinh"
                                name="gioitinh"
                                fullWidth
                                labelId="demo-simple-select-label"
                                value={values.gioitinh}
                                onChange={handleInputChange}
                                {...(errors.gioitinh && { error: true, helperText: errors.gioitinh })}
                            >
                                <MenuItem value={'Nam'}>Nam</MenuItem>
                                <MenuItem value={'Nữ'}>Nữ</MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs={12}>
                            <span>
                                Địa chỉ <span style={{ color: 'red' }}>*</span>
                            </span>
                            <TextField
                                id="diachi"
                                variant="outlined"
                                helperText=" "
                                name="diachi"
                                type="text"
                                autoComplete="off"
                                InputProps={{ inputProps: { min: 0, max: 20 } }}
                                fullWidth
                                value={values.diachi || ''}
                                onChange={handleInputChange}
                                {...(errors.diachi && { error: true, helperText: errors.diachi })}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        fullWidth
                        size="large"
                        variant="contained"
                        color="primary"
                        type="submit"
                        // style={{ display: displayButton }}
                    >
                        Đăng Ký
                    </Button>
                </Formsy>
            )}
        </div>
    );
}
