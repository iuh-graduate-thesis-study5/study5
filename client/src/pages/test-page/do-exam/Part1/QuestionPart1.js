import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import * as action from 'actions/question.action';
import { useDispatch } from 'react-redux';

import 'css/question.css';

export default function QuestionPart1() {
    const numberQuestion = [0, 1, 2, 3, 4, 5];
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
            {numberQuestion.map((e) => (
                <div style={{ margin: '1rem 0' }} key={e}>
                    <img src="https://study4.com/media/tez_media1/img/ets_toeic_2022_test_2_1.png" alt="cau1" />
                    <br />
                    <br />
                    <div style={{ display: 'flex' }}>
                        <div>
                            <strong className="number-question">{e + 1}</strong>
                        </div>
                        <div>
                            <input type="radio" id="html" name={'fav_language' + e} value="A" onClick={() => chooseQuestion(e, 'A')} />
                            <label htmlFor="A" style={{ fontSize: 16 }}>
                                A.
                            </label>
                            <br />
                            <input type="radio" id="css" name={'fav_language' + e} value="B" onClick={() => chooseQuestion(e, 'B')} />
                            <label htmlFor="B" style={{ fontSize: 16 }}>
                                B.
                            </label>
                            <br />
                            <input
                                type="radio"
                                id="javascript"
                                name={'fav_language' + e}
                                value="C"
                                onClick={() => chooseQuestion(e, 'C')}
                            />
                            <label htmlFor="C" style={{ fontSize: 16 }}>
                                C.
                            </label>
                            <br />
                            <input
                                type="radio"
                                id="javascript"
                                name={'fav_language' + e}
                                value="C"
                                onClick={() => chooseQuestion(e, 'D')}
                            />
                            <label htmlFor="D" style={{ fontSize: 16 }}>
                                D.
                            </label>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}
