import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import PeopleIcon from '@mui/icons-material/People';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import MenuBookIcon from '@mui/icons-material/MenuBook';

export default function CardExam({ header }) {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Chip label={header} color="primary" style={{ borderRadius: 5, height: 18, padding: 0, marginBottom: 10, fontSize: 13 }} />
                <Typography sx={{ mt: 1 }} variant="h6" component="div" style={{ display: 'flex' }}>
                    <LocalLibraryIcon color="warning" />
                    &nbsp; Người tạo đề: Trần Hữu Thọ
                </Typography>
                <Typography sx={{ mt: 1 }} variant="h6" component="div" style={{ display: 'flex' }}>
                    <PeopleIcon style={{ color: '#6D214F' }} />
                    &nbsp; Lượt tham gia: 30
                </Typography>
                <Typography sx={{ mt: 1 }} variant="h6" component="div" style={{ display: 'flex' }}>
                    <MenuBookIcon style={{ color: '#3B3B98' }} />
                    &nbsp; Số lượt tham gia thi: 30
                </Typography>
            </CardContent>
            <CardActions></CardActions>
        </Card>
    );
}
