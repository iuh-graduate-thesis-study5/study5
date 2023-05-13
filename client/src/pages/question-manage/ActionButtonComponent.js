import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AddIcon from '@mui/icons-material/Add';
import 'css/question.css';
import HeadsetOutlinedIcon from '@mui/icons-material/HeadsetOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { Grid, Select, MenuItem, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Input } from '@mui/material';
// import TableUserManager from './TableUserManager';
import Formsy from 'formsy-react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import CheckIcon from '@mui/icons-material/Check';
import { useDispatch } from 'react-redux';
import * as groupQuestionActions from 'actions/groupquestion.action';
import * as questionActions from 'actions/question.action';
import * as answerAction from 'actions/answer.action';
import * as uploadAction from 'actions/upload.action';
import { useSelector } from 'react-redux';
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
import useForm from 'services/useForm';

const initialFieldValues = {
    cauhoichung: '',
    cau1: '',
    cau2: '',
    cau3: '',
    cau4: '',
    correct_answer_1: '',
    correct_answer_2: '',
    correct_answer_3: '',
    correct_answer_4: '',
    question_1_A: '',
    question_1_B: '',
    question_1_C: '',
    question_1_D: '',
    question_2_A: '',
    question_2_B: '',
    question_2_C: '',
    question_2_D: '',
    question_3_A: '',
    question_3_B: '',
    question_3_C: '',
    question_3_D: '',
    question_4_A: '',
    question_4_B: '',
    question_4_C: '',
    question_4_D: ''
};

