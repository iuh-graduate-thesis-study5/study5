import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
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
import { useDispatch, useSelector } from 'react-redux';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import * as action from 'actions/account.action';
import UserTable from './UserTable';
import iconman from '../../assets/user/icon-man.png';
import iconwoman from '../../assets/user/icon-women.png';
import Badge from '@mui/material/Badge';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import * as examAction from 'actions/exam.action';
import { useEffect, useState } from 'react';
import moment from 'moment';
import 'css/exam.css';
import CustomizedSnackbars from 'pages/components-overview/CustomizedSnackbars';
const initialFieldValues = {
    tieude: '',
    mota: '',
    nguoidung: '',
    loaide: 0
};
export default function PopUpEdit({ open, exam, handleCloseEdit }) {
    const dispatch = useDispatch();
    const [value, setValue] = React.useState(dayjs(Date.now()));
    const users = useSelector((state) => state.account.listAccount);
    const [listUser, setListUser] = React.useState([]);
    const [listStudent, setListStudent] = React.useState([]);
    const [type, setType] = React.useState(0);
    const account = useSelector((state) => state.account.account);
    const user_id = useSelector((state) => state.account.userAuth);
    useEffect(() => {
        if (user_id) {
            dispatch(action.getAccount(user_id));
        }
    }, [user_id]);
    React.useEffect(() => {
        dispatch(action.test());
    }, []);

    const validate = (fieldValues = values) => {
        let temp = { ...errors };
        if ('tieude' in fieldValues) {
            temp.tieude = fieldValues.tieude ? '' : 'Vui lòng nhập tiêu đề';
        }
        if ('email' in fieldValues) {
            temp.email = fieldValues.email ? '' : 'Email không được để trống';
        }
        setErrors({
            ...temp
        });

        if (fieldValues == values) return Object.values(temp).every((x) => x == '');
    };
    const { values, setValues, errors, setErrors, handleInputChange, resetForm } = useForm(initialFieldValues, validate, 0);

    useEffect(() => {
        if (exam && users) {
            const value_exam = {
                tieude: exam.tieude,
                mota: exam.mota,
                nguoidung: exam?.taikhoan?.nguoidung?.tennguoidung,
                loaide: exam?.loaidethi
            };
            const listStudentActive = [];
            const listStudentId = [];
            exam?.dethithisinhs?.forEach((e) => {
                listStudentId.push(e?.taikhoan?.id);
                listStudentActive.push(e?.taikhoan);
            });
            setListUser(users.filter((e) => !listStudentId.includes(e.id)));
            setValue(dayjs(new Date(exam?.thoigianthi)));
            setValues(value_exam);
            setListStudent(listStudentActive);
        }
    }, [exam, users]);
    const handleClose = () => {
        handleCloseEdit();
        resetForm();
    };
    const handleSubmit = () => {
        if (validate()) {
            handleClose();
        }
    };
    const addStudent = (user) => {
        setListUser(listUser.filter((item) => item.id !== user.id));
        setListStudent((oldArray) => [...oldArray, user]);
    };
    const removeStudent = (user) => {
        setListStudent(listStudent.filter((item) => item.id !== user.id));
        setListUser((oldArray) => [...oldArray, user]);
    };

    const generateExam = (e) => {
        e.preventDefault();
        const listIdStudent = [];
        for (let i = 0; i < listStudent.length; i++) {
            listIdStudent.push(listStudent[i].id);
        }
        if (values.tieude.length == 0) {
            window.alert('Vui lòng nhập tiêu đề');
            return;
        }
        if (!type) {
            if (moment(value.$d).isBefore(moment(Date.now()))) {
                window.alert('Vui lòng chọn giờ thi lớn hơn hiện tại');
                return;
            }
            if (listStudent.length === 0) {
                window.alert('Vui lòng thêm thí sinh cho bài thi này');
                return;
            }
        }

        values.thoigianthi = value;
        values.loaidethi = type;
        values.listStudent = listIdStudent;
        dispatch(examAction.updateExam(values, exam?.id));
        handleOpenSnackBar();
    };
    const [openSnackbar, setOpenSnackBar] = useState(false);
    const handleOpenSnackBar = () => {
        setOpenSnackBar(true);
    };
    const handleCloseSnackBar = () => {
        setOpenSnackBar(false);
    };
    return (
        <div style={{ margin: '1rem 0' }}>
            <Dialog open={open} onClose={handleClose} maxWidth={'lg'} fullWidth={true}>
                <DialogTitle>Nhập thông tin đề thi</DialogTitle>
                <DialogContent>
                    <Formsy onSubmit={handleSubmit} style={{ margin: '1rem 0' }}>
                        <Grid container spacing={1}>
                            <Grid item xs={4}>
                                <p>Tiêu đề</p>
                                <TextField
                                    id="tieude"
                                    variant="outlined"
                                    name="tieude"
                                    type="text"
                                    autoComplete="off"
                                    InputProps={{ inputProps: { min: 0, max: 20 } }}
                                    fullWidth
                                    value={values.tieude}
                                    onChange={handleInputChange}
                                    {...(errors.tieude && { error: true, helperText: errors.tieude })}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <p>Người tạo đề</p>
                                <TextField
                                    id="tennguoidung"
                                    variant="outlined"
                                    name="tennguoidung"
                                    type="text"
                                    autoComplete="off"
                                    InputProps={{ inputProps: { min: 0, max: 100, readOnly: true } }}
                                    fullWidth
                                    value={values.nguoidung}
                                    onChange={handleInputChange}
                                    {...(errors.tennguoidung && { error: true, helperText: errors.tennguoidung })}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <p>Loại đề</p>
                                <Select
                                    id="loaide"
                                    name="loaide"
                                    fullWidth
                                    labelId="demo-simple-select-label"
                                    value={values.loaide || 0}
                                    onChange={handleInputChange}
                                >
                                    <MenuItem value={0}>Đề kiểm tra</MenuItem>
                                    <MenuItem value={1}>Đề thi thử</MenuItem>
                                </Select>
                            </Grid>
                            {type === 0 ? (
                                <>
                                    <Grid item xs={12}>
                                        <p>Thời gian thi</p>
                                        <LocalizationProvider dateAdapter={AdapterDayjs} style={{ padding: 0 }}>
                                            <DemoContainer components={['DateTimePicker', 'DateTimePicker']} style={{ padding: 0 }}>
                                                <DateTimePicker
                                                    format="DD/MM/YYYY - hh:mm a"
                                                    value={value}
                                                    onChange={(newValue) => setValue(newValue)}
                                                />
                                            </DemoContainer>
                                        </LocalizationProvider>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <p>Ghi chú</p>
                                        <TextField
                                            id="mota"
                                            variant="outlined"
                                            name="mota"
                                            type="text"
                                            autoComplete="off"
                                            InputProps={{ inputProps: { min: 0, max: 20 } }}
                                            fullWidth
                                            value={values.mota || ''}
                                            onChange={handleInputChange}
                                            {...(errors.mota && { error: true, helperText: errors.mota })}
                                            multiline
                                            rows={4}
                                        />
                                    </Grid>
                                    <Grid item xs={5.5}>
                                        <h4>Danh sách học viên</h4>
                                        <UserTable lsUser={listUser} addStudent={addStudent} />
                                    </Grid>
                                    <Grid item xs={1} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <SyncAltIcon style={{ fontSize: 40, color: 'gray' }} />
                                    </Grid>
                                    <Grid item xs={5.5}>
                                        <h4>Danh sách thí sinh dự thi</h4>
                                        <Grid container spacing={2}>
                                            {listStudent.map((e) =>
                                                e.gioitinh === 'Nam' ? (
                                                    <Grid item xs={2} style={{ textAlign: 'center', position: 'relative' }} key={e.id}>
                                                        <img style={{ width: '100%' }} src={iconman} alt="man" />
                                                        <span>{e?.nguoidung?.tennguoidung}</span>
                                                        <div className="minus" onClick={() => removeStudent(e)} aria-hidden="true">
                                                            _
                                                        </div>
                                                    </Grid>
                                                ) : (
                                                    <Grid item xs={2} style={{ textAlign: 'center', position: 'relative' }} key={e.id}>
                                                        <img style={{ width: '100%' }} src={iconwoman} alt="woman" />
                                                        <span>{e?.nguoidung?.tennguoidung}</span>
                                                        <div className="minus" onClick={() => removeStudent(e)} aria-hidden="true">
                                                            _
                                                        </div>
                                                    </Grid>
                                                )
                                            )}
                                        </Grid>
                                    </Grid>
                                </>
                            ) : (
                                <></>
                            )}
                        </Grid>
                        <br></br>
                        <Button fullWidth size="large" variant="contained" color="primary" type="submit" onClick={generateExam}>
                            CẬP NHẬT
                        </Button>
                    </Formsy>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="error" variant="contained" size="medium">
                        Đóng
                    </Button>
                </DialogActions>
            </Dialog>
            <CustomizedSnackbars open={openSnackbar} text={'Cập nhật bài thi thành công'} handleCloseSnackBar={handleCloseSnackBar} />
        </div>
    );
}
