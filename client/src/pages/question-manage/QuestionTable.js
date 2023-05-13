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
import DeleteIcon from '@mui/icons-material/Delete';
import moment from 'moment';
import Part1 from './Part1/index';
import Part2 from './Part2/index';
import Part3 from './Part3/index';
import Part4 from './Part4/index';
import Part5 from './Part5/index';
import Part6 from './Part6/index';
import Part7 from './Part7/index';
import Alert from '@mui/material/Alert';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
//Action
import { useSelector, useDispatch } from 'react-redux';
import * as actions from 'actions/groupquestion.action';
import { useEffect } from 'react';
import { useState } from 'react';
import TableHead from '@mui/material/TableHead';
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

function createData(name, calories, fat) {
    return { name, calories, fat };
}

export default function QuestionTable() {
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const [listGroupQuestion, setListGroupQuestion] = useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [detailGroupQuestion, setDetailGroupQuestion] = React.useState({});
    const [role, setRole] = React.useState('STUDENT');
    const [status, setStatus] = React.useState(0);

    const group_question = useSelector((state) => state.gquestion.listGroupQuestion);
    useEffect(() => {
        dispatch(actions.getAllGroupQuestion());
    }, []);

    useEffect(() => {
        setListGroupQuestion(group_question);
    }, [group_question]);

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - listGroupQuestion.length) : 0;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleClickOpen = (group_question) => {
        setDetailGroupQuestion(group_question);
        setRole(group_question?.quyen);
        setStatus(group_question?.trangthai);
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
    const updateGroupQuestion = () => {
        const group_question_update = {
            trangthai: status,
            quyen: role
        };
        // dispatch(actions.updateGroupQuestion(group_question_update, detailGroupQuestion?.id));
    };
    // const onFind = (e) => {
    //     if (listGroupQuestion) {
    //         let rl = listGroupQuestion.filter((fb) => fb.tentaikhoan.toLowerCase().includes(e.target.value.toLowerCase()));
    //         setListGroupQuestion(rl);
    //     }
    // };
    const [openDelete, setOpenDelete] = React.useState(false);
    const [questionId, setQuestionId] = React.useState({});
    const handleClickOpenDelete = (id) => {
        setQuestionId(id);
        setOpenDelete(true);
    };

    const handleCloseDelete = () => {
        setOpenDelete(false);
    };
    const deleteQuestion = () => {
        dispatch(actions.deleteQuestion({ trangthai: 0 }, questionId));
        handleCloseDelete();
    };
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Nội dung câu hỏi</TableCell>
                            <TableCell align="center">Phần thi</TableCell>
                            <TableCell align="center">Người tạo</TableCell>
                            <TableCell align="center">Ngày tạo</TableCell>
                            <TableCell>Hành động</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {(rowsPerPage > 0
                            ? listGroupQuestion.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            : listGroupQuestion
                        ).map((row, i) => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row" style={{ paddingLeft: 30 }}>
                                    {[1, 2, 3, 4].includes(row.phancauhoi) ? (
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <CheckCircleOutlineIcon color="success" />
                                            &nbsp; Đây là phần nghe nội dung bao gồm các hình ảnh và audio!
                                        </div>
                                    ) : (
                                        <span>{row.noidungcauhoi}</span>
                                    )}
                                </TableCell>
                                <TableCell style={{ width: 160 }} align="center">
                                    {row.phancauhoi === 1 ? (
                                        <Chip label={'Part ' + row.phancauhoi} color="primary" style={{ borderRadius: 30 }} />
                                    ) : row.phancauhoi === 2 ? (
                                        <Chip
                                            label={'Part ' + row.phancauhoi}
                                            color="secondary"
                                            style={{ borderRadius: 30, background: '#70286f', color: '#ffffff' }}
                                        />
                                    ) : row.phancauhoi === 3 ? (
                                        <Chip label={'Part ' + row.phancauhoi} color="error" style={{ borderRadius: 30 }} />
                                    ) : row.phancauhoi === 4 ? (
                                        <Chip label={'Part ' + row.phancauhoi} color="warning" style={{ borderRadius: 30 }} />
                                    ) : row.phancauhoi === 5 ? (
                                        <Chip label={'Part ' + row.phancauhoi} color="info" style={{ borderRadius: 30 }} />
                                    ) : row.phancauhoi === 6 ? (
                                        <Chip label={'Part ' + row.phancauhoi} color="success" style={{ borderRadius: 30 }} />
                                    ) : (
                                        <Chip
                                            label={'Part ' + row.phancauhoi}
                                            style={{ borderRadius: 30, background: '#050505', color: '#ffffff' }}
                                        />
                                    )}
                                </TableCell>
                                <TableCell style={{ width: 160 }} align="center">
                                    Admin
                                </TableCell>
                                <TableCell style={{ width: 160 }} align="center">
                                    {moment(row).format('DD/MM/YYYY')}
                                </TableCell>
                                <TableCell style={{ width: 160 }} align="center">
                                    <IconButton aria-label="delete" size="large" onClick={() => handleClickOpen(row)}>
                                        <VisibilityIcon fontSize="inherit" color="primary" />
                                    </IconButton>
                                    <IconButton aria-label="delete" size="large" onClick={() => handleClickOpenDelete(row.id)}>
                                        <DeleteIcon fontSize="inherit" color="error" />
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
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                            colSpan={5}
                            count={listGroupQuestion.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            labelRowsPerPage={'Số dòng trên 1 trang'}
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
                </Table>
            </TableContainer>
            <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth={'md'}>
                <DialogTitle>
                    <span style={{ fontSize: 13, fontWeight: 'bold' }}>CHI TIẾT CÂU HỎI</span>
                </DialogTitle>
                <DialogContent>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            {detailGroupQuestion?.phancauhoi === 1 ? (
                                <Part1 detailGroupQuestion={detailGroupQuestion} />
                            ) : detailGroupQuestion?.phancauhoi === 2 ? (
                                <Part2 detailGroupQuestion={detailGroupQuestion} />
                            ) : detailGroupQuestion?.phancauhoi === 3 ? (
                                <Part3 detailGroupQuestion={detailGroupQuestion} />
                            ) : detailGroupQuestion?.phancauhoi === 4 ? (
                                <Part4 detailGroupQuestion={detailGroupQuestion} />
                            ) : detailGroupQuestion?.phancauhoi === 5 ? (
                                <Part5 detailGroupQuestion={detailGroupQuestion} />
                            ) : detailGroupQuestion?.phancauhoi === 6 ? (
                                <Part6 detailGroupQuestion={detailGroupQuestion} />
                            ) : (
                                <Part7 detailGroupQuestion={detailGroupQuestion} />
                            )}
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="error" variant="contained" size="medium">
                        Đóng
                    </Button>
                </DialogActions>
            </Dialog>
            <Dialog
                fullWidth={true}
                maxWidth={'xs'}
                open={openDelete}
                onClose={handleCloseDelete}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{'Hành động này sẽ xóa vĩnh viên câu hỏi'}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">Bạn có chắc xóa câu hỏi này ?</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant="outlined" onClick={deleteQuestion} color="error">
                        Xóa
                    </Button>
                    <Button variant="outlined" onClick={handleCloseDelete}>
                        Hủy
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