export default function AccountButtonComponent() {
    const [open, setOpen] = React.useState(false);
    const [disabled, setDisabled] = React.useState(false);
    const [part, setPart] = React.useState(1);
    const [selectedImage, setSelectedImage] = React.useState();
    const [imagePicked, setImagePicked] = React.useState('');
    const [selectedAudio, setSelectedAudio] = React.useState();
    const [audioPicked, setAudioPicked] = React.useState('');
    const [openBackdrop, setOpenBackdrop] = React.useState(false);
    const [openSnack, setOpenSnack] = React.useState(false);

    const handleClickSnack = () => {
        setOpenSnack(true);
    };

    const handleCloseSnack = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenSnack(false);
    };
    const dispatch = useDispatch();

    const handleCloseBackdrop = () => {
        setOpenBackdrop(false);
    };
    const handleToggleBackdrop = () => {
        setOpenBackdrop(true);
    };
    const changeHandlerImage = (event) => {
        handleToggleBackdrop();
        const formData = new FormData();
        formData.append('filename', event.target.files[0]);
        uploadAction.upload(formData).then((res) => {
            setImagePicked(res.data.downloadURL);
            handleCloseBackdrop();
        });
        setSelectedImage(event.target.files[0]);
    };
    const changeHandlerAudio = (event) => {
        handleToggleBackdrop();
        const formData = new FormData();
        formData.append('filename', event.target.files[0]);
        uploadAction.upload(formData).then((res) => {
            setAudioPicked(res.data.downloadURL);
            handleCloseBackdrop();
        });
        setSelectedAudio(event.target.files[0]);
    };
    const listAnswerAlpha = ['A', 'B', 'C', 'D'];
    const listQuestion = [1, 2, 3, 4];
    const validate = (fieldValues = values) => {
        let temp = { ...errors };
        let listErr = [
            'cauhoichung',
            'cau1',
            'cau2',
            'cau3',
            'cau4',
            'correct_answer_1',
            'correct_answer_2',
            'correct_answer_3',
            'correct_answer_4',
            'question_1_A',
            'question_1_B',
            'question_1_C',
            'question_1_D',
            'question_2_A',
            'question_2_B',
            'question_2_C',
            'question_2_D',
            'question_3_A',
            'question_3_B',
            'question_3_C',
            'question_3_D',
            'question_4_A',
            'question_4_B',
            'question_4_C',
            'question_4_D'
        ];
        if ([1, 2].includes(part)) {
            listErr = ['correct_answer_1'];
        } else if ([3, 4].includes(part)) {
            listErr = [
                'cau1',
                'cau2',
                'cau3',
                'correct_answer_1',
                'correct_answer_2',
                'correct_answer_3',
                'question_1_A',
                'question_1_B',
                'question_1_C',
                'question_1_D',
                'question_2_A',
                'question_2_B',
                'question_2_C',
                'question_2_D',
                'question_3_A',
                'question_3_B',
                'question_3_C',
                'question_3_D'
            ];
        } else if ([5].includes(part)) {
            listErr = ['cauhoichung', 'correct_answer_1', 'question_1_A', 'question_1_B', 'question_1_C', 'question_1_D'];
        }
        listErr.forEach((e) => {
            if (e in fieldValues) {
                temp[e] = fieldValues[e] ? '' : 'Vui lập nhập nội dung';
            }
        });
        setErrors({
            ...temp
        });

        if (fieldValues == values) return Object.values(temp).every((x) => x == '');
    };
    const { values, setValues, errors, setErrors, handleInputChange, resetForm } = useForm(initialFieldValues, validate, 0);
    const answer = (question) => {
        return (
            <>
                {listAnswerAlpha.map((e) => (
                    <Grid container style={{ display: 'flex', alignItems: 'center', margin: '16px 0' }}>
                        <Grid item xs={1}>
                            <b className="answer">{e}</b>
                        </Grid>
                        <Grid item xs={11}>
                            <b>
                                <TextField
                                    value={values['question_' + question + '_' + e]}
                                    onChange={handleInputChange}
                                    id="outlined-start-adornment"
                                    fullWidth
                                    name={'question_' + question + '_' + e}
                                    {...(errors['question_' + question + '_' + e] && {
                                        error: true,
                                        helperText: errors['question_' + question + '_' + e]
                                    })}
                                />
                            </b>
                        </Grid>
                    </Grid>
                ))}
            </>
        );
    };
    const correctAnswer = (answer) => {
        return (
            <>
                <Select
                    fullWidth
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name={'correct_answer_' + answer}
                    value={values['correct_answer_' + answer]}
                    onChange={handleInputChange}
                    {...(errors['correct_answer_' + answer] && {
                        error: true,
                        helperText: errors['correct_answer_' + answer]
                    })}
                >
                    <MenuItem value={'A'}>A</MenuItem>
                    <MenuItem value={'B'}>B</MenuItem>
                    <MenuItem value={'C'}>C</MenuItem>
                    <MenuItem value={'D'}>D</MenuItem>
                </Select>
            </>
        );
    };
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setPart(1);
    };

    // Change design part
    const changeDesignPart = (e) => {
        resetForm();
        setPart(e.target.value);
    };

    const renderPart = () => {
        if (part === 1) {
            return (
                <>
                    <Grid item xs={6}>
                        <div id="form-image-upload">
                            <input type="file" id="input-image-upload" multiple={true} onChange={changeHandlerAudio} accept="audio/*" />
                            <label id="label-image-upload" htmlFor="input-image-upload">
                                <div className="flex-content">
                                    {/* <p>Drag and drop your file here or</p> */}
                                    <HeadsetOutlinedIcon style={{ fontSize: 40 }} />
                                    <div>
                                        <span className="upload-button">
                                            {selectedAudio?.name ? selectedAudio?.name : 'Chọn âm thanh cho câu hỏi'}
                                        </span>
                                    </div>
                                </div>
                            </label>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div id="form-audio-upload">
                            <input type="file" id="input-audio-upload" onChange={changeHandlerImage} accept="image/*" />
                            <label id="label-audio-upload" htmlFor="input-audio-upload">
                                <div>
                                    {/* <p>Drag and drop your file here or</p> */}
                                    <ImageOutlinedIcon style={{ fontSize: 40 }} />
                                    <div>
                                        <span className="upload-button">
                                            {selectedImage?.name ? selectedImage?.name : 'Chọn hình ảnh cho câu hỏi'}
                                        </span>
                                    </div>
                                </div>
                            </label>
                        </div>
                    </Grid>
                    <Grid item xs={1.8} style={{ display: 'flex', alignItems: 'center' }}>
                        <Chip variant="outlined" style={{ borderRadius: 30 }} icon={<CheckIcon />} label="Đáp án đúng" color="success" />
                    </Grid>
                    <Grid item xs={1.5}>
                        {correctAnswer(1)}
                    </Grid>
                </>
            );
        } else if (part === 2) {
            return (
                <>
                    <Grid item xs={12}>
                        <div id="form-image-upload">
                            <input type="file" id="input-image-upload" multiple={true} onChange={changeHandlerAudio} accept="audio/*" />
                            <label id="label-image-upload" htmlFor="input-image-upload">
                                <div className="flex-content">
                                    {/* <p>Drag and drop your file here or</p> */}
                                    <HeadsetOutlinedIcon style={{ fontSize: 40 }} />
                                    <div>
                                        <span className="upload-button">
                                            {selectedAudio?.name ? selectedAudio?.name : 'Chọn âm thanh cho câu hỏi'}
                                        </span>
                                    </div>
                                </div>
                            </label>
                        </div>
                    </Grid>
                    <Grid item xs={1.8} style={{ display: 'flex', alignItems: 'center' }}>
                        <Chip variant="outlined" style={{ borderRadius: 30 }} icon={<CheckIcon />} label="Đáp án đúng" color="success" />
                    </Grid>
                    <Grid item xs={1.5}>
                        {correctAnswer(1)}
                    </Grid>
                </>
            );
        } else if (part === 3 || part === 4) {
            return (
                <>
                    <Grid item xs={12}>
                        <div id="form-image-upload">
                            <input type="file" id="input-image-upload" multiple={true} onChange={changeHandlerAudio} accept="audio/*" />
                            <label id="label-image-upload" htmlFor="input-image-upload">
                                <div className="flex-content">
                                    {/* <p>Drag and drop your file here or</p> */}
                                    <HeadsetOutlinedIcon style={{ fontSize: 40 }} />
                                    <div>
                                        <span className="upload-button">
                                            {selectedAudio?.name ? selectedAudio?.name : 'Chọn âm thanh cho câu hỏi'}
                                        </span>
                                    </div>
                                </div>
                            </label>
                        </div>
                    </Grid>
                    {[1, 2, 3].map((e) => (
                        <>
                            <Grid item xs={12}>
                                <Grid container style={{ display: 'flex', alignItems: 'center', margin: '16px 0' }}>
                                    <Grid item xs={12}>
                                        <b>#Câu {e}</b>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            name={'cau' + e}
                                            value={values['cau' + e]}
                                            fullWidth
                                            multiline
                                            rows={2}
                                            onChange={handleInputChange}
                                            {...(errors['cau' + e] && {
                                                error: true,
                                                helperText: errors['cau' + e]
                                            })}
                                        />
                                    </Grid>
                                </Grid>
                                {answer(e)}
                            </Grid>
                            <Grid item xs={1.8} style={{ display: 'flex', alignItems: 'center' }}>
                                <Chip
                                    variant="outlined"
                                    style={{ borderRadius: 30 }}
                                    icon={<CheckIcon />}
                                    label="Đáp án đúng"
                                    color="success"
                                />
                            </Grid>
                            <Grid item xs={1.5}>
                                {correctAnswer(e)}
                            </Grid>
                        </>
                    ))}
                </>
            );
        } else if (part === 5) {
            return (
                <>
                    <Grid item xs={12}>
                        <b>Nội dung câu hỏi</b>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            value={values.cauhoichung}
                            name="cauhoichung"
                            multiline
                            rows={4}
                            onChange={handleInputChange}
                            {...(errors['cauhoichung'] && {
                                error: true,
                                helperText: errors['cauhoichung']
                            })}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        {answer(1)}
                    </Grid>
                    <Grid item xs={1.8} style={{ display: 'flex', alignItems: 'center' }}>
                        <Chip variant="outlined" style={{ borderRadius: 30 }} icon={<CheckIcon />} label="Đáp án đúng" color="success" />
                    </Grid>
                    <Grid item xs={1.5}>
                        {correctAnswer(1)}
                    </Grid>
                </>
            );
        } else if (part === 6 || part == 7) {
            return (
                <>
                    <Grid item xs={12}>
                        <b>Nội dung nhóm câu hỏi</b>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            value={values.cauhoichung}
                            name="cauhoichung"
                            multiline
                            rows={4}
                            onChange={handleInputChange}
                            {...(errors['cauhoichung'] && {
                                error: true,
                                helperText: errors['cauhoichung']
                            })}
                        />
                    </Grid>
                    {listQuestion.map((e) => (
                        <>
                            <Grid item xs={12}>
                                <Grid container style={{ display: 'flex', alignItems: 'center', margin: '16px 0' }}>
                                    <Grid item xs={12}>
                                        <b>#Câu {e}</b>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            name={'cau' + e}
                                            value={values['cau' + e]}
                                            fullWidth
                                            multiline
                                            rows={2}
                                            onChange={handleInputChange}
                                            {...(errors['cau' + e] && {
                                                error: true,
                                                helperText: errors['cau' + e]
                                            })}
                                        />
                                    </Grid>
                                </Grid>
                                {answer(e)}
                            </Grid>
                            <Grid item xs={1.8} style={{ display: 'flex', alignItems: 'center' }}>
                                <Chip
                                    variant="outlined"
                                    style={{ borderRadius: 30 }}
                                    icon={<CheckIcon />}
                                    label="Đáp án đúng"
                                    color="success"
                                />
                            </Grid>
                            <Grid item xs={1.5}>
                                {correctAnswer(e)}
                            </Grid>
                        </>
                    ))}
                </>
            );
        }
    };
    const user_id = useSelector((state) => state.account.userAuth);
    const handelSubmitForm = () => {
        if ([1, 2, 3, 4].includes(part) && !audioPicked) {
            window.alert('Vui lòng chọn âm thanh');
            return;
        }
        if (part === 1 && !imagePicked) {
            window.alert('Vui lòng chọn ảnh');
            return;
        }

        if (!validate()) {
            return;
        }
        const nhomCauhoi = {
            noidungcauhoi: values.cauhoichung,
            amthanh: audioPicked,
            hinhanh: imagePicked,
            id_nguoitao: user_id,
            phancauhoi: part
        };
        let groupQuestionLength = 4;
        let answerLength = 4;

        // groupQuestion
        if ([1, 2, 5].includes(part)) {
            groupQuestionLength = 1;
        } else if ([3, 4].includes(part)) {
            groupQuestionLength = 3;
        }
        // answer
        if (part === 2) {
            answerLength = 3;
        }

        groupQuestionActions.addGroupQuestion(nhomCauhoi).then((res) => {
            for (let i = 1; i <= groupQuestionLength; i++) {
                if ([1, 2].includes(part)) {
                    questionActions
                        .addQuestion({
                            noidung: '',
                            dapandung: values['correct_answer_' + i],
                            id_nhomcauhoi: res.data.insertId
                        })
                        .then((response) => {
                            for (let ans = 0; ans < answerLength; ans++) {
                                setTimeout(() => {
                                    dispatch(
                                        groupQuestionActions.addAnswer({
                                            noidung: listAnswerAlpha[ans],
                                            loaidapan: 0,
                                            dapanthu: listAnswerAlpha[ans],
                                            id_cauhoi: response.data.insertId
                                        })
                                    );
                                }, 100);
                            }
                        });
                } else {
                    questionActions
                        .addQuestion({
                            noidung: values['cau' + i],
                            dapandung: values['correct_answer_' + i],
                            id_nhomcauhoi: res.data.insertId
                        })
                        .then((response) => {
                            for (let ans = 0; ans < answerLength; ans++) {
                                setTimeout(() => {
                                    dispatch(
                                        groupQuestionActions.addAnswer({
                                            noidung: values[`question_${i}_${listAnswerAlpha[ans]}`],
                                            loaidapan: 0,
                                            dapanthu: listAnswerAlpha[ans],
                                            id_cauhoi: response.data.insertId
                                        })
                                    );
                                }, 100);
                            }
                        });
                }
            }
        });
        resetForm(initialFieldValues);
        setImagePicked('');
        setAudioPicked('');
        setSelectedImage('');
        setSelectedAudio('');
        handleClickSnack();
        handleClose();
    };
    return (
        <div style={{ margin: '1rem 0' }}>
            <Button variant="contained" size="medium" onClick={handleClickOpen}>
                Thêm câu hỏi
            </Button>
            <Dialog open={open} onClose={handleClose} maxWidth={'md'} fullWidth={true}>
                <DialogTitle style={{ fontSize: 16, fontWeight: 'bold' }}>TẠO CÂU HỎI MỚI</DialogTitle>
                <DialogContent>
                    <Formsy onSubmit={handelSubmitForm} style={{ width: '100%' }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <b>Chọn phần thi</b>
                            </Grid>
                            <Grid item xs={12} fullWidth>
                                <Select
                                    fullWidth
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={part}
                                    onChange={changeDesignPart}
                                >
                                    <MenuItem value={1}>PART 1 (Listening)</MenuItem>
                                    <MenuItem value={2}>PART 2 (Listening)</MenuItem>
                                    <MenuItem value={3}>PART 3 (Listening)</MenuItem>
                                    <MenuItem value={4}>PART 4 (Listening)</MenuItem>
                                    <MenuItem value={5}>PART 5 (Reading)</MenuItem>
                                    <MenuItem value={6}>PART 6 (Reading)</MenuItem>
                                    <MenuItem value={7}>PART 7 (Reading)</MenuItem>
                                </Select>
                            </Grid>
                            {renderPart()}
                            <Grid item xs={12} style={{ textAlign: 'right' }}>
                                <Button type="submit" color="primary" variant="contained" size="medium">
                                    Thêm câu hỏi
                                </Button>
                            </Grid>
                        </Grid>
                    </Formsy>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="error" variant="contained" size="medium">
                        Đóng
                    </Button>
                </DialogActions>
            </Dialog>
            <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1000 }} open={openBackdrop}>
                <div style={{ textAlign: 'center' }}>
                    Đang tải tệp lên<br></br>
                    <CircularProgress color="inherit" />
                </div>
            </Backdrop>
            <Snackbar open={openSnack} autoHideDuration={3000} onClose={handleCloseSnack} style={{ Zindex: 10 }}>
                <Alert onClose={handleCloseSnack} severity="success" sx={{ width: '100%' }}>
                    Thêm câu hỏi thành công
                </Alert>
            </Snackbar>
        </div>
    );
}
