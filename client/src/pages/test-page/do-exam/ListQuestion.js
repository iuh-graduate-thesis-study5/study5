import Chip from '@mui/material/Chip';
import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TabPartExam from './TabPartExam';
import 'css/button-exam.css';
import Countdown from 'react-countdown';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import Timer from './Timer';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import * as actions from 'actions/result.action';
import * as action_exam from 'actions/exam.action';
import * as acction_student_exam from 'actions/examStudent.action';
export default function ListQuestion({ exam }) {
    const [listQuestion, setListQuestion] = useState([]);
    const navigate = useNavigate();
    const questions = useSelector((state) => state.question.listDefaultChoosenQuestion);
    useEffect(() => {
        setListQuestion(questions);
    }, [questions]);
    const user_id = useSelector((state) => state.account.userAuth);
    const handleSubmitExam = () => {
        const alert = confirm('Bạn có chắc muốn nộp bài!');
        if (alert) {
            let ids = {
                id_dethi: exam?.id,
                id_thisinh: Number(user_id)
            };
            if (exam?.loaidethi) {
                acction_student_exam.createExamStudent(ids).then((res) => {
                    actions.addResult(listQuestion, res.data.id).then((rs) => {
                        navigate('/home/result-exam/' + rs.data);
                    });
                });
            } else {
                action_exam.getExamUserId(ids).then((res) => {
                    actions.addResult(listQuestion, res.data.id).then((rs) => {
                        navigate('/home/result-exam/' + rs.data);
                    });
                });
            }
        }
    };
    const a = new Date(exam?.thoigianthi);
    const newDateObj = moment(a).add(60, 'm').toDate();
    const startTime = new Date();
    const endTime = new Date(newDateObj);
    let difference = endTime.getTime() - startTime.getTime();
    if (!difference) {
        difference = 0;
    }
    const resultInMinutes = difference / 60000;
    const resultSecond = Math.round((resultInMinutes % 1) * 60);
    const [minutes, setMinutes] = useState(Math.round(resultInMinutes));
    const [seconds, setSeconds] = useState(resultSecond);
    useEffect(() => {
        let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval);
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            }
        }, 1000);
        return () => {
            clearInterval(myInterval);
        };
    });

    return (
        <div style={{ margin: '2rem 0', position: 'sticky', top: -50 }}>
            {exam?.loaidethi ? (
                <></>
            ) : (
                <>
                    <h3>Thời gian còn lại</h3>
                    <div>
                        {minutes === 0 && seconds === 0 ? null : (
                            <h1>
                                {' '}
                                {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                            </h1>
                        )}
                    </div>
                </>
            )}

            <div style={{ margin: '1rem 0' }}>
                <Button variant="outlined" color="primary" fullWidth onClick={handleSubmitExam}>
                    NỘP BÀI
                </Button>
            </div>
            <Grid container>
                {listQuestion.map((e, i) => (
                    <React.Fragment key={i}>
                        {e.numberQuestion === 1 ? (
                            <Grid item xs={12} key={e.numberQuestion + '*'}>
                                <h3 style={{ marginBlockEnd: 8 }}>Part 1</h3>
                            </Grid>
                        ) : e.numberQuestion === 4 ? (
                            <Grid item xs={12}>
                                <h3 style={{ marginBlockEnd: 8 }}>Part 2</h3>
                            </Grid>
                        ) : e.numberQuestion === 7 ? (
                            <Grid item xs={12}>
                                <h3 style={{ marginBlockEnd: 8 }}>Part 3</h3>
                            </Grid>
                        ) : e.numberQuestion === 16 ? (
                            <Grid item xs={12}>
                                <h3 style={{ marginBlockEnd: 8 }}>Part 4</h3>
                            </Grid>
                        ) : e.numberQuestion === 25 ? (
                            <Grid item xs={12}>
                                <h3 style={{ marginBlockEnd: 8 }}>Part 5</h3>
                            </Grid>
                        ) : e.numberQuestion === 28 ? (
                            <Grid item xs={12}>
                                <h3 style={{ marginBlockEnd: 8 }}>Part 6</h3>
                            </Grid>
                        ) : e.numberQuestion === 40 ? (
                            <Grid item xs={12}>
                                <h3 style={{ marginBlockEnd: 8 }}>Part 7</h3>
                            </Grid>
                        ) : (
                            <></>
                        )}
                        <Grid
                            item
                            xs={2.4}
                            key={e.numberQuestion}
                            style={{ padding: '5px 2px', display: 'flex', justifyContent: 'center' }}
                        >
                            <input className={e.className} value={e.numberQuestion} type="button" style={{ width: 30 }} />
                        </Grid>
                    </React.Fragment>
                ))}
            </Grid>
        </div>
    );
}
