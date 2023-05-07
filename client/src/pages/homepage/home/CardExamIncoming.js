import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import moment from 'moment';
import Timer from './Timer';
import { Link } from 'react-router-dom';

export default function CardExamIncoming({ listExam }) {
    const [open, setOpen] = React.useState(false);
    const [timer, setTimer] = React.useState('2023-04-23 12:50:28');
    const handleClickOpen = (time) => {
        setTimer(time);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            {listExam?.map((ls, i) => (
                <Grid item xs={3} key={i}>
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
                                Giờ mở thi: {moment(ls?.thoigianthi).format('hh:mm - DD/MM/YYYY')}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Giáo viên: {ls?.taikhoan?.tentaikhoan}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Sỉ số phòng thi: {ls?.dethithisinhs?.length}
                            </Typography>
                        </CardContent>
                        <CardActions style={{ display: 'flex', justifyContent: 'center' }}>
                            {ls.trangThai === 0 ? (
                                <Button variant="outlined" size="small" fullWidth onClick={() => handleClickOpen(ls.thoigianthi)}>
                                    Chưa mở thi
                                </Button>
                            ) : (
                                <Link to={'/home/room/' + ls?.id} style={{ textDecoration: 'none', color: 'black', width: '100%' }}>
                                    <Button variant="outlined" size="small" fullWidth>
                                        Vào phòng thi
                                    </Button>
                                </Link>
                            )}
                        </CardActions>
                    </Card>
                </Grid>
            ))}
            <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth={'xs'}>
                <DialogTitle id="alert-dialog-title">
                    <b>CHƯA MỞ THI</b>
                </DialogTitle>
                <DialogContent>
                    <Alert severity="warning">
                        <AlertTitle>Chú ý</AlertTitle>
                        Hệ thống xác nhận chưa tới giờ thi. Quay lại sau —{' '}
                        <strong>
                            <Timer beginTime={timer} />
                        </strong>
                    </Alert>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Đã rõ</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
