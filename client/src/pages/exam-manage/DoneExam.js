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
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
//Action
import { useSelector, useDispatch } from 'react-redux';
import * as actions from 'actions/exam.action';
import { useEffect } from 'react';
import { useState } from 'react';
import TableHead from '@mui/material/TableHead';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';
import SearchIcon from '@mui/icons-material/Search';
import { TextField, InputAdornment } from '@mui/material';

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

export default function DoneExam() {
    const dispatch = useDispatch();
    const [value, setValue] = React.useState(dayjs(Date.now()));
    const exams = useSelector((state) => state.exam.listExam);
    const [listExam, setListExam] = useState([]);
    useEffect(() => {
        dispatch(actions.getAllExam());
    }, []);
    useEffect(() => {
        if (exams) {
            if (exams) {
                const listNowExam = [];
                exams.forEach((e) => {
                    var date = Date.now();
                    const newDateObj = moment(e.thoigianthi).add(60, 'm').toDate();
                    if (moment(date).isAfter(newDateObj)) {
                        listNowExam.push(e);
                    }
                    setListExam(listNowExam);
                });
            }
        }
    }, [exams]);

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(6);

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - listExam.length) : 0;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    const onFind = (event) => {
        if (exams) {
            const listNowExam = [];
            exams.forEach((e) => {
                var date = Date.now();
                const newDateObj = moment(e.thoigianthi).add(60, 'm').toDate();
                if (
                    moment(date).isAfter(newDateObj) &&
                    (e.madethi.toLowerCase().includes(event.target.value.toLowerCase()) ||
                        e.tieude.toLowerCase().includes(event.target.value.toLowerCase()))
                ) {
                    listNowExam.push(e);
                }
            });
            setListExam(listNowExam);
        }
    };
    return (
        <>
            <div
                style={{
                    width: '100%',
                    textAlign: 'right',
                    marginBottom: 10,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'right'
                }}
            >
                {/* <LocalizationProvider dateAdapter={AdapterDayjs} style={{ padding: '0 !important' }}>
                    <DemoContainer components={['DateTimePicker', 'DateTimePicker']} style={{ padding: 0 }}>
                        <DateTimePicker format="DD/MM/YYYY" value={value} onChange={(newValue) => setValue(newValue)} />
                    </DemoContainer>
                </LocalizationProvider>
                <Button variant="contained">Contained</Button> */}
                <TextField
                    style={{ width: 300, paddingTop: 8, marginLeft: 10 }}
                    size="medium"
                    type={'text'}
                    name="matkhau"
                    placeholder="Nhập mã hoặc tên đề cần tìm"
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
                <Table aria-label="custom pagination table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Mã đề thi</TableCell>
                            <TableCell align="left">Tên đề thi</TableCell>
                            <TableCell align="left">Người tạo</TableCell>
                            <TableCell align="left">Ngày tạo</TableCell>
                            <TableCell align="left">Thời gian thi</TableCell>
                            <TableCell align="left">Ghi chú</TableCell>
                            <TableCell align="center"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {(rowsPerPage > 0 ? listExam.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : listExam).map((row) => (
                            <TableRow key={row.id}>
                                <TableCell align="left"> {row?.madethi}</TableCell>
                                <TableCell align="left"> {row?.tieude}</TableCell>
                                <TableCell align="left"> {row?.taikhoan?.nguoidung?.tennguoidung}</TableCell>
                                <TableCell component="th" scope="row">
                                    {moment(row.ngaytao).format('DD/MM/YYYY')}
                                </TableCell>
                                <TableCell align="left">{moment(row.thoigianthi).format('hh:mm - DD/MM/YYYY')}</TableCell>
                                <TableCell align="left">{row.mota}</TableCell>
                                <TableCell align="center">
                                    <Link
                                        to={'/exam/view-final/' + row.id}
                                        style={{ textDecoration: 'none', color: 'black', width: '100%' }}
                                    >
                                        <IconButton aria-label="edit" size="large">
                                            <VisibilityIcon fontSize="inherit" color="primary" />
                                        </IconButton>
                                    </Link>
                                </TableCell>
                            </TableRow>
                        ))}
                        {listExam.length === 0 ? (
                            <TableRow style={{ height: 53 * emptyRows }}>
                                <TableCell colSpan={6} style={{ textAlign: 'center' }}>
                                    <h4>Không tìm thấy đề thi nào đã qua!!!</h4>
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
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                rowsPerPageOptions={[]}
                                colSpan={6}
                                count={listExam.length}
                                labelRowsPerPage={''}
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
        </>
    );
}
