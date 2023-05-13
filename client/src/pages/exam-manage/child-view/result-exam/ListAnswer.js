import CheckIcon from '@mui/icons-material/Check';
import Grid from '@mui/material/Grid';
import RemoveIcon from '@mui/icons-material/Remove';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';

export default function ListAnswer({ result }) {
    return (
        <>
            {result?.cautralois?.map((e, i) => (
                <React.Fragment key={i}>
                    {e.thutucauhoi === 1 ? (
                        <Grid item xs={12} key={e + '*'}>
                            <h4 style={{ marginBlockEnd: 8 }}>Part 1</h4>
                        </Grid>
                    ) : e.thutucauhoi === 4 ? (
                        <Grid item xs={12}>
                            <h4 style={{ marginBlockEnd: 8 }}>Part 2</h4>
                        </Grid>
                    ) : e.thutucauhoi === 7 ? (
                        <Grid item xs={12}>
                            <h4 style={{ marginBlockEnd: 8 }}>Part 3</h4>
                        </Grid>
                    ) : e.thutucauhoi === 16 ? (
                        <Grid item xs={12}>
                            <h4 style={{ marginBlockEnd: 8 }}>Part 4</h4>
                        </Grid>
                    ) : e.thutucauhoi === 25 ? (
                        <Grid item xs={12}>
                            <h4 style={{ marginBlockEnd: 8 }}>Part 5</h4>
                        </Grid>
                    ) : e.thutucauhoi === 28 ? (
                        <Grid item xs={12}>
                            <h4 style={{ marginBlockEnd: 8 }}>Part 6</h4>
                        </Grid>
                    ) : e.thutucauhoi === 40 ? (
                        <Grid item xs={12}>
                            <h4 style={{ marginBlockEnd: 8 }}>Part 7</h4>
                        </Grid>
                    ) : (
                        <></>
                    )}
                    <Grid item xs={4}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div>
                                <strong className="number-question">{e?.thutucauhoi}</strong>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', fontSize: 15 }}>
                                <span style={{ fontWeight: 'bold', color: '#35509a' }}>{e?.cauhoi?.dapandung}: </span>&nbsp;
                                {e?.cautraloi ? e?.cautraloi : <i>Chưa trả lời</i>} &nbsp;
                                {e?.cauhoi?.dapandung === e?.cautraloi ? (
                                    <CheckIcon color="success" />
                                ) : e?.cauhoi?.dapandung !== e?.cautraloi && e?.cautraloi !== '' ? (
                                    <CloseIcon color="error" />
                                ) : e?.cautraloi === '' ? (
                                    <RemoveIcon />
                                ) : (
                                    <></>
                                )}
                            </div>
                        </div>
                    </Grid>
                </React.Fragment>
            ))}
        </>
    );
}
