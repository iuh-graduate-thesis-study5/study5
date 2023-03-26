import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { Link } from 'react-router-dom';

export default function CardExamIncoming() {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    ETS TOEIC 2022 Test 3
                </Typography>
                <Chip
                    label="Thi trực tuyến"
                    color="primary"
                    style={{ borderRadius: 5, height: 18, padding: 0, marginBottom: 10, fontSize: 13 }}
                />

                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Giờ mở thi: 1:00AM 27/03/2023
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Giáo viên: Ms Nguyễn Thị Sơn Tùng
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Sỉ số phòng thi: 30
                </Typography>
            </CardContent>
            <CardActions style={{ display: 'flex', justifyContent: 'center' }}>
                <Link to={'/home/room'} style={{ textDecoration: 'none', color: 'black', width: '100%' }}>
                    <Button variant="outlined" size="small" fullWidth>
                        Vào phòng thi
                    </Button>
                </Link>
            </CardActions>
        </Card>
    );
}
