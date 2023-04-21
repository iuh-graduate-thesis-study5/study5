import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TabPartExam from './TabPartExam';
import 'css/button-exam.css';
import Countdown from 'react-countdown';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
export default function ListQuestion() {
    const [listQuestion, setListQuestion] = useState([]);

    const questions = useSelector((state) => state.question.listDefaultChoosenQuestion);
    const Completionist = () => <span>You are good to go!</span>;

    useEffect(() => {
        setListQuestion(questions);
    }, [questions]);
    // Renderer callback with condition
    // console.log(questions);
    const renderer = ({ minutes, seconds, completed }) => {
        if (completed) {
            // Render a complete state
            return <Completionist />;
        } else {
            // Render a countdown
            return (
                <h4>
                    {minutes}:{seconds}
                </h4>
            );
        }
    };
    console.log(listQuestion);
    return (
        <div style={{ margin: '2rem 0', position: 'sticky', top: -50 }}>
            <h3>Thời gian còn lại</h3>
            {/* <Countdown date={Date.now() + 600000} renderer={renderer} /> */}
            <h4>120:00</h4>
            <div style={{ margin: '1rem 0' }}>
                <Button variant="outlined" color="primary" fullWidth>
                    NỘP BÀI
                </Button>
            </div>
            <Grid container>
                {listQuestion.map((e) => (
                    <>
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
                    </>
                ))}
            </Grid>
        </div>
    );
}
