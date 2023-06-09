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

export default function QuestionPart1({ question }) {
    return (
        <>
            {question?.map((e, i) => (
                <div style={{ margin: '1rem 0' }} key={i}>
                    <img src={e?.nhomcauhoi?.hinhanh} alt="cau1" />
                    <br />
                    <audio controls style={{ margin: '1rem 0' }}>
                        <source src={e?.nhomcauhoi?.amthanh} type="audio/mpeg" />
                        <track src={e?.nhomcauhoi?.amthanh} kind="captions" srcLang="en" label="english_captions"></track>
                        Your browser does not support the audio element.
                    </audio>
                    <br />
                    <div style={{ display: 'flex' }}>
                        <div>
                            <strong className="number-question">{i + 1}</strong>
                        </div>
                        <div>
                            {e?.nhomcauhoi?.cauhois[0].dapans.map((da) => (
                                <>
                                    <label htmlFor={da.dapanthu} style={{ fontSize: 16 }}>
                                        {da.dapanthu}.
                                    </label>
                                    <br />
                                </>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}
