import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import 'css/question.css';
import Chip from '@mui/material/Chip';

export default function QuestionPart6({ detailGroupQuestion }) {
    const listQuestion = [1];
    const listGroupQuestion = [1, 2, 3, 4];
    console.log(detailGroupQuestion);
    return (
        <>
            <Chip label="#Part 6" color="primary" />
            <br></br>
            <br></br>

            <Grid container style={{ margin: '0 ' }}>
                <Grid
                    item
                    xs={7.5}
                    style={{
                        borderBottom: '1px solid #e0e0e0',
                        backgroundColor: '#F8F9FA',
                        padding: 16
                    }}
                >
                    <p style={{ fontSize: 16, marginTop: 3, marginBottom: 10 }}>{detailGroupQuestion?.noidungcauhoi}</p>
                </Grid>
                <Grid
                    xs={4.5}
                    style={{
                        borderBottom: '1px solid #e0e0e0',
                        padding: '0 16px 16px 16px'
                    }}
                >
                    {detailGroupQuestion?.cauhois
                        ?.sort((a, b) => (a?.id > b.id ? 1 : -1))
                        .map((e, i) => (
                            <div style={{ margin: '1rem 0' }} key={i}>
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
                </Grid>
            </Grid>
        </>
    );
}
