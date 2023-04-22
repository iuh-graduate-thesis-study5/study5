import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import 'css/question.css';

export default function QuestionPart7({ question }) {
    const numberQuestion = [41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52];

    return (
        <>
            {question?.map((e, i) => (
                <Grid container style={{ margin: '0 -1rem', paddingBottom: 32 }}>
                    <Grid
                        item
                        xs={7.5}
                        style={{
                            borderBottom: '1px solid #e0e0e0',
                            backgroundColor: '#F8F9FA',
                            padding: 16
                        }}
                    >
                        <p style={{ whiteSpace: 'pre-line', fontSize: 16, marginTop: 3, marginBottom: 10 }}>
                            {e?.nhomcauhoi?.noidungcauhoi}
                        </p>
                    </Grid>
                    <Grid
                        item
                        xs={4.5}
                        style={{
                            borderBottom: '1px solid #e0e0e0',
                            padding: '0 16px 16px 16px'
                        }}
                    >
                        {e?.nhomcauhoi?.cauhois?.map((nch, ind) => (
                            <div style={{ margin: '1rem 0' }} key={ind}>
                                <div style={{ display: 'flex' }}>
                                    <div>
                                        <strong className="number-question">{numberQuestion[i * 4 + ind]}</strong>
                                    </div>
                                    <div>
                                        <p style={{ fontSize: 16, marginTop: 3, marginBottom: 10 }}>{nch?.noidung}</p>
                                        {nch?.dapans
                                            ?.sort((a, b) => (a?.dapanthu > b.dapanthu ? 1 : -1))
                                            .map((da) => (
                                                <>
                                                    <label htmlFor="A" style={{ fontSize: 16 }}>
                                                        {da?.dapanthu}. {da.noidung}
                                                    </label>
                                                    <br />
                                                </>
                                            ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Grid>
                </Grid>
            ))}
        </>
    );
}
