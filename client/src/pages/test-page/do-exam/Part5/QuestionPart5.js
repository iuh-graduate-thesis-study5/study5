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

export default function QuestionPart5({ question }) {
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
            className: 'inputColorActive',
            dap_an_dung: listQuestion[questionIndex].dap_an_dung,
            id_question: listQuestion[questionIndex].id_question
        };
        listQuestion.splice(questionIndex, 1, question);
        dispatch(action.chooseQuestion(listQuestion));
    };
    return (
        <>
            {question?.map((e, i) => (
                <div style={{ margin: '1rem 0' }} key={i}>
                    <div style={{ display: 'flex' }}>
                        <div>
                            <strong className="number-question">{i + 25}</strong>
                        </div>
                        <div>
                            <p style={{ fontSize: 16, marginTop: 3, marginBottom: 10 }}>{e?.nhomcauhoi?.noidungcauhoi}</p>
                            {e?.nhomcauhoi?.cauhois[0].dapans.map((da, idx) => (
                                <React.Fragment key={idx}>
                                    <input
                                        type="radio"
                                        id={'q' + da.dapanthu}
                                        name={'q5' + i + 25}
                                        value={da.dapanthu}
                                        onClick={() => chooseQuestion(i + 24, da.dapanthu)}
                                    />
                                    <label htmlFor={da.dapanthu} style={{ fontSize: 16 }}>
                                        {da.dapanthu}. {da.noidung}
                                    </label>
                                    <br />
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}
