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

export default function QuestionPart2({ question }) {
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
                    <audio controls style={{ margin: '1rem 0' }}>
                        <source src={e?.nhomcauhoi?.amthanh} type="audio/mpeg" />
                        <track src={e?.nhomcauhoi?.amthanh} kind="captions" srcLang="en" label="english_captions"></track>
                        Your browser does not support the audio element.
                    </audio>
                    <br></br>
                    <div style={{ display: 'flex' }}>
                        <div>
                            <strong className="number-question">{i + 4}</strong>
                        </div>

                        <div>
                            {e?.nhomcauhoi?.cauhois[0].dapans.map((da, u) => (
                                <React.Fragment key={u}>
                                    <input
                                        type="radio"
                                        id={'q' + da.dapanthu}
                                        name={'q2' + e?.nhomcauhoi.id}
                                        value={da.dapanthu}
                                        onClick={() => chooseQuestion(i + 3, da.dapanthu)}
                                    />
                                    <label htmlFor={da.dapanthu} style={{ fontSize: 16 }}>
                                        {da.dapanthu}.
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
