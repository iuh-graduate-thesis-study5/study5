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
import EditIcon from '@mui/icons-material/Edit';
import Chip from '@mui/material/Chip';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import SearchIcon from '@mui/icons-material/Search';
import { TextField, InputAdornment } from '@mui/material';
//Action
import { useSelector, useDispatch } from 'react-redux';
import * as actions from 'actions/account.action';
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

function createData(name, calories, fat) {
    return { name, calories, fat };
}

const rows = [
    createData('Cupcake', 305, 3.7),
    createData('Donut', 452, 25.0),
    createData('Eclair', 262, 16.0),
    createData('Frozen yoghurt', 159, 6.0),
    createData('Gingerbread', 356, 16.0),
    createData('Honeycomb', 408, 3.2),
    createData('Ice cream sandwich', 237, 9.0),
    createData('Jelly Bean', 375, 0.0),
    createData('KitKat', 518, 26.0),
    createData('Lollipop', 392, 0.2),
    createData('Marshmallow', 318, 0),
    createData('Nougat', 360, 19.0),
    createData('Oreo', 437, 18.0)
].sort((a, b) => (a.calories < b.calories ? -1 : 1));

export default function AccountTable({ isAction }) {
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const [listAccount, setListAccount] = useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [detailAccount, setDetailAccount] = React.useState({});
    const [role, setRole] = React.useState('STUDENT');
    const [status, setStatus] = React.useState(0);
    const [count, setCount] = React.useState([0, 0, 0]);
    const account = useSelector((state) => state.account.listAccount);

    useEffect(() => {
        dispatch(actions.test());
    }, []);

    useEffect(() => {
        if (account) {
            const listAcc = [];
            let teacher = 0;
            let admin = 0;
            let student = 0;
            account.forEach((e) => {
                if (e.trangthai != 2) {
                    listAcc.push(e);
                }
                if (e.quyen === 'TEACHER') {
                    teacher += 1;
                } else if (e.quyen === 'STUDENT') {
                    student += 1;
                } else {
                    admin += 1;
                }
            });
            setCount([admin, teacher, student]);
            setListAccount(listAcc);
        }
    }, [account]);

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - listAccount.length) : 0;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleClickOpen = (account) => {
        setDetailAccount(account);
        setRole(account?.quyen);
        setStatus(account?.trangthai);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleChangeRole = (event) => {
        setRole(event.target.value);
    };
    const handleChangeStatus = (event) => {
        setStatus(event.target.value);
    };
    const updateAccount = () => {
        const account_update = {
            trangthai: status,
            quyen: role
        };
        dispatch(actions.updateAccount(account_update, detailAccount?.id));
    };
    const onFind = (e) => {
        if (account) {
            let rl = account.filter((fb) => fb.tentaikhoan.toLowerCase().includes(e.target.value.toLowerCase()) && fb.trangthai != 2);
            setListAccount(rl);
        }
    };
    return (
        <>
            {!isAction ? (
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%',
                        textAlign: 'right',
                        marginBottom: 10
                    }}
                >
                    <div
                        style={{
                            display: 'flex'
                        }}
                    >
                        <div
                            style={{ width: 20, height: 20, marginRight: 5, backgroundColor: '#FAAD14', border: '1px solid #c3c3c3' }}
                        ></div>{' '}
                        <b>Admin: {count[0]}</b>
                        <div
                            style={{
                                width: 20,
                                height: 20,
                                marginLeft: 30,
                                marginRight: 5,
                                backgroundColor: '#1890FF',
                                border: '1px solid #c3c3c3'
                            }}
                        ></div>{' '}
                        <b>Giáo viên: {count[1]}</b>
                        <div
                            style={{
                                width: 20,
                                height: 20,
                                marginLeft: 30,
                                marginRight: 5,
                                backgroundColor: '#13C2C2',
                                border: '1px solid #c3c3c3'
                            }}
                        ></div>{' '}
                        <b>Học sinh: {count[2]}</b>
                    </div>
                    <div>
                        <TextField
                            style={{ width: 300 }}
                            size="small"
                            type={'text'}
                            name="matkhau"
                            placeholder="Nhập tên tài khoản cần tìm"
                            onChange={onFind}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton aria-label="toggle password visibility" edge="end" size="large">
                                            <SearchIcon />
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />
                    </div>
                </div>
            ) : (
                <></>
            )}

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Tài khoản</TableCell>
                            <TableCell align="center">Quyền</TableCell>
                            <TableCell align="center">Trạng thái</TableCell>
                            {!isAction ? <TableCell></TableCell> : <></>}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {(rowsPerPage > 0 ? listAccount.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : listAccount).map(
                            (row) => (
                                <TableRow key={row.id}>
                                    <TableCell component="th" scope="row">
                                        {row.tentaikhoan}
                                    </TableCell>
                                    <TableCell style={{ width: 160 }} align="center">
                                        {row.quyen === 'ADMIN' ? (
                                            <Chip label={row.quyen} color="warning" style={{ borderRadius: 30 }} />
                                        ) : row.quyen === 'TEACHER' ? (
                                            <Chip label={row.quyen} color="primary" style={{ borderRadius: 30 }} />
                                        ) : (
                                            <Chip label={row.quyen} color="info" style={{ borderRadius: 30 }} />
                                        )}
                                    </TableCell>
                                    <TableCell style={{ width: 160 }} align="center">
                                        {row.trangthai ? (
                                            <Chip label="Hoạt động" color="success" style={{ borderRadius: 30 }} />
                                        ) : (
                                            <Chip label="Bị khóa" color="error" style={{ borderRadius: 30 }} />
                                        )}
                                    </TableCell>
                                    {!isAction ? (
                                        <TableCell style={{ width: 160 }} align="center">
                                            <IconButton aria-label="delete" size="large" onClick={() => handleClickOpen(row)}>
                                                <EditIcon fontSize="inherit" color="primary" />
                                            </IconButton>
                                        </TableCell>
                                    ) : (
                                        <></>
                                    )}
                                </TableRow>
                            )
                        )}
                        {listAccount.length === 0 ? (
                            <TableRow style={{ height: 53 * emptyRows }}>
                                <TableCell colSpan={6} style={{ textAlign: 'center' }}>
                                    <h4>Không tìm thấy tài khoản nào !!!</h4>
                                </TableCell>
                            </TableRow>
                        ) : (
                            <></>
                        )}
                        {emptyRows > 0 && (
                            <TableRow style={{ height: 53 * emptyRows }}>
                                <TableCell colSpan={6} />
                            </TableRow>
                        )}
                    </TableBody>
                    {!isAction ? (
                        <TableFooter>
                            <TablePagination
                                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                colSpan={5}
                                count={rows.length}
                                labelRowsPerPage={'Số dòng trên 1 trang'}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                SelectProps={{
                                    inputProps: {
                                        'aria-label': 'rows per page'
                                    },
                                    native: true
                                }}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                                ActionsComponent={TablePaginationActions}
                            />
                        </TableFooter>
                    ) : (
                        <></>
                    )}
                </Table>
            </TableContainer>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>
                    <h4>Thông tin tài khoản</h4>
                </DialogTitle>
                <DialogContent>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <b>Tên tài khoản</b>
                        </Grid>
                        <Grid item xs={8}>
                            {detailAccount?.tentaikhoan}
                        </Grid>
                        <Grid item xs={4}>
                            <b>Quyền</b>
                        </Grid>
                        <Grid item xs={8} fullWidth>
                            <Select
                                fullWidth
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={role}
                                onChange={handleChangeRole}
                            >
                                <MenuItem value={'STUDENT'}>STUDENT</MenuItem>
                                <MenuItem value={'TEACHER'}>TEACHER</MenuItem>
                                <MenuItem value={'ADMIN'}>ADMIN</MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs={4}>
                            <b>Trạng thái hoạt động</b>
                        </Grid>
                        <Grid item xs={8} fullWidth>
                            <Select
                                fullWidth
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={status}
                                onChange={handleChangeStatus}
                            >
                                <MenuItem value={0}>Bị khóa</MenuItem>
                                <MenuItem value={1}>Hoạt động</MenuItem>
                            </Select>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={updateAccount} color="primary" variant="contained" size="medium">
                        Cập nhật
                    </Button>
                    <Button onClick={handleClose} color="error" variant="contained" size="medium">
                        Đóng
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
