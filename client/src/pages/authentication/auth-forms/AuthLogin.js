import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
// material-ui
import {
    Button,
    Checkbox,
    Divider,
    FormControlLabel,
    FormHelperText,
    Grid,
    Link,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack,
    Typography
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';
import * as actions from 'actions/account.action';
import { useDispatch } from 'react-redux';

// project import
import FirebaseSocial from './FirebaseSocial';
import AnimateButton from 'components/@extended/AnimateButton';
import { useNavigate } from 'react-router-dom';
// assets
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

// ============================|| FIREBASE - LOGIN ||============================ //

const AuthLogin = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [checked, setChecked] = React.useState(false);
    const [showPassword, setShowPassword] = React.useState(false);
    const [password, setPassword] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [isDisplay, setIsDisplay] = React.useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const onLogin = () => {
        const account = {
            tentaikhoan: username,
            matkhau: password
        };
        actions.login(account).then((res) => {
            if (res && res.data[0]?.id && res.data[0]?.trangthai === 1) {
                const user = {
                    id: res.data[0]?.id,
                    role: res.data[0]?.quyen
                };
                dispatch(actions.isAuthenticated(res.data[0].id));
                setIsDisplay(false);
                if (res.data[0]?.quyen === 'STUDENT') navigate('/home');
                else navigate('/');
            } else {
                setIsDisplay(true);
            }
        });
    };
    return (
        <>
            {isDisplay ? (
                <Alert severity="error" style={{ padding: '0.5rem', marginBottom: '1rem' }}>
                    Tên đăng nhập hoặc mật khẩu sai — <strong>Kiểm tra lại!</strong>
                </Alert>
            ) : (
                <></>
            )}

            <Formik>
                <form noValidate>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Stack spacing={1}>
                                <InputLabel htmlFor="email-login">Tên đăng nhập</InputLabel>
                                <OutlinedInput
                                    id="email-login"
                                    type="text"
                                    name="email"
                                    onChange={(event) => setUsername(event.target.value)}
                                    placeholder="Nhập tài khoản"
                                    fullWidth
                                />
                            </Stack>
                        </Grid>
                        <Grid item xs={12}>
                            <Stack spacing={1}>
                                <InputLabel htmlFor="password-login">Mật khẩu</InputLabel>
                                <OutlinedInput
                                    fullWidth
                                    id="-password-login"
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    onChange={(event) => setPassword(event.target.value)}
                                    endAdornment={
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
                                    }
                                    placeholder="Nhập mật khẩu"
                                />
                            </Stack>
                        </Grid>

                        <Grid item xs={12}>
                            <AnimateButton>
                                <Button
                                    onClick={onLogin}
                                    disableElevation
                                    fullWidth
                                    size="large"
                                    type="button"
                                    variant="contained"
                                    color="primary"
                                >
                                    Đăng nhập
                                </Button>
                            </AnimateButton>
                        </Grid>
                    </Grid>
                </form>
            </Formik>
        </>
    );
};

export default AuthLogin;
