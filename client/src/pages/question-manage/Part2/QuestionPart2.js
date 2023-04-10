import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Chip from '@mui/material/Chip';

import 'css/question.css';

export default function QuestionPart2({ detailGroupQuestion }) {
    return (
        <>
            <Chip label="#Part 2" color="primary" />

            <div style={{ margin: '1rem 0' }}>
                <audio controls style={{ margin: '1rem 0' }}>
                    <source src={detailGroupQuestion?.amthanh} type="audio/mpeg" />
                    <track src={detailGroupQuestion?.amthanh} kind="captions" srcLang="en" label="english_captions"></track>
                    Your browser does not support the audio element.
                </audio>
                <br />
                <div style={{ display: 'flex' }}>
                    <div>
                        {detailGroupQuestion?.cauhois[0]?.dapans
                            ?.sort((a, b) => (a?.dapanthu > b.dapanthu ? 1 : -1))
                            .map((e) => (
                                <>
                                    <label htmlFor="A" style={{ fontSize: 16 }}>
                                        {e?.dapanthu === detailGroupQuestion?.cauhois[0]?.dapandung ? (
                                            <span style={{ color: '#317819' }}>
                                                {e?.dapanthu}. {e?.noidung}
                                            </span>
                                        ) : (
                                            <span>
                                                {e?.dapanthu}. {e?.noidung}
                                            </span>
                                        )}
                                    </label>
                                    <br />
                                </>
                            ))}
                    </div>
                </div>
            </div>
        </>
    );
}
