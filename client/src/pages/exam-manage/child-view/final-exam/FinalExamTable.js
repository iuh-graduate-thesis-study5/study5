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
import { Link } from 'react-router-dom';
import moment from 'moment';

//Action
import { useSelector, useDispatch } from 'react-redux';
import * as actions from 'actions/exam.action';
import { useEffect } from 'react';
import { useState } from 'react';
import TableHead from '@mui/material/TableHead';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';

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

export default function FinalExamTable() {
    const dispatch = useDispatch();
    const exams = useSelector((state) => state.result.listResultByExamId);
    const [listExam, setListExam] = useState([]);

    useEffect(() => {
        if (exams) {
            const listNowExam = [];
            exams.forEach((e, i) => {
                e['stt'] = i + 1;
                listNowExam.push(e);
                //Export
            });
            setListExam(listNowExam);
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

    return (
        <TableContainer component={Paper}>
            <Table aria-label="custom pagination table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">STT</TableCell>
                        <TableCell align="left">Tên thí sinh</TableCell>
                        <TableCell align="left">Số câu đúng</TableCell>
                        <TableCell align="left">Số câu sai</TableCell>
                        <TableCell align="left">Số câu bỏ qua</TableCell>
                        <TableCell align="left">Tổng điểm</TableCell>
                        <TableCell align="center"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {(rowsPerPage > 0 ? listExam.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : listExam).map((row) => (
                        <TableRow key={row.id}>
                            <TableCell align="center"> {row?.stt}</TableCell>
                            <TableCell align="left"> {row?.dethithisinh?.taikhoan?.nguoidung?.tennguoidung}</TableCell>
                            <TableCell align="left"> {row?.socaudung}</TableCell>
                            <TableCell align="left"> {row?.socausai}</TableCell>
                            <TableCell align="left"> {row?.socauboqua}</TableCell>
                            <TableCell align="left"> {row?.tongdiem}</TableCell>

                            <TableCell align="left">{row.mota}</TableCell>
                            <TableCell align="center">
                                <Link
                                    to={'/exam/view-question/' + row.id}
                                    style={{ textDecoration: 'none', color: 'black', width: '100%' }}
                                >
                                    <IconButton aria-label="edit" size="large">
                                        <VisibilityIcon fontSize="inherit" color="primary" />
                                    </IconButton>
                                </Link>
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
    );
}
