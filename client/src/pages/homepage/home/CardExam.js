import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import moment from 'moment';

export default function CardExam({ result }) {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {result?.dethithisinh?.dethi?.madethi + '-' + result?.dethithisinh?.dethi?.tieude}
                </Typography>
                {!result?.dethithisinh?.dethi?.loaidethi ? (
                    <Chip
                        label="Thi trực tuyến"
                        color="primary"
                        style={{ borderRadius: 5, height: 18, padding: 0, marginBottom: 10, fontSize: 13 }}
                    />
                ) : (
                    <Chip
                        label="Thi thử"
                        color="error"
                        style={{ borderRadius: 5, height: 18, padding: 0, marginBottom: 10, fontSize: 13 }}
                    />
                )}

                <Typography variant="h5" component="div">
                    Ngày làm bài: {moment(result?.thoigiannopbai).format('DD/MM/YYYY')}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Kết quả: {result?.socaudung}/52
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Xem chi tiết</Button>
            </CardActions>
        </Card>
    );
}
