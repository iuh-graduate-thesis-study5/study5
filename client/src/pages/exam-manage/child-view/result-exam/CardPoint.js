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
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
export default function CardPoint({ header, color, number, icon }) {
    return (
        <Card>
            <CardContent>
                <Typography variant="h6" component="div" style={{ display: 'flex', justifyContent: 'center' }}>
                    {icon}
                </Typography>
                <Typography sx={{ mt: 1 }} variant="h5" component="div" style={{ display: 'flex', justifyContent: 'center', color: color }}>
                    {header}
                </Typography>
                <Typography sx={{ mt: 1 }} variant="h3" component="div" style={{ display: 'flex', justifyContent: 'center' }}>
                    {number}
                </Typography>
                <Typography sx={{ mt: 1 }} variant="h6" component="div" style={{ display: 'flex', justifyContent: 'center' }}>
                    Câu hỏi
                </Typography>
            </CardContent>
            <CardActions></CardActions>
        </Card>
    );
}
