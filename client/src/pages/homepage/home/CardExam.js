import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

export default function CardExam() {
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

                <Typography variant="h5" component="div">
                    Ngày làm bài: 26/03/2023
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Kết quả: 100/100
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Xem chi tiết</Button>
            </CardActions>
        </Card>
    );
}
