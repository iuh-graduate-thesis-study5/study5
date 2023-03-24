import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TableUserManager from './TableUserManager';
export default function AccountButtonComponent() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div style={{ margin: '1rem 0' }}>
            <Button variant="contained" size="medium" onClick={handleClickOpen}>
                Tạo tài khoản
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Chọn 1 người dùng để tạo tài khoản</DialogTitle>
                <DialogContent>
                    <TableUserManager />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="error" variant="contained" size="medium">
                        Đóng
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
