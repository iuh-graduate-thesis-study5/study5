import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import 'css/question.css';
import Chip from '@mui/material/Chip';

export default function QuestionPart3({ detailGroupQuestion }) {
    return (
        <>
            <div>
                <Chip label="#Part 3" color="primary" />
            </div>
            <audio controls style={{ margin: '1rem 0' }}>
                <source src={detailGroupQuestion?.amthanh} type="audio/mpeg" />
                <track src={detailGroupQuestion?.amthanh} kind="captions" srcLang="en" label="english_captions"></track>
                Your browser does not support the audio element.
            </audio>
            {detailGroupQuestion?.cauhois
                ?.sort((a, b) => (a?.id > b.id ? 1 : -1))
                .map((e, i) => (
                    <div style={{ margin: '1rem 0' }} key={e}>
                        <div style={{ display: 'flex' }}>
                            <div>
                                <strong className="number-question">{i + 1}</strong>
                            </div>
                            <div>
                                <p style={{ fontSize: 16, marginTop: 3, marginBottom: 10 }}>{e?.noidung}</p>
                                {e?.dapans
                                    ?.sort((a, b) => (a?.dapanthu > b.dapanthu ? 1 : -1))
                                    .map((da) => (
                                        <>
                                            <label htmlFor="A" style={{ fontSize: 16 }}>
                                                {da?.dapanthu === e?.dapandung ? (
                                                    <span style={{ color: '#317819' }}>
                                                        {da?.dapanthu}. {da?.noidung}
                                                    </span>
                                                ) : (
                                                    <span>
                                                        {da?.dapanthu}. {da?.noidung}
                                                    </span>
                                                )}
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
