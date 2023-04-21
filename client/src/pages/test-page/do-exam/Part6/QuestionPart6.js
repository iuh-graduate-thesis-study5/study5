import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import * as action from 'actions/question.action';
import { useDispatch } from 'react-redux';
import 'css/question.css';

export default function QuestionPart6({ question }) {
    const numberQuestion = [28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40];
    const dispatch = useDispatch();
    const [listQuestion, setListQuestion] = useState([]);
    const questions = useSelector((state) => state.question.listDefaultChoosenQuestion);

    useEffect(() => {
        setListQuestion(questions);
    }, [questions]);
    const chooseQuestion = (questionIndex, answer) => {
        const question = {
            numberQuestion: questionIndex + 1,
            isChoosen: true,
            answer: answer,
            className: 'inputColorActive'
        };
        listQuestion.splice(questionIndex, 1, question);
        dispatch(action.chooseQuestion(listQuestion));
    };
    return (
        <>
            {question?.map((e, i) => (
                <Grid container style={{ margin: '0 -1rem', paddingBottom: 32 }}>
                    <Grid
                        item
                        xs={7.5}
                        style={{
                            borderBottom: '1px solid #e0e0e0',
                            backgroundColor: '#F8F9FA',
                            padding: 16
                        }}
                    >
                        <p style={{ whiteSpace: 'pre-line', fontSize: 16, marginTop: 3, marginBottom: 10 }}>
                            {e?.nhomcauhoi?.noidungcauhoi}
                        </p>
                    </Grid>
                    <Grid
                        item
                        xs={4.5}
                        style={{
                            borderBottom: '1px solid #e0e0e0',
                            padding: '0 16px 16px 16px'
                        }}
                    >
                        {e?.nhomcauhoi?.cauhois?.map((nch, ind) => (
                            <div style={{ margin: '1rem 0' }} key={ind}>
                                <div style={{ display: 'flex' }}>
                                    <div>
                                        <strong className="number-question">{numberQuestion[i * 4 + ind]}</strong>
                                    </div>
                                    <div>
                                        {nch?.dapans
                                            ?.sort((a, b) => (a?.dapanthu > b.dapanthu ? 1 : -1))
                                            .map((da) => (
                                                <>
                                                    <input
                                                        type="radio"
                                                        id={'q' + da.dapanthu}
                                                        name={'q6' + numberQuestion[i * 4 + ind]}
                                                        value={da.dapanthu}
                                                        onClick={() => chooseQuestion(numberQuestion[i * 4 + ind] - 1, da.dapanthu)}
                                                    />
                                                    <label htmlFor="A" style={{ fontSize: 16 }}>
                                                        {da?.dapanthu}. {da.noidung}
                                                    </label>
                                                    <br />
                                                </>
                                            ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Grid>
                </Grid>
            ))}
        </>
    );
}
