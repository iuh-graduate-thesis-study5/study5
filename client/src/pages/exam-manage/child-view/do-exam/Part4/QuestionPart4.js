import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import 'css/question.css';

export default function QuestionPart4({ question }) {
    const numberQuestion = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

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
                        <div style={{ display: 'flex' }}>
                            <div>
                                <strong className="number-question">{numberQuestion[i * 3 + ind]}</strong>
                            </div>
                            <div>
                                <p style={{ fontSize: 16, marginTop: 3, marginBottom: 10 }}>{nch?.noidung}</p>
                                {nch?.dapans.map((da) => (
                                    <>
                                        <label htmlFor="A" style={{ fontSize: 16 }}>
                                            {da?.dapanthu}. {da.noidung}
                                        </label>
                                        <br />
                                    </>
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
