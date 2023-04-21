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
import 'css/exam.css';
const initialFieldValues = {
    tieude: '',
    mota: ''
};
export default function AccountButtonComponent() {
    const dispatch = useDispatch();
    const [value, setValue] = React.useState(dayjs(Date.now()));
    const [open, setOpen] = React.useState(false);
    const users = useSelector((state) => state.account.listAccount);
    const [listUser, setListUser] = React.useState([]);
    const [listStudent, setListStudent] = React.useState([]);
    const [type, setType] = React.useState(0);
    React.useEffect(() => {
        dispatch(action.test());
    }, []);
    React.useEffect(() => {
        if (users) {
            setListUser(users);
        }
    }, [users]);
    const validate = (fieldValues = values) => {
        let temp = { ...errors };
        if ('tennguoidung' in fieldValues) {
            temp.tennguoidung = fieldValues.tennguoidung ? '' : 'Số người không được để trống';
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
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
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
    const changeTypeOfExam = (event) => {
        setType(event.target.value);
    };
    const generateExam = () => {
        const listIdStudent = [];
        for (let i = 0; i < listStudent.length; i++) {
            listIdStudent.push(listStudent[i].id);
        }
        values.id_nguoitao = 1;
        values.thoigianthi = value;
        values.loaidethi = type;
        values.listStudent = listIdStudent;
        dispatch(examAction.generateExam(values));
    };
    return (
        <div style={{ margin: '1rem 0' }}>
            <Button variant="contained" size="medium" onClick={handleClickOpen}>
                Tạo đề thi mới
            </Button>
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
                                    value={values.tieude || ''}
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
                                    InputProps={{ inputProps: { min: 0, max: 20 } }}
                                    fullWidth
                                    value={values.tennguoidung || ''}
                                    onChange={handleInputChange}
                                    {...(errors.tennguoidung && { error: true, helperText: errors.tennguoidung })}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <p>Loại đề</p>
                                <Select
                                    id="gioitinh"
                                    name="gioitinh"
                                    fullWidth
                                    labelId="demo-simple-select-label"
                                    value={type}
                                    onChange={changeTypeOfExam}
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
                                                <DateTimePicker value={value} onChange={(newValue) => setValue(newValue)} />
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
                                                        <span>{e.tennguoidung}</span>
                                                        <div className="minus" onClick={() => removeStudent(e)} aria-hidden="true">
                                                            _
                                                        </div>
                                                    </Grid>
                                                ) : (
                                                    <Grid item xs={2} style={{ textAlign: 'center', position: 'relative' }} key={e.id}>
                                                        <img style={{ width: '100%' }} src={iconwoman} alt="woman" />
                                                        <span>{e.tennguoidung}</span>
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
                        <Button
                            fullWidth
                            size="large"
                            variant="contained"
                            color="primary"
                            type="submit"
                            onClick={generateExam}
                            // style={{ display: displayButton }}
                        >
                            TẠO ĐỀ THI
                        </Button>
                    </Formsy>
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
