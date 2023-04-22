import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import moment from 'moment';

import { Link } from 'react-router-dom';

export default function CardExamIncoming({ listExam }) {
    return (
        <>
            {listExam?.map((ls) => (
                <Grid item xs={3}>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14, textTransform: 'uppercase' }} color="text.secondary" gutterBottom>
                                {ls?.tieude}
                            </Typography>
                            <Chip
                                label="Thi trực tuyến"
                                color="primary"
                                style={{ borderRadius: 5, height: 18, padding: 0, marginBottom: 10, fontSize: 13 }}
                            />

                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Giờ mở thi: {moment(ls?.thoigianthi).format('hh:mm - MM/DD/YYYY')}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Giáo viên: {ls?.taikhoan?.tentaikhoan}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Sỉ số phòng thi: {ls?.dethithisinhs?.length}
                            </Typography>
                        </CardContent>
                        <CardActions style={{ display: 'flex', justifyContent: 'center' }}>
                            <Link to={'/home/room/' + ls?.id} style={{ textDecoration: 'none', color: 'black', width: '100%' }}>
                                <Button variant="outlined" size="small" fullWidth>
                                    Vào phòng thi
                                </Button>
                            </Link>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </>
    );
}
