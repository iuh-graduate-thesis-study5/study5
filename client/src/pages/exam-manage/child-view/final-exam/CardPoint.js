import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import LoopIcon from '@mui/icons-material/Loop';
export default function CardPoint({ header, max, min, avg }) {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Chip label={header} color="error" style={{ borderRadius: 5, height: 18, padding: 0, marginBottom: 10, fontSize: 13 }} />

                <Typography sx={{ mt: 1 }} variant="h6" component="div" style={{ display: 'flex' }}>
                    <TrendingUpIcon color="success" />
                    &nbsp; Điểm cao nhất: {max}
                </Typography>
                <Typography sx={{ mt: 1 }} variant="h6" component="div" style={{ display: 'flex' }}>
                    <TrendingDownIcon color="error" />
                    &nbsp; Điểm thấp nhất: {min}
                </Typography>
                <Typography sx={{ mt: 1 }} variant="h6" component="div" style={{ display: 'flex' }}>
                    <LoopIcon color="primary" />
                    &nbsp; Điểm trung bình: {avg}
                </Typography>
            </CardContent>
            <CardActions></CardActions>
        </Card>
    );
}
