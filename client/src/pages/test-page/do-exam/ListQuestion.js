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

import * as actions from 'actions/result.action';
export default function ListQuestion() {
    const [listQuestion, setListQuestion] = useState([]);
    const navigate = useNavigate();
    const questions = useSelector((state) => state.question.listDefaultChoosenQuestion);

    useEffect(() => {
        setListQuestion(questions);
    }, [questions]);
    const handleSubmitExam = () => {
        actions.addResult(listQuestion).then((rs) => {
            navigate('/home/result-exam/' + rs.data);
        });
    };
    return (
        <div style={{ margin: '2rem 0', position: 'sticky', top: -50 }}>
            <h3>Thời gian còn lại</h3>
            <Timer />
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
