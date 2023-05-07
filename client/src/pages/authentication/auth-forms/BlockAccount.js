import React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { Link } from 'react-router-dom';
import { Grid, Stack, Typography } from '@mui/material';

export default function BlockAccount() {
    return (
        <div>
            <Alert severity="error">
                <AlertTitle>Ops!!!</AlertTitle>
                Tài khoản này đã bị khóa có thể vì vi phạm điều khoản của chúng tôi!
            </Alert>
            <p>
                {' '}
                Bất kỳ thắc mắc liên hệ chúng tôi thông qua Hotline: 0123456789. Hoặc email{' '}
                <a href="mailto:study5@gmail.com">study5@gmail.com</a>
            </p>
        </div>
    );
}
