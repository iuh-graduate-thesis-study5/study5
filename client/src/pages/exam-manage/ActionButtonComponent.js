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
import { useDispatch } from 'react-redux';
import * as action from 'actions/user.action';

const initialFieldValues = {
    tennguoidung: '',
    email: '',
    sodienthoai: '',
    diachi: '',
    gioitinh: 'Nam'
};
export default function AccountButtonComponent() {
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const validate = (fieldValues = values) => {
        let temp = { ...errors };
        // if ('ten' in fieldValues) {
        //     let err = 0;
        //     listCategoryShow.map((u) => {
        //         if (u.ten.toLowerCase() === fieldValues.ten.toLowerCase() && fieldValues.ten !== tenLp) {
        //             err = err + 1;
        //         }
        //     });
        //     if (err >= 1) {
        //         err < 1 ? (temp.ten = '') : (temp.ten = 'Loại phòng này đã có');
        //     } else if (fieldValues.ten === '') {
        //         temp.ten = fieldValues.ten ? '' : 'Tên khách sạn không được để trống';
        //     } else if (fieldValues.ten !== '') {
        //         temp.ten =
        //             /^[a-zA-ZàáãạảăắằẳẵặâấầẩẫậèéẹẻẽêềếểễệđìíĩỉịòóõọỏôốồổỗộơớờởỡợùúũụủưứừửữựỳỵỷỹýÀÁÃẠẢĂẮẰẲẴẶÂẤẦẨẪẬÈÉẸẺẼÊỀẾỂỄỆĐÌÍĨỈỊÒÓÕỌỎÔỐỒỔỖỘƠỚỜỞỠỢÙÚŨỤỦƯỨỪỬỮỰỲỴỶỸÝ]{1,15}(?: [a-zA-ZàáãạảăắằẳẵặâấầẩẫậèéẹẻẽêềếểễệđìíĩỉịòóõọỏôốồổỗộơớờởỡợùúũụủưứừửữựỳỵỷỹýÀÁÃẠẢĂẮẰẲẴẶÂẤẦẨẪẬÈÉẸẺẼÊỀẾỂỄỆĐÌÍĨỈỊÒÓÕỌỎÔỐỒỔỖỘƠỚỜỞỠỢÙÚŨỤỦƯỨỪỬỮỰỲỴỶỸÝ]+){0,6}$/.test(
        //                 fieldValues.ten
        //             )
        //                 ? ''
        //                 : 'Tên khách sạn không chứa chữ số hoặc kí tự đặc biệt';
        //     }
        // }
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
            dispatch(action.addUser(values));
            handleClose();
        }
    };
    return (
        <div style={{ margin: '1rem 0' }}>
            <Button variant="contained" size="medium" onClick={handleClickOpen}>
                Tạo đề thi mới
            </Button>
            <Dialog open={open} onClose={handleClose} fullWidth={'xs'}>
                <DialogTitle>Nhập thông tin người dùng</DialogTitle>
                <DialogContent>
                    <Formsy onSubmit={handleSubmit} style={{ margin: '1rem 0' }}>
                        <Grid container spacing={1}>
                            <Grid item xs={6}>
                                <TextField
                                    id="tennguoidung"
                                    label="Tên người dùng *"
                                    variant="outlined"
                                    helperText=" "
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
                                    helperText=" "
                                    name="email"
                                    type="email"
                                    autoComplete="off"
                                    InputProps={{ inputProps: { min: 0, max: 20 } }}
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
                                    helperText=" "
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
                                    helperText=" "
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
                        </Grid>
                        <Button
                            fullWidth
                            size="large"
                            variant="contained"
                            color="primary"
                            type="submit"
                            // style={{ display: displayButton }}
                        >
                            Thêm người dùng
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
