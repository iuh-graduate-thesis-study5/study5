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

//Action
import { useSelector, useDispatch } from 'react-redux';
import * as actions from 'actions/user.action';
import { useEffect } from 'react';
import { useState } from 'react';
import TableHead from '@mui/material/TableHead';
import SearchIcon from '@mui/icons-material/Search';
import { TextField, InputAdornment } from '@mui/material';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useForm from 'services/useForm';
import Formsy from 'formsy-react';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const initialFieldValues = {
    tennguoidung: '',
    email: '',
    sodienthoai: '',
    diachi: '',
    gioitinh: 'Nam'
};
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

export default function UserTable() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.getAllUser());
    }, []);

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
    const onFind = (e) => {
        if (users) {
            let rl = users.filter(
                (fb) =>
                    fb.tennguoidung.toLowerCase().includes(e.target.value.toLowerCase()) ||
                    fb.email.toLowerCase().includes(e.target.value.toLowerCase()) ||
                    fb.sodienthoai.toLowerCase().includes(e.target.value.toLowerCase())
            );
            setListUser(rl);
        }
    };

    //Edit

    const [open, setOpen] = React.useState(false);
    const validate = (fieldValues = values) => {
        let temp = { ...errors };

        if ('tennguoidung' in fieldValues) {
            temp.tennguoidung = fieldValues.tennguoidung ? '' : 'Tên người dùng không được để trống';
        }

        if ('sodienthoai' in fieldValues) {
            temp.sodienthoai = fieldValues.sodienthoai ? '' : 'Số điện thoại không được để trống';
        }

        setErrors({
            ...temp
        });

        if (fieldValues == values) return Object.values(temp).every((x) => x == '');
    };
    const { values, setValues, errors, setErrors, handleInputChange, resetForm } = useForm(initialFieldValues, validate, 0);
    const handleClickOpen = (elm) => {
        setValues(elm);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = () => {
        if (validate()) {
            dispatch(actions.updateUser(values, values.id));
            handleClose();
        }
    };

    return (
        <>
            <div style={{ width: '100%', textAlign: 'right', marginBottom: 10 }}>
                <TextField
                    style={{ width: 400 }}
                    size="small"
                    type={'text'}
                    name="matkhau"
                    placeholder="Nhập tên người dùng, emai hoặc số điện thoại cần tìm"
                    // value={values.matkhau}
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
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Tên người dùng</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Giới tính</TableCell>
                            <TableCell align="right">Số điện thoại</TableCell>
                            <TableCell align="right">Địa chỉ</TableCell>
                            <TableCell align="center">Hành động</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {(rowsPerPage > 0 ? listUser.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : listUser).map((row) => (
                            <TableRow key={row.id}>
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
                                    <IconButton aria-label="edit" size="large" onClick={() => handleClickOpen(row)}>
                                        <EditIcon fontSize="inherit" color="primary" />
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
                                rowsPerPageOptions={[6, 10, 25, { label: 'All', value: -1 }]}
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
            <Dialog open={open} onClose={handleClose} fullWidth={'xs'}>
                <DialogTitle>
                    <b>THÔNG TIN NGƯỜI DÙNG</b>
                </DialogTitle>
                <DialogContent>
                    <Formsy onSubmit={handleSubmit} style={{ margin: '1rem 0' }}>
                        <Grid container spacing={3}>
                            <Grid item xs={6}>
                                <TextField
                                    id="tennguoidung"
                                    label="Tên người dùng *"
                                    variant="outlined"
                                    name="tennguoidung"
                                    type="text"
                                    autoComplete="off"
                                    InputProps={{ inputProps: { min: 0, max: 20 } }}
                                    fullWidth
                                    value={values.tennguoidung || ''}
                                    onChange={handleInputChange}
                                    {...(errors.tennguoidung && { error: true, helperText: errors.tennguoidung })}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    id="email"
                                    label="Email *"
                                    variant="outlined"
                                    name="email"
                                    type="email"
                                    autoComplete="off"
                                    InputProps={{ inputProps: { min: 0, max: 20, disabled: true } }}
                                    fullWidth
                                    value={values.email || ''}
                                    onChange={handleInputChange}
                                    {...(errors.email && { error: true, helperText: errors.email })}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    id="sodienthoai"
                                    label="Số điện thoại"
                                    variant="outlined"
                                    name="sodienthoai"
                                    type="text"
                                    autoComplete="off"
                                    InputProps={{ inputProps: { min: 0, max: 20 } }}
                                    fullWidth
                                    value={values.sodienthoai || ''}
                                    onChange={handleInputChange}
                                    {...(errors.sodienthoai && { error: true, helperText: errors.sodienthoai })}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Select
                                    id="gioitinh"
                                    name="gioitinh"
                                    fullWidth
                                    labelId="demo-simple-select-label"
                                    value={values.gioitinh}
                                    onChange={handleInputChange}
                                >
                                    <MenuItem value={'Nam'}>Nam</MenuItem>
                                    <MenuItem value={'Nữ'}>Nữ</MenuItem>
                                </Select>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="diachi"
                                    label="Địa chỉ"
                                    variant="outlined"
                                    name="diachi"
                                    type="text"
                                    autoComplete="off"
                                    InputProps={{ inputProps: { min: 0, max: 20 } }}
                                    fullWidth
                                    value={values.diachi || ''}
                                    onChange={handleInputChange}
                                    {...(errors.diachi && { error: true, helperText: errors.diachi })}
                                />
                            </Grid>
                            <Grid item xs={12}></Grid>
                        </Grid>
                    </Formsy>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" color="primary" type="submit" onClick={handleSubmit}>
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
