import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import CheckIcon from '@mui/icons-material/Check';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
import PersonIcon from '@mui/icons-material/Person';
export default function CardExam({ header }) {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Chip label={header} color="warning" style={{ borderRadius: 5, height: 18, padding: 1, marginBottom: 10, fontSize: 13 }} />
                <Typography sx={{ mt: 1.2 }} variant="h6" component="div" style={{ display: 'flex' }}>
                    <PersonIcon color="primary" />
                    &nbsp; Người thi: Trần Hữu Thọ
                </Typography>
                <Typography sx={{ mt: 1 }} variant="h6" component="div" style={{ display: 'flex' }}>
                    <CheckIcon color="success" />
                    &nbsp; Kết quả làm bài: 30
                </Typography>
                <Typography sx={{ mt: 1 }} variant="h6" component="div" style={{ display: 'flex' }}>
                    <CrisisAlertIcon style={{ color: '#3B3B98' }} />
                    &nbsp; Độ chính xác: 30%
                </Typography>
            </CardContent>
            <CardActions></CardActions>
        </Card>
    );
}
