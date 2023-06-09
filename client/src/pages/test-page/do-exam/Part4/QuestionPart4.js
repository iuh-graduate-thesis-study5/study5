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

export default function QuestionPart4({ question }) {
    const numberQuestion = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
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
                <div style={{ margin: '1rem 0' }} key={(e, i)}>
                    <audio controls style={{ margin: '0 0 2rem 0' }}>
                        <source src={e?.nhomcauhoi?.amthanh} type="audio/mpeg" />
                        <track src={e?.nhomcauhoi?.amthanh} kind="captions" srcLang="en" label="english_captions"></track>
                        Your browser does not support the audio element.
                    </audio>
                    {e?.nhomcauhoi?.cauhois?.map((nch, ind) => (
                        <div style={{ display: 'flex' }} key={ind}>
                            <div>
                                <strong className="number-question">{numberQuestion[i * 3 + ind]}</strong>
                            </div>
                            <div>
                                <p style={{ fontSize: 16, marginTop: 3, marginBottom: 10 }}>{nch?.noidung}</p>
                                {nch?.dapans.map((da, idx) => (
                                    <React.Fragment key={idx}>
                                        <input
                                            type="radio"
                                            id={'q' + da.dapanthu}
                                            name={'q4' + numberQuestion[i * 3 + ind]}
                                            value={da.dapanthu}
                                            onClick={() => chooseQuestion(numberQuestion[i * 3 + ind] - 1, da.dapanthu)}
                                        />
                                        <label htmlFor="A" style={{ fontSize: 16 }}>
                                            {da?.dapanthu}. {da.noidung}
                                        </label>
                                        <br />
                                    </React.Fragment>
                                ))}
                                <br></br>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </>
    );
}
