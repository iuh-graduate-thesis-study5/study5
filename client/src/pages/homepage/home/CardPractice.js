import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

export default function CardPractice({ listTestExam }) {
    return (
        <Card sx={{ minWidth: 275 }} style={{ backgroundColor: '#F8F9FA' }}>
            <CardContent style={{ paddingBottom: 0 }}>
                <Typography sx={{ fontSize: 14, textTransform: 'uppercase' }} gutterBottom>
                    {listTestExam?.tieude}
                </Typography>
                <Chip label="#Toeic" color="warning" style={{ borderRadius: 5, height: 18, padding: 0, marginBottom: 10, fontSize: 13 }} />
                <Chip
                    label={'Mã đề ' + listTestExam?.madethi}
                    color="success"
                    style={{ borderRadius: 5, height: 18, padding: 0, marginBottom: 10, fontSize: 13 }}
                />
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Thời gian: 60 phút
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    7 phần thi | 52 câu hỏi
                </Typography>
            </CardContent>
            <CardActions style={{ display: 'flex', justifyContent: 'center' }}>
                <Button variant="outlined" size="small" fullWidth>
                    Chi tiết
                </Button>
            </CardActions>
        </Card>
    );
}
