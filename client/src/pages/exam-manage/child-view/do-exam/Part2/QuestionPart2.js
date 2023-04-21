import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import 'css/question.css';

export default function QuestionPart2({ question }) {
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
                            <label htmlFor="A" style={{ fontSize: 16 }}>
                                A.
                            </label>
                            <br />
                            <label htmlFor="B" style={{ fontSize: 16 }}>
                                B.
                            </label>
                            <br />
                            <label htmlFor="C" style={{ fontSize: 16 }}>
                                C.
                            </label>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}
