import React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { Link } from 'react-router-dom';
import { Grid, Stack, Typography } from '@mui/material';

export default function UnAcceptRegister() {
    return (
        <div>
            <Alert severity="warning">
                <AlertTitle>Ops!!!</AlertTitle>
                Tài khoản này vẫn chưa được xác nhận!
            </Alert>
            <p>Chúng tôi đang trong thời gian xác nhận tài khoản này vui lòng chờ từ phía quản lý trang web.</p>
            <p>
                Liên hệ chúng tôi thông qua Hotline: 0123456789. Hoặc email <a href="mailto:study5@gmail.com">study5@gmail.com</a>
            </p>
        </div>
    );
}
