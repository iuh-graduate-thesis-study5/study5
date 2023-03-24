import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Grid from '@mui/material/Grid';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
//Action
import { useSelector, useDispatch } from 'react-redux';
import * as actions from 'actions/user.action';
import { useEffect } from 'react';
import { useState } from 'react';
import TableHead from '@mui/material/TableHead';

function TablePaginationActions(props) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;

    const handleFirstPageButtonClick = (event) => {
        onPageChange(event, 0);
    };

    const handleBackButtonClick = (event) => {
        onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event) => {
        onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (event) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <Box sx={{ flexShrink: 0, ml: 2.5 }}>
            <IconButton onClick={handleFirstPageButtonClick} disabled={page === 0} aria-label="first page">
                {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton onClick={handleNextButtonClick} disabled={page >= Math.ceil(count / rowsPerPage) - 1} aria-label="next page">
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton onClick={handleLastPageButtonClick} disabled={page >= Math.ceil(count / rowsPerPage) - 1} aria-label="last page">
                {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
        </Box>
    );
}

TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired
};

export default function TableUserManager() {
    const [open, setOpen] = React.useState(false);
    const [detailUser, setDetailUser] = React.useState({});
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.getAllUser());
    }, []);

    const handleClickOpen = (detail) => {
        setDetailUser(detail);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const users = useSelector((state) => state.user.listUser);
    const [listUser, setListUser] = useState([]);
    useEffect(() => {
        setListUser(users);
    }, [users]);

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(6);

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - listUser.length) : 0;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Tài khoản</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Giới tính</TableCell>
                            <TableCell align="right">Số điện thoại</TableCell>
                            <TableCell align="right">Địa chỉ</TableCell>
                            <TableCell align="center">Tạo tài khoản</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {(rowsPerPage > 0 ? listUser.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : listUser).map((row) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.tennguoidung}
                                </TableCell>
                                <TableCell style={{ width: 160 }} align="right">
                                    {row.email}
                                </TableCell>
                                <TableCell style={{ width: 160 }} align="right">
                                    {row.gioitinh}
                                </TableCell>
                                <TableCell style={{ width: 160 }} align="right">
                                    {row.sodienthoai}
                                </TableCell>
                                <TableCell style={{ width: 160 }} align="right">
                                    {row.diachi}
                                </TableCell>
                                <TableCell style={{ width: 160 }} align="center">
                                    <IconButton aria-label="delete" size="large" onClick={() => handleClickOpen(row)}>
                                        <AddCircleIcon fontSize="inherit" color="primary" />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}

                        {emptyRows > 0 && (
                            <TableRow style={{ height: 53 * emptyRows }}>
                                <TableCell colSpan={6} />
                            </TableRow>
                        )}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                colSpan={6}
                                count={listUser.length}
                                labelRowsPerPage={'Số dòng trên 1 trang'}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                SelectProps={{
                                    inputProps: {
                                        'aria-label': 'Số dòng trên 1 trang'
                                    },
                                    native: true
                                }}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                                ActionsComponent={TablePaginationActions}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>
                    <b>Tạo tài khoản cho người này</b>
                </DialogTitle>
                <DialogContent>
                    <Grid container spacing={2}>
                        <Grid item xs={5}>
                            Tên tài khoản
                        </Grid>
                        <Grid item xs={5}>
                            {detailUser?.email}
                        </Grid>
                        <Grid item xs={5}>
                            Mật khẩu
                        </Grid>
                        <Grid item xs={5}>
                            12345
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} variant="contained" size="medium">
                        Tạo tài khoản
                    </Button>
                    <Button onClick={handleClose} color="error" variant="contained" size="medium">
                        Đóng
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
