import React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { Link } from 'react-router-dom';
import { Grid, Stack, Typography } from '@mui/material';

export default function SuccessRegister() {
    return (
        <div>
            <Alert severity="success">
                <AlertTitle>Thành công</AlertTitle>
                Đăng kí tài khoản thành công!
            </Alert>
            <p>Cảm ơn bạn đã đăng kí tài khoản với chúng tôi.</p>
            <p>Chúng tôi sẽ liên hệ và sớm xác nhận tài khoản của bạn để bắt đầu sử dụng dịch vụ.</p>
            <Typography component={Link} to="/login" variant="body1" sx={{ textDecoration: 'none' }} color="primary">
                Quay lại trang đăng nhập
            </Typography>
        </div>
    );
}
