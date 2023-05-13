import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import 'css/question.css';
import Chip from '@mui/material/Chip';

export default function QuestionPart5({ detailGroupQuestion }) {
    return (
        <>
            <Chip label="#Part 5" color="primary" />

            <div style={{ margin: '1rem 0' }}>
                <div style={{ display: 'flex' }}>
                    <div>
                        <p style={{ fontSize: 16, marginTop: 3, marginBottom: 10 }}>{detailGroupQuestion?.noidungcauhoi}</p>
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
